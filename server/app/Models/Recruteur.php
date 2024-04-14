<?php

namespace App\Models;
use App\Models\offresEmploi;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class Recruteur extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',                // Changed from 'Nom'
        'email',               // Changed from 'Email_R', should match the field name used in the controller
        'password',            // No change
        'phone',               // Changed from 'Num_Tel'
        'secteur_activite',    // No change, assuming it's not being used in the controller currently
        'nom_entreprise',      // No change, assuming it's not being used in the controller currently
        'site_web',            // No change, assuming it's not being used in the controller currently
        'adresse',             // Changed from 'Emplacement_Entreprise'
        'banned',              // Changed from 'IsBanned', assuming it's being handled as a boolean
    ];

    // Rest of the code…
    // Methods for the recruiter can be defined here, such as connecter(), inscrire(), etc.
    // Relationship with OffreEmploi
    public function offresEmploi()
    {
        return $this->hasMany(Offre::class, 'id_recruteur');
    }
    
    // Relationship with DemandeOffre
    public function demandesOffres()
    {
        return $this->hasMany(DemandeOffre::class, 'idRecruteur');
    }
    public function addToBlacklist()
    {
    $this->banned = true;
    $this->save();
    }
}