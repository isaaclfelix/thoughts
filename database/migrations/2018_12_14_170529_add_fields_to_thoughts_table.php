<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsToThoughtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('thoughts', function(Blueprint $table) {
            // User
            $table->bigInteger('author');
            // Situation
            $table->text('situation');
            // Automated Thoughts
            $table->longText('automated_thoughts');
            // Actions
            $table->longText('actions');
            // Emotions
            $table->text('emotions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('thoughts', function(Blueprint $table) {
            // User
            $table->dropColumn('author');
            // Situation
            $table->dropColumn('situation');
            // Automated Thoughts
            $table->dropColumn('automated_thoughts');
            // Actions
            $table->dropColumn('actions');
            // Emotions
            $table->dropColumn('emotions');
        });
    }
}
