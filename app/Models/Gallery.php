<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class Gallery extends Model
{
     use HasFactory;

     protected $fillable = ['identifier', 'url', 'user_id', 'is_active'];

     public function user()
     {
          return $this->belongsTo(User::class);
     }

     public function details()
     {
          return $this->hasMany(GalleryDetail::class, 'gallery_id', 'id');
     }

     public function scopeActive($query)
     {
          return $query->where('is_active', true);
     }

     public static function getUrl($name)
     {
          try {
               $url = Str::slug($name);
               $exists = DB::table('galleries')->where('url', $url)->first();
               $count = 0;
               while($exists){
                    $exists = DB::table('galleries')->where('url', "$url-$count")->first();
                    $count++;
               }
               return ($count == 0) ? $url : "$url-$count";
          } catch (\Exception $e) {
               info($e);
          }
     }
}
