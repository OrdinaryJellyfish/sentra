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

namespace OrdinaryJellyfish\Sentra\Command;

use Carbon\Carbon;
use Flarum\Foundation\ValidationException;
use Flarum\Locale\Translator;
use Flarum\Post\PostRepository;
use Flarum\User\UserRepository;
use Illuminate\Support\Arr;
use OrdinaryJellyfish\Sentra\Warning;

class CreateWarningHandler
{
    private UserRepository $users;
    private PostRepository $posts;
    private Translator $translator;

    public function __construct(UserRepository $users, PostRepository $posts, Translator $translator)
    {
        $this->users = $users;
        $this->posts = $posts;
        $this->translator = $translator;
    }

    public function handle(CreateWarning $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $userId = Arr::get($data, 'relationships.user.data.id');
        $user = $this->users->findOrFail($userId, $actor);
        $postId = Arr::get($data, 'relationships.post.data.id');
        $post = $this->posts->findOrFail($postId, $actor);

        $actor->assertCan('warn');

        if (Arr::get($data, 'attributes.reason') === null) {
            throw new ValidationException([
                'message' => $this->translator->trans('ordinaryjellyfish-sentra.forum.warn.reason_missing')
            ]);
        }

        Warning::unguard();

        $warning = Warning::firstOrNew([
            'user_id' => $user->id,
            'post_id' => $post->id,
            'actor_id' => $actor->id,
        ]);

        $warning->user_id = $user->id;
        $warning->post_id = $post->id;
        $warning->actor_id = $actor->id;
        $warning->reason = Arr::get($data, 'attributes.reason');
        $warning->created_at = Carbon::now();

        $warning->save();

        return $warning;
    }
}
