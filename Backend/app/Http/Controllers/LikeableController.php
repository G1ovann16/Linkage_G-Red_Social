<?php

namespace App\Http\Controllers;
use App\Comment;
use Illuminate\Support\Facades\Auth;
use App\Post;
use App\Likeable;
use Illuminate\Http\Request;

class LikeableController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addPostLike($id, Request $request)
    {
        {   
            $user_id = Auth::id();
            $post = Post::find($id);
            $likes = $post->likes()->where('user_id',$user_id)->get();
            if($likes->isNotEmpty()){
                return response([
                    'message' => 'No puedes meter más like'
                ],400);
            }
            $post->likes()->create(['user_id'=>$user_id]); 
            return response([
                'message' => 'thanks u '
            ],201); 
        }
    }
    public function addCommnetLike($id, Request $request)
    {
        {   
            $user_id = Auth::id();
            $comment = Comment::find($id);
            $likes = $comment->likes()->where('user_id',$user_id)->get();
            if($likes->isNotEmpty()){
                return response([
                    'message' => 'No puedes meter más like para ya pesado'
                ],400);
            }
            $comment->likes()->create(['user_id'=>$user_id]); 
            return response([
                'message' => 'thanks u ',
                'likes' => $likes
            ],201); 
        }
    }

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  \App\Likeable  $likeable
     * @return \Illuminate\Http\Response
     */
    public function show(Likeable $likeable)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Likeable  $likeable
     * @return \Illuminate\Http\Response
     */
    public function edit(Likeable $likeable)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Likeable  $likeable
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Likeable $likeable)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Likeable  $likeable
     * @return \Illuminate\Http\Response
     */
    public function destroy(Likeable $likeable)
    {
        //
    }
}
