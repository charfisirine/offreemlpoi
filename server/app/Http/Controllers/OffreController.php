<?php

namespace App\Http\Controllers;

use App\Models\Offre;
use Illuminate\Http\Request;

class OffreController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        // Simple search for candidates without filtering
        $offres = Offre::all();
        return response()->json($offres);
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        // Ensure the user is a recruiter and has authorization to create an offer
        // Add validation for request data as necessary
        $offre = Offre::create($request->all());
        return response()->json($offre, 201);
    }

    // Display the specified resource.
    public function show(Offre $offre)
    {
        return response()->json($offre);
    }

    // Update the specified resource in storage.
    public function update(Request $request, Offre $offre)
    {
        // Ensure the user is a recruiter or admin and has authorization to update the offer
        // Add validation for request data as necessary
        $offre->update($request->all());
        return response()->json($offre, 200);
    }

    // Remove the specified resource from storage.
    public function destroy(Offre $offre)
    {
        // Ensure the user is a recruiter or admin and has authorization to delete the offer
        $offre->delete();
        return response()->json('Offer deleted successfully', 200);
    }

    // Allow a recruiter to publish an offer
    public function publish(Request $request, $id)
    {
        // Ensure the user is a recruiter and has authorization to publish the offer
        $offre = Offre::findOrFail($id);
        // Add logic to set the offer as published based on your business logic
        $offre->published = true;
        $offre->save();
        return response()->json(['message' => 'Offer published successfully'], 200);
    }

    // Allow admin to accept or refuse an offer
    public function acceptOrRefuse(Request $request, $id)
    {
        // Ensure the user is an admin and has authorization to accept/refuse the offer
        $offre = Offre::findOrFail($id);
        $status = $request->input('status'); // 'accept' or 'refuse'
        if (!in_array($status, ['accept', 'refuse'])) {
            return response()->json(['error' => 'Invalid status.'], 422);
        }
        // Add logic to set the offer status based on admin's decision
        $offre->status = $status;
        $offre->save();
        return response()->json(['message' => "Offer has been {$status}."], 200);
    }

    // Simple search for candidates without filtering
    public function searchSimple(Request $request)
    {
        $keyword = $request->query('keyword');
        $offres = Offre::where('Titre', 'like', '%' . $keyword . '%')
                        ->orWhere('Description', 'like', '%' . $keyword . '%')
                        ->get();
        return response()->json($offres);
    }
    
    // Advanced search for candidates with filtering
    public function searchAdvanced(Request $request)
    {
        $query = Offre::query();
        
        if ($request->has('Title')) {
            $query->where('Titre', 'like', '%' . $request->query('Title') . '%');
        }
        if ($request->has('Type_Contrat')) {
            $query->where('Type_Contrat', $request->query('Type_Contrat'));
        }
        // Add more filters as needed...
    
        $offres = $query->get();
        return response()->json($offres);
    }
    
}