<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentData extends Model
{
    use HasFactory;
    
    protected $table = 'student_data';
    protected $primaryKey = 'id_data';
    protected $fillable = ['nis', 'name', 'email'];

    public function student() {
        return $this->hasMany(Student::class, 'nis', 'nis');
    }
}
