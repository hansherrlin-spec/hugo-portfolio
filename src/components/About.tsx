import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="om" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Om Hugo</h2>
        <div className="w-16 h-1 bg-accent rounded mb-8" />

        <div className="space-y-4 text-lg leading-relaxed text-muted">
          {profile.bio.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {profile.skills.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">
              Speciella färdigheter
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-accent-light text-accent px-3 py-1 rounded-full text-sm font-medium"
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
