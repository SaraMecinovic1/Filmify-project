import { toast } from "react-toastify";
import supabase from "@/config/supabase";

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
  const { data, error } = await supabase.from("reservation").insert([
    {
      movie_title: userData?.movieTitle,
      movie_id: userData?.movieId,
      date: userData?.date,
      adults: userData?.adultsCount,
      kids: userData?.childrenCount,
      seats: userData?.seats,
      email: user.email,
    },
  ]);

  if (data) {
    console.log("Supabase data: ", data);
  }
  if (error) {
    console.log("Error from SendBookDetails:", error.message);
  }
};
