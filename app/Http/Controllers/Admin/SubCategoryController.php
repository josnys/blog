<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\SubCategoryRequest;
use App\Models\Category;
use App\Models\SubCategory;
use App\Models\SubCategoryTranslate;
use App\Models\Language;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class SubCategoryController extends Controller
{
     public function index(Request $request, Category $category)
     {
          try {
               $subcaterories = SubCategory::with('text')->paginate(50)->transform(function($subcategory){
                    return [
                         'id' => $subcategory->id,
                         'names' => $subcategory->text->pluck('name')->toArray(),
                         'url' => $subcategory->url,
                         'menu' => $subcategory->show_menu ? true : false,
                         'menu_caption' => $subcategory->show_menu ? 'Yes' : 'No',
                         'status' => $subcategory->is_active ? true : false,
                         'status_caption' => $subcategory->is_active ? 'Yes' : 'No',
                    ];
               });
               return Inertia::render('Admin/Category/Sub/Index', ['info' => [
                    'category' => [
                         'id' => $category->id,
                    ],
                    'subcategories' => $subcaterories
               ]]);
          } catch (\Exception $e) {
               Log::error('SubCategoryController index', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function create(Request $request, Category $category)
     {
          try {
               $category = Category::with('text')->find($category->id);
               return Inertia::render('Admin/Category/Sub/Create', ['info' => [
                    'category' => [
                         'id' => $category->id,
                         'name' => $category->text[0]->name
                    ],
                    'languages' => Language::where('is_active', true)->get()->transform(function($lang){
                         return [
                              'id' => $lang->id,
                              'name' => $lang->name
                         ];
                    })->toArray()
               ]]);
          } catch (\Exception $e) {
               Log::error('SubCategoryController create', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function store(SubCategoryRequest $request, Category $category)
     {
          try {
               $input = $request->validated();

               $subcategory = new SubCategory;
               $subcategory->category_id = $category->id;
               $subcategory->url = SubCategory::getUrl($input['name']);
               $subcategory->show_sub_menu = $input['menu'];
               $subcategory->is_active = $input['status'];
               $subcategory->save();

               $text = new SubCategoryTranslate;
               $text->sub_category_id = $subcategory->id;
               $text->language_id = $input['lang'];
               $text->name = $input['name'];
               $text->save();

               return redirect()->route('category.show', $category->id)->with('success', 'Sub-Category saved successfully.');
          } catch (\Exception $e) {
               Log::error('SubCategoryController store', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function show(Request $request, Category $category, SubCategory $subcategory)
     {
          try {
               $subcategory = SubCategory::with(['text' => function($text){
                    return $text->with('lang');
               }])->find($subcategory->id);
               $category = Category::with('text')->find($category->id);

               $notSelectedLang = $subcategory->text->pluck('language_id')->toArray();
               return Inertia::render('Admin/Category/Sub/Show', ['info' => [
                    'id' => $subcategory->id,
                    'url' => $subcategory->url,
                    'menu' => $subcategory->show_menu ? true : false,
                    'menu_caption' => $subcategory->show_menu ? 'Yes' : 'No',
                    'status' => $subcategory->is_active ? true : false,
                    'status_caption' => $subcategory->is_active ? 'Active' : 'Inactive',
                    'texts' => collect($subcategory->text)->map(function($text){
                         return [
                              'id' => $text->id,
                              'lang' => $text->lang->id,
                              'lang_caption' => $text->lang->name,
                              'name' => $text->name
                         ];
                    })->toArray(),
                    'category' => [
                         'id' => $category->id,
                         'name' => $category->text[0]->name
                    ],
                    'languages' => Language::where('is_active', true)->whereNotIn('id', $notSelectedLang)->get()->transform(function($language){
                         return [
                              'id' => $language->id,
                              'name' => $language->name
                         ];
                    }),
               ]]);
          } catch (\Exception $e) {
               Log::error('SubCategoryController show', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function createText(SubCategoryRequest $request, Category $category, SubCategory $subcategory)
     {
          try {
               $input = $request->validated();

               $text = new SubCategoryTranslate;
               $text->sub_category_id = $subcategory->id;
               $text->language_id = $input['lang'];
               $text->name = $input['name'];
               $text->save();
               return redirect()->route('subcategory.show', [$category->id, $subcategory->id])->with('success', 'Sub-Category Translation successfully saved.');
          } catch (\Exception $e) {
               Log::error('SubCategoryController createText', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function editText(SubCategoryRequest $request, Category $category, SubCategory $subcategory, SubCategoryTranslate $text)
     {
          try {
               $input = $request->validated();

               $category->show_menu = $input['menu'];
               $category->is_active = $input['status'];
               $category->update();

               $text->name = $input['name'];
               $text->update();
               return redirect()->route('subcategory.show', [$category->id, $subcategory->id])->with('success', 'Category Translation successfully updated.');
          } catch (\Exception $e) {
               Log::error('SubCategoryController editText', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }
}
