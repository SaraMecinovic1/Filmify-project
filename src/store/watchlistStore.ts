import { create } from "zustand";
import { Movie } from "../services/tmdb";

interface WatchlistState {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (id: number) => void;
  loadWatchlist: () => void;
}

const useWatchlistStore = create<WatchlistState>((set) => ({
  watchlist: JSON.parse(localStorage.getItem("watchlist") || "[]"),
  addToWatchlist: (movie) =>
    set((state) => {
      if (!state.watchlist.find((item) => item.id === movie.id)) {
        const updatedList = [...state.watchlist, movie];
        localStorage.setItem("watchlist", JSON.stringify(updatedList));
        return { watchlist: updatedList };
      }
      return state;
    }),
  removeFromWatchlist: (id) =>
    set((state) => {
      const updatedList = state.watchlist.filter((movie) => movie.id !== id);
      localStorage.setItem("watchlist", JSON.stringify(updatedList));
      return { watchlist: updatedList };
    }),
  loadWatchlist: () => {
    const savedWatchlist = JSON.parse(
      localStorage.getItem("watchlist") || "[]"
    );
    set({ watchlist: savedWatchlist });
  },
}));

export default useWatchlistStore;
