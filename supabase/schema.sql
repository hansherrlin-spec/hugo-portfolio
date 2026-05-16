-- ============================================================
-- Hugo Herrlin - Actor Portfolio - Supabase Schema
-- ============================================================
-- Kör detta i Supabase SQL Editor för att skapa alla tabeller.
-- När du är redo att gå från statisk data (profile.ts) till
-- databas-driven data, byt ut imports i komponenterna.
-- ============================================================

-- Profil-info (grundinfo, mått, kontakt)
CREATE TABLE IF NOT EXISTS profile (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  tagline TEXT,
  birth_year INTEGER,
  location TEXT,
  languages TEXT[] DEFAULT '{}',
  bio TEXT,

  -- Fysiska mått (för casting)
  height TEXT,
  hair_color TEXT,
  eye_color TEXT,
  shoe_size TEXT,
  clothing_size TEXT,

  -- Kontaktinfo
  guardian_name TEXT,
  email TEXT,
  phone TEXT,
  city TEXT,

  -- Sociala medier
  youtube_url TEXT,
  instagram_url TEXT,
  imdb_url TEXT,

  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Roller och produktioner
CREATE TABLE IF NOT EXISTS roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  role_name TEXT NOT NULL,
  role_type TEXT CHECK (role_type IN ('film', 'tv', 'teater', 'kortfilm', 'reklam', 'övrigt')),
  year INTEGER NOT NULL,
  director TEXT,
  production_company TEXT,
  channel TEXT,
  description TEXT,
  status TEXT CHECK (status IN ('Visas', 'Kommande', 'Inspelad', 'Pågående')),
  featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Media (bilder, videos, showreel)
CREATE TABLE IF NOT EXISTS media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  media_type TEXT CHECK (media_type IN ('image', 'video', 'youtube')),
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  thumbnail_url TEXT,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Utbildning och kurser
CREATE TABLE IF NOT EXISTS training (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  year INTEGER NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Speciella färdigheter
CREATE TABLE IF NOT EXISTS skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  category TEXT, -- t.ex. 'sport', 'musik', 'övrigt'
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Seed data - Hugos nuvarande info
-- ============================================================

INSERT INTO profile (name, tagline, birth_year, location, languages, bio, guardian_name, email, city)
VALUES (
  'Hugo Herrlin',
  'Ung skådespelare - Sverige',
  2015,
  'Sverige',
  ARRAY['Svenska (modersmål)', 'Engelska'],
  'Hugo är en ung och passionerad skådespelare som redan har hunnit medverka i flera professionella produktioner. Med ett naturligt uttryck och stark närvaro framför kameran har Hugo visat att han kan hantera både större roller och ensemblearbete.

Under 2026 spelade Hugo en av de bärande rollerna i "Jakten på sommarskuggan" - en hel inspelningsdag mot den erfarna skådespelaren Laszlo. Han har också medverkat som statist i SVT-produktionen "Vild" som sänds 2027.

Hugo är nyfiken, lyhörd och tar instruktioner snabbt. Han trivs på set och har lätt att samarbeta med både vuxna och andra barn.',
  'Hans Herrlin',
  'hans.herrlin@gmail.com',
  'Sverige'
);

INSERT INTO roles (title, role_name, role_type, year, description, status, featured, sort_order)
VALUES
  ('Jakten på sommarskuggan', 'Bärande roll (mot Laszlo)', 'tv', 2026,
   'Hel inspelningsdag i en av de bärande rollerna. Spelade mot den erfarna skådespelaren Laszlo i denna sommarlovsproduktion.',
   'Kommande', true, 1),
  ('Vild', 'Statist', 'tv', 2026,
   'Medverkade som statist under två inspelningsdagar i SVT-produktionen Vild som kommer att sändas 2027.',
   'Kommande', true, 2);

INSERT INTO skills (name, category) VALUES ('Improvisation', 'övrigt');

-- ============================================================
-- Row Level Security (RLS) - publikt läsbart
-- ============================================================

ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE training ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Alla kan läsa (publik portfolio)
CREATE POLICY "Public read" ON profile FOR SELECT USING (true);
CREATE POLICY "Public read" ON roles FOR SELECT USING (true);
CREATE POLICY "Public read" ON media FOR SELECT USING (true);
CREATE POLICY "Public read" ON training FOR SELECT USING (true);
CREATE POLICY "Public read" ON skills FOR SELECT USING (true);
