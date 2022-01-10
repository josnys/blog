<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaInfosTable extends Migration
{
     /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
          Schema::create('media_infos', function (Blueprint $table) {
               $table->id();
               $table->foreignId('media_id')->constrained();
               $table->foreignId('language_id')->constrained();
               $table->string('title')->nullable(false);
               $table->text('description')->nullable();
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
          Schema::dropIfExists('media_infos');
     }
}
