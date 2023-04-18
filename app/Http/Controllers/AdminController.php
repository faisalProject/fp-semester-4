<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\User;
use App\Models\Voting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
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

        $data = [];

        foreach($users as $user) {
            array_push($data, [
                'id' => $user->id,
                'nama' => $user->name,
                'email' => $user->email,
                'last_login' => $user->last_login,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at
            ]);
        }

        return response()->json([
            "data" => [
                'msg' => 'daftar akun',
                'data' => $data
            ]
        ], 200);
    }

    public function show_account_by_id($id) {
        $user = User::with('class')->where('id', $id)->first();

        if ($user !== NULL) {
            if ($user->class === NULL) {
                return response()->json([
                    "data" => [
                        'msg' => 'detail akun',
                        'data' => [
                            'id' => $user->id,
                            'nama' => $user->name,
                            'email' => $user->email,
                            'status' => $user->status,
                            'last_login' => $user->last_login,
                            'created_at' => $user->created_at,
                            'updated_at' => $user->updated_at
                        ]
                    ]
                ], 200);
            }
            
            return response()->json([
                "data" => [
                    'msg' => 'detail akun',
                    'data' => [
                        'id' => $user->id,
                        'nama' => $user->name,
                        'nis' => $user->nis,
                        'email' => $user->email,
                        'kelas' => $user->class->class_name,
                        'status' => $user->status,
                        'last_login' => $user->last_login,
                        'created_at' => $user->created_at,
                        'updated_at' => $user->updated_at
                    ]
                ]
            ], 200);
        }

        return response()->json('siswa tidak ditemukan', 404);
    }

    public function add_candidate_by_id(Request $request, $id) {
        $user = User::find($id);

        if ($user !== NULL) {
            $validator = Validator::make($request->all(), [
                'vision' => 'required',
                'mission' => 'required',
                'picture' => 'required|file|mimes:png,jpg,jpeg|max:2048'
            ]);

            if ($validator->fails()) {
                return messageError($validator->messages()->toArray());
            }

            $thumbnail = $request->file('picture');
            $filename = now()->timestamp . "-" . $request->picture->getClientOriginalName();
            $thumbnail->move('uploads', $filename);

            $candidate = $validator->validated();

            Candidate::create([
                'nis' => $user['nis'],
                'vision' => $candidate['vision'],
                'mission' => $candidate['mission'],
                'picture' => 'uploads/' .$filename
            ]);

            User::where('id', $id)->update([
                'status' => 'kandidat'
            ]);

            return response()->json([
                "data" => [
                    'msg' => 'siswa berhasil di tambahkan menjadi kandidat',
                    'name' => $user['name'],
                    'nis' => $user['nis'],
                    'email' => $user['email'],
                ]
            ], 200);
        }

        return response()->json('siswa tidak ditemukan', 404);
    }

    public function update_candidate_by_id(Request $request, $id) {
        $candidate = DB::table('candidate')->where('idcandidate', $id)->first();

        if($candidate !== NULL) {
            $validator = Validator::make($request->all(), [
                'vision' => 'required',
                'mission' => 'required',
                'picture' => 'required|file|mimes:png,jpg,jpeg|max:2048'
            ]);

            if ($validator->fails()) {
                return messageError($validator->messages()->toArray());
            }

            $thumbnail = $request->file('picture');
            $filename = now()->timestamp. "-" .$request->picture->getClientOriginalName();
            $thumbnail->move('uploads', $filename);

            $candidateData = $validator->validated();

            Candidate::where('idcandidate', $id)->update([
                'nis' => $candidate->nis,
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

    public function delete_candidate_by_id($id) {
        $candidate = DB::table('candidate')->where('idcandidate', $id)->first();

        if ($candidate !== NULL) {
            Candidate::where('idcandidate', $id)->delete();
            User::where('nis', $candidate->nis)->update([
                'status' => 'siswa'
            ]);

            return response()->json([
                "data" => [
                    'msg' => 'kandidat berhasil dihapus'
                ]
            ], 200);
        }

        return response()->json('kandidat tidak ditemukan', 404);
    }

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

    public function show_votes() {
        $candidates = Candidate::with('users')->get();

        $data = [];

        foreach ($candidates as $candidate) {
            $total_votes = Voting::where('idcandidate', $candidate->idcandidate)->sum('votes');
            array_push($data, [
                'idkandidat' => $candidate->idcandidate,
                'gambar' => url($candidate->picture),
                'nama' => $candidate->users->name,
                'nis' => $candidate->nis,
                'kelas' => $candidate->users->class->class_name,
                'jumlah_suara' => $total_votes
            ]);

        }
        return response()->json([
            "data" => [
                'msg' => 'daftar jumlah suara',
                'data' => $data
            ]
        ], 200);
    }

    public function show_votes_by_id($id) {
        $candidate = Candidate::with('users')->find($id);

        if ($candidate !== NULL) {
            $total_votes = Voting::where('idcandidate', $candidate->idcandidate)->sum('votes');

            return response()->json([
                "data" => [
                    'msg' => 'detail hasil suara',
                    'data' => [
                        'idkandidat' => $candidate->idcandidate,
                        'gambar' => url($candidate->picture),
                        'nama' => $candidate->users->name,
                        'nis' => $candidate->nis,
                        'kelas' => $candidate->users->class->class_name,
                        'email' => $candidate->users->email,
                        'jumlah_suara' => $total_votes,
                        'created_at' => $candidate->created_at,
                        'updated_at' => $candidate->updated_at
                    ]
                ]
            ], 200);
        }

        return response()->json('kandidat tidak ditemukan', 404);
    }
}
