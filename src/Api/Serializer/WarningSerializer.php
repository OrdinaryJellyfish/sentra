<?php

namespace OrdinaryJellyfish\Sentra\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\PostSerializer;
use OrdinaryJellyfish\Sentra\Warning;
use Flarum\Api\Serializer\BasicUserSerializer;
use InvalidArgumentException;

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
        if (!($warning instanceof Warning)) {
            throw new InvalidArgumentException(
                get_class($this) . ' can only serialize instances of ' . Warning::class
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
