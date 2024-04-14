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
        Schema::create('offres', function (Blueprint $table) {
            $table->id();
            $table->string('Titre');
            $table->string('Nom_Entreprise');
            $table->string('Lieu_travail');
            $table->string('Duree')->nullable(); // Assuming Duree could be optional
            $table->text('Description')->nullable(); // Assuming Description could be optional
            $table->decimal('Salaire', 8, 2)->nullable(); // Assuming Salaire could be optional and requires precision
            $table->string('Type_Contrat');
            $table->foreignId('id_recruteur')->constrained('recruteurs'); // This assumes you have a 'recruteurs' table
            $table->boolean('published')->default(false); // Assuming published is a boolean and not published by default
            $table->string('status')->default('pending'); // Assuming status has a default value of 'pending'
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offres');
    }
};