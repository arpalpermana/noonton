<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Auth;
use Carbon\Carbon;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    private function activePlan()
    {
        $activePlan = Auth::user() ? Auth::user()->lastActiveUserSubcription : null;
        
        if (!$activePlan){
            return null;
        }

        $lastday = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->subscriptionPlan->period_month);
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastday);
        $remainingDays = round(Carbon::now()->diffInDays(Carbon::parse($activePlan->expired_date)));

        return [
            "name" => $activePlan->subscriptionPlan->name,
            "remainingDays" => $remainingDays,
            "activeDays" => $activeDays,
        ];
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan(),
            ],
        ];
    }
}
