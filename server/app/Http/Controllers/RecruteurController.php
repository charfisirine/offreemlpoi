<?php

namespace App\Http\Controllers;

use App\Models\Recruteur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;

class RecruteurController extends Controller
{
    public function index()
    {
        $Recruteurs = Recruteur::all();
        return response()->json($Recruteurs);
    }

    public function register(Request $request)
    {
        $phone = $request->input('phone');

       // Check if the phone is exactly 8 digits using regular expression
       if($phone){
        if (!preg_match('/^\d{8}$/', $phone)) {
            return response()->json(['error' => 'The phone number must be exactly 8 digits.'], 422);
        }
        }
        $existingRecruteur = Recruteur::where('email', $request->input('email'))->first();
        if ($existingRecruteur) {
            return response()->json(['error' => 'The email has already been taken.'], 422);
        }
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:Recruteurs,email',
            'password' => 'required|min:6'
        ]);
        $Recruteur = Recruteur::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'secteur_activite' => $request->secteur_activite,
            'nom_entreprise' => $request->nom_entreprise,
            'site_web' => $request->site_web,
            'adresse' => $request->adresse
            
        ]);
        $token = $Recruteur->createToken('recruteurToken')->plainTextToken;
        return response()->json([
            $Recruteur,
            'status' => true,
            'message' => 'Recruteur Created Successfully',
            'token' => $token
        ], 200);
    }


      // Récupérer un recruteur spécifique
    public function show($id)
    {
        $recruteur = Recruteur::find($id);
        if (!$recruteur) {
            return response()->json(['message' => 'Recruteur non trouvé'], 404);
        }
        return response()->json($recruteur);
    }
    public function update(Request $request, $id)
    {
        $Recruteur = Recruteur::find($id);
        if ($request->has('password')) {
            $request->merge(['password' => bcrypt($request->input('password'))]);
        }
        $Recruteur->update($request->all());
        return response()->json($Recruteur, 200);
    }

    public function destroy($id)
    {
        $Recruteur = Recruteur::find($id);
        if ($Recruteur) {
            $Recruteur->delete();
            return response()->json('Recruteur deleted successfully.');
        }
        return response()->json('Recruteur not found.', 404);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Manually find the user by email
        $recruteur = Recruteur::where('email', $request->email)->first();

        // Check if user exists and password is correct
        if (!$recruteur || !Hash::check($request->password, $recruteur->password)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Generate a new token for the recruteur
        $token = $recruteur->createToken('recruteurToken')->plainTextToken;

        return response()->json([
            'recruteur' => $recruteur,
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user('recruteur')->currentAccessToken()->delete();
        return response()->json(['message' => 'Successfully logged out']);
    }
    public function addToBlacklist($id)
    {
        // ... Assuming this function will just ban the Recruteur ...
        $Recruteur = Recruteur::find($id);
        if ($Recruteur) {
            $Recruteur->banned = true;
            $Recruteur->save();
            return response()->json('Recruteur added to blacklist successfully.');
        }
        return response()->json('Recruteur not found.', 404);
    }

    public function removeFromBlacklist($id)
    {
        $Recruteur = Recruteur::find($id);
        if ($Recruteur) {
            $Recruteur->banned = false;
            $Recruteur->save();
            return response()->json('Recruteur removed from blacklist successfully.');
        }
        return response()->json('Recruteur not found.', 404);
    }
    public function toggleBanRecruteur($id)
    {
        $Recruteur = Recruteur::find($id);
        if ($Recruteur) {
            $Recruteur->banned = !$Recruteur->banned;
            $Recruteur->save();
            return response()->json(['message' => 'Recruteur ban status updated successfully.']);
        }
        return response()->json(['message' => 'Recruteur not found.'], 404);
    }
    public function getBlacklistedRecruteurs()
    {
        $bannedRecruteurs = Recruteur::where('banned', true)->get();
        return response()->json($bannedRecruteurs);
    }

    // Method to accept or refuse a recruiter (to be performed later by admin)
    public function acceptOrRefuseRecruteur(Request $request, $id)
    {
        // Authorization check to ensure the user is an admin should be here

        $Recruteur = Recruteur::find($id);
        if (!$Recruteur) {
            return response()->json('Recruteur not found.', 404);
        }

        // 'status' should be sent in the request to indicate the decision
        $status = $request->input('status'); // 'accept' or 'refuse'
        if (!in_array($status, ['accept', 'refuse'])) {
            return response()->json(['error' => 'Invalid status.'], 422);
        }

        // Implement your logic here. For example, setting a 'status' attribute on the Recruteur
        // This is just a placeholder; your actual implementation may differ
        $Recruteur->status = $status;
        $Recruteur->save();

        return response()->json(['message' => "Recruteur has been {$status}ed."]);
    }

}