<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name'=> 'Basic',
                'price'=> 200000,
                'period_month'=> 3,
                'features' => json_encode(['Feature 1', 'Feature 2']),
            ],[
                'name'=> 'Premium',
                'price'=> 400000,
                'period_month'=> 6,
                'features' => json_encode(['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
