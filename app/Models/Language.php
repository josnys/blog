<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Language extends Model
{
     use HasFactory, SoftDeletes;

     protected $fillable = ['code', 'name', 'flag', 'is_active'];

     public function getFlagUrlAttribute()
     {
          return ($this->flag && Storage::disk('local')->exists('language/'.$this->flag)) ? route('show.image', 'language/'.$this->flag) : null;
     }

     public function scopeActive($query)
     {
          return $query->where('is_active', true);
     }
}
