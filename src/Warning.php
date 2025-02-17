<?php

namespace OrdinaryJellyfish\Sentra;

use Flarum\Database\AbstractModel;
use Flarum\Database\ScopeVisibilityTrait;
use Flarum\Post\Post;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Carbon\Carbon;

/**
 * @property int $post_id
 * @property int $user_id
 * @property int $actor_id
 * @property string $reason
 * @property bool $active
 * @property Carbon $created_at
 *
 * @property-read Post $post
 * @property-read User $user
 * @property-read User $actor
 */
class Warning extends AbstractModel
{
    use ScopeVisibilityTrait;

    protected $table = 'warnings';

    protected $dates = ['created_at'];

    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function actor(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
