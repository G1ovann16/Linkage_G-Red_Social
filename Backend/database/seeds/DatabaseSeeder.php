<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Post;
use App\Comment;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        Post::truncate();
        // Comment::truncate();

      
        factory(User::class,40)->create();
        factory(Post::class,100)->create();
        // factory(Comment::class,40)->create();

        // for ($i=0; $i < 40; $i++) { 
        //     DB::table('follower')->insert([
        //         'followed_id'=>random_int(1,40),
        //         'follower_id'=>random_int(1,40)
        //     ]);
        // }
        // for ($i=0; $i < 10; $i++) { 
        //     DB::table('likeable')->insert([
        //         'likeable_id'=>random_int(1,40),
        //         'user_id'=>random_int(1,40)
        //     ]);
        // }
    }
}
