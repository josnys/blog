<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SettingRequest extends FormRequest
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
               'name' => ['required', 'string', 'max:80'],
               'slogan' => ['nullable', 'sometimes', 'string'],
               'logo' => ['nullable', 'sometimes', 'image', 'max:2048', 'mimes:jpg,jpeg,png,gif,svg'],
               'description' => ['nullable', 'sometimes', 'string'],
               'twitter' => ['nullable', 'sometimes', 'string'],
               'facebook' => ['nullable', 'sometimes', 'string'],
               'instagram' => ['nullable', 'sometimes', 'string'],
               'whatsapp' => ['nullable', 'sometimes', 'string'],
          ];
     }
}
