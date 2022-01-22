<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostDetailsTable extends Migration
{
     /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
          Schema::create('post_details', function (Blueprint $table) {
               $table->id();
               $table->foreignId('post_id')->constrained();
               $table->foreignId('language_id')->constrained();
               $table->string('title')->nullable(false);
               $table->text('intro')->nullable();
               $table->longText('content')->nullable();
               $table->bigInteger('gallery_id')->nullable();
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
          Schema::dropIfExists('post_details');
     }
}
