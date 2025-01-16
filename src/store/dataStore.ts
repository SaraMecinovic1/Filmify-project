import { toast } from "react-toastify";
import { create } from "zustand";

interface userBookDate {
  movieTitle: string;
  movieId: number;
  date: string;
  adults: number;
  children: number;
}

interface BookProps {
  userData: userBookDate | null;
  loading: boolean;
  setUser: (userData: userBookDate | null) => void;
  setLoading: (loading: boolean) => void;
  newData: (
    movieTitle: string,
    movieId: number,
    date: string,
    adults: number,
    children: number
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
      userData: { movieTitle, movieId, date, adults, children },
      loading: false,
    }),

  addTicket: (type) => {
    set((state) => {
      const userData = state.userData || { adults: 0, children: 0 };
      const totalTickets = userData.adults + userData.children;

      if (totalTickets < 6) {
        if (type === "adults") {
          return {
            userData: {
              ...userData,
              adults: userData.adults + 1,
            },
          };
        } else if (type === "children") {
          return {
            userData: {
              ...userData,
              children: userData.children + 1,
            },
          };
        }
      }

      if (totalTickets === 6) {
        toast.info("Maximum number of tickets is 6!");
      }

      return state;
    });
  },

  removeTicket: (type) => {
    set((state) => {
      const userData = state.userData || { adults: 0, children: 0 }; // Ensure there's always a userData object

      if (type === "adults" && userData.adults > 0) {
        return {
          userData: {
            ...userData,
            adults: userData.adults - 1,
          },
        };
      } else if (type === "children" && userData.children > 0) {
        return {
          userData: {
            ...userData,
            children: userData.children - 1,
          },
        };
      }
      return state;
    });
  },
}));
