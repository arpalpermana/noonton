import { Link } from "@inertiajs/react";
import SubscriptionDetails from "./SubscriptionDetails.jsx";
import MenuItem from "./MenuItem.jsx";
import { userMenu, userOthersMenu } from "./ListMenu.jsx";

export default function Sidebar({ activePlan }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <Link href={route("prototype.dashboard")}>
                    <img src="/images/noonton.svg" alt="" />
                </Link>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {userMenu.map((menu, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    link={menu.link}
                                    icon={menu.icon}
                                    titleMenu={menu.title}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                />
                            );
                        })}
                    </div>

                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {userOthersMenu.map((menu, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    link={menu.link}
                                    icon={menu.icon}
                                    titleMenu={menu.title}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                    method={
                                        menu.link == "logout" ? "post" : "get"
                                    }
                                />
                            );
                        })}
                    </div>

                    <div className="mt-auto pr-[30px] pb-10">
                        {activePlan && (
                            <SubscriptionDetails
                                isPremium={
                                    activePlan.name.toLowerCase() == "premium"
                                }
                                planName={activePlan.name}
                                remainingDays={activePlan.remainingDays}
                                activeDays={activePlan.activeDays}
                            />
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
}
