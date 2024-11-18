import ReactPlayer from "react-player";
import { Link, Head } from "@inertiajs/react";

export default function ShowMovie(movieData) {
    const movie = movieData.movie;

    return (
        <>
            <Head title="Watch" />
            <section
                className="mx-auto w-screen h-screen pt-24 relative watching-page font-poppins bg-form-bg"
                id="stream"
            >
                <ReactPlayer
                    url={`${movie.video_url}`}
                    controls
                    width={"100%"}
                    height={"95%"}
                />

                {/* <!-- Button back to dashboard --> */}
                <div className="absolute top-5 left-5 z-20">
                    <Link href={route("user.dashboard.index")}>
                        <img
                            src="/icons/ic_arrow-left.svg"
                            className="transition-all btn-back w-[46px]"
                            alt="stream"
                        />
                    </Link>
                </div>

                {/* <!-- Video Title --> */}
                <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                    <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                        Watch Movies
                    </span>
                </div>
            </section>
        </>
    );
}
