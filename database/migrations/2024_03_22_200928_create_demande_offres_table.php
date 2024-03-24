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
        Schema::create('demande_offres', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idRecruteur');
            $table->unsignedBigInteger('idOffreEmploi');
            $table->unsignedBigInteger('idCandidat');
            $table->string('statut'); // You might want to specify a default value or make it nullable depending on your application logic

            $table->timestamps();

            // Assuming you have foreign keys set up for these relationships
            $table->foreign('idRecruteur')->references('id')->on('recruteurs')->onDelete('cascade');
            $table->foreign('idOffreEmploi')->references('id')->on('offres')->onDelete('cascade');
            $table->foreign('idCandidat')->references('id')->on('candidats')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('demande_offres');
    }
};