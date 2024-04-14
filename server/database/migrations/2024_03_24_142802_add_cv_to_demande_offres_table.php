<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCvToDemandeOffresTable extends Migration
{
    public function up()
    {
        Schema::table('demande_offres', function (Blueprint $table) {
            $table->string('cv')->nullable(); // Allows storing a file path or URL
        });
    }

    public function down()
    {
        Schema::table('demande_offres', function (Blueprint $table) {
            $table->dropColumn('cv');
        });
    }
}
