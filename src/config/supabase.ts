import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Environment variables SUPABASE_URL and SUPABASE_ANON_KEY must be defined"
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
