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

import app from 'flarum/admin/app';
import SettingsPage from './components/SettingsPage';
import BotConfigPage from './components/BotConfigPage';

app.initializers.add('ordinaryjellyfish/sentra', () => {
  app.extensionData
    .for('ordinaryjellyfish-sentra')
    .registerPage(app.data.settings['ordinaryjellyfish-sentra.bot_id'] ? SettingsPage : BotConfigPage)
    .registerPermission(
      {
        icon: 'fas fa-shield-alt',
        label: app.translator.trans('ordinaryjellyfish-sentra.admin.permissions.bypass'),
        permission: 'ordinaryjellyfish-sentra.bypass',
      },
      'moderate'
    )
    .registerPermission(
      {
        icon: 'fas fa-shield-alt',
        label: app.translator.trans('ordinaryjellyfish-sentra.admin.permissions.create_warnings'),
        permission: 'ordinaryjellyfish-sentra.create_warnings',
      },
      'moderate'
    )
    .registerPermission(
      {
        icon: 'fas fa-shield-alt',
        label: app.translator.trans('ordinaryjellyfish-sentra.admin.permissions.view_warnings'),
        permission: 'ordinaryjellyfish-sentra.view_warnings',
      },
      'moderate'
    )
    .registerPermission(
      {
        icon: 'fas fa-shield-alt',
        label: app.translator.trans('ordinaryjellyfish-sentra.admin.permissions.delete_warnings'),
        permission: 'ordinaryjellyfish-sentra.delete_warnings',
      },
      'moderate'
    )
});
