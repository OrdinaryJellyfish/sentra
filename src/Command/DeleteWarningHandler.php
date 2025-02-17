<?php

namespace OrdinaryJellyfish\Sentra\Command;

use OrdinaryJellyfish\Sentra\WarningRepository;

class DeleteWarningHandler
{
    private WarningRepository $warnings;

    public function __construct(WarningRepository $warnings)
    {
        $this->warnings = $warnings;
    }

    public function handle(DeleteWarning $command)
    {
        $modelId = $command->modelId;
        $actor = $command->actor;
        $data = $command->data;

        $actor->assertCan('viewWarnings');

        $warning = $this->warnings->findOrFail($modelId);

        $warning->delete();

        return $warning;
    }
}
