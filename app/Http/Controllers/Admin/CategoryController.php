<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\Models\CategoryTranslate;
use App\Models\Language;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class CategoryController extends Controller
{
     public function index(Request $request)
     {
          try {
               $caterories = Category::with('text')->paginate(50)->transform(function($category){
                    return [
                         'id' => $category->id,
                         'names' => $category->text->pluck('name')->toArray(),
                         'url' => $category->url,
                         'menu' => $category->show_menu ? true : false,
                         'menu_caption' => $category->show_menu ? 'Yes' : 'No',
                         'status' => $category->is_active ? true : false,
                         'status_caption' => $category->is_active ? 'Yes' : 'No',
                    ];
               });
               return Inertia::render('Admin/Category/Index', ['info' => ['categories' => $caterories]]);
          } catch (\Exception $e) {
               Log::error('CategoryController index', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function create(Request $request)
     {
          try {
               return Inertia::render('Admin/Category/Create', ['info' => [
                    'languages' => Language::where('is_active', true)->get()->transform(function($lang){
                         return [
                              'id' => $lang->id,
                              'name' => $lang->name
                         ];
                    })->toArray()
               ]]);
          } catch (\Exception $e) {
               Log::error('CategoryController create', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function store(CategoryRequest $request)
     {
          try {
               $input = $request->validated();

               $category = new Category;
               $category->url = Category::getUrl($input['name']);
               $category->show_menu = $input['menu'];
               $category->is_active = $input['status'];
               $category->save();

               $text = new CategoryTranslate;
               $text->category_id = $category->id;
               $text->language_id = $input['lang'];
               $text->name = $input['name'];
               $text->save();

               return redirect()->route('category.index')->with('success', 'Category saved successfully.');
          } catch (\Exception $e) {
               Log::error('CategoryController store', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function show(Request $request, Category $category)
     {
          try {
               $category = Category::with(['text' => function($text){
                    return $text->with('lang');
               }])->with(['subcategories' => function($subcategories){
                    return $subcategories->with('text');
               }])->find($category->id);

               $notSelectedLang = $category->text->pluck('language_id')->toArray();
               return Inertia::render('Admin/Category/Show', ['info' => [
                    'id' => $category->id,
                    'url' => $category->url,
                    'menu' => $category->show_menu ? true : false,
                    'menu_caption' => $category->show_menu ? 'Yes' : 'No',
                    'status' => $category->is_active ? true : false,
                    'status_caption' => $category->is_active ? 'Active' : 'Inactive',
                    'texts' => collect($category->text)->map(function($text){
                         return [
                              'id' => $text->id,
                              'lang' => $text->lang->id,
                              'lang_caption' => $text->lang->name,
                              'name' => $text->name
                         ];
                    })->toArray(),
                    'subcategories' => collect($category->subcategories)->map(function($subcategory){
                         return [
                              'id' => $subcategory->id,
                              'name' => $subcategory->text[0]->name
                         ];
                    })->toArray(),
                    'languages' => Language::where('is_active', true)->whereNotIn('id', $notSelectedLang)->get()->transform(function($language){
                         return [
                              'id' => $language->id,
                              'name' => $language->name
                         ];
                    }),
               ]]);
          } catch (\Exception $e) {
               Log::error('CategoryController show', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function createText(CategoryRequest $request, Category $category)
     {
          try {
               $input = $request->validated();

               $text = new CategoryTranslate;
               $text->category_id = $category->id;
               $text->language_id = $input['lang'];
               $text->name = $input['name'];
               $text->save();
               return redirect()->route('category.show', $category->id)->with('success', 'Category Translation successfully saved.');
          } catch (\Exception $e) {
               Log::error('CategoryController createText', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }

     public function editText(CategoryRequest $request, Category $category, CategoryTranslate $text)
     {
          try {
               $input = $request->validated();

               $category->show_menu = $input['menu'];
               $category->is_active = $input['status'];
               $category->update();

               $text->name = $input['name'];
               $text->update();
               return redirect()->route('category.show', $category->id)->with('success', 'Category Translation successfully updated.');
          } catch (\Exception $e) {
               Log::error('CategoryController editText', ['data' => $e]);
               return redirect()->back()->with('error', $this->serverError());
          }
     }
}
