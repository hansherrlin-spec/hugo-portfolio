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
  Visas: "bg-green-100 text-green-700",
  Kommande: "bg-blue-100 text-blue-700",
  Inspelad: "bg-yellow-100 text-yellow-700",
  Pågående: "bg-purple-100 text-purple-700",
};

export default function CV() {
  return (
    <section id="cv" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">CV - Roller & Erfarenhet</h2>
        <div className="w-16 h-1 bg-accent rounded mb-10" />

        {/* Roles */}
        <div className="space-y-6">
          {roles.map((role) => {
            const Icon = typeIcons[role.type] || Sparkles;
            return (
              <div
                key={role.id}
                className="border border-border rounded-xl p-6 hover:shadow-md transition-shadow bg-background"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-accent-light">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{role.title}</h3>
                      <p className="text-accent font-medium">{role.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted">{role.year}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[role.status] || ""}`}
                    >
                      {role.status}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-muted">{role.description}</p>

                <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted">
                  {role.channel && (
                    <span>
                      Kanal: <strong className="text-foreground">{role.channel}</strong>
                    </span>
                  )}
                  {role.director && (
                    <span>
                      Regi: <strong className="text-foreground">{role.director}</strong>
                    </span>
                  )}
                  {role.production && (
                    <span>
                      Produktion:{" "}
                      <strong className="text-foreground">{role.production}</strong>
                    </span>
                  )}
                  <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs">
                    {typeLabels[role.type]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Training */}
        {training.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Utbildning & Kurser</h3>
            <div className="space-y-4">
              {training.map((t, i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg p-4 bg-background"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{t.title}</h4>
                      <p className="text-sm text-muted">{t.organization}</p>
                    </div>
                    <span className="text-sm text-muted">{t.year}</span>
                  </div>
                  {t.description && (
                    <p className="mt-2 text-sm text-muted">{t.description}</p>
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
