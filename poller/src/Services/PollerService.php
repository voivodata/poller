<?php
namespace App\Services;
use Psr\Container\ContainerInterface;

class PollerService
{
    private $redis;
    private $container;

    public function __construct(
        ContainerInterface $container
    ) {
        $this->container = $container;
        $this->connectRedis();
    }

    private function connectRedis() {
        try {
            $host  = $this->container->getParameter('redis.host');
            $port  = $this->container->getParameter('redis.port');
            $this->redis = new \Redis();
            $this->redis->connect($host, $port);
        } catch (\Exception $e){
            throw $e;
        }
    }

    public function startPoll() {
        $status = $this->redis->get('status');
        // while (true) {
            
        // }
        // if ($status !== 'running') {
        //     $this->redis->set('status', 'running');
        // } else {
        //     return $status;
        // }
    }

    public function endPoll() {

    }
}