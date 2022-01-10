<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LanguageRequest extends FormRequest
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
          $rules = [
               'name' => ['required', 'string', 'max:30'],
               'flag' => ['nullable', 'sometimes', 'image', 'max:2048', 'mimes:jpeg,jpg,png'],
               'status' => ['required', 'boolean']
          ];

          if(request()->has('current_code') && (request()->get('current_code') == request()->get('code'))){
               $rules['code'] = ['required', 'string', 'max:5'];
          }else{
               $rules['code'] = ['required', 'string', 'unique:languages', 'max:5'];
          }
          return $rules;
     }
}
