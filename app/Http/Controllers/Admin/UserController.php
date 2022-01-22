<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\UserRequest;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\PasswordRequest;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Person;
use App\Models\Role;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
     protected $userSex;
     protected $identityType;

     public function __construct()
     {
          $this->userSex = [
               ['code' => 'Man', 'name' => 'Man'],
               ['code' => 'Woman', 'name' => 'Woman']
          ];
          $this->identityType = [
               ['code' => 'CIN', 'name' => 'CIN'],
               ['code' => 'Passport', 'name' => 'Passport'],
               ['code' => 'Driver License', 'name' => 'Driver License']
          ];
     }

     public function index()
     {
          try {
               $su = (auth()->user()->id == 1) ? 1 : null;
               $users = User::with('person')->with('roles')->when($su, function($query){
                    return $query;
               }, function($query){
                    return $query->where('id', '!=', 1);
               })->paginate(20)->transform(function($user){
                    $roles = array();
                    foreach($user->roles as $rl){
                         array_push($roles, $rl->display_name);
                    }
                    return [
                         'id' => $user->id,
                         'code' => $user->person->code,
                         'name' => $user->person->name,
                         'username' => $user->username,
                         'email' => $user->email,
                         'avatar' => $user->avatar,
                         'roles' => $roles
                    ];
               });

               return Inertia::render('Admin/User/Index', ['data' => $users]);
          } catch (\Exception $e) {
               Log::error('User index', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }

     public function create()
     {
          try {
               return Inertia::render('Admin/User/Create', ['info' => [
                    'sexes' => $this->userSex,
                    'identityType' => $this->identityType
               ]]);
          } catch (\Exception $e) {
               Log::error('User create', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }

     public function store(CreateUserRequest $request)
     {
          try {
               DB::transaction(function() use ($request){
                    $code = Person::generateCode();
                    $person = new Person;
                    $person->firstname = $request->get('fname');
                    $person->lastname = $request->get('lname');
                    $person->code = $code;
                    $person->dob = $request->get('dob');
                    $person->sex = $request->get('sex');
                    $person->identification = $request->get('identification');
                    $person->identification_type = $request->get('identificationType');
                    $person->address = $request->get('address');
                    $person->phone = $request->get('phone');
                    $person->save();
                    $pid = $person->id;

                    $user = new User;
                    $user->person_id = $pid;
                    $user->username = $request->get('username');
                    $user->email = $request->get('email');
                    $user->password = Hash::make($request->get('password'));
                    if($request->get('pin') != null){
                         $user->pin = $request->get('pin');
                    }
                    $user->save();
               });
               return redirect()->route('admin.user.index')->with('success', 'User saved successfully.');
          } catch (\Exception $e) {
               Log::error('User store', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }

     public function edit(User $user)
     {
          try {
               $person = Person::find($user->person_id);
               return Inertia::render('Admin/User/Edit', ['info' => [
                    'id' => $user->id,
                    'fname' => $person->firstname,
                    'lname' => $person->lastname,
                    'code' => $person->code,
                    'dob' => $person->dob,
                    'sex' => $person->sex,
                    'identification' => $person->identification,
                    'identificationType' => $person->identification_type,
                    'address' => $person->address,
                    'phone' => $person->phone,
                    'pin' => $user->pin,
                    'multiConnect' => ($user->multi_connect) ? true : false,
                    'username' => $user->username,
                    'email' => $user->email,
                    'avatar' => $user->avatar,
                    'sexes' => $this->userSex,
                    'identityType' => $this->identityType
               ]]);
          } catch (\Exception $e) {
               Log::error('User edit', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }

     public function update(UserRequest $request, User $user)
     {
          try {
               DB::transaction(function() use ($request, &$user){
                    $person = Person::find($user->person_id);
                    $person->firstname = $request->get('fname');
                    $person->lastname = $request->get('lname');
                    $person->dob = $request->get('dob');
                    $person->sex = $request->get('sex');
                    $person->identification = $request->get('identification');
                    $person->identification_type = $request->get('identificationType');
                    $person->address = $request->get('address');
                    $person->phone = $request->get('phone');
                    $person->update();

                    $user->update();
               });
               return redirect()->route('admin.user.index')->with('success', 'User updated successfully.');
          } catch (\Exception $e) {
               Log::error('User update', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }

     public function getRoles(User $user)
     {
          try {
               $_roles = Role::all();
               $user_roles = array();
               $rol_es = $user->with('roles')->find($user->id);
               foreach($rol_es->roles as $ur){
                    array_push($user_roles, $ur->id);
               }

               $roles = array();
               foreach($_roles as $rl){
                    array_push($roles, [
                         'id' => $rl->id,
                         'display' => $rl->display_name,
                         'description' => $rl->description,
                         'isCheck' => in_array($rl->id, $user_roles)
                    ]);
               }
               $person = Person::find($user->person_id);
               return Inertia::render('Admin/User/Role', [
                    'info' => [
                         'roles' => $roles,
                         'user' => [
                              'id' => $user->id,
                              'name' => $person->name,
                              'username' => $user->username,
                              'email' => $user->email,
                              'avatar' => null
                         ],
                         'user_roles' => $user_roles
                    ]
               ]);
          } catch (\Exception $e) {
               Log::error('User get role', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }

     public function postRole(Request $request, User $user)
     {
          try {
               $request->validate([
                    'user_roles' => ['required', 'array'],
                    'user_roles.*' => ['integer'],
               ]);
               $user->syncRoles($request->get('user_roles'));
               return redirect()->route('admin.user.index')->with('success', 'Role successfully assigned to '.$user->name);
          } catch (\Exception $e) {
               Log::error('User post role', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }

     public function getResetPassword(User $user)
     {
          try {
               $person = Person::find($user->person_id);
               return Inertia::render('Admin/User/ChangePassword', ['info' => [
                    'id' => $user->id,
                    'name' => $person->name,
                    'code' => $user->code,
               ]]);
          } catch (\Exception $e) {
               Log::error('User reset password', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }

     public function postResetPassword(PasswordRequest $request, User $user)
     {
          try {
               $user->password = Hash::make($request->get('password'));
               if($request->get('pin') != null){
                    $user->pin = $request->get('pin');
               }
               $user->update();
               return redirect()->route('admin.user.index')->with('success', 'User Password changed successfully.');
          } catch (\Exception $e) {
               Log::error('User post reset password', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }
}
