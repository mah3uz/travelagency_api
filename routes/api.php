<?php

use App\TravelPackages;
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
Route::group(['middleware' => 'auth:api'], function () {
    Route::get('packages', 'TravelPackagesController@index');
    Route::get('packages/{package}', 'TravelPackagesController@show');
    Route::post('packages', 'TravelPackagesController@store');
    Route::put('packages/{package}', 'TravelPackagesController@update');
    Route::delete('packages/{package}', 'TravelPackagesController@destroy');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', 'Auth\RegisterController@register');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');
