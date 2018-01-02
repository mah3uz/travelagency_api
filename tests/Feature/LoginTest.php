<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
//    public function testRequiresEmailAndLogin()
//    {
//        $this->json('POST', 'api/login')
//            ->assertStatus(422)
//            ->assertJson([
//                'message' => 'The given data was invalid.',
//                'error' => [
//                    'email' => ['The email field is required.'],
//                    'password' => ['The password field is required.'],
//                    ],
//            ]);
//    }

    public function testUserLoginSuccessfully()
    {
        $user = factory(User::class)->create([
            'email' => 'test@app.com',
            'password' => bcrypt('123456'),
        ]);

        $payload = ['email' => 'test@app.com', 'password' => '123456'];

        $this->json('POST', 'api/login', $payload)
            ->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name',
                    'email',
                    'created_at',
                    'updated_at',
                    'api_token',
                ],
            ]);
    }
}
