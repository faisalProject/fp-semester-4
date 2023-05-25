<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voting extends Model
{
    use HasFactory;

    protected $table = 'voting';
    protected $primaryKey = 'id_voting';
    protected $fillable = ['id_student', 'votes', 'id_candidate'];
}
