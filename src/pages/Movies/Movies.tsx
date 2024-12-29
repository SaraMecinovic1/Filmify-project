import Loader from "@/component/loading";
import MovieCard from "@/component/MovieCard";
import { fetchNowPlayingMovies, Movie } from "@/services/tmdb";
import { useEffect, useState } from "react";

export default function Movies({
  setIsLoading,
}: {
  setIsLoading: (loading: boolean) => void;
}) {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      setIsLoading(true);
      const nowPlayingMovies = await fetchNowPlayingMovies();
      setNowPlayingMovies(nowPlayingMovies);
      setIsLoading(false);
    };
    getNowPlayingMovies();
  }, []);

  if (nowPlayingMovies.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className=" w-full min-h-screen px-5 mt-[110px]">
      <div className=" text-center text-4xl font-bold font-inter text-[#cfcccc] ">
        <h1>CURRENTLY IN CINEMAS</h1>
      </div>

      <div className="w-full h-auto px-10 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
          {nowPlayingMovies.map((movie) => (
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
