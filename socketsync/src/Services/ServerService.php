<?php
namespace App\Services;
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
        // $this->readRedis();
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


    public function readRedis() {
        $rawData = $this->redis->zRangeByScore('leaderboard', '-inf', '+inf', ['withscores' => TRUE]);
        foreach ($rawData as $key => &$player) {
            $player = [
                'name' => $key,
                'score' => $player
            ];
        }
        $rawData = array_values($rawData);
        foreach ($this->clients as $client) {
            $client->send(json_encode($rawData));
        }
    }


    public function onOpen(ConnectionInterface $conn) {
        $this->clients->attach($conn);
        echo "New connection! ({$conn->resourceId})\n";
    }

   
    public function onMessage(ConnectionInterface $from, $msg) {}

    public function onClose(ConnectionInterface $conn) {
         $this->clients->detach($conn);
         echo "Connection {$conn->resourceId} has disconnected\n";
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "An error has occurred: {$e->getMessage()}\n";
        $conn->close();
    }

}