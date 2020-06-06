<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $body = $request->all(); 
        $post = Post::create($body);   
        return response($post, 201); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        try {
            $posts = Post::with('user','comments.likes', 'likes')->get();//no saca los eliminados con deleted_at
            return response($posts);
        } catch (\Exception $e) {
            return response([
                'error' => $e
            ], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $body = $request->all();
            $post = Post::find($id);
            if(Auth::id() !== $post->user_id){
                return response([
                    'message' => 'Wrong Credentials',
                ],200);
            }
            $post->update($body);
            return response([
                'Post' => $post,
                'message' => 'post succesfully updated',
            ]);
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage(),
                'message' => 'There was a problem trying to update the post',
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $post = Post::find($id);
            if(Auth::id() !== $post->user_id){
                return response([
                    'message' => 'Wrong Credentials',
                ],400);
            }
            $post->delete();
            return response([
                'message' => 'Post succesfully deleted',
                'post' => $post
            ],200);
        } catch (\Exception $e) {
            return response([
                'error' => $e,
            ], 500);
        }
    }
}