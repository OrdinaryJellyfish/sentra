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

namespace OrdinaryJellyfish\Sentra\Extend;

use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Illuminate\Contracts\Container\Container;

class Attributes implements ExtenderInterface
{
    private string $moduleType;
    private array $attributes = [];

    public function __construct(string $moduleType)
    {
        $this->moduleType = $moduleType;
    }

    public function add($attribute)
    {
        $this->attributes[] = $attribute;

        return $this;
    }

    public function extend(Container $container, Extension $extension = null)
    {
        $container->extend('ordinaryjellyfish-sentra.modules.'.$this->moduleType.'.attributes', function ($existingAttributes) {
            foreach ($this->attributes as $attribute) {
                $existingAttributes[] = $attribute;
            }

            return $existingAttributes;
        });
    }
}
