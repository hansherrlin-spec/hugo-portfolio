import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="om" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-red-500 mb-10">
          Välkommen
        </h2>

        <div className="space-y-6 text-base leading-relaxed text-neutral-400">
          {profile.bio.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {profile.skills.length > 0 && (
          <div className="mt-10 pt-10 border-t border-neutral-900">
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-4">
              Färdigheter
            </p>
            <p className="text-neutral-400">
              {profile.skills.join(" / ")}
            </p>
          </div>
        )}

        <div className="mt-10 pt-10 border-t border-neutral-900">
          <p className="text-xs uppercase tracking-widest text-neutral-600 mb-4">
            Detaljer
          </p>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-neutral-600 mb-1">Baserad i</p>
              <p className="text-neutral-300">{profile.location}</p>
            </div>
            <div>
              <p className="text-neutral-600 mb-1">Språk</p>
              <p className="text-neutral-300">{profile.languages.join(", ")}</p>
            </div>
            {profile.physical.hairColor && (
              <div>
                <p className="text-neutral-600 mb-1">Hårfärg</p>
                <p className="text-neutral-300">{profile.physical.hairColor}</p>
              </div>
            )}
            {profile.physical.eyeColor && (
              <div>
                <p className="text-neutral-600 mb-1">Ögonfärg</p>
                <p className="text-neutral-300">{profile.physical.eyeColor}</p>
              </div>
            )}
            {profile.physical.height && (
              <div>
                <p className="text-neutral-600 mb-1">Längd</p>
                <p className="text-neutral-300">{profile.physical.height}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
