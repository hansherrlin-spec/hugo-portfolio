import { NextRequest, NextResponse } from "next/server";

// Accept a comma-separated list via SITE_PASSWORD (e.g. "Hugo1234,Fahed1234").
// Fallback list works when no env var is set (e.g. local dev).
const SITE_PASSWORDS = (process.env.SITE_PASSWORD || "Hugo1234,Fahed1234")
  .split(",")
  .map((p) => p.trim())
  .filter(Boolean);

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (SITE_PASSWORDS.includes(password)) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}
