<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;

    protected $table = 'candidate';
    protected $primaryKey = 'idcandidate';
    protected $fillable = [
        'nis',
        'vision',
        'mission',
        'picture'
    ];

    public function users() {
        return $this->belongsTo(User::class, 'nis', 'nis');
    }

    public function voting() {
        return $this->hasMany(Voting::class, 'idcandidate', 'idcandidate');
    }
}
