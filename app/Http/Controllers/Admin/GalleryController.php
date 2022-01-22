<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\GalleryRequest;
use App\Models\Gallery;
use App\Models\GalleryDetail;
use App\Models\Media;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class GalleryController extends Controller
{
     public function index(Request $request)
     {
          try {
               $galleries = Gallery::with(['user' => function($user){
                    return $user->with('person');
               }])->withCount('details')->paginate(50)->transform(function($gallery){
                    return [
                         'id' => $gallery->id,
                         'identifier' => $gallery->identifier,
                         'qty_items' => $gallery->details_count,
                         'created_by' => $gallery->user->name,
                         'created' => $gallery->created_at->toDayDateTimeString(),
                         'status' => $gallery->is_active ? true : false,
                         'status_caption' => $gallery->is_active ? 'Yes' : 'No',
                    ];
               });

               return Inertia::render('Admin/Gallery/Index', ['info' => [
                    'galleries' => $galleries
               ]]);
          } catch (\Exception $e) {
               Log::error('GalleryController index', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function create(Request $request)
     {
          try {
               return Inertia::render('Admin/Gallery/Create', ['info' => [
                    'medias' => Media::where('is_active', true)->get()->transform(function($media){
                         return [
                              'id' => $media->id,
                              'url' => $media->thumbUrl,
                              'rm' => false,
                              'new' => true,
                              'selected' => false
                         ];
                    }),
               ]]);
          } catch (\Exception $e) {
               Log::error('GalleryController create', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function store(GalleryRequest $request)
     {
          try {
               $input = $request->validated();
               $gallery = new Gallery;
               $gallery->identifier = $input['identifier'];
               $gallery->url = Gallery::getUrl($input['identifier']);
               $gallery->user_id = auth()->id();
               $gallery->is_active = $input['status'];
               $gallery->save();

               foreach($input['media'] as $media){
                    $detail = new GalleryDetail;
                    $detail->gallery_id = $gallery->id;
                    $detail->media_id = $media['id'];
                    $detail->save();
               }

               return redirect()->route('admin.media.index')->with('success', 'Gallery saved successfully.');
          } catch (\Exception $e) {
               Log::error('GalleryController store', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function edit(Request $request, Gallery $gallery)
     {
          try {
               $gallery = Gallery::with(['details' => function($details){
                    return $details->with('media');
               }])->find($gallery->id);

               $mediaIds = $gallery->details->pluck('media_id')->toArray();

               return Inertia::render('Admin/Gallery/Show', ['info' => [
                    'id' => $gallery->id,
                    'identifier' => $gallery->identifier,
                    'status' => $gallery->is_active ? true : false,
                    'medias' => Media::where('is_active', true)->get()->transform(function($media) use ($mediaIds){
                         return [
                              'id' => $media->id,
                              'url' => $media->thumbUrl,
                              'rm' => false,
                              'new' => !in_array($media->id, $mediaIds),
                              'selected' => in_array($media->id, $mediaIds),
                         ];
                    }),
                    'media' => collect($gallery->details)->map(function($detail) use ($mediaIds){
                         return [
                              'id' => $detail->media->id,
                              'url' => $detail->media->thumbUrl,
                              'rm' => false,
                              'new' => !in_array($detail->media->id, $mediaIds),
                              'selected' => in_array($detail->media->id, $mediaIds),
                         ];
                    }),
               ]]);
          } catch (\Exception $e) {
               Log::error('GalleryController edit', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function update(GalleryRequest $request, Gallery $gallery)
     {
          try {
               $input = $request->validated();
               $to_remove = collect($input['media'])->map(function($media){
                    return ['id' => $media['id'], 'rm' => $media['rm']];
               })->reject(function($media){
                    return $media['rm'] === false;
               });

               $new = collect($input['media'])->map(function($media){
                    return ['id' => $media['id'], 'new' => $media['new']];
               })->reject(function($media){
                    return $media['new'] === false;
               });

               if($gallery->identifier != $input['identifier']){
                    $gallery->identifier = $input['identifier'];
                    $gallery->url = Gallery::getUrl($input['identifier']);
               }

               $gallery->is_active = ($input['status'] == true) ? true : false;
               $gallery->update();

               foreach($to_remove as $media){
                    $detail = GalleryDetail::where(['gallery_id' => $gallery->id, 'media_id' => $media['id']])->first();
                    if($detail){
                         $detail->delete();
                    }
               }

               foreach($new as $media){
                    $detail = new GalleryDetail;
                    $detail->gallery_id = $gallery->id;
                    $detail->media_id = $media['id'];
                    $detail->save();
               }

               return redirect()->route('admin.gallery.index')->with('success', 'Gallery updated successfully.');
          } catch (\Exception $e) {
               Log::error('GalleryController update', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }
}
