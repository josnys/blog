<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostDetail extends Model
{
     use HasFactory;

     protected $fillable = ['post_id', 'language_id', 'title', 'intro', 'content', 'gallery_id'];

     public function post()
     {
          return $this->belongsTo(Post::class);
     }

     public function language()
     {
          return $this->belongsTo(Language::class);
     }

     public function gallery()
     {
          return $this->belongsTo(Gallery::class);
     }
}
