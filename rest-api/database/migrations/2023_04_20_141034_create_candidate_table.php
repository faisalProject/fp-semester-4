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
        Schema::create('candidate', function (Blueprint $table) {
            $table->id('id_candidate');
            $table->unsignedBigInteger('id_student');
            $table->foreign('id_student')->references('id_student')->on('student')->onDelete('cascade')->onUpdate('cascade');
            $table->text('vision');
            $table->text('mission');
            $table->string('picture');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candidate');
    }
};
