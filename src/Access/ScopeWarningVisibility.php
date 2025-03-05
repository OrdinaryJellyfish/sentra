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

namespace OrdinaryJellyfish\Sentra\Access;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class ScopeWarningVisibility
{
    public function __invoke(User $actor, Builder $query): void
    {
        $query->where(function (Builder $query) use ($actor) {
            $query->whereHas('post', function (Builder $query) use ($actor) {
                $query->whereVisibleTo($actor);
            });

            if (! $actor->hasPermission('ordinaryjellyfish-sentra.view_warnings')) {
                $query->where('user_id', $actor->id);
            }
        });
    }
}
