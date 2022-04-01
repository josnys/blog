<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
     /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
     public function authorize()
     {
          return true;
     }

     /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
     public function rules()
     {
          return [
               'detail' => ['nullable', 'sometimes', 'numeric', 'gt:0'],
               'category' => ['required', 'integer', 'gt:0'],
               'subcategory' => ['required', 'integer', 'gt:0'],
               'language' => ['required', 'integer', 'gt:0'],
               'cover' => ['nullable', 'sometimes', 'numeric', 'gt:0'],
               'name' => ['required', 'string'],
               'short_des' => ['nullable', 'sometimes', 'string', 'max:200'],
               'description' => ['nullable', 'sometimes', 'string'],
               'gallery' => ['nullable', 'sometimes', 'integer', 'gt:0'],
               'currency' => ['exclude_if:price,null', 'string', 'max:3'],
               'price' => ['sometimes', 'numeric'],
               'active' => ['required', 'boolean'],
               'publish' => ['required', 'boolean'],
          ];
    }
}
