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

import { extend } from 'flarum/extend';
import UserPage from 'flarum/components/UserPage';
import LinkButton from 'flarum/components/LinkButton';
import WarningsPage from './components/WarningsPage';
import app from 'flarum/forum/app';

export default function () {
  app.routes['user.warnings'] = {
    path: '/u/:username/warnings',
    component: WarningsPage,
  };

  extend(UserPage.prototype, 'navItems', function (items) {
    if (app.session.user && app.session.user.canViewWarnings()) {
      items.add(
        'warnings',
        LinkButton.component(
          {
            href: app.route('user.warnings', { username: this.user.slug() }),
            icon: 'fas fa-exclamation-triangle',
          },
          app.translator.trans('ordinaryjellyfish-sentra.forum.warnings')
        )
      )
    }
  })
}
