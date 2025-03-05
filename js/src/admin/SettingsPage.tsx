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
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Button from 'flarum/common/components/Button';
import ItemList from 'flarum/common/utils/ItemList';
import ContentSafetyModal from './components/ContentSafetyModal';
import type Mithril from 'mithril';
import ServiceModal from './components/ServiceModal';
import PostShieldModal from './components/PostShieldModal';
import ModuleModal from './components/ModuleModal';

export default class SettingsPage extends ExtensionPage {
  content() {
    return (
      <div className="ExtensionPage-settings">
        <div className="container">
          <h2>{app.translator.trans(`ordinaryjellyfish-sentra.admin.services.heading`)}</h2>
          {this.serviceItems()
            .toArray()
            .map(({ label, modal }) => {
              return (
                <Button className="Button sentra-button" onclick={() => app.modal.show(modal)}>
                  {label}
                </Button>
              );
            })}
          <h2>{app.translator.trans(`ordinaryjellyfish-sentra.admin.modules.heading`)}</h2>
          {this.moduleItems()
            .toArray()
            .map(({ label, modal }) => {
              return (
                <Button className="Button sentra-button" onclick={() => app.modal.show(modal)}>
                  {label}
                </Button>
              );
            })}
        </div>
      </div>
    );
  }

  serviceItems() {
    const items = new ItemList<{
      label: Mithril.Children;
      modal: typeof ServiceModal;
    }>();

    items.add('content_safety', {
      label: app.translator.trans('ordinaryjellyfish-sentra.admin.services.content_safety'),
      modal: ContentSafetyModal,
    });

    return items;
  }

  moduleItems() {
    const items = new ItemList<{
      label: Mithril.Children;
      modal: typeof ModuleModal;
    }>();

    items.add('post_shield', {
      label: app.translator.trans('ordinaryjellyfish-sentra.admin.modules.post_shield'),
      modal: PostShieldModal,
    });

    return items;
  }
}
