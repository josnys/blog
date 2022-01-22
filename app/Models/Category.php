<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class Category extends Model
{
     use HasFactory;

     protected $fillable = ['url', 'show_menu', 'is_active'];

     public function text()
     {
          return $this->hasMany(CategoryTranslate::class);
     }

     public function subcategories()
     {
          return $this->hasMany(SubCategory::class);
     }

     public function scopeActive($query)
     {
          return $query->where('is_active', true);
     }

     public static function getUrl($name)
     {
          try {
               $url = Str::slug($name);
               $exists = DB::table('categories')->where('url', $url)->first();
               $count = 0;
               while($exists){
                    $exists = DB::table('categories')->where('url', "$url-$count")->first();
                    $count++;
               }
               return ($count == 0) ? $url : "$url-$count";
          } catch (\Exception $e) {
               info($e);
          }
     }
}
