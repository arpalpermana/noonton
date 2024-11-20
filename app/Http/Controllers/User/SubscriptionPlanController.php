<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Inertia\Inertia;
use Auth;
use Carbon\Carbon;

class SubscriptionPlanController extends Controller
{
    public function index(){
        return Inertia::render('User/SubscriptionPlan/Index', [
            'subscriptionPlan' => SubscriptionPlan::all()
        ]);
    }

    public function subscribe(Request $request, SubscriptionPlan $subscriptionPlan){
        $data = [
            'subscription_plan_id' => $subscriptionPlan->id,
            'user_id' => Auth::id(),
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->period_month),
            'payment_status' => 'paid',
        ];

        $userSubscription = UserSubscription::create($data);
        return redirect(route('user.dashboard.index'));
    }
}
