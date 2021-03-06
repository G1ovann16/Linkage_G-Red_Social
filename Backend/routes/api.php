<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::prefix('users')->group(function () {
    Route::post('/register', 'UserController@register');
    Route::post('/login', 'UserController@login');
    Route::get('/userById/{id}', 'UserController@getUserById');
    Route::post('/addFollower', 'UserController@createFollower');
    Route::middleware('auth:api')->group(function(){
        Route::get('/logout/{id}', 'UserController@logout');
        Route::put('/update/{id}', 'UserController@update');
        Route::post('/updateProfile', 'UserController@editImageProfile');
    });
});

Route::prefix('posts')->group(function () {
    Route::get('/getAll', 'PostController@show');
    Route::middleware('auth:api')->group(function(){
        Route::post('/addNew', 'PostController@create');
        Route::post('/addLike/{id}', 'LikeableController@addPostLike');
        Route::post('/addComment/{id}', 'LikeableController@addCommentLike');
        Route::put('/update/{id}', 'PostController@update');
        Route::put('/image/{id}', 'PostController@uploadImage');
        Route::delete('/delete/{id}', 'PostController@destroy');   
    });
});
Route::post('/addComment', 'CommentController@create');