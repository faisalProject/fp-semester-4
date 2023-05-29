<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Voting;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function show_candidate() {
        $candidates = Candidate::with('student')->get();

        $data = [];

        foreach($candidates as $candidate) {
            array_push($data, [
                'id_kandidate' => $candidate->id_candidate,
                'gambar' => url($candidate->picture),
                'nama' => $candidate->student->student_data->name,
                'nis' => $candidate->student->nis,
                'kelas' => $candidate->student->class->class_name,
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

    public function show_candidate_by_id(Request $request, $id) {
        $candidate = Candidate::with('student')->find($id);
        $vote = Voting::where('id_student', $request['user_id'])->first();

        if($candidate !== NULL) {
            return response()->json([
                "data" => [
                    'msg' => 'detail kandidat',
                    'already_vote'=> $vote ? true : false,
                    'data' => [
                        'id_kandidat' => $candidate->id_candidate,
                        'gambar' => url($candidate->picture),
                        'nama' => $candidate->student->student_data->name,
                        'nis' => $candidate->student->nis,
                        'kelas' => $candidate->student->class->class_name,
                        'email' => $candidate->student->email,
                        'visi' => $candidate->vision,
                        'misi' => $candidate->mission,
                        'created_at' => $candidate->created_at,
                        'updated_at' => $candidate->updated_at
                    ]
                ]
            ], 200);
        }

        return response()->json([
            'msg' => 'Kandidat tidak ditemukan',
            'statusCode' => 404
        ], 404);
    }

    public function vote_candidate_by_id(Request $request, $id) {
        $candidate = Candidate::find($id);

        if ($candidate !== NULL) {
            
            $jwt = $request->bearerToken();
            $decoded = JWT::decode($jwt, new Key(env('JWT_SECRET_KEY'), 'HS256'));

            $isVoted = Voting::where('id_student', $decoded->id_student)->exists();

            if($isVoted) {
                return response()->json('Anda sudah memilih sebelumnya', 400);
            }

            Voting::create([
                'id_student' => $decoded->id_student,
                'votes' => 1,
                'id_candidate' => $candidate->id_candidate
            ]);

            
            return response()->json([
                "data" => [
                    'msg' => 'berahasil memilih kandidat',
                    'data' => [
                        'id' => $candidate->id_candidate,
                        'nama' => $candidate->student->student_data->name,
                        'email' => $candidate->student->email
                    ]
                ]
            ], 200);
    
        }
    
        return response()->json([
            'msg' => 'Kandidat tidak ditemukan',
            'statusCode' => 404
        ], 404);
    }
}
