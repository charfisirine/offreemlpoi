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
        Schema::create('recruteurs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('phone', 8)->nullable();
            // 'secteur_activite' matches 'secteur_activite' in the model, corrected from 'secteur_acivite'
            $table->string('secteur_activite')->nullable();
            // 'nom_entreprise' matches 'nom_entreprise' in the model, corrected from 'nom_entreprise'
            $table->string('nom_entreprise');
            // 'site_web' matches 'site_web' in the model, corrected from 'lien_site'
            $table->string('site_web')->nullable();
            // 'adresse' matches 'adresse' in the model, corrected from 'adresse_entreprise'
            $table->string('adresse')->nullable();
            $table->boolean('banned')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recruteurs');
    }
};