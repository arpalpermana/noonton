import Authenticated from "@/Layouts/Authenticated";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { router } from "@inertiajs/react";

export default function Subscription(subscriptionPlanData) {
    const subscriptionPlan = subscriptionPlanData.subscriptionPlan;
    function selectSubscription(id) {
        router.post(route("user.dashboard.subscriptionPlan.subscribe", id), {
            subscriptionPlan: id,
        });
    }

    return (
        <Authenticated>
            <div className="px-[50px]">
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>

                    <div className="flex justify-center gap-10 mt-[70px]">
                        {subscriptionPlan.map((plan, i) => {
                            return (
                                <SubscriptionCard
                                    key={plan.id}
                                    name={plan.name}
                                    price={plan.price}
                                    duration={plan.period_month}
                                    features={JSON.parse(plan.features)}
                                    isPremium={
                                        plan.name.toLowerCase() === "premium"
                                    }
                                    onSelect={() => selectSubscription(plan.id)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
