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

    public function pollStart(): string {
        $status = $this->redis->get('status');
        if ($status !== 'running') {
            $this->redis->set('status', 'running');
            exec('php ../bin/console app:startfill > /dev/null &', $output);
            return 'poll started';
        } else {
            return 'already running';
        }
    }

    public function reset() {
        return $this->redis->delete('leaderboard');
    }

    public function fillRandomScore()
    {   echo "started random filler\n";
        while (true) {
            usleep(300);//slow down
            $status = $this->redis->get('status');
            if ($status == 'stop') {
                echo "stopped random filler\n";
                break;
            }
            $name = $this->randomName();
            $randScore = rand(0,10);
            $this->redis->zAdd('leaderboard',['incr'],$randScore, $name);
        }
    }

    public function pollEnd() {
        $this->redis->set('status', 'stop');
        return 'stopped';
    }

    private function randomName(): string
    {
        $name = array(
            'Johnathon',
            'Anthony',
            'Erasmo',
            'Raleigh',
            'Nancie',
            'Tama',
            'Camellia',
            'Augustine',
            'Christeen',
            'Luz',
            'Diego',
            'Lyndia',
            'Thomas',
            'Georgianna',
            'Leigha',
            'Alejandro',
            'Marquis',
            'Joan',
            'Stephania',
            'Elroy',
            'Zonia',
            'Buffy',
            'Sharie',
            'Blythe',
            'Gaylene',
            'Elida',
            'Randy',
            'Margarete',
            'Margarett',
            'Dion',
            'Tomi',
            'Arden',
            'Clora',
            'Laine',
            'Becki',
            'Margherita',
            'Bong',
            'Jeanice',
            'Qiana',
            'Lawanda',
            'Rebecka',
            'Maribel',
            'Tami',
            'Yuri',
            'Michele',
            'Rubi',
            'Larisa',
            'Lloyd',
            'Tyisha',
            'Samatha',
            'Mischke',
            'Serna',
            'Pingree',
            'Mcnaught',
            'Pepper',
            'Schildgen',
            'Mongold',
            'Wrona',
            'Geddes',
            'Lanz',
            'Fetzer',
            'Schroeder',
            'Block',
            'Mayoral',
            'Fleishman',
            'Roberie',
            'Latson',
            'Lupo',
            'Motsinger',
            'Drews',
            'Coby',
            'Redner',
            'Culton',
            'Howe',
            'Stoval',
            'Michaud',
            'Mote',
            'Menjivar',
            'Wiers',
            'Paris',
            'Grisby',
            'Noren',
            'Damron',
            'Kazmierczak',
            'Haslett',
            'Guillemette',
            'Buresh',
            'Center',
            'Kucera',
            'Catt',
            'Badon',
            'Grumbles',
            'Antes',
            'Byron',
            'Volkman',
            'Klemp',
            'Pekar',
            'Pecora',
            'Schewe',
            'Ramage',
        );
    
        return  $name[rand ( 0 , count($name) -1)];
    }

}