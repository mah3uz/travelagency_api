<?php

use App\TravelPackages;
use Faker\Factory;
use Illuminate\Database\Seeder;

class TravelPackagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's truncate our existing record to start from scratch.
        TravelPackages::truncate();

        $faker = Factory::create();

        // And now, let's create a few TravelPackages in our database:
        for ($i = 0; $i < 15; $i++) {
            TravelPackages::create([
                'title' => $faker->sentence,
                'destination' => $faker->address,
                'price' => $faker->randomNumber(4),
                'description' => $faker->paragraph,
            ]);
        }
    }
}
