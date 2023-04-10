<?php

namespace App\Observers;

use App\Models\Log;
use App\Models\User;

class UserObserver
{
    public function creating(User $user): void
    {
        $user->last_login = now();
    }

    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {
        Log::create([
            'module' => 'register',
            'action' => 'registrasi akun',
            'useraccess' => $user->email
        ]);
    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {
        //
    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        //
    }

    /**
     * Handle the User "restored" event.
     */
    public function restored(User $user): void
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     */
    public function forceDeleted(User $user): void
    {
        //
    }
}
