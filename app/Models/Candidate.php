<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;

    protected $table = 'candidate';
    protected $primaryKey = 'id_candidate';
    protected $fillable = ['id_student', 'vision', 'mission', 'picture'];

    public function student() {
        return $this->belongsTo(Student::class, 'id_student', 'id_student');
    }
}
