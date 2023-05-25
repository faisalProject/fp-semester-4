<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student', function (Blueprint $table) {
            $table->id('id_student');
            $table->string('nis');
            $table->foreign('nis')->references('nis')->on('student_data')->onDelete('cascade')->onUpdate('cascade');
            $table->string('email')->unique();
            $table->string('password')->unique();
            $table->enum('status', ['siswa', 'kandidat'])->default('siswa');
            $table->dateTime('last_login');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student');
    }
};
