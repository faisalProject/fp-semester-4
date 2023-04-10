<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voting extends Model
{
    use HasFactory;

    protected $table = 'voting';
    protected $primaryKey = 'idvoting';
    protected $fillable = [
        'is_voting',
        'nis',
        'idcandidate'
    ];

    public function users() {
        return $this->belongsTo(User::class, 'nis', 'nis');
    }

    public function candidate() {
        return $this->belongsTo(Candidate::class, 'idcandidate', 'idcandidate');
    }

}
