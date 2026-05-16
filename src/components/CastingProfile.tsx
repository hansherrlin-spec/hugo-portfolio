import { profile } from "@/data/profile";
import { Ruler, Eye, Scissors, Footprints, Shirt, Globe } from "lucide-react";

const physicalFields = [
  { key: "height", label: "Längd", icon: Ruler },
  { key: "hairColor", label: "Hårfärg", icon: Scissors },
  { key: "eyeColor", label: "Ögonfärg", icon: Eye },
  { key: "shoeSize", label: "Skostorlek", icon: Footprints },
  { key: "clothingSize", label: "Klädstorlek", icon: Shirt },
] as const;

export default function CastingProfile() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - profile.birthYear;

  return (
    <section id="profil" className="py-24 px-6 bg-bg-card">
      <div className="max-w-3xl mx-auto">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-2">
          Casting
        </p>
        <h2 className="text-3xl font-bold mb-2 text-white">Casting-profil</h2>
        <p className="text-neutral-500 mb-10">
          Snabb överblick för casting directors och producenter.
        </p>

        {/* Quick facts */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div className="border border-border rounded-xl p-5 bg-bg-elevated text-center">
            <p className="text-3xl font-bold text-red-500">{age}</p>
            <p className="text-sm text-neutral-500 mt-1">år</p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-bg-elevated text-center">
            <p className="text-xl font-bold text-white">
              {profile.location}
            </p>
            <p className="text-sm text-neutral-500 mt-1">Baserad i</p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-bg-elevated text-center col-span-2 md:col-span-1">
            <div className="flex items-center justify-center gap-1.5">
              <Globe size={16} className="text-red-500" />
              <p className="text-sm font-medium text-white">
                {profile.languages.join(", ")}
              </p>
            </div>
            <p className="text-sm text-neutral-500 mt-1">Språk</p>
          </div>
        </div>

        {/* Physical attributes */}
        <h3 className="text-lg font-semibold mb-4 text-white">Fysiska mått</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {physicalFields.map(({ key, label, icon: Icon }) => {
            const value = profile.physical[key];
            return (
              <div
                key={key}
                className="flex items-center gap-3 border border-border rounded-lg p-3.5 bg-bg-elevated"
              >
                <Icon size={18} className="text-red-500 shrink-0" />
                <div>
                  <p className="text-xs text-neutral-500">{label}</p>
                  <p className="font-medium text-white">
                    {value || (
                      <span className="text-neutral-600 italic text-sm">
                        Uppdateras
                      </span>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Download CV button */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-sm text-neutral-500 mb-4">
            Vill du ha Hugos kompletta CV som PDF?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-red-900/30"
          >
            Kontakta oss för fullständigt CV
          </a>
        </div>
      </div>
    </section>
  );
}
