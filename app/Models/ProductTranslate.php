<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductTranslate extends Model
{
     use HasFactory;

     protected $fillable = ['product_id', 'language_id', 'name', 'short_description', 'description'];

     public function language()
     {
          return $this->belongsTo(Language::class, 'language_id', 'id');
     }
}
