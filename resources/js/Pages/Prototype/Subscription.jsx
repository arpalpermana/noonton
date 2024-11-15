import Authenticated from "@/Layouts/Authenticated";
import SubscriptionCard from "@/Components/SubscriptionCard";

export default function Subscription() {
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
                        <SubscriptionCard
                            name="Basic"
                            price="20000"
                            duration="3"
                            features={["Bebas Gaul", "Bebas Ongkir"]}
                        />
                        <SubscriptionCard
                            isPremium
                            name="Premium"
                            price="50000"
                            duration="9"
                            features={[
                                "Bebas Gaul",
                                "Bebas Ongkir",
                                "Bebas Pengembalian",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
