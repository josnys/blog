<?php

namespace App\Actions\Image;

use Illuminate\Support\Facades\Storage;
use Image;

class ImageManipulationAction
{
     public function handle($file, string $path): array
     {
          try {
               $mediaPath = $file->store($path);
               $mediaName = explode('/', $mediaPath)[(count(explode('/', $mediaPath)) - 1)];
               $thumbPath = $file->storeAs("$path/thumbnails", $mediaName);

               $thumbnail = Image::make(storage_path("app/$thumbPath"));
               $thumbnail->resize(300, 300, function($constraint){
                    $constraint->aspectRatio();
               })->save();

               return [
                    'name' => $mediaName,
                    'mime' => $file->getMimeType()
               ];
          } catch (\Exception $e) {
               info($e);
          }
     }
}
