<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SubCategory extends Model
{
     use HasFactory;

     protected $fillable = ['category_id', 'url', 'show_sub_menu', 'is_active'];

     public function category()
     {
          return $this->belongsTo(Category::class, 'category_id', 'id');
     }

     public function text()
     {
          return $this->hasMany(SubCategoryTranslate::class);
     }

     public static function getUrl($name)
     {
          try {
               $url = Str::slug($name);
               $exists = DB::table('sub_categories')->where('url', $url)->first();
               $count = 0;
               while($exists){
                    $exists = DB::table('sub_categories')->where('url', "$url-$count")->first();
                    $count++;
               }
               return ($count == 0) ? $url : "$url-$count";
          } catch (\Exception $e) {
               info($e);
          }
     }
}
