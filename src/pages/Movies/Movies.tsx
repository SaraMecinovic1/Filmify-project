import MovieCard from "@/component/MovieCard";
import { fetchNowPlayingMovies, Movie } from "@/services/tmdb";
import { useEffect, useState } from "react";

export default function Movies() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const nowPlayingMovies = await fetchNowPlayingMovies();
      setNowPlayingMovies(nowPlayingMovies);
    };
    getNowPlayingMovies();
  }, []);
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
