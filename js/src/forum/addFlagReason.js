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
import { override } from 'flarum/extend';
import Post from 'flarum/forum/components/Post';

export default function() {
  override(Post.prototype, 'flagReason', function (original, flag) {
    if (flag.type() === 'sentra') {
      const reason = flag.reason();

      return app.translator.trans('ordinaryjellyfish-sentra.forum.flag_reason', {
        reason,
      });
    }

    return original(flag);
  });
}