<?php

namespace OrdinaryJellyfish\Sentra;

use Carbon\Carbon;
use Flarum\User\User;
use Flarum\Post\Post;
use Illuminate\Database\Eloquent\Builder;
use OrdinaryJellyfish\Sentra\Warning;

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
