import { fetchPopularMovies, Movie } from "@/services/tmdb";
import { useQuery } from "@tanstack/react-query";
import Loader from "../loading";
import MovieCard from "../MovieCard";

function PopularMovies() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Failed to load movie details. Please try again later.{" "}
      </div>
    );
  }

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 px-4">
        {data?.slice(0, 6).map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
