<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;

class Admin extends Model implements Authenticatable
{
    use HasFactory, AuthenticatableTrait;

    protected $table = 'admin';
    protected $fillable = ['name', 'email', 'password', 'last_login'];

    public function setPasswordAttribute($password) {
        return $this->attributes['password'] = bcrypt($password);
    }
}
