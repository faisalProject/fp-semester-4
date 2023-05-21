<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Student;
use App\Models\StudentData;
use App\Models\Voting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function show_account() {
        $students = Student::with('student_data')->get();

        $data = [];

        foreach($students as $student) {
            array_push($data, [
                'id' => $student->id_student,
                'nama' => $student->student_data->name,
                'email' => $student->student_data->email,
                'last_login' => $student->last_login,
                'created_at' => $student->created_at,
                'updated_at' => $student->updated_at
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
        $student = Student::with('class')
        ->with('student_data')
        ->where('id_student', $id)
        ->first();

        if ($student !== NULL) {
            return response()->json([
                "data" => [
                    'msg' => 'detail akun',
                    'data' => [
                        'id' => $student->id_student,
                        'nama' => $student->student_data->name,
                        'nis' => $student->nis,
                        'email' => $student->email,
                        'kelas' => $student->class->class_name,
                        'status' => $student->status,
                        'last_login' => $student->last_login,
                        'created_at' => $student->created_at,
                        'updated_at' => $student->updated_at
                    ]
                ]
            ], 200);
        }

        return response()->json('siswa tidak ditemukan', 404);
    }

    public function add_candidate_by_id(Request $request, $id) {
        $student = Student::with('student_data')->find($id);

        if ($student !== NULL) {
            $validator = Validator::make($request->all(), [
                'vision' => 'required',
                'mission' => 'required',
                'picture' => 'required|file|mimes:png,jpg,jpeg|max:2048'
            ]);

            if ($validator->fails()) {
                return messageError($validator->messages()->toArray());
            }

            $isCandidate = $student->where('status', $student->status == 'kandidat')->exists();

            if($isCandidate) {
                return response()->json('siswa tersebut sudah berstatus kandidat', 401);
            };

            $thumbnail = $request->file('picture');
            $filename = now()->timestamp . "-" . $request->picture->getClientOriginalName();
            $thumbnail->move('uploads', $filename);

            $candidate = $validator->validated();

            Candidate::create([
                'id_student' => $student->id_student,
                'vision' => $candidate['vision'],
                'mission' => $candidate['mission'],
                'picture' => 'uploads/' .$filename
            ]);

            Student::where('id_student', $id)->update([
                'status' => 'kandidat'
            ]);

            return response()->json([
                "data" => [
                    'msg' => 'siswa berhasil di tambahkan menjadi kandidat',
                    'name' => $student->student_data->name,
                    'nis' => $student->student_data->nis,
                    'email' => $student['email'],
                ]
            ], 200);
        }

        return response()->json('siswa tidak ditemukan', 404);
    }

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

    public function show_candidate_by_id($id) {
        $candidate = Candidate::with('student')->find($id);

        if($candidate !== NULL) {
            return response()->json([
                "data" => [
                    'msg' => 'detail kandidat',
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

        return response()->json('kandidat tidak ditemukan', 404);
    }

    public function update_candidate_by_id(Request $request, $id) {
        $candidate = Candidate::find($id);

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

            Candidate::where('id_candidate', $id)->update([
                'id_student' => $candidate->id_student,
                'vision' => $candidateData['vision'],
                'mission' => $candidateData['mission'],
                'picture' => 'uploads/' .$filename
            ]);

            return response()->json([
                "data" => [
                    'msg' => 'kandidat berhasil diupdate'
                ]
            ], 200);
        }

        return response()->json("kandidat tidak ditemukan", 404);
    }

    public function delete_candidate_by_id($id) {
        $candidate = Candidate::find($id);

        if($candidate !== NULL) {
            Candidate::where('id_candidate', $id)->delete();
            Student::where('id_student', $candidate->id_student)->update([
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

    public function show_votes() {
        $candidates = Candidate::with('student')->get();

        $data = [];

        foreach ($candidates as $candidate) {
            $total_votes = Voting::where('id_candidate', $candidate->id_candidate)->sum('votes');
            array_push($data, [
                'id_kandidat' => $candidate->id_candidate,
                'gambar' => url($candidate->picture),
                'nama' => $candidate->student->student_data->name,
                'nis' => $candidate->student->nis,
                'kelas' => $candidate->student->class->class_name,
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
        $candidate = Candidate::with('student')->find($id);

        if($candidate !== NULL) {
            $total_votes = Voting::where('id_candidate', $candidate->id_candidate)->sum('votes');

            return response()->json([
                "data" => [
                    'msg' => 'detail jumlah suara',
                    'data' => [
                        'id_kandidat' => $candidate->id_candidate,
                        'gambar' => url($candidate->picture),
                        'nama' => $candidate->student->student_data->name,
                        'nis' => $candidate->student->nis,
                        'kelas' => $candidate->student->class->class_name,
                        'email' => $candidate->student->email,
                        'jumlah suara' => $total_votes,
                        'created_at' => $candidate->created_at,
                        'updated_at' => $candidate->updated_at
                    ]
                ]
            ], 200);
        }

        return response()->json('kandidat tidak ditemukan', 404);
    }

    public function add_student_data(Request $request) {
        $validator = Validator::make($request->all(), [
            'nis' => 'required|max:14|unique:student_data',
            'name' => 'required',
            'email' => 'required|email|unique:student_data,email',
        ]);

        $NisAlreadyExists = StudentData::where('nis', $request->nis)->exists();
        $emailAlreadyExists = StudentData::where('email', $request->email)->exists();

        if($NisAlreadyExists) {
            return response()->json('Nis sudah terdaftar', 400);
        }

        if($emailAlreadyExists) {
            return response()->json('Email sudah terdaftar', 400);
        }

        if ($validator->fails()) {
            return messageError($validator->messages()->toArray());
        }

        $studentData = $validator->validated();
        StudentData::create($studentData);

        return response()->json('Berhasil ditambahkan', 200);
    }

    public function show_student_data() {
        $student_data = StudentData::get();

        $data = [];

        foreach($student_data as $s) {
            array_push($data, [
                'id' => $s->id_data,
                'name' => $s->name,
                'nis' => $s->nis
            ]);
        }

        return response()->json([
            "data" => [
                'msg' => 'data siswa',
                'data' => $data
            ]
        ], 200);
    }

    public function show_student_data_by_id($id) {
        $student_data = StudentData::find($id);

        if($student_data !== NULL) {
            return response()->json([
                "data" => [
                    'msg' => 'detail data siswa',
                    'data' => [
                        'id' => $student_data->id_data,
                        'nis' => $student_data->nis,
                        'name' => $student_data->name,
                        'email' => $student_data->email,
                        'created_at' => $student_data->created_at,
                        'updated_at' => $student_data->updated_at
                    ]
                ]
            ], 200);
        }

        return response()->json('data siswa tidak ditemukan', 404);
    }

    public function update_student_data_by_id(Request $request, $id) {
        $student_data = StudentData::find($id);

        if($student_data !== NULL) {
            $validator = Validator::make($request->all(), [
                'nis' => 'required|max:14|unique:student_data',
                'name' => 'required',
                'email' => 'required|email|unique:student_data,email'
            ]);

            $NisAlreadyExists = StudentData::where('nis', $request->nis)->exists();
            $emailAlreadyExists = StudentData::where('email', $request->email)->exists();

            if($NisAlreadyExists) {
                return response()->json('Nis sudah terdaftar', 400);
            }

            if($emailAlreadyExists) {
                return response()->json('Email sudah terdaftar', 400);
            }

            if ($validator->fails()) {
                return messageError($validator->messages()->toArray());
            }

            $studentDataValidate = $validator->validated();
            StudentData::where('id_data', $id)->update([
                'id_data' => $student_data->id_data,
                'nis' => $studentDataValidate['nis'],
                'name' => $studentDataValidate['name'],
                'email' => $studentDataValidate['email']
            ]);

            Student::where('email', $student_data->email)->update([
                'email' => $studentDataValidate['email']
            ]);

            return response()->json([
                "data" => [
                    'msg' => 'data siswa berhasil diupdated'
                ]
            ], 200);
        }

        return response()->json("data siswa tidak ditemukan", 404);
    }

    public function delete_student_data_by_id($id) {
        $student_data = StudentData::find($id);

        if($student_data !== NULL) {
            StudentData::where('id_data', $id)->delete();

            return response()->json([
                "data" => [
                    'msg' => 'data siswa berhasil dihapus'
                ]
            ], 200);
        }       

        return response()->json("data siswa tidak ditemukan", 404);
    }
}
