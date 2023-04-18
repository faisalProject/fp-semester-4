<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['admin.api'])->prefix('admin')->group(function() {
    Route::post('register', [AdminController::class, 'register']);
    Route::get('show-account', [AdminController::class, 'show_account']);
    Route::get('show-account/{id}', [AdminController::class, 'show_account_by_id']);
    Route::post('add-candidate/{id}', [AdminController::class, 'add_candidate_by_id']);
    Route::put('update-candidate/{id}', [AdminController::class, 'update_candidate_by_id']);
    Route::delete('delete-candidate/{id}', [AdminController::class, 'delete_candidate_by_id']);
    Route::get('show-candidate', [AdminController::class, 'show_candidate']);
    Route::get('show-candidate/{id}', [AdminController::class, 'show_candidate_by_id']);
});

Route::middleware(['user.api'])->prefix('user')->group(function() {
    Route::get('show-candidate', [UserController::class, 'show_candidate']);
    Route::get('show-candidate/{id}', [UserController::class, 'show_candidate_by_id']);
});