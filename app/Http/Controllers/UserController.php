<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Log;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Helper\MessageError;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'nis' => 'required|unique:users',
            'password' => 'required|unique:users',
            'confirmation_password' => 'required|same:password'
        ]); 

        if($validator->fails()) {
            return MessageError::message($validator->errors()->messages());
        }

        $user = $validator->validated();

        User::create($user);

        $payload = [
            'name' => $user['name'],
            'role' => 'user',
            'iat' => now()->timestamp,
            'exp' => now()->timestamp +7200
        ];

        $token = JWT::encode($payload, env('JWT_SECRET_KEY'), 'HS256');

        Log::create([
            'module' => 'login',
            'action' => 'login akun',
            'useraccess' => $user['email']
        ]);

        return response()->json([
            "data" => [
                'msg' => 'berhasil login',
                'name' => $user['name'],
                'email' => $user['email'],
                'role' => 'user'
            ],
            "token" => "{$token}"
        ], 200);
    }

    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if($validator->fails()) {
            return MessageError::message($validator->errors()->messages());
        }

        if(Auth::attempt($validator->validated())) {
            $payload = [
                'name' => Auth::user()->name,
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

    public function show_candidate() {
        $candidates = Candidate::with('users')->get();

        $data = [];

        foreach ($candidates as $candidate) {
            array_push($data, [
                'idcandidate' => $candidate->idcandidate,
                'gambar' => $candidate->picture,
                'nama' => $candidate->users->name,
                'nis' => $candidate->nis,
                'email' => $candidate->users->email,
                'visi' => $candidate->vision,
                'misi' => $candidate->mission
            ]);
        }
        
        return response()->json([
            "data" => [
                'msg' => 'daftar kandidat',
                'data' => $data
            ]
        ],200);
    }

    public function show_candidate_by_id($id) {
        $candidate = Candidate::with('users')->find($id);
        
        if($candidate !== NULL) {
            return response()->json([
                "data" => [
                    'msg' => 'detail kandidat',
                    'data' => [
                        'idcandidate' => $candidate->idcandidate,
                        'gambar' => $candidate->picture,
                        'nama' => $candidate->users->name,
                        'nis' => $candidate->nis,
                        'email' => $candidate->users->email,
                        'visi' => $candidate->vision,
                        'misi' => $candidate->mission
                    ]
                ]
            ], 200);
        }

        return response()->json('Kandidat tidak ditemukan', 404);
    }

    public function vote_candidate_by_id($id) {
        
    }
}
