<?php

namespace App\Http\Controllers;
use App\User;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        try {
            $body = $request->except('role');
            $body['role'] = 'user';
            $body['password'] = Hash::make($body['password']);
            $user = User::create($body); 
            return response($user, 201);
        } catch (\Exception $e) {
            return response([
                'message' => 'There was an error trying to register the user',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function login(Request $request)
    {
        try {
            $credentials = $request->only(['email', 'password']);
            if (!Auth::attempt($credentials)) {
                return response([
                    'message' => 'Wrong credentials'
                ], 400);
            }
            $user = Auth::user();
            $token = $user->createToken('authToken')->accessToken;
            $user->token=$token;
            return response([
                'user'=>$user
            ]);
        } catch (\Exception $e) {
            return response([
                'message' => 'There was an error trying to login the user',
                'error' => $e->getMessage()
            ], 500);
        }
    }
   
    public function logout(Request $request)
    {
        // $request->user()->token()->revoke();
        DB::table('oauth_access_tokens')->where('revoked',1)->delete();
        return response([
            'mensaje' => 'User successfully logged out'
        ]);
    }
    public function getUserById($id)
    {
        try {
            $user = User::with('post.likes','post.comments.likes','post.comments.user')->find($id);
            return response([
                'message' => 'list posts by user',
                'user' => $user
            ], 200);
        } catch (\Exception $e) {
            return response([
                'error' => $e,
            ], 500);
        }
    }
}
