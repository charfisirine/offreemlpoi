<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offre extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'Titre', // Make sure this matches 'title' if it's being used in requests
        'Nom_Entreprise',
        'Lieu_travail',
        'Duree',
        'Description',
        'Salaire',
        'Type_Contrat', // This matches 'type_contrat' used in advanced search
        'id_recruteur',
        'published', // Assuming this is a boolean field to be included
        'status',    // Assuming this is a field to be included
    ];

    // Rest of the code…
    // Methods for the job offer can be defined here, such as chercherOffre(), accepterRefuserOffre(), etc.
    // Relationship with Recruteur
    public function recruteur()
    {
        return $this->belongsTo(Recruteur::class, 'id_recruteur');
    }
    
    // Relationship with DemandeOffre
    public function demandesOffres()
    {
        return $this->hasMany(DemandeOffre::class, 'idOffreEmploi');
    }
}