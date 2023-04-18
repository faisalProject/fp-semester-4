<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use Illuminate\Http\Request;

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
}
