<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
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
               'category' => ['nullable', 'sometimes', 'numeric', 'gt:0'],
               'subcategory' => ['nullable', 'sometimes', 'numeric', 'gt:0'],
               'cover' => ['nullable', 'sometimes', 'numeric', 'gt:0'],
               'show_home' => ['required', 'boolean'],
               'show_menu' => ['required', 'boolean'],
               'status' => ['required', 'boolean'],
               'publish' => ['required', 'boolean'],
               'language' => ['required', 'numeric', 'gt:0'],
               'title' => ['required', 'string'],
               'intro' => ['nullable', 'sometimes', 'string'],
               'body' => ['nullable', 'sometimes', 'string'],
               'gallery' => ['nullable', 'sometimes', 'numeric', 'gt:0'],
          ];
     }
}
