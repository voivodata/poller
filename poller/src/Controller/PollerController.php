<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Services\PollerService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PollerController extends AbstractController
{

    private $pollerService;

    public function __construct(
        PollerService $pollerService
    ) {
        $this->pollerService = $pollerService;
    }

    /**
     * @Route("/leaderboard/start", name="pollstart", methods={"GET"})
     */
    public function pollstart(): Response
    {
        return new Response($this->pollerService->pollStart());
    }

    /**
     * @Route("/leaderboard/stop", name="pollend", methods={"GET"})
     */
    public function pollend(): Response
    {
        return  new Response($this->pollerService->pollEnd());
    }

    /**
     * @Route("/leaderboard/reset", name="reset", methods={"GET"})
     */
    public function reset(): Response
    {
        return  new Response($this->pollerService->reset());
    }
}
