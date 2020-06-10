<?php

use Illuminate\Database\Seeder;

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
        Comment::truncate();

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        factory(User::class,40)->create();
        factory(Post::class,100)->create();
        factory(Comment::class,80)->create();

        for ($i=0; $i < 50; $i++) { 
            DB::table('follower')->insert([
                'id_follower'=>random_int(1,50),
                'id_followed'=>random_int(1,50)
            ]);
        }
    }
}
