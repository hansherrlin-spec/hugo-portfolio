#!/bin/bash
# ============================================================
# Hugo Portfolio - Komplett setup-skript
# Kör: cd ~/Desktop/Claude/Projects/hugo-portfolio && bash setup.sh
# ============================================================

set -e

echo "🎬 Hugo Portfolio - Setup"
echo "========================="
echo ""

# --- 1. Installera dependencies ---
echo "📦 Installerar npm-paket..."
npm install
echo "✅ Dependencies installerade!"
echo ""

# --- 2. Git init och push till GitHub ---
echo "🔧 Sätter upp Git..."
git init
git add .
git commit -m "Initial commit - Hugo Herrlin actor portfolio"
git branch -M main
git remote add origin https://github.com/hansherrlin-spec/hugo-portfolio.git
git push -u origin main
echo "✅ Kod pushad till GitHub!"
echo ""

echo "========================="
echo "✅ Klar! Koden ligger nu på GitHub."
echo ""
echo "📋 Nästa steg (manuellt):"
echo ""
echo "1. SUPABASE - Skapa nytt projekt:"
echo "   - Gå till: https://supabase.com/dashboard"
echo "   - Klicka 'New Project' i din organisation"
echo "   - Namn: hugo-portfolio"
echo "   - Region: EU West (Frankfurt)"
echo "   - Vänta tills det är klart"
echo "   - Gå till SQL Editor, klistra in supabase/schema.sql"
echo "   - Kopiera Project URL och anon key från Settings > API"
echo ""
echo "2. VERCEL - Deploya:"
echo "   - Gå till: https://vercel.com/new"
echo "   - Importera 'hugo-portfolio' från GitHub"
echo "   - Lägg till Environment Variables:"
echo "     NEXT_PUBLIC_SUPABASE_URL = (din Supabase URL)"
echo "     NEXT_PUBLIC_SUPABASE_ANON_KEY = (din anon key)"
echo "   - Klicka Deploy"
echo ""
echo "🎉 Sedan är hugos sida live!"
