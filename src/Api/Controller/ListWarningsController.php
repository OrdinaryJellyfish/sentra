<?php

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

namespace OrdinaryJellyfish\Sentra\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use OrdinaryJellyfish\Sentra\Api\Serializer\WarningSerializer;
use OrdinaryJellyfish\Sentra\Warning;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListWarningsController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = WarningSerializer::class;

    public $include = [
        'post',
        'user',
        'actor'
    ];

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $userId = Arr::get($request->getQueryParams(), 'user_id');
        $actor = RequestUtil::getActor($request);
        $include = $this->extractInclude($request);

        $actor->assertRegistered();

        $warnings = Warning::whereVisibleTo($actor)
            ->latest('warnings.created_at')
            ->where('user_id', $userId)
            ->get();

        $this->loadRelations($warnings, $include);

        return $warnings;
    }
}
