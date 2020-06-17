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
                'message' => 'user loggin successfully',
                'user'=>$user
            ]);
        } catch (\Exception $e) {
            return response([
                'message' => 'There was an error trying to login the user',
                'error' => $e->getMessage()
            ], 500);
        }
    }
   
    public function logout($id)
    {
        DB::table('oauth_access_tokens')->where('user_id',$id)->delete();
        return response([
            'mensaje' => 'User successfully logged out'
        ]);
    }
    public function getUserById($id)
    {
        try {
            $user = User::with('post.likes','post.comments.likes','following','post.comments.user')->find($id);
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
    public function createFollower(Request $request)
    {
        
        $follower = DB::table('follower')->insert(['followed_id'=>$request->followed_id,'follower_id'=>$request->follower_id]);
        return response($follower, 201);  
    }
    public function editImageProfile(Request $request)
    {
        try {
            $request->validate(['img' => 'required|image']);
            $user = Auth::user();
            $imageName = time() . '-' . request()->img->getClientOriginalName();
            request()->img->move('storage/images/users', $imageName);
            $user->update(['avatar' => $imageName]);
            return response($user);
        } catch (\Exception $e) {
            return response([
                'error' => $e,
            ], 500);
        }
    }          
     public function update(Request $request, $id)
    {
        try {
            $body = $request->all();
            $user = User::find($id);
            if(Auth::id() == $user->user_id){
                return response([
                    'message' => 'Wrong Credentials',
                ],200);
            }
            $user->update($body);
            return response([
                'User' => $user,
                'message' => 'user succesfully updated',
            ]);
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage(),
                'message' => 'There was a problem trying to update the post',
            ], 500);
        }
    }
}
