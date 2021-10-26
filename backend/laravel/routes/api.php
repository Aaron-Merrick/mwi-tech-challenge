<?php

use App\Models\FormResults;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/form-results', function() {
    return FormResults::all();
});

Route::post('/form-results', function() {

    request()->validate([
        'email' => 'required'
    ]);

    var_dump(request()->all());

    die();

    return FormResults::create([
        'first_name' => request('first_name'),
        'last_name' => request('last_name'),
        'title' => request('title'),
        'email' => request('email'),
        'message' => request('message')
    ]);
});
