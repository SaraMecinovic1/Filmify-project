import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kfszykevqtsuiicphmbq.supabase.cos";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmc3p5a2V2cXRzdWlpY3BobWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNjUxOTcsImV4cCI6MjA1MTc0MTE5N30.Gn7wfes-yvNhpf19NWqShNn8m3Og6UmRETE2bGVd3JI";

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Environment variables SUPABASE_URL and SUPABASE_ANON_KEY must be defined"
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
