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

import app from "flarum/admin/app";
import ServiceModal from "./ServiceModal";
import Switch from "flarum/common/components/Switch";

export default class ContentSafetyModal extends ServiceModal {
  key = 'content_safety';

  form() {
    const imageSetting = `ordinaryjellyfish-sentra.services.${this.key}.analyze_images`;
    const imageValue = this.setting(imageSetting)();

    return [
      <Switch state={!!imageValue && imageValue !== '0'} onchange={this.settings[imageSetting]}>
        {app.translator.trans('ordinaryjellyfish-sentra.admin.services.content_safety_settings.analyze_images')}
      </Switch>,
      this.apiKeyField(),
      this.endpointField()
    ]
  }
}