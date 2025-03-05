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
use Flarum\Flags\Flag;
use Flarum\Post\Post;

class ModuleUtils
{
    public function unapproveAndFlag(Post $post, string $type, string $details = null)
    {
        $post->is_approved = false;

        $post->afterSave(function (Post $post) use ($type, $details) {
            $flags = $post->flags();

            if ($flags->where('type', 'sentra')->doesntExist()) {
                $flag = new Flag();
                $flag->post_id = $post->id;
                $flag->type = 'sentra';
                $flag->reason = $type;
                $flag->reason_detail = $details;
                $flag->created_at = Carbon::now();
                $flag->save();
            }
        });
    }
}
