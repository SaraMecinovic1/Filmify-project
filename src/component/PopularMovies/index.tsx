import { fetchPopularMovies, Movie } from "@/services/tmdb";
import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Loader from "../loading";

function PopularMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getPopularMovies = async () => {
      const popularMovies = await fetchPopularMovies(1);
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
            <div
              key={movie.id}
              className="shadow-lg rounded-md overflow-hidden flex flex-col"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto"
              />
              <div className="p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h3 className="text-sm font-medium text-[#c9c7c7] mr-4 line-clamp-2">
                  {movie.title.toUpperCase()}
                </h3>
                <p className="flex items-center text-sm mt-2 sm:mt-0 text-[#c9c7c7]">
                  <StarIcon
                    width={17}
                    className="text-yellow-600 mb-0.5 mr-1"
                  />
                  {movie.vote_average.toFixed(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default PopularMovies;
