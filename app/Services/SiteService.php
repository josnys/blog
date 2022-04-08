<?php

namespace App\Services;

use App\Models\Category;
use App\Models\Language;
use App\Models\Post;
use App\Models\Product;
use Illuminate\Support\Facades\Log;

class SiteService {

     protected $lang;

     public function __construct()
     {
          $code = session()->get('applocale') ?? 'EN';
          $_lang = Language::where('code', $code)->first();
          $this->lang = $_lang->id;
     }

     public function getValidSegment(array $segments): array
     {
          try {
               $slugs = array();

               foreach($segments as $key => $segment){
                    if($key > 0 && preg_match('/^[a-z0-9]+(-?[a-z0-9]+)*$/', $segment)){
                         array_push($slugs, $segment);
                    }
               }

               return $slugs;
          } catch (\Exception $e) {
               Log::error('SiteService getValidSegment', ['data' => $e]);
          }
     }

     public function resolveMenu(array $url): array
     {
          try {
               $categories = Category::with(['text' => function($text){
                    return $text->where('language_id', $this->lang);
               }])->with(['subcategories' => function($subcategories){
                    return $subcategories->with(['text' => function($text){
                         return $text->where('language_id', $this->lang);
                    }]);
               }])->whereIn('url', $url)->get()->transform(function($category){
                    return [
                         'id' => $category->id,
                         'name' => $category->text[0]->name,
                         'url' => $category->url,
                         'photo' => $category->photoUrl,
                         'subs' => collect($category->subcategories)->map(function($subcat){
                              return [
                                   'id' => $subcat->id,
                                   'name' => $subcat->text[0]->name,
                                   'url' => $subcat->url,
                                   'photo' => $subcat->photoUrl,
                              ];
                         })->toArray()
                    ];
               })->toArray();

               return $categories;
          } catch (\Exception $e) {
               Log::error('SiteService resolveMenu', ['data' => $e]);
          }
     }

     public function getAllMenuPostProduct(array $categories): array
     {
          try {
               return [
                    'post' => Post::with('cover')->with(['details' => function($details){
                         return $details->where('language_id', $this->lang);
                    }])->active()->published()->where('category_id', $categories[0]['id'])->get()->transform(function($post){
                         return [
                              'id' => $post->id,
                              'image' => $post->cover->thumbUrl,
                              'url' => $post->slug,
                              'title' => $post->details[0]->title,
                              'intro' => $post->details[0]->intro,
                              'date' => $post->published_at
                         ];
                    })->toArray(),
                    'products' => [
                         'title' => 'Products',
                         'data' =>Product::with('cover')->with(['texts' => function($texts){
                              return $texts->where('language_id', $this->lang);
                         }])->active()->published()->where('category_id', $categories[0]['id'])->get()->transform(function($product){
                              return [
                                   'id' => $product->id,
                                   'image' => $product->cover->thumbUrl,
                                   'url' => $product->slug,
                                   'title' => $product->texts[0]->name,
                                   'intro' => $product->texts[0]->short_description,
                                   'currency' => $product->currency,
                                   'price' => $product->price
                              ];
                         })->toArray()
                    ]
               ];
          } catch (\Exception $e) {
               Log::error('SiteService getMenuPostProduct', ['data' => $e]);
          }
     }

     public function getHomeCategoriesFeatured(): array
     {
          try {
               return Category::with(['text' => function($text){
                    return $text->where('language_id', $this->lang);
               }])->active()->featured()->get()->transform(function($category){
                    return [
                         'id' => $category->id,
                         'url' => $category->url,
                         'photo' => $category->photoUrl,
                         'name' => $category->text[0]->name,
                    ];
               })->toArray();
          } catch (\Exception $e) {
               Log::error('SiteService getHomeFeatured', ['data' => $e]);
          }
     }
}
