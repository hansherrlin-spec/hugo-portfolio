# Hugo Herrlin Portfolio - Setup Guide

## 1. Supabase (nytt projekt)

1. Gå till https://supabase.com/dashboard/new
2. Skapa nytt projekt:
   - Namn: `hugo-portfolio`
   - Lösenord: välj ett starkt lösenord
   - Region: `EU West (Frankfurt)` (närmast Sverige)
3. Vänta tills projektet är klart (~2 min)
4. Gå till **SQL Editor** (i sidomenyn)
5. Klistra in allt från filen `supabase/schema.sql` och kör
6. Gå till **Settings > API** och kopiera:
   - `Project URL` (t.ex. https://xxxxx.supabase.co)
   - `anon public` key

## 2. GitHub repo

Öppna Terminal och kör:

```bash
cd path/to/hugo-portfolio
git init
git add .
git commit -m "Initial commit - Hugo Herrlin actor portfolio"
gh repo create hugo-portfolio --public --source=. --push
```

(Om du inte har `gh` CLI: `brew install gh` och sedan `gh auth login`)

Alternativt: skapa repot manuellt på github.com/new och pusha.

## 3. Vercel deploy

1. Gå till https://vercel.com/new
2. Importera `hugo-portfolio` från GitHub
3. Lägg till Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = din Supabase Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = din Supabase anon key
4. Klicka Deploy
5. Sidan är live!

## 4. Custom domain (valfritt)

Om du vill koppla hugoherrlin.com:
1. I Vercel: Settings > Domains > Add `hugoherrlin.com`
2. Uppdatera DNS hos din domänleverantör

## Uppdatera innehåll

All data finns i `src/data/profile.ts`. Redigera den filen och pusha - Vercel deployer automatiskt.

Fält att fylla i:
- `physical` - längd, hårfärg, ögonfärg, sko/klädstorlek
- `social.youtube` - YouTube-kanal URL
- `skills` - lägg till färdigheter (sport, musik, etc.)
- `training` - kurser och utbildningar
- `roles` - nya roller efter hand
