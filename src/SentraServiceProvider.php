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

namespace OrdinaryJellyfish\Sentra;

use Flarum\Foundation\AbstractServiceProvider;

class SentraServiceProvider extends AbstractServiceProvider
{
    public function register()
    {
        $this->container->singleton('ordinaryjellyfish-sentra.modules.post-analysis.services', function () {
            return [
                Services\ContentSafety::class,
            ];
        });

        $this->container->singleton('ordinaryjellyfish-sentra.modules.post-analysis', function () {
            return [
                Modules\PostShield::class,
            ];
        });
    }
}
