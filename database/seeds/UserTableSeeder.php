<?php

use App\User;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // truncate existing data to work on fresh database.
        User::truncate();

        $faker = Factory::create();

        // Let's make sure everyone has the same password and
        // let's Hash it before the loop, or else our seeder
        // will be too slow.
        $password = Hash::make('123456');

        User::create([
           'name' => 'Administrator',
           'email' => 'admin@test.com',
           'password' => $password,
        ]);

        // Now let's generate some users for our app.
        for ($i = 0; $i < 10; $i++) {
            User::create([
               'name' => $faker->name,
               'email' => $faker->email,
               'password' => $password,
            ]);
        }
    }
}
