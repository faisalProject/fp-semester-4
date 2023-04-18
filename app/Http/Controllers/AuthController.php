<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use App\Models\Log;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'nis' => 'required|max:9|unique:users',
            'class_name' => 'required',
            'password' => 'required|min:8|unique:users',
            'confirmation_password' => 'required|same:password'
        ]);

        if ($validator->fails()) {
            return messageError($validator->messages()->toArray());
        }

        $class_name = $request->input('class_name');

        if (!in_array($class_name, [
            'X IPA 1', 'X IPA 2', 'X IPA 3',
            'XI IPA 1', 'XI IPA 2', 'XI IPA 3',
            'XII IPA 1', 'XII IPA 2', 'XII IPA 3',
            'X IPS 1', 'X IPS 2', 'X IPS 3',
            'XI IPS 1', 'XI IPS 2', 'XI IPS 3',
            'XII IPS 1', 'XII IPS 2', 'XII IPS 3'
        ])) {
            return response()->json('kelas tidak terdaftar', 422);
        }

        $userData = $validator->validated();
        $user = User::create($userData);

        Kelas::create([
            'nis' => $user->nis,
            'class_name' => $request->class_name
        ]);


        $payload = [
            'name' => $userData['name'],
            'role' => 'user',
            'iat' => now()->timestamp,
            'exp' => now()->timestamp + 7200
        ];

        $token = JWT::encode($payload, env('JWT_SECRET_KEY'),'HS256');

        Log::create([
            'module' => 'login',
            'action' => 'login akun',
            'useraccess' => $userData['email']
        ]);

        return response()->json([
            "data" => [
                'msg' => 'berhasil registrasi',
                'nama' => $userData['name'],
                'email' => $userData['email'],
                'role' => 'user'
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

        if(Auth::attempt($validator->validated())) {
            $payload = [
                'name' => Auth::user()->name,
                'nis' => Auth::user()->nis, 
                'role' => Auth::user()->role,
                'iat' => now()->timestamp,
                'exp' => now()->timestamp + 7200
            ];

            $token = JWT::encode($payload, env('JWT_SECRET_KEY'), 'HS256');

            Log::create([
                'module' => 'login',
                'action' => 'login akun',
                'useraccess' => Auth::user()->email
            ]);

            return response()->json([
                "data" => [
                    'msg' => 'berhasil login',
                    'name' => Auth::user()->name,
                    'email' => Auth::user()->email,
                    'role' => Auth::user()->role
                ],
                "token" => "{$token}"
            ], 200);
        }

        return response()->json('email atau password salah', 422);
    }
}
