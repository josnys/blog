<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\MessageBag;
use App\Http\Requests\ProfileRequest;
use App\Http\Requests\PasswordRequest;
use App\Models\User;
use App\Models\Person;
use App\Models\Setting;
use App\Models\Language;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
     protected $userSex;
     protected $identityType;

     public function __construct()
     {
          $this->userSex = [['code' => 'Man', 'name' => 'Man'], ['code' => 'Woman', 'name' => 'Woman']];
          $this->identityType = [
               ['code' => 'SSN', 'name' => 'SSN'],
               ['code' => 'CIN', 'name' => 'CIN'],
               ['code' => 'Passport', 'name' => 'Passport'],
               ['code' => 'Driver License', 'name' => 'Driver License']
          ];
     }

     public function index()
     {
          $setting = Setting::find(1);
          if(!$setting){
               return redirect()->route('admin.setting.create')->with('warning', 'Please set your website details up before you continue.');
          }

          $language = Language::find(1);
          if(!$language){
               return redirect()->route('admin.language.create')->with('warning', 'Please set one language before you continue.');
          }

          return Inertia::render('Dashboard/Home');
     }

     public function Profile()
     {
          try {
               $user = User::with('person')->find(Auth::user()->id);
               return Inertia::render('Dashboard/User/Profile', [
                    'user' => [
                         'id' => $user->id,
                         'fname' => $user->person->firstname,
                         'lname' => $user->person->lastname,
                         'dob' => $user->person->dob,
                         'sex' => $user->person->sex,
                         'identification' => $user->person->identification,
                         'identificationType' => $user->person->identification_type,
                         'phone' => $user->person->phone,
                         'address' => $user->person->address,
                         'username' => $user->username,
                         'email' => $user->email,
                         'currentAvatar' => $user->avatar
                    ],
                    'info' => [
                         'sexes' => $this->userSex,
                         'identityType' => $this->identityType
                    ]
               ]);
          } catch (\Exception $e) {
               Log::error('Home profile', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }

     public function postProfile(ProfileRequest $request, User $user)
     {
          try {
               $user = User::with('person')->find($user->id);
               $person = Person::find($user->person_id);
               $mediaName = $person->profile_url;
               if($request->hasFile('avatar')){
                    $mediaPath = $request->file('avatar')->store('users/');
                    $index = count(explode('/', $mediaPath)) - 1;
                    $mediaName = explode('/', $mediaPath)[$index];
               }
               $person->firstname = $request->get('fname');
               $person->lastname = $request->get('lname');
               $person->dob = $request->get('dob');
               $person->sex = $request->get('sex');
               $person->identification = $request->get('identification');
               $person->identification_type = $request->get('identificationType');
               $person->address = $request->get('address');
               $person->phone = $request->get('phone');
               $person->profile_url = $mediaName;
               $person->update();

               $user->username = $request->get('username');
               $user->email = $request->get('email');
               $user->update();
               return redirect()->route('admin.profile')->with('success', 'Profile updated successfully.');
          } catch (\Exception $e) {
               Log::error('Home post profile', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }

     public function postProfilePassword(PasswordRequest $request, User $user)
     {
          try {
               $message = new MessageBag;
               if(!Hash::check($request->get('current_password'), $user->password)){
                    $message->add('current_password', 'Current Password is not valid.');
                    return redirect()->back()->withErrors($message);
               }
               if(Hash::check($request->get('password'), $user->password)){
                    $message->add('password', 'New password has been recently used. Kindly choose another one.');
                    return redirect()->back()->withErrors($message);
               }
               $user->password = Hash::make($request->get('password'));
               $user->update();
               Auth::logout();
               return redirect()->route('login')->with('success', 'Password updated successfully. Please, login with your new password.');
          } catch (\Exception $e) {
               Log::error('Home post profile password', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }
}
