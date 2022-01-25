<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Media extends Model
{
     use HasFactory, SoftDeletes;

     protected $fillable = ['name', 'mime_type', 'is_active'];

     public function info()
     {
          return $this->hasMany(MediaInfo::class);
     }

     public function scopeActive($query)
     {
          return $query->where('is_active', true);
     }

     public function getThumbUrlAttribute()
     {
          return ($this->name && Storage::disk('local')->exists('medias/images/thumbnails/'.$this->name)) ? route('show.image', 'medias/images/thumbnails/'.$this->name) : null;
     }

     public function getUrlAttribute()
     {
          return ($this->name && Storage::disk('local')->exists('medias/images/'.$this->name)) ? route('show.image', 'medias/images/'.$this->name) : null;
     }

     public function getFullPathAttribute()
     {
          return ($this->name && Storage::disk('local')->exists('medias/images/'.$this->name)) ? storage_path('medias/images/'.$this->name) : null;
     }

     public static function getUploaded($path)
     {
          return Storage::get($path);
     }
}
