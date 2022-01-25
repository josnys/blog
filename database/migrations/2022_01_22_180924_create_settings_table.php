<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
     /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
          Schema::create('settings', function (Blueprint $table) {
               $table->id();
               $table->string('name')->nullable(false);
               $table->string('slogan')->nullable();
               $table->string('logo')->nullable();
               $table->string('twitter_handle')->nullable();
               $table->string('facebook_handle')->nullable();
               $table->string('instagram_handle')->nullable();
               $table->string('whatsapp_handle')->nullable();
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
          Schema::dropIfExists('settings');
     }
}
