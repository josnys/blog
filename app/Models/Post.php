<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use NotificationChannels\WebPush\HasPushSubscriptions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class Post extends Model
{
     use HasFactory, Notifiable, HasPushSubscriptions;

     protected $fillable = ['category_id', 'sub_category_id', 'media_id', 'slug', 'user_id', 'show_in_home', 'show_in_menu', 'is_active', 'is_featured', 'published_at', 'archived_at'];

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

     public function scopeActive($query)
     {
          return $query->where('is_active', true);
     }

     public function scopePublished($query)
     {
          return $query->whereDate(DB::raw('published_at'), '<=', Carbon::now()->toDateString());
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
