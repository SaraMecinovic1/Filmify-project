import { toast } from "react-toastify";
import { create } from "zustand";

interface UserBookDate {
  movieTitle: string;
  movieId: number;
  date: string;
  adultsCount: number;
  childrenCount: number;
}

interface BookProps {
  userData: UserBookDate | null;
  loading: boolean;
  setUser: (userData: UserBookDate | null) => void;
  setLoading: (loading: boolean) => void;
  newData: (
    movieTitle: string,
    movieId: number,
    date: string,
    adultsCount: number,
    childrenCount: number
  ) => void;
  addTicket: (type: "adults" | "children") => void;
  removeTicket: (type: "adults" | "children") => void;
}

export const useDataStore = create<BookProps>((set) => ({
  loading: true,
  userData: null,
  setUser: (userData) => set({ userData }),
  setLoading: (loading) => set({ loading }),

  newData: (movieTitle, movieId, date, adults, children) =>
    set({
      userData: {
        movieTitle,
        movieId,
        date,
        adultsCount: adults,
        childrenCount: children,
      },
      loading: false,
    }),

  addTicket: (type) => {
    set((state) => {
      const userData = state.userData || { adultsCount: 0, childrenCount: 0 };
      const totalTickets = userData.adultsCount + userData.childrenCount;

      if (totalTickets >= 6) {
        toast.info("Maximum number of tickets is 6!");
        return state;
      }

      if (type === "adults") {
        return {
          userData: {
            ...userData,
            adultsCount: userData.adultsCount + 1,
          },
        };
      } else if (type === "children") {
        return {
          userData: {
            ...userData,
            childrenCount: userData.childrenCount + 1,
          },
        };
      }

      return state;
    });
  },

  removeTicket: (type) => {
    set((state) => {
      const userData = state.userData || { adultsCount: 0, childrenCount: 0 };

      if (type === "adults" && userData.adultsCount > 0) {
        return {
          userData: {
            ...state.userData,
            adultsCount: userData.adultsCount - 1,
          },
        };
      } else if (type === "children" && userData.childrenCount > 0) {
        return {
          userData: {
            ...state.userData,
            childrenCount: userData.childrenCount - 1,
          },
        };
      }

      return state;
    });
  },
}));
