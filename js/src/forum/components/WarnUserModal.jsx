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
import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import Stream from 'flarum/common/utils/Stream';
import withAttr from 'flarum/common/utils/withAttr';
import ItemList from 'flarum/common/utils/ItemList';

export default class WarnUserModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.reason = Stream('');
  }

  className() {
    return 'Modal--medium';
  }

  title() {
    return app.translator.trans('ordinaryjellyfish-sentra.forum.warn.title');
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group">
            <textarea
              className="FormControl"
              placeholder={app.translator.trans('ordinaryjellyfish-sentra.forum.warn.reason_placeholder')}
              value={this.reason()}
              oninput={withAttr('value', this.reason)}
              required
            />
          </div>
          <div className="Form-group">
            <Button className="Button Button--primary Button--block" type="submit" loading={this.loading} disabled={!this.reason()}>
              {app.translator.trans('ordinaryjellyfish-sentra.forum.warn.title')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();

    this.loading = true;

    app.store
      .createRecord('warnings')
      .save(
        {
          reason: this.reason(),
          relationships: {
            user: this.attrs.post.data.relationships.user,
            actor: app.session.user,
            post: this.attrs.post,
          },
        },
        { errorHandler: this.onerror.bind(this) }
      )
      .then(() => this.hide())
      .then(this.loaded.bind(this));
  }
}
