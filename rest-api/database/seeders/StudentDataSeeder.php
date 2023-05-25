<?php

namespace Database\Seeders;

use App\Models\StudentData;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        StudentData::factory()->count(50)->create();
    }
}
