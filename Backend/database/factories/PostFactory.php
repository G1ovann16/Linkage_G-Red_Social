<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'id_user'=>$faker->numberBetween(1,40),
        'name'=>$faker->sentence(2),
        'description'=>$faker->realText(300),
        'image'=>'https://picsum.photos/500/500?random='.$faker->numberBetween(1,100)
    ];
});
