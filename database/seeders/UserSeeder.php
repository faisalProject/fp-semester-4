<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Administrator',
            'email' => 'admin@admin.com',
            'nis' => '',
            'password' => 'adminxyz12345',
            'role' => 'admin',
            'last_login' => now()
        ]);

        User::factory()->count(50)->create();
    }
}
