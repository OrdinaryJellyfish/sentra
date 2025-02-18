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

namespace OrdinaryJellyfish\Sentra\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\PostSerializer;
use InvalidArgumentException;
use OrdinaryJellyfish\Sentra\Warning;

class WarningSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'warnings';

    /**
     * {@inheritdoc}
     *
     * @param Warning $model
     * @throws InvalidArgumentException
     */
    protected function getDefaultAttributes($warning)
    {
        if (! ($warning instanceof Warning)) {
            throw new InvalidArgumentException(
                get_class($this).' can only serialize instances of '.Warning::class
            );
        }

        return [
            'id' => $warning->id,
            'reason' => $warning->reason,
            'active' => $warning->active,
            'createdAt' => $this->formatDate($warning->created_at),
        ];
    }

    protected function post($warning)
    {
        return $this->hasOne($warning, PostSerializer::class);
    }

    protected function user($warning)
    {
        return $this->hasOne($warning, BasicUserSerializer::class);
    }

    protected function actor($warning)
    {
        return $this->hasOne($warning, BasicUserSerializer::class);
    }
}
