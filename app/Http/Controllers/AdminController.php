<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'email_validate' => 'required|email',
            'nis' => 'required|unique:users',
            'password' => 'required|min:8',
            'confirmation_password' => 'required|same:password',
            'role' => 'required|in:admin,user',
        ]);

        if($validator->fails()) {
            return messageError($validator->messages()->toArray());
        }

        $user = $validator->validated();

        User::create($user);

        return response()->json([
            "data" => [
                'msg' => 'berhasil login',
                'name' => $user['name'],
                'email' => $user['email'],
                'role' => $user['role']
            ]
        ], 200);
    }

    public function show_account() {
        $users = User::where('role', 'user')->get();

        return response()->json([
            "data" => [
                'msg' => 'user registrasi',
                'data' => $users
            ]
        ], 200);
    }

    public function show_account_by_id($id) {
        $user = User::find($id);

        if($user !== NULL) {
            return response()->json([
                "data"=> [
                    'msg' => "user id: {$id}",
                    'data' => $user
                ]
            ], 200);
        }

        return response()->json('Id tidak ditemukan', 404);
        
    }

    public function add_candidate(Request $request, $id) {
        $user = User::find($id);
    
        if($user !== NULL) {
            $validator = Validator::make($request->all(), [
                'vision' => 'required',
                'mission' => 'required',
                'picture' => 'required|file|mimes:png,jpg,jpeg|max:2048'
            ]);
    
            if ($validator->fails()) {
                return messageError($validator->messages()->toArray());
            };
    
            $thumbnail = $request->file('picture');
            $filename = now()->timestamp. "-" .$request->picture->getClientOriginalName();
            $thumbnail->move('uploads', $filename);
    
            $candidateData = $validator->validated();
    
            Candidate::create([
                'nis' => $user['nis'],
                'vision' => $candidateData['vision'],
                'mission' => $candidateData['mission'],
                'picture' => 'uploads/' .$filename
            ]);
    
            return response()->json([
                "data" => [
                    'msg' => 'berhasil ditambahkan sebagai kandidate',
                    'name' => $user['name'],
                    'nis' => $user['nis'],
                    'email' => $user['email'],
                ]
            ], 200);
        }
    
        return response()->json("Id tidak ditemukan", 404);
    }

    public function delete_candidate($id) {
        $candidate = Candidate::find($id);

        if($candidate !== NULL) {
            Candidate::where('idcandidate', $id)->delete();

            return response()->json([
                "data"=> [
                    'msg' => "kandidat berhasil dihapus"
                ]
            ], 200);
        }

        return response()->json("kandidat tidak ditemukan", 404);
    }

    public function update_candidate(Request $request, $id) {
        $candidate = Candidate::find($id);
        // $candidate = DB::table('candidate')->where('idcandidate', $id)->first();
        if($candidate !== NULL) {
            $validator = Validator::make($request->all(), [
                'vision' => 'required',
                'mission' => 'required',
                'picture' => 'required|file|mimes:png,jpg,jpeg|max:2048'
            ]);

            if($validator->fails()) {
                return messageError($validator->messages()->toArray());
            };

            $thumbnail = $request->file('picture');
            $filename = now()->timestamp. "-" .$request->picture->getClientOriginalName();
            $thumbnail->move('uploads', $filename);

            $candidateData = $validator->validated();

            Candidate::where('idcandidate', $id)->update([
                'nis' => $candidate['nis'],
                'vision' => $candidateData['vision'],
                'mission' => $candidateData['mission'],
                'picture' => 'uploads/' .$filename
            ]);

            return response()->json([
                "data" => [
                    'msg' => 'Kandidate berhasil diupdate'
                ]
            ], 200);
        }

        return response()->json("kandidat tidak ditemukan", 404);
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
}
