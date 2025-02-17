<?php

use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'ordinaryjellyfish-sentra.view_warnings' => Group::MODERATOR_ID,
    'ordinaryjellyfish-sentra.create_warnings' => Group::MODERATOR_ID
]);
