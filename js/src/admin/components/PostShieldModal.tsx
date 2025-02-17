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
import ModuleModal from './ModuleModal';
import Select from 'flarum/common/components/Select';

export default class PostShieldModal extends ModuleModal {
  key = 'post_shield';

  dependencies() {
    return ['content_safety'];
  }

  form() {
    return [<h3>{app.translator.trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.harm_categories')}</h3>, this.harmCategories()];
  }

  harmCategories() {
    const categories = ['Hate', 'Sexual', 'Violence', 'SelfHarm'];

    return categories.map((category) => {
      const severitySetting = `ordinaryjellyfish-sentra.modules.${this.key}.categories.${category}.severity`;

      return (
        <div className="Form-group">
          <label className="checkbox">
            <input type="checkbox" bidi={this.setting(`ordinaryjellyfish-sentra.modules.${this.key}.categories.${category}.enabled`)} />
            {app.translator.trans(`ordinaryjellyfish-sentra.lib.post_shield.${category}`)}
          </label>
          <div className="helpText">{app.translator.trans(`ordinaryjellyfish-sentra.lib.post_shield.${category}_help`)}</div>
          <label>{app.translator.trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.severity_level')}</label>
          <Select
            options={{
              2: app.translator.trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.severity_level_low'),
              4: app.translator.trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.severity_level_medium'),
              6: app.translator.trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.severity_level_high'),
            }}
            onchange={this.settings[severitySetting]}
            value={this.setting(severitySetting)()}
          />
        </div>
      );
    });
  }
}
