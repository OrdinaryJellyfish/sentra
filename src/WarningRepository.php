<?php

namespace OrdinaryJellyfish\Sentra;

use Flarum\User\User;
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
}
