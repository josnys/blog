<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LanguageRequest;
use App\Models\Language;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class LanguageController extends Controller
{
     public function index(Request $request)
     {
          try {
               $languages = Language::paginate(50)->transform(function($language){
                    return [
                         'id' => $language->id,
                         'name' => $language->name,
                         'code' => $language->code,
                         'flag' => $language->flagUrl,
                         'status' => $language->is_active ? true : false,
                         'statusCaption' => $language->is_active ? 'Yes' : 'No',
                    ];
               });
               return Inertia::render('Admin/Language/Index', ['info' => ['langs' => $languages]]);
          } catch (\Exception $e) {
               Log::error('LanguageController index', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function create(Request $request)
     {
          try {
               return Inertia::render('Admin/Language/Create');
          } catch (\Exception $e) {
               Log::error('LanguageController create', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function store(LanguageRequest $request)
     {
          try {
               $input = $request->validated();
               $mediaName = null;
               if($request->hasFile('flag')){
                    $mediaPath = $request->file('flag')->store('language/');
                    $index = count(explode('/', $mediaPath)) - 1;
                    $mediaName = explode('/', $mediaPath)[$index];
               }
               $lang = Language::create([
                    'code' => $input['code'],
                    'name' => $input['name'],
                    'flag' => $mediaName,
                    'is_active' => $input['status']
               ]);
               return redirect()->route('admin.language.index')->with('success', 'Language created successfully.');
          } catch (\Exception $e) {
               Log::error('LanguageController store', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function edit(Request $request, Language $language)
     {
          try {
               return Inertia::render('Admin/Language/Edit', ['info' => ['lang' => [
                    'id' => $language->id,
                    'name' => $language->name,
                    'code' => $language->code,
                    'flag' => $language->flagUrl,
                    'status' => $language->is_active ? true : false,
               ]]]);
          } catch (\Exception $e) {
               Log::error('LanguageController edit', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function update(LanguageRequest $request, Language $language)
     {
          try {
               $input = $request->validated();
               $mediaName = $language->flag;
               if($request->hasFile('flag')){
                    $mediaPath = $request->file('flag')->store('language/');
                    $index = count(explode('/', $mediaPath)) - 1;
                    $mediaName = explode('/', $mediaPath)[$index];
               }

               $language->name = $input['name'];
               $language->code = $input['code'];
               $language->flag = $mediaName;
               $language->is_active = $input['status'];
               $language->update();

               return redirect()->route('admin.language.index')->with('success', 'Language updated successfully.');
          } catch (\Exception $e) {
               Log::error('LanguageController update', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }
}
