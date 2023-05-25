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
        Schema::create('class', function (Blueprint $table) {
            $table->id('id_class');
            $table->unsignedBigInteger('id_student');
            $table->foreign('id_student')->references('id_student')->on('student')->onDelete('cascade')->onUpdate('cascade');
            $table->enum('class_name', [
                'X IPA 1', 'X IPA 2', 'X IPA 3',
                'XI IPA 1', 'XI IPA 2', 'XI IPA 3',
                'XII IPA 1', 'XII IPA 2', 'XII IPA 3',
                'X IPS 1', 'X IPS 2', 'X IPS 3',
                'XI IPS 1', 'XI IPS 2', 'XI IPS 3',
                'XII IPS 1', 'XII IPS 2', 'XII IPS 3',
            ]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('class');
    }
};
