<?php

namespace App\Listeners;

use App\Models\User;
use App\Events\ChirpCreatedEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendChirpCreatedNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(ChirpCreatedEvent $event): void
    {
        foreach (User::whereNot('id', $event->chirp->user_id) as $user) {
            # code...
        }
    }
}
