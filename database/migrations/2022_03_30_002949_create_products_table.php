<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
     /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
          Schema::create('products', function (Blueprint $table) {
               $table->id();
               $table->foreignId('category_id')->constrained();
               $table->foreignId('sub_category_id')->constrained();
               $table->foreignId('user_id')->constrained();
               $table->string('slug')->nullable(false);
               $table->foreignId('media_id')->nullable();
               $table->foreignId('gallery_id')->nullable();
               $table->string('currency')->nullable();
               $table->decimal('price', 12,2)->default(0);
               $table->boolean('is_active')->default(false);
               $table->boolean('is_published')->default(false);
               $table->timestamps();
               $table->softDeletes();
          });
     }

     /**
     * Reverse the migrations.
     *
     * @return void
     */
     public function down()
     {
          Schema::dropIfExists('products');
     }
}
