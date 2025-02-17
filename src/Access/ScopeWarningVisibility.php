<?php

namespace OrdinaryJellyfish\Sentra\Access;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class ScopeWarningVisibility
{
    public function __invoke(User $actor, Builder $query): void
    {
        $query->where(function (Builder $query) use ($actor) {
            if ($actor->hasPermission('ordinaryjellyfish-sentra.view_warnings')) {
                $query->whereHas('post', function (Builder $query) use ($actor) {
                    $query->whereVisibleTo($actor);
                });
            } else {
                $query->whereRaw('1 = 0');
            }
        });
    }
}