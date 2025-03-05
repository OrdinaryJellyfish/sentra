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

namespace OrdinaryJellyfish\Sentra\Services;

use Flarum\Settings\SettingsRepositoryInterface;
use s9e\TextFormatter\Utils\ParsedDOM;
use GuzzleHttp\Client as GuzzleClient;
use Flarum\Post\Post;

class AIContentSafety
{
    private SettingsRepositoryInterface $settings;
    private GuzzleClient $client;
    private string $outputType = 'FourSeverityLevels';

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
        $this->client = new GuzzleClient([
            'base_uri' => $this->settings->get('ordinaryjellyfish-sentra.services.content_safety.endpoint').'contentsafety/',
            'query' => [
                'api-version' => '2024-09-01'
            ],
            'headers' => [
                'Ocp-Apim-Subscription-Key' => $this->settings->get('ordinaryjellyfish-sentra.services.content_safety.api_key'),
            ]
        ]);
    }

    public function analyzeText($text)
    {
        return once(function () use ($text) {
            $response = $this->client->request('POST', 'text%3Aanalyze', [
                'json' => [
                    'text' => $text,
                    'outputType' => $this->outputType
                ]
            ]);

            return json_decode($response->getBody());
        });
    }

    public function analyzeImage($image)
    {
        return once(function () use ($image) {
            $response = $this->client->request('POST', 'image%3Aanalyze', [
                'json' => [
                    'image' => [
                        'content' => $image
                    ],
                    'outputType' => $this->outputType
                ]
            ]);

            return json_decode($response->getBody());
        });
    }

    public function analyzeImageFromUrl($url)
    {
        return once(function () use ($url) {
            $client = new GuzzleClient();
            $base64Image = base64_encode($client->get($url)->getBody());

            return $this->analyzeImage($base64Image);
        });
    }

    public function analyzePost(Post $post)
    {
        $dom = ParsedDOM::loadXML($post->parsed_content);
        $analyzedText = $this->analyzeText($post->content);

        $mergedCategories = $this->mergeCategoriesAnalysis($analyzedText->categoriesAnalysis);

        if ($this->settings->get('ordinaryjellyfish-sentra.services.content_safety.analyze_images')) {
            foreach ($dom->query('//IMG[@src]') as $img) {
                $image = $img->getAttribute('src');
                $response = $this->analyzeImageFromUrl($image);
                $mergedCategories = $this->mergeCategoriesAnalysis($response->categoriesAnalysis, $mergedCategories);
            }
        }

        return $mergedCategories;
    }

    private function mergeCategoriesAnalysis(array $newAnalysis, array $existingAnalysis = []): array
    {
        $categories = ['Hate', 'Sexual', 'SelfHarm', 'Violence'];

        // Initialize existingAnalysis if it's empty
        if (empty($existingAnalysis)) {
            foreach ($categories as $category) {
                $existingAnalysis[$category] = 0;
            }
        }

        // Merge the new analysis with the existing analysis
        foreach ($newAnalysis as $analysis) {
            $category = $analysis->category;
            $severity = $analysis->severity;

            if (isset($existingAnalysis[$category])) {
                $existingAnalysis[$category] = max($existingAnalysis[$category], $severity);
            } else {
                $existingAnalysis[$category] = $severity;
            }
        }

        return $existingAnalysis;
    }
}
