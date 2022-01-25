<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Setting extends Model
{
     use HasFactory;

     protected $fillable = ['name', 'slogan', 'logo', 'twitter_handle',  'facebook_handle', 'instagram_handle', 'whatsapp_handle'];

     public function getLogoUrlAttribute()
     {
          return ($this->logo && Storage::disk('local')->exists('site/'.$this->logo)) ? route('show.image', 'site/'.$this->logo) : null;
     }
}
