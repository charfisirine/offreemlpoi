<?php

namespace App\Http\Controllers;

use App\Models\Candidat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;

class CandidatController extends Controller
{
    public function index()
    {
        $Candidats = Candidat::all();
        return response()->json($Candidats);
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
        $existingCandidat = Candidat::where('email', $request->input('email'))->first();
        if ($existingCandidat) {
            return response()->json(['error' => 'The email has already been taken.'], 422);
        }
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:Candidats,email',
            'password' => 'required|min:6'
        ]);
        $Candidat = Candidat::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'adresse' => $request->adresse
        ]);
        $token = $Candidat->createToken('candidatToken')->plainTextToken;
        return response()->json([
            $Candidat,
            'status' => true,
            'message' => 'Candidat Created Successfully',
            'token' => $token
        ], 200);
    }


    public function show($id)
    {
        $Candidat = Candidat::find($id);
        return response()->json($Candidat);
    }

    public function update(Request $request, $id)
    {
        $Candidat = Candidat::find($id);
        if ($request->has('password')) {
            $request->merge(['password' => bcrypt($request->input('password'))]);
        }
        $Candidat->update($request->all());
        return response()->json($Candidat, 200);
    }

    public function destroy($id)
    {
        $Candidat = Candidat::find($id);
        if ($Candidat) {
            $Candidat->delete();
            return response()->json('Candidat deleted successfully.');
        }
        return response()->json('Candidat not found.', 404);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Manually find the user by email
        $candidat = Candidat::where('email', $request->email)->first();

        // Check if user exists and password is correct
        if (!$candidat || !Hash::check($request->password, $candidat->password)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Generate a new token for the candidat
        $token = $candidat->createToken('candidatToken')->plainTextToken;

        return response()->json([
            'candidat' => $candidat,
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user('candidat')->currentAccessToken()->delete();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function addToBlacklist($id)
    {
        $Candidat = Candidat::find($id);
        if ($Candidat) {
            $Candidat->banned = true;
            $Candidat->save();
            return response()->json('Candidat added to blacklist successfully.');
        }
        return response()->json('Candidat not found.', 404);
    }

    public function removeFromBlacklist($id)
    {
        $Candidat = Candidat::find($id);
        if ($Candidat) {
            $Candidat->banned = false;
            $Candidat->save();
            return response()->json('Candidat removed from blacklist successfully.');
        }
        return response()->json('Candidat not found.', 404);
    }
    public function toggleBanCandidat($id)
    {
        $Candidat = Candidat::find($id);
        if ($Candidat) {
            $Candidat->banned = !$Candidat->banned;
            $Candidat->save();
            return response()->json(['message' => 'Candidat ban status updated successfully.']);
        }
        return response()->json(['message' => 'Candidat not found.'], 404);
    }
    public function getBlacklistedCandidats()
    {
        $bannedCandidats = Candidat::where('banned', true)->get();
        return response()->json($bannedCandidats);
    }

    // Method to accept or refuse a candidate (to be performed later by admin)
    public function acceptOrRefuseCandidat(Request $request, $id)
    {
        // You need to implement an authorization check here to ensure the user is an admin

        $Candidat = Candidat::find($id);
        if (!$Candidat) {
            return response()->json('Candidat not found.', 404);
        }

        $status = $request->input('status'); // 'accept' or 'refuse'
        if ($status == 'accept') {
            // Logic for accepting the Candidat
        } elseif ($status == 'refuse') {
            // Logic for refusing the Candidat
        } else {
            return response()->json('Invalid status.', 400);
        }

        // Save the updated Candidat status
        $Candidat->save();

        return response()->json(['message' => "Candidat has been {$status}ed."]);
    }

    // Method for admin to search for a candidate
    public function searchCandidat(Request $request)
    {
        // You need to implement an authorization check here to ensure the user is an admin

        $searchTerm = $request->input('search_term');
        $candidates = Candidat::where('name', 'LIKE', "%{$searchTerm}%")
                            ->orWhere('email', 'LIKE', "%{$searchTerm}%")
                            ->get();

        return response()->json($candidates);
    }

}