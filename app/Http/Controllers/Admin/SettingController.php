<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\SettingRequest;
use App\Models\Setting;
use App\Actions\Image\ImageManipulationAction;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class SettingController extends Controller
{
     public function create()
     {
          try {
               $setting = Setting::find(1);
               if(!$setting){
                    return Inertia::render('Admin/Setting/Create');
               }
               return Inertia::render('Admin/Setting/Edit', ['info' => [
                    'id' => $setting->id,
                    'name' => $setting->name,
                    'slogan' => $setting->slogan,
                    'logoUrl' => $setting->logoUrl,
                    'description' => $setting->description,
                    'twitter' => $setting->twitter_handle,
                    'facebook' => $setting->facebook_handle,
                    'instagram' => $setting->instagram_handle,
                    'whatsapp' => $setting->whatsapp_handle
               ]]);
          } catch (\Exception $e) {
               Log::error('SettingController create', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function store(SettingRequest $request, ImageManipulationAction $action)
     {
          try {
               $setting = Setting::find(1);
               if(!$setting){
                    $setting = new Setting;
               }

               if($request->hasFile('logo')){
                    $image = $action->handle($request->file('logo'), 'site');
                    $setting->logo = $image['name'];
               }

               $input = $request->validated();
               $setting->name = $input['name'];
               $setting->slogan = $input['slogan'];
               $setting->description = $input['description'];
               $setting->twitter_handle = $input['twitter'];
               $setting->facebook_handle = $input['facebook'];
               $setting->instagram_handle = $input['instagram'];
               $setting->whatsapp_handle = $input['whatsapp'];
               $setting->save();

               return redirect()->route('admin.home')->with('success', 'Settings saved successfully.');
          } catch (\Exception $e) {
               Log::error('SettingController store', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }
}
