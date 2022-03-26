<?php

namespace App\Providers;

use App\Models\User;
use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Laravel\Fortify\Fortify;
use Inertia\Inertia;

class FortifyServiceProvider extends ServiceProvider
{
     /**
     * Register any application services.
     *
     * @return void
     */
     public function register()
     {

     }

     /**
     * Bootstrap any application services.
     *
     * @return void
     */
     public function boot()
     {
          Fortify::createUsersUsing(CreateNewUser::class);
          Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
          Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
          Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

          Fortify::authenticateUsing(function (Request $request) {
               $user = User::where('email', $request->email)->orWhere('username', $request->email)->first();
               if ($user && Hash::check($request->password, $user->password)) {
                    return $user;
               }
          });

          Fortify::registerView(function (Request $request) {
               return Inertia("Auth/Register")->toResponse($request);
          });

          Fortify::loginView(function (Request $request) {
               return Inertia("Auth/Login")->toResponse($request);
          });

          Fortify::requestPasswordResetLinkView(function (Request $request) {
               return Inertia("Auth/ForgotPassword")->toResponse($request);
          });

          Fortify::resetPasswordView(function (Request $request) {
               $token = $request->route('token');
               return Inertia::render('Auth/ResetPassword', ['data' => [
                    'email' => $request->get('email'),
                    '_token' => $token
               ]])->toResponse($request);
          });

          Fortify::verifyEmailView(function (Request $request) {
               return Inertia("Auth/VerifyEmail")->toResponse($request);
          });
     }
}
