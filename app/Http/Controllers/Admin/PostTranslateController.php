<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use App\Models\Language;
use App\Models\Post;
use App\Models\PostDetail;
use App\Models\Media;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class PostTranslateController extends Controller
{
     public function getTranslate(Request $request, Post $post, Language $language)
     {
          try {
               $post = Post::with('category' )->with('subcategory')->with('cover')->with(['details' => function($details){
                    return $details->with('language')->with('gallery');
               }])->find($post->id);

               return Inertia::render('Admin/Post/Translate', ['info' => [
                    'id' => $post->id,
                    'category' => $post->category_id,
                    'category_text' => ($post->category_id) ? $post->category->text[0]->name : null,
                    'subcategory' => $post->sub_category_id,
                    'subcategory_text' => ($post->sub_category_id) ? $post->subcategory->text[0]->name : null,
                    'cover' => $post->media_id ? $post->cover->thumbUrl : null,
                    'show_home' => $post->show_in_home ? true : false,
                    'show_menu' => $post->show_in_home ? true : false,
                    'status' => $post->is_active ? true : false,
                    'publish' => $post->published_at ? true : false,
                    'details' => [
                         'title' => $post->details[0]->title,
                         'intro' => $post->details[0]->intro,
                         'body' => $post->details[0]->content
                    ],
                    'gallery' => $post->details[0]->gallery_id,
                    'language' => [
                         'id' => $language->id,
                         'name' => $language->name
                    ],
                    'medias' => Media::active()->get()->transform(function($media){
                         return [
                              'id' => $media->id,
                              'url' => $media->thumbUrl,
                         ];
                    })->toArray(),
               ]]);
          } catch (\Exception $e) {
               Log::error('PostTranslateController getTranslate', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function postTranslate(PostRequest $request, Post $post, Language $language)
     {
          try {
               $input = $request->validated();

               $post->media_id = ($post->media_id == null) ? $input['cover'] : $post->media_id;
               $post->update();

               $detail = new PostDetail;
               $detail->post_id = $post->id;
               $detail->language_id = $input['language'];
               $detail->title = $input['title'];
               $detail->intro = $input['intro'];
               $detail->content = $input['body'];
               $detail->gallery_id = $input['gallery'];
               $detail->save();

               return redirect()->route('admin.post.show', $post->id)->with('success', 'Post saved successfully.');
          } catch (\Exception $e) {
               Log::error('PostTranslateController postTranslate', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }
}
