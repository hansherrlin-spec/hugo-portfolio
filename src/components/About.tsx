import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="om" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-2">
          Om Hugo
        </p>
        <h2 className="text-3xl font-bold mb-8 text-white">
          Ung talang med professionell erfarenhet
        </h2>

        <div className="space-y-4 text-lg leading-relaxed text-neutral-400">
          {profile.bio.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {profile.skills.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Speciella färdigheter
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-red-950/50 text-red-400 border border-red-900/50 px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
