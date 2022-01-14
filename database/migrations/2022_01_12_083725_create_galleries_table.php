<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGalleriesTable extends Migration
{
     /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
          Schema::create('galleries', function (Blueprint $table) {
               $table->id();
               $table->string('identifier')->nullable(false);
               $table->string('url')->nullable(false);
               $table->foreignId('user_id')->constrained();
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
          Schema::dropIfExists('galleries');
     }
}
