<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'user_id'=>$faker->numberBetween(1,40),
        'name'=>$faker->sentence(1),
        'description'=>$faker->realText(200),
        'image' => $faker->imageUrl($width= 1200, $height= 1000),
    ];
});
