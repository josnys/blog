<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Language;
use Inertia\Inertia;

class WelcomeController extends Controller
{
     public function index()
     {
          return Inertia::render('Welcome');
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
               return redirect()->back()->with('error', 'Impossible d\'executer votre requête pour le moment. Veuillez essayer ultérieurement.');
          }
     }
}
