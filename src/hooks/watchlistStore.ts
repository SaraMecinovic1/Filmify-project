import { create } from "zustand";
import { Movie } from "../services/tmdb"; // Uvezite Movie interfejs

interface WatchlistState {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (id: number) => void;
}

const useWatchlistStore = create<WatchlistState>((set) => ({
  watchlist: [],
  addToWatchlist: (movie) =>
    set((state) => {
      // Dodaj film samo ako već nije u listi
      if (!state.watchlist.find((item) => item.id === movie.id)) {
        return { watchlist: [...state.watchlist, movie] };
      }
      return state;
    }),
  removeFromWatchlist: (id) =>
    set((state) => ({
      watchlist: state.watchlist.filter((movie) => movie.id !== id),
    })),
}));

export default useWatchlistStore;
