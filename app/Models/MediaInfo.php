<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaInfo extends Model
{
     use HasFactory;

     protected $fillable = ['media_id', 'language_id', 'title', 'description', 'is_active'];

     public function language()
     {
          return $this->belongsTo(Language::class, 'language_id', 'id');
     }
}
