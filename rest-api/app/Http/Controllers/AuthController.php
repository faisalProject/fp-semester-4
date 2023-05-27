<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use App\Models\Student;
use App\Models\StudentData;
use App\Models\Log;
use DragonCode\Support\Facades\Tools\Stub;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'nis' => 'required|max:14|unique:student',
            'email' => 'required|email|unique:student,email',
            'class_name' => 'required',
            'password' => 'required|min:8|unique:student',
            'confirmation_password' => 'required|same:password'
        ]);

        $studentDataNIS = StudentData::where('nis', $request->nis)->first();

        if(!$studentDataNIS) {
            return response()->json([
                'msg' => 'NIS tidak terdaftar',
                'statusCode' => 401
            ], 401);
        }
        
        if($studentDataNIS->email !== $request->email) {
            return response()->json([
                'msg' => 'Email tidak terdaftar',
                'statusCode' => 401
            ], 401);
        }

        $class_name = $request->input('class_name');

        if(!in_array($class_name, [
            'X IPA 1', 'X IPA 2', 'X IPA 3',
            'XI IPA 1', 'XI IPA 2', 'XI IPA 3',
            'XII IPA 1', 'XII IPA 2', 'XII IPA 3',
            'X IPS 1', 'X IPS 2', 'X IPS 3',
            'XI IPS 1', 'XI IPS 2', 'XI IPS 3',
            'XII IPS 1', 'XII IPS 2', 'XII IPS 3'
        ])) {
            return response()->json([
                'msg' => 'Kelas tidak terdaftar',
                'statusCode' => 401
            ], 401);
        }

        if($validator->fails()) {
            return messageError($validator->messages()->toArray());
        }

        $studentValidated = $validator->validated();
        $student = Student::create($studentValidated);

        Kelas::create([
            'id_student' => $student->id_student,
            'class_name' => $request->class_name
        ]);

        $payload = [
            'name' => $studentDataNIS['name'],
            'status' => 'siswa',
            'iat' => now()->timestamp,
            'exp' => now()->timestamp + 7200
        ];

        $token = JWT::encode($payload, env('JWT_SECRET_KEY'),'HS256');

        Log::create([
            'module' => 'login',
            'action' => 'login akun',
            'useraccess' => $studentValidated['email']
        ]);

        return response()->json([
            "data" => [
                'msg' => 'Berhasil register',
                'nama' => $studentDataNIS['name'],
                'email' => $studentValidated['email'],
                'status' => 'siswa'
            ],
            "token" => "{$token}"
        ], 200);

    }

    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return messageError($validator->messages()->toArray());
        }

        $student = Student::with('student_data')->where('email', $request->email)->first();

        if(Auth::guard('student')->attempt($validator->validated())) {
            $payload = [
                'id_student' => Auth::guard('student')->user()->id_student,
                'name' => $student->student_data->name,
                'email' => Auth::guard('student')->user()->email, 
                'iat' => now()->timestamp,
                'exp' => now()->timestamp + 7200
            ];

            $token = JWT::encode($payload, env('JWT_SECRET_KEY'), 'HS256');

            Log::create([
                'module' => 'login',
                'action' => 'login akun',
                'useraccess' => Auth::guard('student')->user()->email
            ]);

            return response()->json([
                "data" => [
                    'msg' => 'berhasil login',
                    'name' => $student->student_data->name,
                    'email' => Auth::guard('student')->user()->email,
                    'statusCode' => 200
                ],
                "token" => "{$token}"
            ], 200);
        }

        return response()->json([
            'msg' => 'Email atau password salah',
            'statusCode' => 422
        ], 422);
    }

    public function loginAdmin(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return messageError($validator->messages()->toArray());
        }

        if(Auth::guard('admin')->attempt($validator->validated())) {
            $payload = [
                'name' =>  Auth::guard('admin')->user()->name,
                'email' => Auth::guard('admin')->user()->email,
                'iat' => now()->timestamp,
                'exp' => now()->timestamp + 7200
            ];

            $token = JWT::encode($payload, env('JWT_SECRET_KEY'), 'HS256');

            Log::create([
                'module' => 'login',
                'action' => 'login akun',
                'useraccess' => Auth::guard('admin')->user()->email
            ]);

            return response()->json([
                "data" => [
                    'msg' => 'berhasil login',
                    'name' =>  Auth::guard('admin')->user()->name,
                    'email' => Auth::guard('admin')->user()->email,
                ],
                "token" => "{$token}"
            ], 200);
        }

        return response()->json([
            'msg' => 'Eamil atau password salah',
            'statusCode' => 422
        ], 422);
    }
}
