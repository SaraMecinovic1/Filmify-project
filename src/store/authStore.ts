import { create } from "zustand";
import supabase from "@/config/supabase";

interface User {
  email?: string;
}

interface AuthStore {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  fetchUser: () => Promise<void>;
  subscribeAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),

  fetchUser: async () => {
    const {
      data: { session }, // ili moze bez {} ali bi pristupali data.session
      error,
    } = await supabase.auth.getSession();

    if (error) {
      console.error(error);
    }
    console.log("Fetched user:", session?.user || null);
    set({ user: session?.user || null, loading: false });
  },

  subscribeAuth: () => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed:", {
        event,
        user: session?.user || null,
      });
      set({ user: session?.user || null });
    });
  },
}));
