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

import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import PostControls from 'flarum/forum/utils/PostControls';
import Button from 'flarum/common/components/Button';
import WarnUserModal from './components/WarnUserModal';

export default function () {
  extend(PostControls, 'moderationControls', function (items, post) {
    if (post.isHidden() || post.contentType() !== 'comment' || !post.canWarn()) return;

    items.add(
      'warn',
      <Button icon="fas fa-exclamation-triangle" onclick={() => app.modal.show(WarnUserModal, { post })}>
        {app.translator.trans('ordinaryjellyfish-sentra.forum.warn.title')}
      </Button>
    );
  });
}
