<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Services\PollerService;
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
    public function pollstart()
    {
        $response = $this->pollerService->pollStart();
        return $this->json(['success' => $response]);
    }

    /**
     * @Route("/leaderboard/stop", name="pollend", methods={"GET"})
     */
    public function pollend()
    {
        $response = $this->pollerService->pollEnd();
        return $this->json(['success' => $response]);
    }

    /**
     * @Route("/leaderboard/reset", name="reset", methods={"GET"})
     */
    public function reset()
    {
        $response = $this->pollerService->reset();
        return $this->json(['success' => $response]);
    }
}
