import { fetchPopularMovies, Movie } from "@/services/tmdb";
import { useEffect, useState } from "react";
import Loader from "../loading";
import MovieCard from "../MovieCard";

function PopularMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getPopularMovies = async () => {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
      setIsLoading(false);
    };
    getPopularMovies();
  }, []);

  return (
    <div className="w-full h-auto mt-7">
      <div className="text-center px-4 mb-10">
        <h1 className="text-4xl font-bold font-inter text-[#cfcccc]">
          WE RECOMMEND
        </h1>
        <p className="text-lg font-medium italic text-secondary opacity-80">
          Check out the movies we recommend, specially selected for you.
        </p>
      </div>

      {!isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              voteAverage={movie.vote_average}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default PopularMovies;
