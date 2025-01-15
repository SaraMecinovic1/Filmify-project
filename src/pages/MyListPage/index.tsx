import { useEffect } from "react";
import useWatchlistStore from "@/store/watchlistStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyWatchingList = () => {
  const watchlist = useWatchlistStore((state) => state.watchlist);
  const loadWatchlist = useWatchlistStore((state) => state.loadWatchlist);
  const removeFromWatchlist = useWatchlistStore(
    (state) => state.removeFromWatchlist
  );
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
                  className="relative flex flex-row sm:w-[600px] w-full h-[230px] sm:h-[210px] mb-6 bg-[#2e2e2e] rounded-lg overflow-hidden"
                >
                  {/* Bookmark zastavica sa srcem */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromWatchlist(movie.id);
                      toast.success(
                        "Movie removed! It’s no longer on your watchlist."
                      );
                    }}
                    className="absolute top-0 right-0  w-[30px] h-[40px] bg-gray-500 bg-opacity-20 rounded-bl-lg flex items-center justify-center cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-red-500"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>

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
