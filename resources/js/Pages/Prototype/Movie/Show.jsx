import ReactPlayer from "react-player";
import { Link, Head } from "@inertiajs/react";

export default function ShowMovie() {
    return (
        <>
            <Head title="Watch" />
            <section
                class="mx-auto w-screen h-screen pt-24 relative watching-page font-poppins bg-form-bg"
                id="stream"
            >
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=v-94Snw-H4o"
                    controls
                    width={"100%"}
                    height={"500px"}
                />

                {/* <!-- Button back to dashboard --> */}
                <div class="absolute top-5 left-5 z-20">
                    <Link href={route("prototype.dashboard")}>
                        <img
                            src="/icons/ic_arrow-left.svg"
                            class="transition-all btn-back w-[46px]"
                            alt="stream"
                        />
                    </Link>
                </div>

                {/* <!-- Video Title --> */}
                <div class="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                    <span class="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                        Watch Movies
                    </span>
                </div>
            </section>
        </>
    );
}
