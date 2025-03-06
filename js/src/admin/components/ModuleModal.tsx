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
import Alert from 'flarum/common/components/Alert';
import Switch from 'flarum/common/components/Switch';

export default class ModuleModal extends SettingsModal {
  static isDismissible = true;
  key = '';
  docUrl: string | null = null;

  className() {
    return 'Modal--large';
  }

  title() {
    return app.translator.trans(`ordinaryjellyfish-sentra.admin.modules.${this.key}`);
  }

  helpText() {
    return app.translator.trans(`ordinaryjellyfish-sentra.admin.modules.${this.key}_help`);
  }

  dependencies(): string[] {
    return [];
  }

  areRequiredServicesEnabled(): boolean {
    return this.dependencies().every((service) => this.setting(`ordinaryjellyfish-sentra.services.${service}.enabled`)() === '1');
  }

  content() {
    const setting = `ordinaryjellyfish-sentra.modules.${this.key}.enabled`;
    const value = this.setting(setting)();
    const requiredServices = this.dependencies();
    const allServicesEnabled = this.areRequiredServicesEnabled();

    return (
      <div className="Modal-body">
        <p className="helpText">{this.helpText()}</p>
        {this.docUrl && (
          <a className="Button Button--primary" style="margin-bottom:10px" icon="fas fa-book" href={this.docUrl} external={true} target="_blank">
            {app.translator.trans('ordinaryjellyfish-sentra.admin.view_documentation')}
          </a>
        )}
        {requiredServices.length > 0 && (
          <p>
            {app.translator.trans('ordinaryjellyfish-sentra.admin.modules.requires', {
              services: requiredServices.map((service) => app.translator.trans(`ordinaryjellyfish-sentra.admin.services.${service}`)).join(', '),
            })}
          </p>
        )}
        {allServicesEnabled ? (
          <div className="Form">
            <div className="Form-group">
              <Switch state={!!value && value !== '0'} onchange={this.settings[setting]} disabled={!allServicesEnabled}>
                {app.translator.trans(`ordinaryjellyfish-sentra.admin.enable`)}
              </Switch>
            </div>
            <div className="Form-group">{this.form()}</div>
            <div className="Form-group">{this.submitButton()}</div>
          </div>
        ) : (
          <Alert dismissable={false} type="error">
            {app.translator.trans('ordinaryjellyfish-sentra.admin.modules.requires_error')}
          </Alert>
        )}
      </div>
    );
  }

  onsaved() {
    window.location.reload();
  }
}
