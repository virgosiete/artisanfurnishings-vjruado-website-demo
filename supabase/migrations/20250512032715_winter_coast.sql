/*
  # Create quotes and quote_files tables

  1. New Tables
    - `quotes`
      - `id` (uuid, primary key)
      - `first_name` (text, not null)
      - `last_name` (text, not null)
      - `email` (text, not null)
      - `phone` (text)
      - `project_type` (text, not null)
      - `timeframe` (text)
      - `budget` (text)
      - `project_description` (text, not null)
      - `newsletter` (boolean, default false)
      - `created_at` (timestamp with time zone, default now())
    - `quote_files`
      - `id` (uuid, primary key)
      - `quote_id` (uuid, foreign key references quotes.id)
      - `file_name` (text, not null)
      - `file_path` (text, not null)
      - `file_size` (bigint, not null)
      - `file_type` (text, not null)
      - `created_at` (timestamp with time zone, default now())
  
  2. Security
    - Enable RLS on both tables
    - Add policy for authenticated users to insert data
    - Add policy for service role to read data
*/

-- Create quotes table
CREATE TABLE IF NOT EXISTS quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  project_type text NOT NULL,
  timeframe text,
  budget text,
  project_description text NOT NULL,
  newsletter boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create quote_files table for file uploads
CREATE TABLE IF NOT EXISTS quote_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_id uuid REFERENCES quotes(id) ON DELETE CASCADE,
  file_name text NOT NULL,
  file_path text NOT NULL,
  file_size bigint NOT NULL,
  file_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_files ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert quotes (public form submissions)
CREATE POLICY "Anyone can insert quotes" ON quotes
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow anyone to insert quote_files
CREATE POLICY "Anyone can insert quote_files" ON quote_files
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy for service role to read quotes data
CREATE POLICY "Service role can read quotes" ON quotes
  FOR SELECT
  TO service_role
  USING (true);

-- Create policy for service role to read quote_files data
CREATE POLICY "Service role can read quote_files" ON quote_files
  FOR SELECT
  TO service_role
  USING (true);