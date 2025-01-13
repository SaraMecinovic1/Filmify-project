import { useEffect } from "react";
import useWatchlistStore from "@/hooks/watchlistStore";
import { useNavigate } from "react-router-dom";

const MyWatchingList = () => {
  const watchlist = useWatchlistStore((state) => state.watchlist);
  const loadWatchlist = useWatchlistStore((state) => state.loadWatchlist);
  const navigate = useNavigate();

  useEffect(() => {
    loadWatchlist();
  }, [loadWatchlist]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center mt-[110px] px-5">
      {watchlist.length === 0 ? (
        <div className="text-center text-lg sm:text-xl mt-10 text-gray-400">
          🎬 Your watchlist is empty! <br />
          <span
            onClick={() => navigate("/movies")}
            className="text-secondary font-medium cursor-pointer italic text-base sm:text-lg opacity-70"
          >
            Start adding your favorite movies now
          </span>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center">
          <div className="text-center mb-10 text-2xl sm:text-3xl font-bold font-inter text-secondary">
            <h1>MY WATCH LIST 🤍</h1>
          </div>
          {watchlist.map(
            (movie) =>
              movie && (
                <div
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  key={movie.id}
                  className="flex flex-row sm:w-[600px] w-full h-[230px] sm:h-[210px] mb-6 bg-[#2e2e2e] rounded-lg overflow-hidden"
                >
                  <div className="w-[270px] h-full sm:w-[200px]">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-full rounded-t-lg sm:rounded-t-none sm:rounded-l-lg"
                    />
                  </div>
                  <div className="w-full p-4">
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-accent mb-2 overflow-hidden">
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
