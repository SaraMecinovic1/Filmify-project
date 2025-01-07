import supabase from "@/config/supabase";
import { string } from "zod";

export const logIn = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: string,
    password: string,
  });

  if (error) {
    console.log("Error from login function:", error);
    return error;
  }
  return null;
};

export const signUp = async (
  email: string,
  password: string,
  userData: {
    name: string;
    lastname: string;
    birthDate: number;
    gender: string;
  }
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        ...userData, // Prosleđivanje svih podataka korisnika
      },
    },
  });

  if (error) {
    console.log("Greška u signUp funkciji:", error.message);
    return error.message; // Vratiti poruku greške za povratnu informaciju
  }

  console.log("Korisnik uspešno registrovan:", data);
  return data;
};

export const checkSession = async () => {
  const {
    data: { session },
  } = supabase.auth.getSession();

  if (session) {
    console.log("Korisnik je već ulogovan:", session.user);
  } else {
    console.log("Nema aktivne sesije.");
  }
};
