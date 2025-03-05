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

namespace OrdinaryJellyfish\Sentra\Listeners;

use Flarum\Post\Event\Saving;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Container\Container;

class RunPostAnalysisModules
{
    private Container $container;
    private SettingsRepositoryInterface $settings;

    public function __construct(Container $container, SettingsRepositoryInterface $settings)
    {
        $this->container = $container;
        $this->settings = $settings;
    }

    public function handle(Saving $event)
    {
        if ($event->actor->hasPermission('ordinaryjellyfish-sentra.bypass')) {
            return;
        }

        $modules = $this->container->make('ordinaryjellyfish-sentra.modules.post-analysis');

        foreach ($modules as $module) {
            $module = $this->container->make($module);

            if ($this->areDependenciesEnabled($module->getDependencies())) {
                $module->handle($event->post, $event->actor);
            }
        }
    }

    private function areDependenciesEnabled(array $dependencies): bool
    {
        foreach ($dependencies as $dependency) {
            if (! $this->settings->get('ordinaryjellyfish-sentra.services.'.$dependency.'.enabled')) {
                return false;
            }
        }

        return true;
    }
}
