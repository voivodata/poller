<?php
namespace App\Services;
// use Psr\Container\ContainerInterface;
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class ServerService implements MessageComponentInterface 
{
    private $redis;
    private $container;
    private $params;
    protected $clients;

    public function __construct($container
    ) {
        $this->clients = new \SplObjectStorage;
        $this->connectRedis($container);
        $this->onRedisChange();
    }

    private function connectRedis($container) {
        try {
            $host  = $container->getParameter('redis.host');
            $port  = $container->getParameter('redis.port');
            $this->redis = new \Redis();
            $this->redis->connect($host, $port);
        } catch (\Exception $e){
            throw $e;
        }
    }


    private function onRedisChange() {

        //read readis
        foreach ($this->clients as $client) {
            if ($from !== $client) {
                // The sender is not the receiver, send to each client connected
                $client->send($msg);
            }
        }
    }


    public function onOpen(ConnectionInterface $conn) {
        $this->clients->attach($conn);
        echo "New connection! ({$conn->resourceId})\n";
    }

    // public function onMessage(ConnectionInterface $from, $msg) {
    //     $numRecv = count($this->clients) - 1;
    //     echo sprintf('Connection %d sending message "%s" to %d other connection%s' . "\n"
    //         , $from->resourceId, $msg, $numRecv, $numRecv == 1 ? '' : 's');

    //     foreach ($this->clients as $client) {
    //         if ($from !== $client) {
    //             // The sender is not the receiver, send to each client connected
    //             $client->send($msg);
    //         }
    //     }
    // }

    public function onClose(ConnectionInterface $conn) {
         $this->clients->detach($conn);
         echo "Connection {$conn->resourceId} has disconnected\n";
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "An error has occurred: {$e->getMessage()}\n";
        $conn->close();
    }

}