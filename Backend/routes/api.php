<?php

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

Route::prefix('users')->group(function () {
    Route::post('/register', 'UserController@register');
    Route::post('/login', 'UserController@login');
    Route::get('/logout', 'UserController@logout');
    Route::get('/getAll/{id}', 'UserController@getAll');
    Route::get('/userById/{id}', 'UserController@getUserById');
    Route::get('/getPostsById/{id}', 'UserController@getPostsByUser');
});