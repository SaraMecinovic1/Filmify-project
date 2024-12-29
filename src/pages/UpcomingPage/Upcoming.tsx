import Loader from "@/component/loading";
import MovieCard from "@/component/MovieCard";
import { fetchUpcomingMovies, Movie } from "@/services/tmdb";
import { useQuery } from "@tanstack/react-query";

export default function Upcoming() {
  const { data: upcomingMovies, isLoading } = useQuery(
    ["upcomingMovies"],
    fetchUpcomingMovies,
    { staleTime: 5 * 60 * 1000 }
  );

  if (!upcomingMovies || upcomingMovies.length === 0) {
    return <div>No upcoming movies available.</div>;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className=" w-full min-h-screen px-5 mt-[110px]">
      <div className=" text-center text-4xl font-bold font-inter text-[#cfcccc] ">
        <h1>SOON IN OUR CINEMAS</h1>
      </div>

      <div className="w-full h-auto px-10 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
          {upcomingMovies.map((movie: any) => (
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
    </div>
  );
}
