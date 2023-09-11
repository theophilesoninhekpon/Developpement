<?php

use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route accueil

Route::get("/", [PagesController::class, 'index']);

// Route Contact 

Route::get("/contact-us", [PagesController::class, 'contact']);

// Route About

Route::get("/about", [PagesController::class, 'about']);

// Route Articles

Route::get("/articles", [ArticlesController::class, 'index']);


// Route Détails d'un article

Route::get("/article/{id}", [ArticlesController::class, 'show']);