import { toast } from "react-toastify";
import { create } from "zustand";

export interface UserBookDate {
  movieTitle: string;
  movieId: number;
  date: string;
  adultsCount: number;
  childrenCount: number;
  seats: string[];
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
    childrenCount: number,
    seats: string[]
  ) => void;
  addTicket: (type: "adults" | "children") => void;
  removeTicket: (type: "adults" | "children") => void;
  setSeats: (seats: string[]) => void;
  getSelectedSeats: () => string[];
}

export const useDataStore = create<BookProps>((set) => ({
  loading: true,
  userData: null,

  setUser: (userData) => set({ userData }),

  setLoading: (loading) => set({ loading }),

  newData: (movieTitle, movieId, date, adultsCount, childrenCount, seats) =>
    set({
      userData: {
        movieTitle,
        movieId,
        date,
        adultsCount,
        childrenCount,
        seats: seats || [],
      },
      loading: false,
    }),

  setSeats: (seats) =>
    set((state) => ({
      userData: state.userData
        ? {
            ...state.userData,
            seats,
          }
        : null,
    })),

  getSelectedSeats: (): string[] => {
    const userData = useDataStore.getState().userData;
    return userData ? userData.seats : [];
  },

  addTicket: (type) => {
    set((state) => {
      // const userData = state.userData || { adultsCount: 0, childrenCount: 0 };
      const userData: UserBookDate = state.userData || {
        movieTitle: "",
        movieId: 0,
        date: "",
        adultsCount: 0,
        childrenCount: 0,
        seats: [],
      };

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
      // const userData = state.userData || { adultsCount: 0, childrenCount: 0 };

      const userData: UserBookDate = state.userData || {
        movieTitle: "",
        movieId: 0,
        date: "",
        adultsCount: 0,
        childrenCount: 0,
        seats: [],
      };

      if (type === "adults" && userData.adultsCount > 0) {
        return {
          userData: {
            ...userData,
            adultsCount: userData.adultsCount - 1,
          },
        };
      } else if (type === "children" && userData.childrenCount > 0) {
        return {
          userData: {
            ...userData,
            childrenCount: userData.childrenCount - 1,
          },
        };
      }

      return state;
    });
  },
}));
