<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
     /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
          Schema::create('posts', function (Blueprint $table) {
               $table->id();
               $table->bigInteger('category_id')->nullable();
               $table->bigInteger('sub_category_id')->nullable();
               $table->bigInteger('media_id')->nullable();
               $table->string('slug')->nullable(false);
               $table->foreignId('user_id')->constrained();
               $table->boolean('show_in_home')->default(false);
               $table->boolean('show_in_menu')->default(false);
               $table->boolean('is_active')->default(false);
               $table->timestamp('published_at', $precision = 0)->nullable();
               $table->timestamp('archived_at', $precision = 0)->nullable();
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
          Schema::dropIfExists('posts');
     }
}
