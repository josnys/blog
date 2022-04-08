<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Language;
use App\Models\Setting;
use App\Models\Product;
use App\Services\SiteService;
use Inertia\Inertia;

class WelcomeController extends Controller
{
     public function index()
     {
          try {
               $setting = Setting::find(1);
               $site_service = new SiteService;
               return Inertia::render('Home', ['info' => [
                    'page_title' => 'Home',
                    'site' => [
                         'name' => $setting->name,
                         'slogan' => $setting->slogan,
                         'content' => explode('</p>', $setting->description)[0].'</p>',
                         'title' => "Welcome to $setting->name",
                         'more' => 'Read More..'
                    ],
                    'features' => [
                         'category' => [
                              'title' => 'Featured Categories',
                              'data' => $site_service->getHomeCategoriesFeatured()
                         ],
                    ]
               ]]);
          } catch (\Exception $e) {
               info($e);
               return redirect()->back()->with('error', 'Unable to resolve your request, please try another time.');
          }
     }

     public function about(Request $request)
     {
          try {
               $setting = Setting::find(1);

               return Inertia::render('About', ['info' => [
                    'page_title' => 'About Us',
                    'name' => $setting->name,
                    'slogan' => $setting->slogan,
                    'content' => $setting->description,
                    'title' => "Welcome to $setting->name",
                    'twitter' => $setting->twitter_handle,
                    'facebook' => $setting->facebook_handle,
                    'instagram' => $setting->instagram_handle,
                    'phone' => $setting->whatsapp_handle,
               ]]);
          } catch (\Exception $e) {
               info($e);
               return redirect()->back()->with('error', 'Unable to resolve your request, please try another time.');
          }
     }

     public function contact(Request $request)
     {
          try {
               $setting = Setting::find(1);

               return Inertia::render('Contact', ['info' => [
                    'page_title' => "Contact Us",
                    'name' => $setting->name,
                    'slogan' => $setting->slogan,
                    'content' => explode('</p>', $setting->description)[0].'</p>',
                    'title' => "Welcome to $setting->name",
                    'twitter' => $setting->twitter_handle,
                    'facebook' => $setting->facebook_handle,
                    'instagram' => $setting->instagram_handle,
                    'phone' => $setting->whatsapp_handle,
               ]]);
          } catch (\Exception $e) {
               info($e);
               return redirect()->back()->with('error', 'Unable to resolve your request, please try another time.');
          }
     }

     public function setLanguage(Request $request, $locale)
     {
          try {
               $languages = Language::active()->get()->pluck('code')->toArray();
               $locale = Str::lower($locale);
               if(!in_array($locale, $languages)){
                    return redirect()->back();
               }
               session()->put('applocale', $locale);
               session()->put('applocaleHTML', $locale);
               return redirect()->back();
          } catch (\Exception $e) {
               info($e);
               return redirect()->back()->with('error', 'Unable to resolve your request, please try another time.');
          }
     }
}
