import Authenticated from "@/Layouts/Authenticated/index";
import Flickity from "react-flickity-component";
import FeaturedMovies from "@/Components/FeaturedMovies";
import MovieCard from "@/Components/MovieCard";
import { Head } from "@inertiajs/react";

export default function Dashboard(moviesData) {
    const flickityOption = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    const featuredMovies = moviesData.featuredMovies;
    const movies = moviesData.movies;

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
                    {featuredMovies.map((featuredMovie, i) => {
                        return (
                            <FeaturedMovies
                                key={featuredMovie.id}
                                slag={featuredMovie.slug}
                                name={featuredMovie.name}
                                category={featuredMovie.category}
                                thumbnail={featuredMovie.thumbnail}
                                rating={featuredMovie.rating}
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
                    {movies.map((movie, i) => {
                        return (
                            <MovieCard
                                key={movie.id}
                                slag={movie.slug}
                                name={movie.name}
                                category={movie.category}
                                thumbnail={movie.thumbnail}
                            />
                        );
                    })}
                </Flickity>
            </div>
        </Authenticated>
    );
}
