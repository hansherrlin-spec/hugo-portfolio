import { roles, training } from "@/data/profile";
import { Clapperboard, Tv, Theater, Video, Megaphone, Sparkles } from "lucide-react";

const typeIcons: Record<string, typeof Clapperboard> = {
  film: Clapperboard,
  tv: Tv,
  teater: Theater,
  kortfilm: Video,
  reklam: Megaphone,
  övrigt: Sparkles,
};

const typeLabels: Record<string, string> = {
  film: "Film",
  tv: "TV",
  teater: "Teater",
  kortfilm: "Kortfilm",
  reklam: "Reklam",
  övrigt: "Övrigt",
};

const statusColors: Record<string, string> = {
  Visas: "bg-green-950 text-green-400 border-green-800",
  Kommande: "bg-red-950 text-red-400 border-red-800",
  Inspelad: "bg-yellow-950 text-yellow-400 border-yellow-800",
  Pågående: "bg-purple-950 text-purple-400 border-purple-800",
};

export default function CV() {
  return (
    <section id="cv" className="py-24 px-6 bg-neutral-900/50">
      <div className="max-w-3xl mx-auto">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">
          Erfarenhet
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Roller & Produktioner
        </h2>

        <div className="space-y-5">
          {roles.map((role) => {
            const Icon = typeIcons[role.type] || Sparkles;
            return (
              <div
                key={role.id}
                className="border border-neutral-800 rounded-xl p-6 hover:border-red-900/50 transition-colors bg-neutral-900"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2.5 rounded-lg bg-red-950 border border-red-900/40">
                      <Icon size={18} className="text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                      <p className="text-red-400 font-medium">{role.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-500">{role.year}</span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium border ${statusColors[role.status] || ""}`}
                    >
                      {role.status}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-neutral-400">{role.description}</p>

                <div className="mt-3 flex flex-wrap gap-3 text-sm text-neutral-500">
                  {role.channel && (
                    <span>
                      Kanal: <strong className="text-neutral-300">{role.channel}</strong>
                    </span>
                  )}
                  {role.director && (
                    <span>
                      Regi: <strong className="text-neutral-300">{role.director}</strong>
                    </span>
                  )}
                  {role.production && (
                    <span>
                      Produktion:{" "}
                      <strong className="text-neutral-300">{role.production}</strong>
                    </span>
                  )}
                  <span className="bg-neutral-800 px-2 py-0.5 rounded text-xs text-neutral-400">
                    {typeLabels[role.type]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {training.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-white">Utbildning & Kurser</h3>
            <div className="space-y-4">
              {training.map((t, i) => (
                <div
                  key={i}
                  className="border border-neutral-800 rounded-lg p-4 bg-neutral-900"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">{t.title}</h4>
                      <p className="text-sm text-neutral-500">{t.organization}</p>
                    </div>
                    <span className="text-sm text-neutral-500">{t.year}</span>
                  </div>
                  {t.description && (
                    <p className="mt-2 text-sm text-neutral-400">{t.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
