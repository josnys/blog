<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDescriptionFieldToSettingsTable extends Migration
{
     /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
          Schema::table('settings', function (Blueprint $table) {
               $table->longText('description')->after('logo')->nullable();
          });
     }

     /**
     * Reverse the migrations.
     *
     * @return void
     */
     public function down()
     {
          Schema::table('settings', function (Blueprint $table) {
               $table->dropColumn('description');
          });
     }
}
