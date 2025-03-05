<?php

/*
 * Sentra - Intelligent community management and moderation for Flarum.
 * Copyright (C) 2025  Tristian Kelly <me@ordinaryjellyfish.xyz>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

namespace OrdinaryJellyfish\Sentra;

use Flarum\Api\Serializer\PostSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend;
use Flarum\Post\Event\Saving;
use Flarum\User\User;

return [
    (new Extend\ServiceProvider())
        ->register(SentraServiceProvider::class),

    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Model(User::class))
        ->hasMany('warnings', Warning::class, 'user_id'),

    (new Extend\ApiSerializer(PostSerializer::class))
        ->attribute('canWarn', function (PostSerializer $serializer) {
            return $serializer->getActor()->hasPermission('ordinaryjellyfish-sentra.create_warnings');
        }),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(Api\AddUserAttributes::class),

    (new Extend\ModelVisibility(Warning::class))
        ->scope(Access\ScopeWarningVisibility::class),

    (new Extend\Routes('api'))
        ->get('/warnings/{user_id}', 'warnings.index', Api\Controller\ListWarningsController::class)
        ->post('/warnings', 'warnings.create', Api\Controller\CreateWarningController::class)
        ->delete('/warnings/{id}', 'warnings.delete', Api\Controller\DeleteWarningController::class),

    (new Extend\Event())
        ->listen(Saving::class, Listeners\RunPostAnalysisModules::class),
];
