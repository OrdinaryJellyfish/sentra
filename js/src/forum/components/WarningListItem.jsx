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

import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';
import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';
import app from 'flarum/forum/app';

export default class WarningListItem extends Component {
  view() {
    const { warning } = this.attrs;
    const actor = warning.actor();
    const severity = warning.severity();
    const reason = warning.reason();
    const createdAt = warning.createdAt();
    const expiresAt = warning.expiresAt();

    const severityLabel = {
      1: app.translator.trans('ordinaryjellyfish-sentra.forum.warn.severity_low'),
      2: app.translator.trans('ordinaryjellyfish-sentra.forum.warn.severity_medium'),
      3: app.translator.trans('ordinaryjellyfish-sentra.forum.warn.severity_high'),
    }[severity];

    return (
      <tr>
        <td>
          <Link href={actor ? app.route.user(actor) : '#'}>
            {avatar(actor)} {username(actor)}
          </Link>
        </td>
        <td>{severityLabel}</td>
        <td>{reason}</td>
        <td>{humanTime(createdAt)}</td>
        <td>{expiresAt ? dayjs(expiresAt).fromNow() : app.translator.trans('ordinaryjellyfish-sentra.forum.warning_page.no_expiry')}</td>
      </tr>
    );
  }
}
