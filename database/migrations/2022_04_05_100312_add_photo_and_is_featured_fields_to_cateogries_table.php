<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPhotoAndIsFeaturedFieldsToCateogriesTable extends Migration
{
     /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
          Schema::table('categories', function (Blueprint $table) {
               $table->string('photo')->after('url')->nullable();
               $table->boolean('is_featured')->after('show_menu')->default(false);
          });
     }

     /**
     * Reverse the migrations.
     *
     * @return void
     */
     public function down()
     {
          Schema::table('categories', function (Blueprint $table) {
               $table->dropColumn(['photo', 'is_featured']);
          });
     }
}
