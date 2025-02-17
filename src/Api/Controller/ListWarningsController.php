<?php

namespace OrdinaryJellyfish\Sentra\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use OrdinaryJellyfish\Sentra\Api\Serializer\WarningSerializer;
use OrdinaryJellyfish\Sentra\Warning;

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
        $userId = Arr::get($request->getQueryParams(), 'id');
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
