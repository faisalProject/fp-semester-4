<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;

class Student extends Model implements Authenticatable
{
    use HasFactory, AuthenticatableTrait;

    protected $table = 'student';
    protected $primaryKey = 'id_student';
    protected $fillable = ['nis', 'email', 'password', 'status', 'last_login'];

    public function student_data() {
        return $this->belongsTo(StudentData::class, 'nis', 'nis');
    }

    public function class() {
        return $this->belongsTo(Kelas::class, 'id_student', 'id_student');
    }

    public function candidate() {
        return $this->hasMany(Candidate::class, 'id_student', 'id_student');
    }

    public function setPasswordAttribute($password) {
        return $this->attributes['password'] = bcrypt($password);
    }
}
