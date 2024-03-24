<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Candidat extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $attributes = [
        'banned' => false, // Changed from IsBanned to banned to match controller usage
    ];
    
    protected $fillable = [
        'name',     // Used as 'name' in the controller
        'email',    // Matches controller
        'password', // Matches controller
        'phone',    // Used as 'phone' in the controller, changed from Num_tele
        'adresse',  // Matches controller
        'banned',   // Changed from IsBanned to banned to match controller usage
    ];
    
    // Rest of the code…
 
    // Relationship with DemandeOffre and other methods unchanged

    public function demandeOffres()
    {
        return $this->hasMany(DemandeOffre::class, 'idCandidat');
    }

    public function addToBlacklist()
    {
    $this->banned = true;
    $this->save();
    }
}