<?php
namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Services\PollerService;
use Symfony\Component\Console\Command\LockableTrait;

class PollerCommand extends Command
{
    use LockableTrait;
    protected static $defaultName = 'app:startfill';
    private $pollerService;
    public function __construct(PollerService $pollerService)
    {
        parent::__construct();
        $this->pollerService = $pollerService;
    }
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        if (!$this->lock()) {
            $output->writeln('The command is already running in another process.');
            return Command::SUCCESS;
        }
        
        $this->pollerService->fillRandomScore();        

        $this->release();
        return Command::SUCCESS;
    }
}