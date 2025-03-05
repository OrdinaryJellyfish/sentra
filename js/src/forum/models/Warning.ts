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

import Model from 'flarum/common/Model';
import Post from 'flarum/common/models/Post';
import type User from 'flarum/common/models/User';

export default class Warning extends Model {
  reason = Model.attribute<string>('reason');
  severity = Model.attribute<number>('severity');
  expiresAt = Model.attribute('expiresAt', Model.transformDate);
  createdAt = Model.attribute('createdAt', Model.transformDate);
  post = Model.hasOne<Post>('post');
  user = Model.hasOne<User>('user');
  actor = Model.hasOne<User>('actor');
}
