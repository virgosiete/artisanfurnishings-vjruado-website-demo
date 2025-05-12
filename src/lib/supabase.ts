import { createClient } from '@supabase/supabase-js';

// These environment variables are automatically provided when you connect your project to Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be provided. Please connect your project to Supabase.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);