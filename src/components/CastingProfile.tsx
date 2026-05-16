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
    <section id="profil" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Casting-profil</h2>
        <div className="w-16 h-1 bg-accent rounded mb-4" />
        <p className="text-muted mb-10">
          Snabb överblick för casting directors och producenter.
        </p>

        {/* Quick facts */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div className="border border-border rounded-xl p-4 bg-background text-center">
            <p className="text-2xl font-bold text-accent">{age}</p>
            <p className="text-sm text-muted">år</p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-background text-center">
            <p className="text-2xl font-bold text-accent">
              {profile.location}
            </p>
            <p className="text-sm text-muted">Baserad i</p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-background text-center col-span-2 md:col-span-1">
            <div className="flex items-center justify-center gap-1">
              <Globe size={18} className="text-accent" />
              <p className="text-sm font-medium">
                {profile.languages.join(", ")}
              </p>
            </div>
            <p className="text-sm text-muted mt-1">Språk</p>
          </div>
        </div>

        {/* Physical attributes */}
        <h3 className="text-lg font-semibold mb-4">Fysiska mått</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {physicalFields.map(({ key, label, icon: Icon }) => {
            const value = profile.physical[key];
            return (
              <div
                key={key}
                className="flex items-center gap-3 border border-border rounded-lg p-3 bg-background"
              >
                <Icon size={18} className="text-accent shrink-0" />
                <div>
                  <p className="text-xs text-muted">{label}</p>
                  <p className="font-medium">
                    {value || (
                      <span className="text-muted italic text-sm">
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
        <div className="text-center pt-6 border-t border-border">
          <p className="text-sm text-muted mb-4">
            Vill du ha Hugos kompletta CV som PDF?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Kontakta oss for fullständigt CV
          </a>
        </div>
      </div>
    </section>
  );
}
