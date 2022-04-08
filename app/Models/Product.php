<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class Product extends Model
{
     use HasFactory, SoftDeletes;

     protected $fillable = ['category_id', 'sub_category_id', 'user_id', 'slug', 'media_id', 'gallery_id', 'currency', 'price', 'is_active', 'is_featured', 'is_published'];

     public function texts()
     {
          return $this->hasMany(ProductTranslate::class);
     }

     public function category()
     {
          return $this->belongsTo(Category::class, 'category_id', 'id');
     }

     public function subcategory()
     {
          return $this->belongsTo(SubCategory::class, 'sub_category_id', 'id');
     }

     public function user()
     {
          return $this->belongsTo(User::class, 'user_id', 'id');
     }

     public function cover()
     {
          return $this->belongsTo(Media::class, 'media_id', 'id');
     }

     public function gallery()
     {
          return $this->belongsTo(Gallery::class, 'gallery_id', 'id');
     }

     public function setCurrencyAttribute($value)
     {
          $this->attributes['currency'] = Str::upper($value);
     }

     public function scopeActive($query)
     {
          return $query->where('is_active', true);
     }

     public function scopePublished($query)
     {
          return $query->where('is_published', true);
     }

     public static function getSlug($name)
     {
          try {
               $url = Str::slug($name);
               $exists = DB::table('products')->where('slug', $url)->first();
               $count = 0;
               while($exists){
                    $exists = DB::table('posts')->where('slug', "$url-$count")->first();
                    $count++;
               }
               return ($count == 0) ? $url : "$url-$count";
          } catch (\Exception $e) {
               info($e);
          }
     }
}
