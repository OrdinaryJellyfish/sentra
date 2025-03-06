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
import SettingsModal from 'flarum/admin/components/SettingsModal';
import Switch from 'flarum/common/components/Switch';

export default class ServiceModal extends SettingsModal {
  static isDismissible = true;
  key = '';
  docUrl: string | null = null;

  className() {
    return 'Modal--large';
  }

  title() {
    return app.translator.trans(`ordinaryjellyfish-sentra.admin.services.${this.key}`);
  }

  helpText() {
    return app.translator.trans(`ordinaryjellyfish-sentra.admin.services.${this.key}_help`);
  }

  content() {
    const setting = `ordinaryjellyfish-sentra.services.${this.key}.enabled`;
    const value = this.setting(setting)();

    return (
      <div className="Modal-body">
        <p className="helpText">{this.helpText()}</p>
        {this.docUrl && (
          <a className="Button Button--primary" style="margin-bottom:10px" icon="fas fa-book" href={this.docUrl} external={true} target="_blank">
            {app.translator.trans('ordinaryjellyfish-sentra.admin.view_documentation')}
          </a>
        )}
        <div className="Form">
          <div className="Form-group">
            <Switch state={!!value && value !== '0'} onchange={this.settings[setting]}>
              {app.translator.trans(`ordinaryjellyfish-sentra.admin.enable`)}
            </Switch>
          </div>
          <div className="Form-group">{this.form()}</div>
          <div className="Form-group">{this.submitButton()}</div>
        </div>
      </div>
    );
  }

  apiKeyField() {
    return (
      <>
        <label for={`${this.key}_apiKey`}>{app.translator.trans('ordinaryjellyfish-sentra.admin.api_key')}</label>
        <input
          type="text"
          className="FormControl"
          spellcheck="false"
          id={`${this.key}_apiKey`}
          bidi={this.setting(`ordinaryjellyfish-sentra.services.${this.key}.api_key`)}
        />
      </>
    );
  }

  endpointField() {
    return (
      <>
        <label for={`${this.key}_endpoint`}>{app.translator.trans('ordinaryjellyfish-sentra.admin.endpoint')}</label>
        <input
          type="text"
          className="FormControl"
          spellcheck="false"
          id={`${this.key}_endpoint`}
          bidi={this.setting(`ordinaryjellyfish-sentra.services.${this.key}.endpoint`)}
        />
      </>
    );
  }

  onsaved() {
    window.location.reload();
  }
}
