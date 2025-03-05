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

import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Placeholder from 'flarum/common/components/Placeholder';
import WarningListItem from './WarningListItem';

export default class WarningList extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.loading = true;
    this.warnings = [];
    this.user = this.attrs.user;
    this.refresh();
  }

  view() {
    let loading;

    if (this.loading) {
      loading = <LoadingIndicator size="large" />;
    }

    if (this.warnings.length === 0) {
      return <Placeholder text={app.translator.trans('ordinaryjellyfish-sentra.forum.warning_page.empty_text')} />;
    }

    return (
      <div>
        <table className="WarningList">
          <thead>
            <tr>
              <th>{app.translator.trans('ordinaryjellyfish-sentra.forum.warning_page.issued_by')}</th>
              <th>{app.translator.trans('ordinaryjellyfish-sentra.forum.warning_page.severity')}</th>
              <th>{app.translator.trans('ordinaryjellyfish-sentra.forum.warning_page.reason')}</th>
              <th>{app.translator.trans('ordinaryjellyfish-sentra.forum.warning_page.created')}</th>
              <th>{app.translator.trans('ordinaryjellyfish-sentra.forum.warning_page.expires')}</th>
            </tr>
          </thead>
          <tbody>
            {this.warnings.map((warning) => (
              <WarningListItem key={warning.id()} warning={warning} />
            ))}
          </tbody>
        </table>
        {loading}
      </div>
    );
  }

  refresh() {
    return app.store.find('warnings', this.user.id()).then((warnings) => {
      this.warnings = warnings;
      this.loading = false;
      m.redraw();
    });
  }
}
