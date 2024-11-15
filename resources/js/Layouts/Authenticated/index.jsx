import { Head } from "@inertiajs/react";
import Sidebar from "./sidebar";
import TopBar from "./topbar";
export default function Authenticated({ children }) {
    return (
        <>
            <Head title="Dashboard"></Head>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* start of sidebar */}
                <Sidebar />
                {/* end of sidebar */}
                {/* start of content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* start of topBar */}
                        <TopBar />
                        {/* end of topBar */}
                        <main>{children}</main>
                    </div>
                </div>
                {/* end of content */}
            </div>
            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}
