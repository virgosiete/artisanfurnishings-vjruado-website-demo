import { createClient } from '@supabase/supabase-js';

// These environment variables are automatically provided when you connect your project to Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL=https://bqfuphqpimtrfspqnhbo.supabase.co;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxZnVwaHFwaW10cmZzcHFuaGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMTk1NzQsImV4cCI6MjA2MjU5NTU3NH0.luUudV5JQmF428-GsJovluBzgkyI_QcaUwBeCUWxf5c;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be provided. Please connect your project to Supabase.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);