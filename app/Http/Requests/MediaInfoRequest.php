<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MediaInfoRequest extends FormRequest
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
               'lang' => ['required', 'numeric'],
               'title' => ['required', 'string', 'max:80'],
               'description' => ['nullable', 'sometimes', 'string']
          ];
     }
}
