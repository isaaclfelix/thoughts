<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/thoughts', 'ThoughtController@index');

Route::get('/thoughts/{thought_id}', function (Request $request) {
    // Get from the DB

    // Put data in array
    $response = array(
        'test' => 'hola'
    );
    // Return encoded response
    return json_encode($response);
});
