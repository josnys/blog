<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryTranslate extends Model
{
     use HasFactory;

     protected $fillable = ['category_id', 'language_id', 'name'];

     public function lang()
     {
          return $this->belongsTo(Language::class, 'language_id', 'id');
     }
}
