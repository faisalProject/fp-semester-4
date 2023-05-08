<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    use HasFactory;

    protected $table = 'class';
    protected $primaryKey = 'id_class';
    protected $fillable = ['id_student', 'class_name'];

    public function student() {
        return $this->hasMany(Student::class, 'id_student', 'id_student');
    }
}
