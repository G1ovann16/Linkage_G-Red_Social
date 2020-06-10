<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'post_id'=>$faker->numberBetween(1,100),
        'user_id'=>$faker->numberBetween(1,40),
        'description'=>$faker->realText(80)
    ];
});
