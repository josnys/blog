<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\SiteService;
use Inertia\Inertia;

class SiteMenuController extends Controller
{
     protected $site_service;

     public function __construct(SiteService $site_service)
     {
          $this->site_service = $site_service;
     }

     public function resolveMenu(Request $request)
     {
          try {
               $search_keys = $this->site_service->getValidSegment($request->segments());
               $categories = $this->site_service->resolveMenu($search_keys);
               if(count($categories) == 0){
                    return redirect()->back()->with('warning', 'No data found.');
               }
               $data = $this->site_service->getAllMenuPostProduct($categories);
               return Inertia::render('MenuPage', ['info' => [
                    'page_title' => $categories[0]['name'],
                    'categories' => $categories,
                    'data' => $data
               ]]);
          } catch (\Exception $e) {
               info($e);
               return redirect()->back()->with('error', 'Unable to resolve your request, please try another time.');
          }
     }

     public function resolveFirstLevel()
     {
          // code...
     }
}
