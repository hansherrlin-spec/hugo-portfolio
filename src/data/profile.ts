// ============================================================
// Hugos skådespelar-profil
// Uppdatera denna fil med ny info - allt på sidan hämtar härifrån
// ============================================================

export const profile = {
  // --- Grundinfo ---
  name: "Hugo Herrlin",
  tagline: "Ung skådespelare - Sverige",
  birthYear: 2015, // Uppdatera med rätt år
  location: "Sverige",
  languages: ["Svenska (modersmål)", "Engelska"],

  // --- Fysiska mått (viktigt för casting) ---
  physical: {
    height: "", // t.ex. "142 cm"
    hairColor: "Blond",
    eyeColor: "Blå",
    shoeSize: "", // t.ex. "36"
    clothingSize: "", // t.ex. "152"
  },

  // --- Kontakt (via förälder) ---
  contact: {
    guardianName: "Hans Herrlin",
    email: "hans.herrlin@gmail.com",
    phone: "", // Lägg till om du vill
    city: "Sverige",
  },

  // --- Speciella färdigheter ---
  skills: [
    "Improvisation",
    // Lägg till fler: sport, musik, dans, simning, etc.
    // Exempel: "Fotboll", "Simning", "Piano", "Skateboard"
  ],

  // --- Om Hugo (kort bio) ---
  bio: `Hugo är en ung och passionerad skådespelare som redan har hunnit medverka i flera professionella produktioner. Med ett naturligt uttryck och stark närvaro framför kameran har Hugo visat att han kan hantera både större roller och ensemblearbete.

Under 2026 spelade Hugo en av de bärande rollerna i "Jakten på sommarskuggan" - en hel inspelningsdag mot den erfarna skådespelaren Laszlo. Han har också medverkat som statist i SVT-produktionen "Vild" som sänds 2027.

Hugo är nyfiken, lyhörd och tar instruktioner snabbt. Han trivs på set och har lätt att samarbeta med både vuxna och andra barn.`,

  // --- YouTube och sociala medier ---
  social: {
    youtube: "https://www.youtube.com/@sketchspark2.0",
    instagram: "", // Om det finns
    imdb: "", // Om det finns
  },
};

// --- Roller och produktioner ---
export interface Role {
  id: string;
  title: string;
  role: string;
  type: "film" | "tv" | "teater" | "kortfilm" | "reklam" | "övrigt";
  year: number;
  director?: string;
  production?: string;
  channel?: string;
  description: string;
  status: "Visas" | "Kommande" | "Inspelad" | "Pågående";
  featured: boolean;
}

export const roles: Role[] = [
  {
    id: "jakten-sommarskuggan",
    title: "Jakten på sommarskuggan",
    role: "Bärande roll (mot Laszlo)",
    type: "tv",
    year: 2026,
    production: "",
    channel: "",
    description:
      "Hel inspelningsdag i en av de bärande rollerna. Spelade mot den erfarna skådespelaren Laszlo i denna sommarlovsproduktion.",
    status: "Kommande",
    featured: true,
  },
  {
    id: "vild-svt",
    title: "Vild",
    role: "Statist",
    type: "tv",
    year: 2026,
    production: "",
    channel: "SVT",
    description:
      "Medverkade som statist under två inspelningsdagar i SVT-produktionen Vild som kommer att sändas 2027.",
    status: "Kommande",
    featured: true,
  },
];

// --- Media (bilder, videos, showreel) ---
export interface MediaItem {
  id: string;
  type: "image" | "video" | "youtube";
  title: string;
  url: string;
  thumbnail?: string;
  description?: string;
}

export const media: MediaItem[] = [
  // Lägg till media här, t.ex:
  // {
  //   id: "showreel-2026",
  //   type: "youtube",
  //   title: "Hugo Herrlin - Showreel 2026",
  //   url: "https://youtube.com/watch?v=XXXXX",
  //   description: "Klipp från Hugos produktioner"
  // },
];

// --- Utbildning och kurser ---
export interface Training {
  title: string;
  organization: string;
  year: number;
  description?: string;
}

export const training: Training[] = [
  // Lägg till kurser och utbildningar här, t.ex:
  // {
  //   title: "Barnteater - grundkurs",
  //   organization: "Kulturskolan",
  //   year: 2025,
  //   description: "Kurs i improvisation och scenkonst"
  // },
];
