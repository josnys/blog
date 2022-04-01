<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Language;
use App\Models\Product;
use App\Models\ProductTranslate;
use App\Models\Gallery;
use App\Models\Media;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
     public function index(Request $request)
     {
          try {
               $products =  Product::with(['category' => function($category){
                    return $category->with('text');
               }])->with(['subcategory' => function($subcategory){
                    return $subcategory->with('text');
               }])->with(['user' => function($user){
                    return $user->with('person');
               }])->with('cover')->with('texts')->paginate(50)->transform(function($product){
                    return [
                         'id' => $product->id,
                         'category' => $product->category->text[0]->name,
                         'subcategory' => $product->subcategory->text[0]->name,
                         'name' => $product->texts[0]->name,
                         'cover' => $product->cover->thumbUrl,
                         'currency' => $product->currency,
                         'price' => $product->price,
                         'status' => $product->is_active ? true : false,
                         'status_caption' => $product->is_active ? 'Yes' : 'No',
                         'published' => $product->is_published ? true : false,
                         'published_caption' => $product->is_published ? 'Yes' : 'No',
                    ];
               });

               return Inertia::render('Admin/Product/Index', ['info' => ['products' => $products]]);
          } catch (\Exception $e) {
               Log::error('ProductController index', ['data' => $e]);
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

               return Inertia::render('Admin/Product/Create', ['info' => [
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
               Log::error('ProductController create', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function store(ProductRequest $request)
     {
          try {
               $input = $request->validated();
               DB::transaction(function() use ($input){
                    $product = new Product;
                    $product->category_id = $input['category'];
                    $product->sub_category_id = $input['subcategory'];
                    $product->media_id = $input['cover'];
                    $product->slug = Product::getSlug($input['name']);
                    $product->user_id = auth()->id();
                    $product->gallery_id = $input['gallery'];
                    $product->currency = $input['currency'];
                    $product->price = (float)$input['price'];
                    $product->is_active = ($input['active'] == true) ? true : false;
                    $product->is_published = ($input['publish'] == true) ? true : false;
                    $product->save();

                    $detail = new ProductTranslate;
                    $detail->product_id = $product->id;
                    $detail->language_id = $input['language'];
                    $detail->name = $input['name'];
                    $detail->short_description = $input['short_des'];
                    $detail->description = $input['description'];
                    $detail->save();
               });

               return redirect()->route('admin.product.index')->with('success', 'Product saved successfully.');
          } catch (\Exception $e) {
               Log::error('ProductController store', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function show(Request $request, Product $product)
     {
          try {
               $product = Product::with('category' )->with('subcategory')->with('cover')->with(['texts' => function($texts){
                    return $texts->with('language');
               }])->find($product->id);

               $selectedLanguage = $product->texts->pluck('language_id')->toArray();
               $language_indexes = array();
               $details = collect($product->texts)->map(function($text) use (&$language_indexes){
                    array_push($language_indexes, [
                         'id' => $text->language_id,
                         'name' => $text->language->name,
                    ]);
                    return [
                         'id' => $text->id,
                         'language_id' => $text->language_id,
                         'language' => $text->language->name,
                         'name' => $text->name,
                         'short_des' => $text->short_description,
                         'description' => $text->description
                    ];
               })->toArray();

               return Inertia::render('Admin/Product/Show', ['info' => [
                    'id' => $product->id,
                    'category' => ($product->category_id) ? $product->category->text[0]->name : null,
                    'subcategory' => ($product->sub_category_id) ? $product->subcategory->text[0]->name : null,
                    'cover' => $product->media_id ? $product->cover->thumbUrl : null,
                    'user' => $product->user->name,
                    'currency' => $product->currency,
                    'price' => $product->price,
                    'status' => $product->is_active ? true : false,
                    'status_caption' => $product->is_active ? 'Yes' : 'No',
                    'published' => $product->is_published ? true : false,
                    'published_caption' => $product->is_published ? 'Yes' : 'No',
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
               Log::error('ProductController show', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function edit(Product $product, Language $language)
     {
          try {
               $product = Product::with('category' )->with('subcategory')->with('cover')->with(['texts' => function($texts) use ($language){
                    return $texts->with('language')->where('language_id', $language->id);
               }])->find($product->id);

               $subs = array();

               $categories = Category::with(['text' => function($text){
                    return $text->where('language_id', 1);
               }])->with(['subcategories' => function($subcategories){
                    return $subcategories->with(['text' => function($text){
                         return $text->where('language_id', 1);
                    }])->active();
               }])->active()->get()->transform(function($category) use ($product, &$subs){
                    if($category->id == $product->category_id){
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

               return Inertia::render('Admin/Product/Edit', ['info' => [
                    'id' => $product->id,
                    'category' => $product->category_id,
                    'subcategory' => $product->sub_category_id,
                    'subs' => $subs,
                    'cover' => $product->media_id,
                    'selectedCover' => $product->cover->thumbUrl,
                    'currency' => $product->currency,
                    'price' => $product->price,
                    'gallery' =>$product->gallery_id,
                    'active' => $product->is_active ? true : false,
                    'publish' => $product->is_published ? true : false,
                    'language' => [
                         'id' => $language->id,
                         'name' => $language->name
                    ],
                    'detail' => [
                         'id' => $product->texts[0]->id,
                         'language' => $product->texts[0]->language_id,
                         'name' => $product->texts[0]->name,
                         'short_des' => $product->texts[0]->short_description,
                         'description' => $product->texts[0]->description,
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
               Log::error('ProductController edit', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function update(ProductRequest $request, Product $product, Language $language)
     {
          try {
               $input = $request->validated();
               DB::transaction(function() use ($input, $product, $language){
                    $product->category_id = $input['category'];
                    $product->sub_category_id = $input['subcategory'];
                    $product->media_id = $input['cover'];
                    $product->gallery_id = $input['gallery'];
                    $product->currency = $input['currency'];
                    $product->price = (float)$input['price'];
                    $product->is_active = ($input['active'] == true) ? true : false;
                    $product->is_published = ($input['publish'] == true) ? true : false;
                    $product->update();

                    $detail = ProductTranslate::where(['product_id' => $product->id, 'language_id' => $language->id])->first();
                    $detail->name = $input['name'];
                    $detail->short_description = $input['short_des'];
                    $detail->description = $input['description'];
                    $detail->update();
               });

               return redirect()->route('admin.product.index')->with('success', 'Product saved successfully.');
          } catch (\Exception $e) {
               Log::error('ProductController update', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }
}
