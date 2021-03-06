<?php
namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Services\ServerService;
use Symfony\Component\Console\Command\LockableTrait;
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;

use Psr\Container\ContainerInterface;

class ServerCommand extends Command
{
    use LockableTrait;
    protected static $defaultName = 'app:startserver';
    private $serverService;
    public function __construct(
        ContainerInterface $container
    )
    {
        parent::__construct();
        $this->container = $container;
    }
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        if (!$this->lock()) {
            $output->writeln('The command is already running in another process.');
            return Command::FAILURE;
        }
        $serverService = new ServerService($this->container);
        $server = IoServer::factory(
            new HttpServer(
                new WsServer(
                    $serverService
                )
            ),
            8080
        );
        
        $server->loop->addPeriodicTimer(0.1, function () use ($serverService) {
            $serverService->readRedis();
        });
        $server->run();

        $this->release();
        $output->writeln('Server stop');
        return Command::SUCCESS;
    }
}