<?php

namespace App\Observers;

use App\Models\Log;
use App\Models\Student;

class StudentObserver
{
    /**
     * Handle the Student "created" event.
     */

    public function creating(Student $student): void
    {
        $student->last_login = now();
    }

    public function created(Student $student): void
    {
        Log::create([
            'module' => 'register',
            'action' => 'register akun',
            'useraccess' => $student->email
        ]);
    }

    /**
     * Handle the Student "updated" event.
     */
    public function updated(Student $student): void
    {
        //
    }

    /**
     * Handle the Student "deleted" event.
     */
    public function deleted(Student $student): void
    {
        //
    }

    /**
     * Handle the Student "restored" event.
     */
    public function restored(Student $student): void
    {
        //
    }

    /**
     * Handle the Student "force deleted" event.
     */
    public function forceDeleted(Student $student): void
    {
        //
    }
}
