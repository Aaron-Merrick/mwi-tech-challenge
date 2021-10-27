<?php

use App\Models\FormResults;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormResultsApiController;
use App\Http\Controllers\TextContentApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/form-results', [FormResultsApiController::class, 'index']);

Route::post('/form-results', [FormResultsApiController::class, 'storeResults']);

Route::get('/text-content', [TextContentApiController::class, 'text']);
