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

namespace OrdinaryJellyfish\Sentra\Api;

use Carbon\Carbon;
use OrdinaryJellyfish\Sentra\Warning;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class AddUserAttributes
{
    public function __invoke(BasicUserSerializer $serializer, User $user, array $attributes)
    {
        $attributes['warningCount'] = Warning::where('user_id', $user->id)
            ->where(function (Builder $query) {
                $query
                    ->whereNull('expires_at')
                    ->orWhere('expires_at', '>', Carbon::now());
            })
            ->count();
        $attributes['canViewOwnWarnings'] = $serializer->getActor()->hasPermission('ordinaryjellyfish-sentra.view_own_warnings');
        $attributes['canViewWarnings'] = $serializer->getActor()->hasPermission('ordinaryjellyfish-sentra.view_warnings');
        $attributes['canDeleteWarnings'] = $serializer->getActor()->hasPermission('ordinaryjellyfish-sentra.delete_warnings');

        return $attributes;
    }
}
