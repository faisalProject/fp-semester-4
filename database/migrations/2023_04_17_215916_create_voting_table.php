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
            $table->id('idvoting');
            $table->string('nis');
            $table->foreign('nis')->references('nis')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->enum('is_vote', [0, 1])->default(0);
            $table->unsignedBigInteger('idcandidate');
            $table->foreign('idcandidate')->references('idcandidate')->on('candidate')->onDelete('cascade')->onUpdate('cascade');
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
