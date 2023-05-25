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
        Schema::create('voting', function (Blueprint $table) {
            $table->id('id_voting');
            $table->unsignedBigInteger('id_student');
            $table->foreign('id_student')->references('id_student')->on('student')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('votes');
            $table->unsignedBigInteger('id_candidate');
            $table->foreign('id_candidate')->references('id_candidate')->on('candidate')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voting');
    }
};
