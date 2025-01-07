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
        ...userData,
      },
    },
  });

  if (error) {
    console.log("Error in signUp function:", error.message);
    return error.message;
  }

  console.log("User successfully signed up:", data);
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
