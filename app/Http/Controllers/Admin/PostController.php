<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use App\Models\Category;
use App\Models\Language;
use App\Models\Post;
use App\Models\PostDetail;
use App\Models\Gallery;
use App\Models\Media;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{
     public function index(Request $request)
     {
          try {
               $posts = Post::with(['category' => function($category){
                    return $category->with('text');
               }])->with(['subcategory' => function($subcategory){
                    return $subcategory->with('text');
               }])->with(['user' => function($user){
                    return $user->with('person');
               }])->with('details')->paginate(50)->transform(function($post){
                    return [
                         'id' => $post->id,
                         'title' => ($post->details->count()) ? $post->details[0]->title : '',
                         'category' => ($post->category_id) ? $post->category->text[0]->name : null,
                         'subcategory' => ($post->sub_category_id) ? $post->subcategory->text[0]->name : null,
                         'user' => $post->user->name,
                         'show_home' => $post->show_in_home ? true : false,
                         'show_home_caption' => $post->show_in_home ? 'Yes' : 'No',
                         'status' => $post->is_active ? true : false,
                         'status_caption' => $post->is_active ? 'Yes' : 'No',
                         'published' => $post->published_at ? true : false,
                         'published_caption' => $post->published_at ? 'Yes' : 'No',
                    ];
               });

               return Inertia::render('Admin/Post/Index', ['info' => ['posts' => $posts]]);
          } catch (\Exception $e) {
               Log::error('PostController index', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function create(Request $request)
     {
          try {
               $categories = Category::with(['text' => function($text){
                    return $text->where('language_id', 1);
               }])->with(['subcategories' => function($subcategories){
                    return $subcategories->with(['text' => function($text){
                         return $text->where('language_id', 1);
                    }])->active();
               }])->active()->get()->transform(function($category){
                    return [
                         'id' => $category->id,
                         'name' => $category->text[0]->name,
                         'subs' => collect($category->subcategories)->map(function($subcategory){
                              return [
                                   'id' => $subcategory->id,
                                   'name' => $subcategory->text[0]->name
                              ];
                         })
                    ];
               })->toArray();

               return Inertia::render('Admin/Post/Create', ['info' => [
                    'languages' => Language::active()->get()->transform(function($language){
                         return [
                              'id' => $language->id,
                              'name' => $language->name
                         ];
                    })->toArray(),
                    'medias' => Media::active()->get()->transform(function($media){
                         return [
                              'id' => $media->id,
                              'url' => $media->thumbUrl,
                         ];
                    })->toArray(),
                    'galleries' => Gallery::active()->get()->transform(function($gallery){
                         return [
                              'id' => $gallery->id,
                              'url' => $gallery->identifier,
                         ];
                    })->toArray(),
                    'categories' => $categories
               ]]);
          } catch (\Exception $e) {
               Log::error('PostController create', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function store(PostRequest $request)
     {
          try {
               $input = $request->validated();
               $post = new Post;
               $post->category_id = $input['category'];
               $post->sub_category_id = $input['subcategory'];
               $post->media_id = $input['cover'];
               $post->slug = Post::getSlug($input['title']);
               $post->user_id = auth()->id();
               $post->show_in_home = ($input['show_home'] == true) ? true : false;
               $post->show_in_menu = ($input['show_menu'] == true) ? true : false;
               $post->is_active = ($input['status'] == true) ? true : false;
               $post->published_at = ($input['publish'] == true) ? Carbon::now() : null;
               $post->archived_at = null;
               $post->save();

               $detail = new PostDetail;
               $detail->post_id = $post->id;
               $detail->language_id = $input['language'];
               $detail->title = $input['title'];
               $detail->intro = $input['intro'];
               $detail->content = $input['body'];
               $detail->gallery_id = $input['gallery'];
               $detail->save();

               return redirect()->route('admin.post.index')->with('success', 'Post saved successfully.');
          } catch (\Exception $e) {
               Log::error('PostController store', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function show(Request $request, Post $post)
     {
          try {
               $post = Post::with('category' )->with('subcategory')->with('cover')->with(['details' => function($details){
                    return $details->with('language')->with('gallery');
               }])->find($post->id);

               $selectedLanguage = $post->details->pluck('language_id')->toArray();
               $language_indexes = array();
               $details = collect($post->details)->map(function($detail) use (&$language_indexes){
                    array_push($language_indexes, [
                         'id' => $detail->language_id,
                         'name' => $detail->language->name,
                    ]);
                    return [
                         'id' => $detail->id,
                         'language_id' => $detail->language_id,
                         'language' => $detail->language->name,
                         'title' => $detail->title,
                         'intro' => $detail->intro,
                         'body' => $detail->content
                    ];
               })->toArray();

               return Inertia::render('Admin/Post/Show', ['info' => [
                    'id' => $post->id,
                    'category' => ($post->category_id) ? $post->category->text[0]->name : null,
                    'subcategory' => ($post->sub_category_id) ? $post->subcategory->text[0]->name : null,
                    'cover' => $post->media_id ? $post->cover->thumbUrl : null,
                    'user' => $post->user->name,
                    'show_home' => $post->show_in_home ? true : false,
                    'show_home_caption' => $post->show_in_home ? 'Yes' : 'No',
                    'status' => $post->is_active ? true : false,
                    'status_caption' => $post->is_active ? 'Yes' : 'No',
                    'published' => $post->published_at ? true : false,
                    'published_caption' => $post->published_at ? 'Yes' : 'No',
                    'details' => $details,
                    'language_index' => $language_indexes,
                    'languages_create' => Language::active()->whereNotIn('id', $selectedLanguage)->get()->transform(function($language){
                         return [
                              'id' => $language->id,
                              'name' => $language->name
                         ];
                    })->toArray(),
                    'languages_edit' => Language::active()->whereIn('id', $selectedLanguage)->get()->transform(function($language){
                         return [
                              'id' => $language->id,
                              'name' => $language->name
                         ];
                    })->toArray(),
               ]]);
          } catch (\Exception $e) {
               Log::error('PostController show', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function edit(Request $request, Post $post, Language $language)
     {
          try {
               $post = Post::with('category' )->with('subcategory')->with('cover')->with(['details' => function($details) use ($language){
                    return $details->with('language')->with('gallery')->where('language_id', $language->id);
               }])->find($post->id);

               $subs = array();

               $categories = Category::with(['text' => function($text){
                    return $text->where('language_id', 1);
               }])->with(['subcategories' => function($subcategories){
                    return $subcategories->with(['text' => function($text){
                         return $text->where('language_id', 1);
                    }])->active();
               }])->active()->get()->transform(function($category) use ($post, &$subs){
                    if($category->id == $post->category_id){
                         $subs = collect($category->subcategories)->map(function($subcategory){
                              return [
                                   'id' => $subcategory->id,
                                   'name' => $subcategory->text[0]->name
                              ];
                         });
                    }
                    return [
                         'id' => $category->id,
                         'name' => $category->text[0]->name,
                         'subs' => collect($category->subcategories)->map(function($subcategory){
                              return [
                                   'id' => $subcategory->id,
                                   'name' => $subcategory->text[0]->name
                              ];
                         })
                    ];
               })->toArray();

               return Inertia::render('Admin/Post/Edit', ['info' => [
                    'id' => $post->id,
                    'category' => $post->category_id,
                    'subcategory' => $post->sub_category_id,
                    'subs' => $subs,
                    'cover' => $post->media_id,
                    'selectedCover' => $post->cover->thumbUrl,
                    'show_home' => $post->show_in_home,
                    'show_menu' => $post->show_in_menu,
                    'status' => $post->is_active,
                    'publish' => $post->published_at ? true : false,
                    'language' => [
                         'id' => $language->id,
                         'name' => $language->name
                    ],
                    'detail' => [
                         'id' => $post->details[0]->id,
                         'language' => $post->details[0]->language_id,
                         'title' => $post->details[0]->title,
                         'intro' => $post->details[0]->intro,
                         'body' => $post->details[0]->content,
                         'gallery' => $post->details[0]->gallery_id,
                    ],
                    'medias' => Media::active()->get()->transform(function($media){
                         return [
                              'id' => $media->id,
                              'url' => $media->thumbUrl,
                         ];
                    })->toArray(),
                    'galleries' => Gallery::active()->get()->transform(function($gallery){
                         return [
                              'id' => $gallery->id,
                              'url' => $gallery->identifier,
                         ];
                    })->toArray(),
                    'categories' => $categories
               ]]);
          } catch (\Exception $e) {
               Log::error('PostController edit', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function update(PostRequest $request, Post $post, Language $language)
     {
          try {
               $input = $request->validated();

               $post->category_id = $input['category'];
               $post->sub_category_id = $input['subcategory'];
               $post->media_id = $input['cover'];
               $post->slug = Post::getSlug($input['title']);
               $post->show_in_home = ($input['show_home'] == true) ? true : false;
               $post->show_in_menu = ($input['show_menu'] == true) ? true : false;
               $post->is_active = ($input['status'] == true) ? true : false;
               $post->update();

               $detail = PostDetail::find($input['detail']);
               $detail->title = $input['title'];
               $detail->intro = $input['intro'];
               $detail->content = $input['body'];
               $detail->gallery_id = $input['gallery'];
               $detail->update();

               $details = PostDetail::where('post_id', $post->id)->where('id', '!=', $input['detail'])->get();
               foreach($details as $detail){
                    $detail->gallery_id = $input['gallery'];
                    $detail->update();
               }

               return redirect()->route('admin.post.show', $post->id)->with('success', 'Post updated successfully.');
          } catch (\Exception $e) {
               Log::error('PostController update', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }
}
