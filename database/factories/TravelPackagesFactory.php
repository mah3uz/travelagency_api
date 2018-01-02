<?php

use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'destination' => $faker->address,
        'price' => $faker->randomNumber(4),
        'description' => $faker->paragraph,
    ];
});
