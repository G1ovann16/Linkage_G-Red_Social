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
    Route::get('/userById/{id}', 'UserController@getUserById');
});

Route::prefix('posts')->group(function () {
    Route::get('/getAll', 'PostController@show');
    Route::post('/addNew', 'PostController@create');
    Route::middleware('auth:api')->group(function(){
        Route::post('/addLike/{id}', 'LikesController@addPostLike');
        Route::post('/addCommnet/{id}', 'LikesController@addCommnetLike');
        Route::put('/update/{id}', 'PostController@update');
        Route::delete('/delete/{id}', 'PostController@destroy');   
    });
});

Route::post('/addComment', 'CommentController@create');