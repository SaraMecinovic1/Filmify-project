import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Environment variables for Supabase are missing!");
}

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;
