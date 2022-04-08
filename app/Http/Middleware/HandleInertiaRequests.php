<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Models\User;
use App\Models\Setting;
use App\Models\Category;
use App\Models\Language;
use Carbon\Carbon;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
     /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
     public function version(Request $request)
     {
          return parent::version($request);
     }

     // public function rootView(Request $request)
     // {
     //      if($request->is(['admin', 'admin/*'])){
     //           return 'admin.app';
     //      }
     //      return 'site.app';
     // }

     /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
     public function share(Request $request)
     {
          return array_merge(parent::share($request), [
               'app' => function() use ($request){
                    $setting = Setting::find(1);
                    $menus = null;
                    if(!$request->is('admin/*')){
                         $code = session()->get('applocale') ?? 'EN';
                         $lang = Language::where('code', $code)->first();
                         $menus = Category::with(['text' => function($text) use ($lang){
                              return $text->where('language_id', $lang->id);
                         }])->active()->menu()->get()->transform(function($menu){
                              return [
                                   'caption' => $menu->text[0]->name,
                                   'url' => $menu->url,
                              ];
                         })->toArray();
                    }
                    return [
                         'name' => $setting ? $setting->name : config('app.name'),
                         'logo' => $setting ? $setting->logoUrl : null,
                         'twitter' => $setting ? $setting->twitter_handle : null,
                         'facebook' => $setting ? $setting->facebook_handle : null,
                         'instagram' => $setting ? $setting->instagram_handle : null,
                         'phone' => $setting ? $setting->whatsapp_handle : null,
                         'year' => Carbon::now()->format('Y'),
                         'system' => [
                              'name' => 'JS CMS',
                              'version' => 'v1.0'
                         ],
                         'menu' => $menus
                    ];
               },
               'auth' => function () {
                    $user = Auth::user() ? User::with(['roles' => function($roles){
                         return $roles->with('permissions');
                    }])->find(Auth::user()->id) : null;
                    $permissions = array();
                    if($user){
                         foreach($user->roles as $r){
                              foreach($r->permissions as $p){
                                   array_push($permissions, $p->name);
                              }
                         }
                    }

                    return [
                         'user' => $user ? [
                              'id' => $user->id,
                              'name' => $user->name,
                              'username' => $user->username,
                              'email' => $user->email,
                              'avatar' => $user->avatar,
                              'roles' => $user->roles->count() ? collect($user->roles)->map(function($role){
                                   return [
                                        'name' => $role->name,
                                        'display' => $role->display_name
                                   ];
                              }) : [],
                              'can' => ($permissions) ? $permissions : []
                         ] : null,
                    ];
               },
               'flash' => function () {
                    return [
                         'success' => Session::get('success'),
                         'warning' => Session::get('warning'),
                         'error' => Session::get('error'),
                    ];
               },
               'errors' => function () {
                    return Session::get('errors')
                         ? Session::get('errors')->getBag('default')->getMessages()
                         : (object) [];
                    },
          ]);
     }
}
