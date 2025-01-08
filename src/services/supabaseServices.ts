import { toast } from "react-toastify";
import supabase from "@/config/supabase";

export const logIn = async (email: string, password: string) => {
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
    console.log("Error in signUp function:", error);
    toast.error("Sign up failed: " + error.message);
    return error.message;
  }

  console.log("User successfully signed up:", data);
  toast.success("User successfully signed up!");
  return data;
};
