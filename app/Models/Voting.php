<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voting extends Model
{
    use HasFactory;
    
    protected $table = 'voting';
    protected $primaryKey = 'idvoting';
    protected $fillable = ['nis', 'votes', 'idcandidate'];

    public function users() {
        return $this->belongsTo(User::class, 'nis', 'nis');
    }
}
