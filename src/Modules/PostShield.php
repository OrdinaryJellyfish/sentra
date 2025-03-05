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

use Carbon\Carbon;
use Flarum\Locale\Translator;
use Flarum\Post\Post;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use OrdinaryJellyfish\Sentra\ModuleUtils;
use OrdinaryJellyfish\Sentra\Severity;
use OrdinaryJellyfish\Sentra\WarningRepository;

class PostShield implements ModuleInterface
{
    private WarningRepository $warnings;
    private SettingsRepositoryInterface $settings;
    private Translator $translator;
    private ModuleUtils $moduleUtils;

    public function __construct(WarningRepository $warnings, SettingsRepositoryInterface $settings, Translator $translator, ModuleUtils $moduleUtils)
    {
        $this->warnings = $warnings;
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
            if ((bool) $this->settings->get('ordinaryjellyfish-sentra.modules.post_shield.categories.'.$harmCategory.'.enabled')) {
                $enabledHarmCategories[] = $harmCategory;
            }
        }

        if (count($enabledHarmCategories) > 0) {
            $postCategories = $data['harmCategories'];

            $flaggedCategories = [];
            $highestSeverity = 0;
            $flagReason = null;

            foreach ($enabledHarmCategories as $category) {
                $severity = $postCategories[$category] ?? 0;
                $threshold = (int) $this->settings->get('ordinaryjellyfish-sentra.modules.post_shield.categories.'.$category.'.severity');

                if ($severity >= $threshold) {
                    $flaggedCategories[] = [
                        'category' => $category,
                        'severity' => $severity,
                    ];

                    if ($severity > $highestSeverity) {
                        $highestSeverity = $severity;
                        $flagReason = $category;
                    }
                }
            }

            if ($flagReason) {
                $translatedCategories = array_map(function ($category) {
                    return $this->translator->trans('ordinaryjellyfish-sentra.lib.post_shield.'.$category);
                }, array_column($flaggedCategories, 'category'));

                $translatedSeverities = array_map(function ($severity) {
                    switch ($severity) {
                        case 2:
                            return $this->translator->trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.severity_level_low');
                        case 4:
                            return $this->translator->trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.severity_level_medium');
                        case 6:
                            return $this->translator->trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.severity_level_high');
                        default:
                            return $this->translator->trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.severity_level_unknown');
                    }
                }, array_column($flaggedCategories, 'severity'));

                $flagDetail = $this->translator->trans('ordinaryjellyfish-sentra.forum.flag_detail', [
                    'categories' => implode(', ', $translatedCategories),
                    'severities' => implode(', ', $translatedSeverities)
                ]);

                $this->moduleUtils->unapproveAndFlag($post, $this->translator->trans('ordinaryjellyfish-sentra.lib.post_shield.'.$flagReason), $flagDetail);

                $warningSeverity = match ($highestSeverity) {
                    2 => Severity::LOW,
                    4 => Severity::MEDIUM,
                    6 => Severity::HIGH,
                    default => Severity::LOW,
                };

                $this->warnings->warn($post, [
                    'reason' => $flagDetail,
                    'severity' => $warningSeverity->value,
                    'expires_at' => Carbon::now()->addDays(14),
                ]);
            }
        }
    }
}
