<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
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
Route::post('admin/login', [AuthController::class, 'loginAdmin']);

Route::middleware(['admin.api'])->prefix('admin')->group(function() {
    Route::get('show-account', [AdminController::class, 'show_account']);
    Route::get('show-account/{id}', [AdminController::class, 'show_account_by_id']);
    Route::post('add-candidate/{id}', [AdminController::class, 'add_candidate_by_id']);
    Route::get('show-candidate', [AdminController::class, 'show_candidate']);
    Route::get('show-candidate/{id}', [AdminController::class, 'show_candidate_by_id']);
    Route::put('update-candidate/{id}', [AdminController::class, 'update_candidate_by_id']);
    Route::delete('delete-candidate/{id}', [AdminController::class, 'delete_candidate_by_id']);
    Route::get('show-votes', [AdminController::class, 'show_votes']);
    Route::get('show-votes/{id}', [AdminController::class, 'show_votes_by_id']);
    Route::post('add-student-data', [AdminController::class, 'add_student_data']);
    Route::get('show-student-data', [AdminController::class, 'show_student_data']);
    Route::get('show-student-data/{id}', [AdminController::class, 'show_student_data_by_id']);
    Route::put('update-student-data/{id}', [AdminController::class, 'update_student_data_by_id']);
    Route::delete('delete-student-data/{id}', [AdminController::class, 'delete_student_data_by_id']);
});

Route::middleware(['student.api'])->prefix('student')->group(function() {
    Route::get('show-candidate', [StudentController::class, 'show_candidate']);
    Route::get('show-candidate/{id}', [StudentController::class, 'show_candidate_by_id']);
    Route::post('vote-candidate/{id}', [studentController::class, 'vote_candidate_by_id']);
});