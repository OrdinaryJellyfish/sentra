<?php

namespace OrdinaryJellyfish\Sentra\Command;

use Flarum\User\User;

class DeleteWarning
{
    /**
     * @var int
     */
    public $modelId;

    /**
     * @var \Flarum\User\User
     */
    public $actor;

    /**
     * @var array
     */
    public $data;

    public function __construct($modelId, User $actor, array $data)
    {
        $this->modelId = $modelId;
        $this->actor = $actor;
        $this->data = $data;
    }
}
