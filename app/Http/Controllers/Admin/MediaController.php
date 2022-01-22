<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\MediaRequest;
use App\Http\Requests\MediaInfoRequest;
use App\Models\Media;
use App\Models\MediaInfo;
use App\Models\Language;
use App\Actions\Image\ImageManipulationAction;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class MediaController extends Controller
{
     public function index(Request $request)
     {
          try {
               $medias = Media::paginate(30)->transform(function($media){
                    return [
                         'id' => $media->id,
                         'url' => $media->thumbUrl
                    ];
               });
               return Inertia::render('Admin/Media/Index', ['info' => [
                    'medias' => $medias
               ]]);
          } catch (\Exception $e) {
               Log::error('MediaController index', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function create(Request $request)
     {
          try {
               // Image::make($mediaFullPath = storage_path('medias/images/thumbnails/'))
               return Inertia::render('Admin/Media/Create');
          } catch (\Exception $e) {
               Log::error('MediaController create', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function store(MediaRequest $request, ImageManipulationAction $action)
     {
          try {
               $medias = $request->file('media');
               foreach($medias as $file){
                    $image = $action->handle($file, 'medias/images');

                    $media = new Media;
                    $media->name = $image['name'];
                    $media->mime_type = $image['mime'];
                    $media->is_active = true;
                    $media->save();
               }

               return redirect()->route('admin.media.index')->with('success', 'Media uploaded successfully.');
          } catch (\Exception $e) {
               Log::error('MediaController store', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function show(Request $request, Media $media)
     {
          try {
               $media = Media::with(['info' => function($info){
                    return $info->with('language');
               }])->find($media->id);
               $notSelectedLang = $media->info->pluck('language_id')->toArray();
               return Inertia::render('Admin/Media/Show', ['info' => [
                    'id' => $media->id,
                    'url' => $media->thumbUrl,
                    'infos' => collect($media->info)->map(function($info){
                         return [
                              'id' => $info->id,
                              'title' => $info->title,
                              'description' => $info->description,
                              'lang' => $info->language_id,
                              'language' => $info->language->name,
                         ];
                    }),
                    'languages' => Language::where('is_active', true)->whereNotIn('id', $notSelectedLang)->get()->transform(function($language){
                         return [
                              'id' => $language->id,
                              'name' => $language->name
                         ];
                    }),
               ]]);
          } catch (\Exception $e) {
               Log::error('MediaController show', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function createInfo(MediaInfoRequest $request, Media $media)
     {
          try {
               $input = $request->validated();
               $info = MediaInfo::with('language')->where(['media_id' => $media->id, 'language_id' => $input['lang']])->first();
               if($info){
                    return redirect()->route('media.show', $media->id)->with('warning', "Media details for ${$info->language->name} already exist.");
               }
               $info = new MediaInfo;
               $info->media_id = $media->id;
               $info->language_id = $input['lang'];
               $info->title = $input['title'];
               $info->description = $input['description'];
               $info->is_active = true;
               $info->save();
               return redirect()->route('admin.media.show', $media->id)->with('success', 'Media details successfully saved.');
          } catch (\Exception $e) {
               Log::error('MediaController createInfo', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function editInfo(MediaInfoRequest $request, Media $media, MediaInfo $info)
     {
          try {
               $input = $request->validated();
               $info->title = $input['title'];
               $info->description = $input['description'];
               $info->update();
               return redirect()->route('admin.media.show', $media->id)->with('success', 'Media details successfully updated.');
          } catch (\Exception $e) {
               Log::error('MediaController createInfo', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }
}
