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

namespace OrdinaryJellyfish\Sentra\Azure;

use GuzzleHttp\Client as GuzzleClient;

class AIContentSafety
{
    private GuzzleClient $client;
    private string $outputType = 'FourSeverityLevels';

    public function __construct()
    {
        $this->client = new GuzzleClient([
            'base_uri' => app('flarum.settings')->get('ordinaryjellyfish-sentra.services.content_safety.endpoint').'contentsafety/',
            'query' => [
                'api-version' => '2024-09-01'
            ],
            'headers' => [
                'Ocp-Apim-Subscription-Key' => app('flarum.settings')->get('ordinaryjellyfish-sentra.services.content_safety.api_key'),
            ]
        ]);
    }

    public function analyzeText($text)
    {
        $response = $this->client->request('POST', 'text%3Aanalyze', [
            'json' => [
                'text' => $text,
                'outputType' => $this->outputType
            ]
        ]);

        return json_decode($response->getBody());
    }

    public function analyzeImage($image)
    {
        $response = $this->client->request('POST', 'image%3Aanalyze', [
            'json' => [
                'image' => [
                    'content' => $image
                ],
                'outputType' => $this->outputType
            ]
        ]);

        return json_decode($response->getBody());
    }

    public function analyzeImageFromUrl($url)
    {
        $client = new GuzzleClient();
        $base64Image = base64_encode($client->get($url)->getBody());

        return $this->analyzeImage($base64Image);
    }
}
