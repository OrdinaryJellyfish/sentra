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

use Carbon\Carbon;
use Flarum\Post\Post;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class WarningRepository
{
    /**
     * @return Builder
     */
    public function query()
    {
        return Warning::query();
    }

    /**
     * @param int $id
     * @param User $actor
     * @return Warning
     */
    public function findOrFail($id, User $actor = null): Warning
    {
        return Warning::findOrFail($id);
    }

    public function warn(Post $post, string $reason)
    {
        $post->afterSave(function (Post $post) use ($reason) {
            $warning = new Warning();
            $warning->user_id = $post->user_id;
            $warning->post_id = $post->id;
            $warning->actor_id = app('flarum.settings')->get('ordinaryjellyfish-sentra.bot_id');
            $warning->reason = $reason;
            $warning->created_at = Carbon::now();

            $warning->save();
        });
    }
}
