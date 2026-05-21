# CLAUDE.md

Notes for Claude Code when working in this repo.

## What this is

Portfolio site for Hugo Herrlin (young actor). Next.js 16 (App Router) + React 19 + Tailwind v4, password-gated (`PasswordGate.tsx`), deployed on Vercel at https://www.hugoherrlin.com.

## Where the repo lives

The working copy MUST live as a plain local clone outside Google Drive (currently `~/hugo-portfolio`). GitHub (`hansherrlin-spec/hugo-portfolio`, private) is the backup, not Google Drive. Drive's file syncing corrupts `node_modules`, `.next`, and git internals.

## Commands

- `npm install` — install deps
- `npm run dev` — local dev server on http://localhost:3000
- `npm run build` — production build (run before pushing if you've touched anything non-trivial)
- `npm run lint`

## Deploy

Push to `main` → Vercel rebuilds automatically. Status shows up as a `Vercel` commit status on GitHub; build typically takes ~60–90 s.

## Content

All site content (bio, measurements, contact, skills, roles, media, training) is in `src/data/profile.ts`. Components in `src/components/` read from there — to update what the site shows, edit `profile.ts`, don't touch the components.

The home page (`src/app/page.tsx`) composes the sections in this order: Hero → About → CV → CastingProfile → Media → Contact.
