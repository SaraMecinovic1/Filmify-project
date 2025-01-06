import supabase from "@/config/supabase";

export const logIn = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log("Error from login function:", error);
    return error;
  }
  return null;
};

export const signUp = async () => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        city: String,
        phone: Number,
        birthDate: Number,
        gender: String,
      },
    },
  });

  if (error) {
    console.log("Error from signUp function:", error);
    return error;
  }
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
