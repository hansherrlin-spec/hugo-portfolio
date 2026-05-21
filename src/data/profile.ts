// ============================================================
// Hugos skådespelar-profil
// Uppdatera denna fil med ny info - allt på sidan hämtar härifrån
// ============================================================
//
// Status: REDO ATT LANSERAS. Grundinfo, mått, kontakt och färdigheter ifyllda.
// Valfria tillägg när du har dem:
//   - roles[].production / channel  - produktionsbolag / kanal (om kända)
//   - media / training              - showreel och kurser (om några)
// ============================================================

export const profile = {
  // --- Grundinfo ---
  name: "Hugo Herrlin",
  tagline: "Ung skådespelare - Sverige",
  birthYear: 2015,
  location: "Sverige",
  languages: ["Svenska (modersmål)", "Engelska"],

  // --- Fysiska mått (viktigt för casting) ---
  physical: {
    height: "150–159 cm", // Byt gärna till exakt mått, t.ex. "155 cm"
    hairColor: "Blond",
    eyeColor: "Blå",
    shoeSize: "37",
    clothingSize: "158",
  },

  // --- Kontakt (via föräldrar) ---
  contact: {
    guardianName: "Louise Herrlin",
    email: "louise.herrlin@gmail.com",
    phone: "070-991 65 39",
    city: "Sverige",
  },

  // --- Speciella färdigheter ---
  skills: [
    "Improvisation",
    "Breakdance",
    "Rap",
    "Teckning & konst",
    "Gaming",
    "Japanska (nybörjare)",
    "Starkt minne – lär sig repliker snabbt",
    "Läser mycket",
    "Manga & anime",
  ],

  // --- Om Hugo (kort bio) ---
  bio: `Jag heter Hugo och är en pojke på 11 jordsnurr. Jag drömmer om att bli skådespelare. Jag har fått vara med i några produktioner och tycker att det är både roligt och lärorikt att få prova på.

Under 2026 var jag med i "Sommarlov" och fick spela mot Laszlo. Jag har också varit statist i SVT-produktionen "Vild" som sänds 2027.

Jag lyssnar gärna, tar instruktioner snabbt och lär mig mina repliker fort. På fritiden breakdansar jag, tecknar, gamar och lär mig japanska. Jag är inte bäst men försöker ta åt mig av de bästa, vill gärna fortsätta växa som skådespelare.`,

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
    id: "sommarlov",
    title: "Sommarlov",
    role: "Bärande roll (mot Laszlo)",
    type: "tv",
    year: 2026,
    production: "", // TODO: produktionsbolag (om känt)
    channel: "", // TODO: kanal/plattform (om känt)
    description:
      "Hel inspelningsdag i en av de bärande rollerna. Spelade mot Laszlo.",
    status: "Kommande",
    featured: true,
  },
  {
    id: "vild-svt",
    title: "Vild",
    role: "Statist",
    type: "tv",
    year: 2026,
    production: "", // TODO: produktionsbolag (om känt)
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
  // (Valfritt) Lägg till showreel/klipp här senare, t.ex:
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
  // (Valfritt) Lägg till kurser och utbildningar här senare.
];
