<?php

namespace App\Http\Controllers;

use App\Models\DemandeOffre;
use App\Models\Offre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class DemandeOffreController extends Controller
{
    public function index()
    {
        $demandes = DemandeOffre::all(); // Make sure your database has records
        return response()->json($demandes);
    }
    public function store(Request $request)
    {
        $request->validate([
            'idRecruteur' => 'required|exists:recruteurs,id',
            'idOffreEmploi' => 'required|exists:offres,id',
            'idCandidat' => 'required|exists:candidats,id',
            'statut' => 'required|string',
            'cv' => 'required|file|mimes:pdf,doc,docx|max:2048', // Validate the CV
        ]);
    
        // Process the CV file
        if ($request->hasFile('cv')) {
            $cvPath = $request->file('cv')->store('cvs', 'public'); // Store CV and get path
        }
    
        // Create a new DemandeOffre with the cv path
        $demande = DemandeOffre::create([
            'idRecruteur' => $request->idRecruteur,
            'idOffreEmploi' => $request->idOffreEmploi,
            'idCandidat' => $request->idCandidat,
            'statut' => $request->statut,
            'cv' => $cvPath ?? null, // Save the path, fallback to null if not present
        ]);
    
        return response()->json($demande, 201);
    }
    public function show($id) // Changed method signature to accept ID directly
    {
        $demandeOffre = DemandeOffre::find($id);

        if (!$demandeOffre) {
            return response()->json(['message' => 'Not Found!'], 404);
        }

        return response()->json($demandeOffre);
    }


    public function destroy($id)
    {
        $demandeOffre = DemandeOffre::find($id);
    
        if (!$demandeOffre) {
            return response()->json(['message' => 'Not Found!'], 404);
        }
    
        // Check if the CV exists and delete it from storage
        if ($demandeOffre->cv && Storage::exists($demandeOffre->cv)) {
            Storage::delete($demandeOffre->cv);
        }
    
        $demandeOffre->delete();
        return response()->json(['message' => 'Demande Offre and CV deleted successfully'], 200);
    }
    
    // Accept or refuse a job application. This should be done by the recruiter.
    public function acceptOrRefuse(Request $request, $id) // meme fonctionalité que update
    {
        $statut = $request->input('statut'); // 'accept' or 'refuse'
        // Only the recruiter who owns the offer should be able to accept/refuse
        $demandeOffre = DemandeOffre::findOrFail($id);
        $offre = Offre::findOrFail($demandeOffre->idOffreEmploi);
        
        if ($offre->idRecruteur != Auth::id()) {
            // Unauthorized access, only the owner recruiter can accept/refuse
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $demandeOffre->statut = $request->statut; // 'accepte' or 'refuse'
        $demandeOffre->save();

        return response()->json(['message' => "Demande d'offre has been {$statut}."], 200);
    }

    // View the offres for which a candidate has made a demande. This should be visible to the candidate.
    public function consulterDemandeOffre()
    {
        // This will retrieve all demandes along with their related offre, recruteur, and candidat information.
        // It does not filter by the logged-in user's demandes. It fetches all records in the database.
        $demandes = DemandeOffre::with(['offre', 'recruteur', 'candidat'])->get();
        return response()->json($demandes);
    }
    
}