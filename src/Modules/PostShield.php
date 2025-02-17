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

namespace OrdinaryJellyfish\Sentra\Modules;

use Flarum\Post\Post;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Locale\Translator;
use Flarum\User\User;
use OrdinaryJellyfish\Sentra\ModuleUtils;

class PostShield implements ModuleInterface
{
  private SettingsRepositoryInterface $settings;
  private Translator $translator;
  private ModuleUtils $moduleUtils;

  public function __construct(SettingsRepositoryInterface $settings, Translator $translator, ModuleUtils $moduleUtils)
  {
    $this->settings = $settings;
    $this->translator = $translator;
    $this->moduleUtils = $moduleUtils;
  }

  public function getKey(): string
  {
    return 'post_shield';
  }

  public function getDependencies(): array
  {
    return ['content_safety'];
  }

  public function handle(array $data, Post $post, User $user)
  {
    $harmCategories = ['Hate', 'Sexual', 'SelfHarm', 'Violence'];
    $enabledHarmCategories = [];

    foreach ($harmCategories as $harmCategory) {
      if ((bool) $this->settings->get('ordinaryjellyfish-sentra.modules.post_shield.categories.' . $harmCategory . '.enabled')) {
        $enabledHarmCategories[] = $harmCategory;
      }
    }

    if (count($enabledHarmCategories) > 0) {
      $postCategories = $data['harmCategories'];

      $highestSeverity = 0;
      $flagReason = null;

      foreach ($enabledHarmCategories as $category) {
        $severity = $postCategories[$category] ?? 0;
        $threshold = (int) $this->settings->get('ordinaryjellyfish-sentra.modules.post_shield.categories.' . $category . '.severity');

        if ($severity >= $threshold && $severity > $highestSeverity) {
          $highestSeverity = $severity;
          $flagReason = $category;
        }
      }

      if ($flagReason) {
        $this->moduleUtils->unapproveAndFlag($post, $this->translator->trans('ordinaryjellyfish-sentra.lib.post_shield.' . $flagReason));
      }
    }
  }
}