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
     * @Route("/poller", name="poll", methods={"GET"})
     */
    public function poll(): Response
    {
        dd($this->pollerService->startPoll());
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/PollerController.php',
        ]);
    }
}
