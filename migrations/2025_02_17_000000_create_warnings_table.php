<?php

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return Migration::createTable(
    'warnings',
    function (Blueprint $table) {
        $table->increments('id');
        $table->integer('post_id')->unsigned();
        $table->integer('user_id')->unsigned();
        $table->integer('actor_id')->unsigned();
        $table->string('reason');
        $table->boolean('active')->default(true);
        $table->timestamps();

        $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        $table->foreign('actor_id')->references('id')->on('users')->onDelete('cascade');
    }
);

