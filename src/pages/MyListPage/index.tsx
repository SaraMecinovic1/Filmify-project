import { useEffect } from "react";
import useWatchlistStore from "@/hooks/watchlistStore";
import { useNavigate } from "react-router-dom";

const MyWatchingList = () => {
  const watchlist = useWatchlistStore((state) => state.watchlist);
  const loadWatchlist = useWatchlistStore((state) => state.loadWatchlist);
  const navigate = useNavigate();

  useEffect(() => {
    loadWatchlist();
    console.log("loadWatchlist- ", watchlist);
  }, [loadWatchlist]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center mt-[110px]">
      {watchlist.length === 0 ? (
        <div className="text-center text-2xl mt-10 text-[27px] text-gray-400">
          🎬 Your watchlist is empty! <br />
          <span
            onClick={() => navigate("/movies")}
            className="text-secondary font-medium cursor-pointer  italic text-[22px]  opacity-70"
          >
            Start adding your favorite movies now
          </span>
        </div>
      ) : (
        <div className="w-full mx-10 flex flex-col items-center">
          <div className="text-center mb-10 text-4xl font-bold font-inter text-secondary">
            <h1>MY WATCH LIST 🤍</h1>
          </div>
          {watchlist.map(
            (movie) =>
              movie && (
                <div
                  onClick={() => navigate(`/movie/${movie.id}`)}
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
                      {movie.title?.toUpperCase()}
                    </h1>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-5">
                      {movie.overview || "No description available."}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default MyWatchingList;
