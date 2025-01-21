/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import supabase from "@/config/supabase";
import { v4 as uuidv4 } from "uuid";

export const LogIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log("Error from login function:", error);
    toast.error("Login failed: " + error.message);
    return null;
  }

  if (data?.user) {
    toast.success(`Welcome, ${data.user.email} 👋`);
    return data;
  } else {
    toast.error("Login failed: Invalid credentials");
    return null;
  }
};

export const LogOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log("Logout error:", error.message);
    toast.error("Failed to log out. Please try again.");
    return false;
  }

  return true;
};

export const SignUp = async (
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
    console.log("Error in signUp function:", error);
    toast.error("Sign up failed: " + error.message);
    return error.message;
  }

  console.log("User successfully signed up:", data);
  toast.success(
    "Successfully signed up!🎊. Please check your email and confirm it."
  );
  return data;
};

export const SendBookDetails = async (userData: any, user: any) => {
  try {
    const id = uuidv4(); // Generišemo jedinstveni ID pre umetanja
    const { error } = await supabase.from("reservation").insert([
      {
        id,
        movie_title: userData?.movieTitle,
        movie_id: userData?.movieId,
        date: userData?.date,
        adults: userData?.adultsCount,
        kids: userData?.childrenCount,
        seats: userData?.seats,
        email: user.email,
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error);
      throw error;
    }

    return id;
  } catch (error) {
    console.error("Error during reservation submission:", error);
    throw error;
  }
};

export const fetchReservationById = async (id: string) => {
  try {
    const { data, error, count } = await supabase
      .from("reservation")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      throw new Error("Reservation not found");
    }

    if (count !== null && count > 1) {
      throw new Error("Multiple reservations found with the same ID");
    }

    return data;
  } catch (error) {
    console.error("Error fetching reservation:", error);
    return null;
  }
};
