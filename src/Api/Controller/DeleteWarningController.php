<?php

namespace OrdinaryJellyfish\Sentra\Api\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Http\RequestUtil;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use OrdinaryJellyfish\Sentra\Command\DeleteWarning;
use OrdinaryJellyfish\Sentra\Api\Serializer\WarningSerializer;

class DeleteWarningController extends AbstractDeleteController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = WarningSerializer::class;

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
    protected function delete(ServerRequestInterface $request)
    {
        // See https://docs.flarum.org/extend/api.html#api-endpoints for more information.

        $modelId = Arr::get($request->getQueryParams(), 'id');
        $actor = RequestUtil::getActor($request);
        $input = $request->getParsedBody();
        
        $this->bus->dispatch(
            new DeleteWarning($modelId, $actor, $input)
        );
        
    }
}
