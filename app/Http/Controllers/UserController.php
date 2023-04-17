<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\User;
use App\Models\Voting;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function show_candidate() {
        $candidates = Candidate::with('users')->get();

        $data = [];

        foreach ($candidates as $candidate) {
            array_push($data, [
                'idcandidate' => $candidate->idcandidate,
                'gambar' => url($candidate->picture),
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
                        'gambar' => url($candidate->picture),
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
        $candidate = DB::table('candidate')->where('idcandidate', $id)->first();

        if ($candidate !== NULL) {
            Voting::create([
                'is_voting' => '1',
                'nis' => auth()->user()->nis,
                'idcandidate' => $candidate->idcandidate
            ]);

            return response()->json([
                "data" => [
                    'msg' => 'berhasil memilih kandidat'
                ]   
            ], 200);
        }

        return response()->json('kandidat tidak ditemukan', 404);
    }
}
