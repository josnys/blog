<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class SubCategory extends Model
{
     use HasFactory;

     protected $fillable = ['category_id', 'url', 'photo', 'show_sub_menu', 'is_active'];

     public function category()
     {
          return $this->belongsTo(Category::class, 'category_id', 'id');
     }

     public function text()
     {
          return $this->hasMany(SubCategoryTranslate::class);
     }

     public function scopeActive($query)
     {
          return $query->where('is_active', true);
     }

     public function getPhotoUrlAttribute()
     {
          return ($this->photo && Storage::disk('local')->exists('category/subs/'.$this->photo)) ? route('show.image', 'category/subs/'.$this->photo) : null;
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
