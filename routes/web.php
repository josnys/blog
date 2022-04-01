<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\SecurityController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\SubCategoryController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\PostTranslateController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ProductTranslateController;
use App\Http\Controllers\WelcomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WelcomeController::class, 'index']);

Route::get('/img/{path}', [ImageController::class, 'show'])->where('path', '.*')->name('show.image');
Route::post('lang/{locale}', [WelcomeController::class, 'setLanguage'])->name('set.language');

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['auth']], function(){
     // Profile
     Route::get('/home', [HomeController::class, 'index'])->name('home');
     Route::get('/profile', [HomeController::class, 'profile'])->name('profile');
     Route::post('/profile/{user}/edit', [HomeController::class, 'postProfile'])->name('profile.save');
     Route::post('/profile/{user}/password', [HomeController::class, 'postProfilePassword'])->name('profile.password');

     // Security -- Roles & Permissions
     Route::get('/security', [SecurityController::class, 'index'])->name('security.index');
     // Permissions
     Route::get('/permission', [PermissionController::class, 'create'])->middleware('permission:create-permission')->name('permission.create');
     Route::post('/permission', [PermissionController::class, 'store'])->middleware('permission:create-permission')->name('permission.store');
     Route::get('/permission/{permission}/edit', [PermissionController::class, 'edit'])->middleware('permission:update-permission')->name('permission.edit');
     Route::put('/permission/{permission}/edit', [PermissionController::class, 'update'])->middleware('permission:update-permission')->name('permission.update');
     // Roles
     Route::get('/role', [RoleController::class, 'create'])->middleware('permission:create-role')->name('role.create');
     Route::post('/role', [RoleController::class, 'store'])->middleware('permission:create-role')->name('role.store');
     Route::get('/role/{role}/edit', [RoleController::class, 'edit'])->middleware('permission:update-role')->name('role.edit');
     Route::put('/role/{role}/edit', [RoleController::class, 'update'])->middleware('permission:update-role')->name('role.update');
     Route::get('/role/{role}/assign', [RoleController::class, 'getAssign'])->middleware('permission:assign-permission')->name('role.get.assign');
     Route::post('/role/{role}/assign', [RoleController::class, 'postAssign'])->middleware('permission:assign-permission')->name('role.post.assign');

     // Users
     Route::get('/user', [UserController::class, 'index'])->middleware('permission:read-user')->name('user.index');
     Route::get('/user/create', [UserController::class, 'create'])->middleware('permission:create-user')->name('user.create');
     Route::post('/user/create', [UserController::class, 'store'])->middleware('permission:create-user')->name('user.store');
     Route::get('/user/{user}/edit', [UserController::class, 'edit'])->middleware('permission:update-user')->name('user.edit');
     Route::put('/user/{user}/edit', [UserController::class, 'update'])->middleware('permission:update-user')->name('user.update');
     Route::get('/user/{user}/role', [UserController::class, 'getRoles'])->middleware('permission:assign-role')->name('user.get.role');
     Route::post('/user/{user}/role', [UserController::class, 'postRole'])->middleware('permission:assign-role')->name('user.post.role');
     Route::get('/user/{user}/resetPassword', [UserController::class, 'getResetPassword'])->middleware('permission:change-user-password')->name('user.get.resetpassword');
     Route::post('/user/{user}/resetPassword', [UserController::class, 'postResetPassword'])->middleware('permission:change-user-password')->name('user.post.resetpassword');

     // Languages
     Route::get('/language', [LanguageController::class, 'index'])->middleware('permission:read-user')->name('language.index');
     Route::get('/language/create', [LanguageController::class, 'create'])->middleware('permission:read-user')->name('language.create');
     Route::post('/language/create', [LanguageController::class, 'store'])->middleware('permission:read-user')->name('language.store');
     Route::get('/language/{language}/edit', [LanguageController::class, 'edit'])->middleware('permission:read-user')->name('language.edit');
     Route::post('/language/{language}/edit', [LanguageController::class, 'update'])->middleware('permission:read-user')->name('language.update');

     // Medias
     Route::get('/media', [MediaController::class, 'index'])->middleware('permission:read-user')->name('media.index');
     Route::get('/media/create', [MediaController::class, 'create'])->middleware('permission:read-user')->name('media.create');
     Route::post('/media/create', [MediaController::class, 'store'])->middleware('permission:read-user')->name('media.store');
     Route::get('/media/{media}/show', [MediaController::class, 'show'])->middleware('permission:read-user')->name('media.show');
     Route::post('/media/{media}/info/create', [MediaController::class, 'createInfo'])->middleware('permission:read-user')->name('media.info.store');
     Route::post('/media/{media}/info/{info}/edit', [MediaController::class, 'editInfo'])->middleware('permission:read-user')->name('media.info.update');

     // Galleries
     Route::get('/media/gallery', [GalleryController::class, 'index'])->middleware('permission:read-user')->name('gallery.index');
     Route::get('/media/gallery/create', [GalleryController::class, 'create'])->middleware('permission:read-user')->name('gallery.create');
     Route::post('/media/gallery/create', [GalleryController::class, 'store'])->middleware('permission:read-user')->name('gallery.store');
     Route::get('/media/gallery/{gallery}/edit', [GalleryController::class, 'edit'])->middleware('permission:read-user')->name('gallery.edit');
     Route::post('/media/gallery/{gallery}/edit', [GalleryController::class, 'update'])->middleware('permission:read-user')->name('gallery.update');

     // Categories
     Route::get('/category', [CategoryController::class, 'index'])->middleware('permission:read-user')->name('category.index');
     Route::get('/category/create', [CategoryController::class, 'create'])->middleware('permission:read-user')->name('category.create');
     Route::post('/category/create', [CategoryController::class, 'store'])->middleware('permission:read-user')->name('category.store');
     Route::get('/category/{category}/show', [CategoryController::class, 'show'])->middleware('permission:read-user')->name('category.show');
     Route::post('/category/{category}/text/create', [CategoryController::class, 'createText'])->middleware('permission:read-user')->name('category.text.store');
     Route::post('/category/{category}/text/{text}/edit', [CategoryController::class, 'editText'])->middleware('permission:read-user')->name('category.text.update');

     // Sub-Categories
     Route::get('/category/{category}/sub/create', [SubCategoryController::class, 'create'])->middleware('permission:read-user')->name('subcategory.create');
     Route::post('/category/{category}/sub/create', [SubCategoryController::class, 'store'])->middleware('permission:read-user')->name('subcategory.store');
     Route::get('/category/{category}/sub/{subcategory}/show', [SubCategoryController::class, 'show'])->middleware('permission:read-user')->name('subcategory.show');
     Route::post('/category/{category}/sub/{subcategory}/text/create', [SubCategoryController::class, 'createText'])->middleware('permission:read-user')->name('subcategory.text.store');
     Route::post('/category/{category}/sub/{subcategory}/text/{text}/edit', [SubCategoryController::class, 'editText'])->middleware('permission:read-user')->name('subcategory.text.update');

     // Posts
     Route::get('/post', [PostController::class, 'index'])->middleware('permission:read-user')->name('post.index');
     Route::get('/post/create', [PostController::class, 'create'])->middleware('permission:read-user')->name('post.create');
     Route::post('/post/create', [PostController::class, 'store'])->middleware('permission:read-user')->name('post.store');
     Route::get('/post/{post}/view', [PostController::class, 'show'])->middleware('permission:read-user')->name('post.show');
     Route::post('/post/{post}/publish', [PostController::class, 'publish'])->middleware('permission:read-user')->name('post.publish');
     Route::post('/post/{post}/archive', [PostController::class, 'archive'])->middleware('permission:read-user')->name('post.archive');
     Route::get('/post/{post}/language/{language}/edit', [PostController::class, 'edit'])->middleware('permission:read-user')->name('post.edit');
     Route::post('/post/{post}/language/{language}/edit', [PostController::class, 'update'])->middleware('permission:read-user')->name('post.update');
     Route::get('/post/{post}/lang/{language}/translate', [PostTranslateController::class, 'getTranslate'])->middleware('permission:read-user')->name('post.translate.create');
     Route::post('/post/{post}/lang/{language}/translate', [PostTranslateController::class, 'postTranslate'])->middleware('permission:read-user')->name('post.translate.store');

     // Product
     Route::get('/product', [ProductController::class, 'index'])->middleware('permission:read-user')->name('product.index');
     Route::get('/product/create', [ProductController::class, 'create'])->middleware('permission:read-user')->name('product.create');
     Route::post('/product/create', [ProductController::class, 'store'])->middleware('permission:read-user')->name('product.store');
     Route::get('/product/{product}/view', [ProductController::class, 'show'])->middleware('permission:read-user')->name('product.show');
     Route::get('/product/{product}/language/{language}/edit', [ProductController::class, 'edit'])->middleware('permission:read-user')->name('product.edit');
     Route::post('/product/{product}/language/{language}/edit', [ProductController::class, 'update'])->middleware('permission:read-user')->name('product.update');
     Route::get('/product/{product}/lang/{language}/translate', [ProductTranslateController::class, 'getTranslate'])->middleware('permission:read-user')->name('product.translate.create');
     Route::post('/product/{product}/lang/{language}/translate', [ProductTranslateController::class, 'postTranslate'])->middleware('permission:read-user')->name('product.translate.store');

     // Settings
     Route::get('/setting', [SettingController::class, 'create'])->middleware('permission:read-user')->name('setting.create');
     Route::post('/setting', [SettingController::class, 'store'])->middleware('permission:read-user')->name('setting.store');
});
