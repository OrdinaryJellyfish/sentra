<?php

namespace OrdinaryJellyfish\Sentra\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use OrdinaryJellyfish\Sentra\Command\CreateWarning;
use OrdinaryJellyfish\Sentra\Api\Serializer\WarningSerializer;

class CreateWarningController extends AbstractCreateController
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
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }


    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $data = Arr::get($request->getParsedBody(), 'data', []);
        
        $model = $this->bus->dispatch(
            new CreateWarning($actor, $data)
        );
        
        return $model;
    }
}
