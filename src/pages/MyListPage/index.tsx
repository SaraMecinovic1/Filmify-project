import useWatchlistStore from "@/hooks/watchlistStore";
import React from "react";

type Props = {};

const MyWatchingList = (props: Props) => {
  const watchlist = useWatchlistStore((state) => state.watchlist);

  return (
    <div className="w-full min-h-screen flex justify-center mt-[110px]">
      <div className="w-full h-auto mx-10 flex flex-col items-center">
        <div className="text-center mb-10 text-4xl font-bold font-inter text-secondary">
          <h1>MY WATCH LIST 🤍</h1>
        </div>
        {watchlist.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-row w-[600px] h-[210px] mb-10 bg-[#2e2e2e] rounded-lg"
          >
            <div className="w-[200px]">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full m-5">
              <h1 className="text-xl sm:text-xl lg:text-2xl font-bold text-accent mb-2 overflow-hidden">
                {movie?.title.toUpperCase()}
              </h1>
              <div>{movie?.overview}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWatchingList;
