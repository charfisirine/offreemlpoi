<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DemandeOffre extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'idRecruteur',    // Assuming this matches request attribute names
        'idOffreEmploi',  // Assuming this matches request attribute names
        'idCandidat',     // Assuming this matches request attribute names
        'statut',         // Assuming this matches request attribute names
        'cv'
    ];


    // Relationship with Candidat
    public function candidat()
    {
        return $this->belongsTo(Candidat::class, 'idCandidat');
    }

    // Relationship with Recruteur
    public function recruteur()
    {
        return $this->belongsTo(Recruteur::class, 'idRecruteur');
    }
    public function offre()
{
    return $this->belongsTo(Offre::class, 'idOffreEmploi');
}
    // Relationship
}