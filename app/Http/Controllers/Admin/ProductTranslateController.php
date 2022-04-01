<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;
use App\Models\Language;
use App\Models\Product;
use App\Models\ProductTranslate;
use App\Models\Media;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class ProductTranslateController extends Controller
{
     public function getTranslate(Request $request, Product $product, Language $language)
     {
          try {
               $product = Product::with('category' )->with('subcategory')->with('cover')->with(['texts' => function($texts){
                    return $texts->with('language');
               }])->find($product->id);

               return Inertia::render('Admin/Product/Translate', ['info' => [
                    'id' => $product->id,
                    'category' => $product->category_id,
                    'category_text' => ($product->category_id) ? $product->category->text[0]->name : null,
                    'subcategory' => $product->sub_category_id,
                    'subcategory_text' => ($product->sub_category_id) ? $product->subcategory->text[0]->name : null,
                    'cover' => $product->media_id ? $product->cover->thumbUrl : null,
                    'active' => $product->is_active ? true : false,
                    'publish' => $product->is_published ? true : false,
                    'details' => [
                         'name' => $product->texts[0]->name,
                         'short_des' => $product->texts[0]->short_description,
                         'description' => $product->texts[0]->description
                    ],
                    'gallery' => $product->gallery_id,
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
               Log::error('ProductTranslateController getTranslate', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function postTranslate(ProductRequest $request, Product $product, Language $language)
     {
          try {
               $input = $request->validated();
               DB::transaction(function() use ($input, $product, $language){
                    $product->media_id = ($product->media_id == null) ? $input['cover'] : $product->media_id;
                    $product->update();

                    $detail = new ProductTranslate;
                    $detail->product_id = $product->id;
                    $detail->language_id = $input['language'];
                    $detail->name = $input['name'];
                    $detail->short_description = $input['short_des'];
                    $detail->description = $input['description'];
                    $detail->save();
               });

               return redirect()->route('admin.product.show', $product->id)->with('success', 'Product Translation saved successfully.');
          } catch (\Exception $e) {
               Log::error('ProductTranslateController productTranslate', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }
}
