<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class Post extends Model
{
     use HasFactory;

     protected $fillable = ['category_id', 'sub_category_id', 'media_id', 'slug', 'user_id', 'show_in_home', 'show_in_menu', 'is_active', 'published_at', 'archived_at'];

     public function category()
     {
          return $this->belongsTo(Category::class);
     }

     public function subcategory()
     {
          return $this->belongsTo(SubCategory::class, 'sub_category_id', 'id');
     }

     public function cover()
     {
          return $this->belongsTo(Media::class, 'media_id', 'id');
     }

     public function user()
     {
          return $this->belongsTo(User::class);
     }

     public function details()
     {
          return $this->hasMany(PostDetail::class);
     }

     public static function getSlug($name)
     {
          try {
               $url = Str::slug($name);
               $exists = DB::table('posts')->where('slug', $url)->first();
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
