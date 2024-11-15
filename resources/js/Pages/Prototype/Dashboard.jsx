import Authenticated from "@/Layouts/Authenticated/index";
import Flickity from "react-flickity-component";
import FeaturedMovies from "@/Components/FeaturedMovies";
import MovieCard from "@/Components/MovieCard";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    const flickityOption = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOption}>
                    {[1, 2, 3, 4, 5].map((i) => {
                        return (
                            <FeaturedMovies
                                key={i}
                                slag="the-batman-in-love"
                                name="The Batman In Love"
                                category="Romance"
                                thumbnail="/images/featured-1.png"
                                rating={i + 1}
                            />
                        );
                    })}
                </Flickity>
            </div>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4 mt-10">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOption}>
                    {[1, 2, 3, 4, 5, 6].map((i) => {
                        return (
                            <MovieCard
                                key={i}
                                slag="meong-golden"
                                name="Meong Golden"
                                category="Horror Love"
                                thumbnail="/images/browse-1.png"
                            />
                        );
                    })}
                </Flickity>
            </div>
        </Authenticated>
    );
}
