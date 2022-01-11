<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubCategoriesTable extends Migration
{
     /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
          Schema::create('sub_categories', function (Blueprint $table) {
               $table->id();
               $table->foreignId('category_id')->constrained();
               $table->string('url')->unique();
               $table->boolean('show_sub_menu')->default(false);
               $table->boolean('is_active')->default(false);
               $table->timestamps();
          });
     }

     /**
     * Reverse the migrations.
     *
     * @return void
     */
     public function down()
     {
          Schema::dropIfExists('sub_categories');
     }
}
