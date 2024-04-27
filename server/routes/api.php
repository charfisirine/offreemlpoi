<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CandidatController;
use App\Http\Controllers\RecruteurController;
use App\Http\Controllers\OffreController;
use App\Http\Controllers\DemandeOffreController;


// Admin API Routes
Route::post('/admin/register', [AdminController::class, 'register']); //tested
Route::post('/admin/login', [AdminController::class, 'login']); //tested
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/admin/logout', [AdminController::class, 'logout']); //tested
});

// Candidat API Routes
Route::post('/candidat/register', [CandidatController::class, 'register']);//tested
Route::post('/candidat/login', [CandidatController::class, 'login']);//tested
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/candidat/logout', [CandidatController::class, 'logout']);//tested

});

Route::middleware('api')->group(function () {
    Route::put('/candidat/{id}/toggle-ban', [CandidatController::class, 'toggleBanCandidat']);//tested
    Route::get('/candidats/blacklist', [CandidatController::class, 'getBlacklistedCandidats']);//tested
    // Add more candidat-specific routes here, if needed
    Route::apiResource('candidats', CandidatController::class);//tested
});

// Recruteur API Routes
Route::post('/recruteur/register', [RecruteurController::class, 'register']);//tested
Route::post('/recruteur/login', [RecruteurController::class, 'login']);//tested
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/recruteur/logout', [RecruteurController::class, 'logout']);//tested

});
Route::middleware('api')->group(function () {
    Route::put('/recruteur/{id}/toggle-ban', [RecruteurController::class, 'toggleBanRecruteur']);//tested
    Route::get('/recruteurs/blacklist', [RecruteurController::class, 'getBlacklistedRecruteurs']);//tested
    // Add more recruteur-specific routes here, if needed
    Route::apiResource('recruteurs', RecruteurController::class);//tested
});

// Offre API Routes
Route::middleware('api')->group(function () {
    Route::apiResource('offres', OffreController::class);
    Route::post('/offre/{id}/publish', [OffreController::class, 'publish']);//tested
    Route::put('/offre/{id}/accept-refuse', [OffreController::class, 'acceptOrRefuse']);//tested
    Route::get('/offre/search', [OffreController::class, 'searchSimple']); //tested
    Route::get('/offre/advanced-search', [OffreController::class, 'searchAdvanced']);  //tested
});

// DemandeOffre API Routes
Route::middleware('api')->group(function () {
    Route::apiResource('demandes', DemandeOffreController::class); //tested
    Route::put('/demande/{id}/accept-refuse', [DemandeOffreController::class, 'acceptOrRefuse']); //tested
    Route::get('/demande/consult', [DemandeOffreController::class, 'consulterDemandeOffre']);  //tested
});

