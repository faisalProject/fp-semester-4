<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\User;
use App\Models\Voting;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function show_candidate() {
        $candidates = Candidate::with('users')->get();
        

        $data = [];
        foreach($candidates as $candidate) {
            array_push($data, [
                'idkandidat' => $candidate->idcandidate,
                'gambar' => url($candidate->picture),
                'nama' => $candidate->users->name,
                'nis' => $candidate->nis,
                'kelas' => $candidate->users->class->class_name,
                'visi' => $candidate->vision,
                'misi' => $candidate->mission
            ]);
        }

        return response()->json([
            "data" => [
                'msg' => 'daftar kandidat',
                'data' => $data
            ]
        ], 200);
    }

    public function show_candidate_by_id($id) {
        $candidate = Candidate::with('users')->find($id);

        if ($candidate !== NULL) {
            return response()->json([
                "data" => [
                    'msg' => 'detail kandidat',
                    'data' => [
                        'idkandidat' => $candidate->idcandidate,
                        'gambar' => url($candidate->picture),
                        'nama' => $candidate->users->name,
                        'nis' => $candidate->nis,
                        'kelas' => $candidate->users->class->class_name,
                        'email' => $candidate->users->email,
                        'visi' => $candidate->vision,
                        'misi' => $candidate->mission,
                        'created_at' => $candidate->created_at,
                        'updated_at' => $candidate->updated_at
                    ]
                ]
            ], 200);
        }

        return response()->json('kandidate tidak ditemukan', 404);
    }

    public function vote_candidate_by_id(Request $request, $id) {
        $candidate = Candidate::find($id);

        if ($candidate !== NULL) {
            
            $jwt = $request->bearerToken();
            $decoded = JWT::decode($jwt, new Key(env('JWT_SECRET_KEY'), 'HS256'));

            $isVoted = Voting::where('nis', $decoded->nis)->exists();

            if($isVoted) {
                return response()->json('Anda sudah memilih sebelumnya', 400);
            }

            Voting::create([
                'nis' => $decoded->nis,
                'votes' => 1,
                'idcandidate' => $candidate->idcandidate
            ]);

            
            return response()->json([
                "data" => [
                    'msg' => 'berahasil memilih kandidat',
                    'data' => [
                        'id' => $candidate->idcandidate,
                        'nama' => $candidate->users->name,
                        'email' => $candidate->users->email
                    ]
                ]
            ], 200);
    
        }
    
        return response()->json('kandidat tidak ditemukan', 404);
    }
}
