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
import saveSettings from 'flarum/admin/utils/saveSettings';
import { SaveSubmitEvent } from 'flarum/admin/components/AdminPage';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Button from 'flarum/common/components/Button';
import Group from 'flarum/common/models/Group';
import Stream from 'flarum/common/utils/Stream';
import type { Vnode } from 'mithril';

export default class BotConfigPage extends ExtensionPage {
  username: Stream<string>;

  oninit(vnode: Vnode) {
    super.oninit(vnode);

    this.username = Stream();
  }

  content() {
    return (
      <div className="ExtensionPage-settings">
        <div className="container">
          <h1>{app.translator.trans('ordinaryjellyfish-sentra.admin.welcome')}</h1>
          <p className="sentra-text-lg">{app.translator.trans('ordinaryjellyfish-sentra.admin.welcome_description')}</p>
          <div className="Form">
            <div className="Form-group">
              <label for="botUsername">{app.translator.trans('ordinaryjellyfish-sentra.admin.bot_username')}</label>
              <p className="helpText">{app.translator.trans('ordinaryjellyfish-sentra.admin.bot_username_help')}</p>
              <input className="FormControl" spellcheck="false" type="text" id="botUsername" bidi={this.username} required />
            </div>
            <div className="Form-group">
              <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary" loading={this.loading} disabled={!this.username()}>
                {app.translator.trans('ordinaryjellyfish-sentra.admin.create_bot')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  sections(vnode: Vnode) {
    const items = super.sections(vnode);

    items.remove('permissions');

    return items;
  }

  saveSettings(e: SaveSubmitEvent) {
    e.preventDefault();

    app.alerts.clear();

    this.loading = true;

    return app
      .request({
        url: app.forum.attribute('apiUrl') + '/users',
        method: 'POST',
        body: {
          data: {
            attributes: {
              username: this.username(),
              email: `${this.username()}@sentra.sentra`,
              password: this.generateSecureString(),
              isEmailConfirmed: true,
            },
          },
        },
      })
      .then(async (res) => {
        const { id } = (res as { data: { id: string } }).data;

        // Generate a cute avatar for our new bot!
        const avatar = await fetch(`https://api.dicebear.com/9.x/bottts-neutral/png?seed=${this.username()}`).then((res) => res.blob());

        const data = new FormData();
        data.append('avatar', avatar);

        await app.request({
          url: app.forum.attribute('apiUrl') + `/users/${id}/avatar`,
          method: 'POST',
          body: data,
          serialize: (raw: any) => raw,
        });

        // Grant admin permissions to our cute new bot
        await app.store.find('users', id);
        await app.store.getById('users', id)!.save({
          relationships: {
            groups: [app.store.getById('groups', Group.ADMINISTRATOR_ID)!],
          },
        });

        this.setting('ordinaryjellyfish-sentra.bot_id')(id);

        await saveSettings(this.dirty());
        window.location.reload();
      })
      .then(this.onsaved.bind(this))
      .catch(this.onsavefailed.bind(this));
  }

  generateSecureString(length = 100) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/~`';
    const randomBytes = new Uint8Array(length);
    crypto.getRandomValues(randomBytes);

    return Array.from(randomBytes, (byte) => charset[byte % charset.length]).join('');
  }
}
