import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// ============================================================
// Hjälpfunktioner - använd dessa när du byter till Supabase
// ============================================================

export async function getProfile() {
  if (!supabase) return null;
  const { data } = await supabase.from("profile").select("*").single();
  return data;
}

export async function getRoles() {
  if (!supabase) return [];
  const { data } = await supabase
    .from("roles")
    .select("*")
    .order("sort_order", { ascending: true });
  return data || [];
}

export async function getMedia() {
  if (!supabase) return [];
  const { data } = await supabase
    .from("media")
    .select("*")
    .order("sort_order", { ascending: true });
  return data || [];
}

export async function getTraining() {
  if (!supabase) return [];
  const { data } = await supabase
    .from("training")
    .select("*")
    .order("year", { ascending: false });
  return data || [];
}

export async function getSkills() {
  if (!supabase) return [];
  const { data } = await supabase.from("skills").select("*").order("name");
  return data || [];
}
