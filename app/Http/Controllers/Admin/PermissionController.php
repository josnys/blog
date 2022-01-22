<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\PermissionRequest;
use App\Models\Permission;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class PermissionController extends Controller
{
     public function create()
     {
          try {
               $permissions = Permission::paginate(50)->transform(function($permission){
                    return [
                         'id' => $permission->id,
                         'name' => $permission->name,
                         'display' => $permission->display_name,
                         'description' => $permission->description
                    ];
               });
               return Inertia::render('Admin/Security/CreatePermission', ['info' => $permissions]);
          } catch (\Exception $e) {
               Log::error('Permission create', ['data' => $e]);
               return redirect()->back()->with('error', Permission::serverError());
          }
     }

     public function store(PermissionRequest $request)
     {
          try {
               $permission = new Permission;
               $permission->name = $request->get('name');
               $permission->display_name = $request->get('display');
               $permission->description = $request->get('description');
               $permission->save();

               return redirect()->back()->with('success', 'Permission created successfully.');
          } catch (\Exception $e) {
               Log::error('Permission store', ['data' => $e]);
               return redirect()->back()->with('error', Permission::serverError());
          }
     }

     public function edit(Permission $permission)
     {
          try {
               return Inertia::render('Admin/Security/EditPermission', ['info' => [
                    'id' => $permission->id,
                    'name' => $permission->name,
                    'display' => $permission->display_name,
                    'description' => $permission->description
               ]]);
          } catch (\Exception $e) {
               Log::error('Permission edit', ['data' => $e]);
               return redirect()->back()->with('error', Permission::serverError());
          }
     }

     public function update(PermissionRequest $request, Permission $permission)
     {
          try {
               $permission->display_name = $request->get('display');
               $permission->description = $request->get('description');
               $permission->update();

               return redirect()->route('admin.permission.create')->with('success', 'Permission Updated.');
          } catch (\Exception $e) {
               Log::error('Permission update', ['data' => $e]);
               return redirect()->back()->with('error', Permission::serverError());
          }
     }
}
