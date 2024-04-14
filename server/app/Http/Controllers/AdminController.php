<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log; // Add this at the top of your file

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:admins',
            'password' => 'required|min:6',
        ]);
    
        try {
            $admin = Admin::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
    
            $token = $admin->createToken('adminToken')->plainTextToken;
    
            return response()->json([
                'admin' => $admin,
                'token' => $token,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Admin Registration Error: ' . $e->getMessage());
            return response()->json(['message' => 'Registration Failed'], 500);
        }
    }
    

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Manually find the user by email
        $admin = Admin::where('email', $request->email)->first();

        // Check if user exists and password is correct
        if (!$admin || !Hash::check($request->password, $admin->password)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Generate a new token for the admin
        $token = $admin->createToken('adminToken')->plainTextToken;

        return response()->json([
            'admin' => $admin,
            'token' => $token,
        ]);
    }
    
    public function logout(Request $request)
    {
        $request->user('admin')->currentAccessToken()->delete();
        return response()->json(['message' => 'Successfully logged out']);
    }

}

