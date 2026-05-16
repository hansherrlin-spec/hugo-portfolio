import { roles, training } from "@/data/profile";

const statusDot: Record<string, string> = {
  Visas: "bg-green-500",
  Kommande: "bg-red-500",
  Inspelad: "bg-yellow-500",
  Pågående: "bg-purple-500",
};

export default function CV() {
  return (
    <section id="cv" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-red-500 mb-10">
          CV
        </h2>

        <div className="space-y-0">
          {roles.map((role) => (
            <div
              key={role.id}
              className="py-6 border-b border-neutral-900"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                  <p className="text-red-400 text-sm">{role.role}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`w-1.5 h-1.5 rounded-full ${statusDot[role.status] || "bg-neutral-500"}`} />
                  <span className="text-xs text-neutral-500">{role.year}</span>
                </div>
              </div>

              <p className="text-sm text-neutral-500 mb-2">{role.description}</p>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-600">
                {role.channel && <span>Kanal: {role.channel}</span>}
                {role.director && <span>Regi: {role.director}</span>}
                {role.production && <span>Produktion: {role.production}</span>}
              </div>
            </div>
          ))}
        </div>

        {training.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xs uppercase tracking-widest text-neutral-600 mb-8">
              Utbildning
            </h3>
            <div className="space-y-0">
              {training.map((t, i) => (
                <div key={i} className="py-4 border-b border-neutral-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">{t.title}</p>
                      <p className="text-sm text-neutral-500">{t.organization}</p>
                    </div>
                    <span className="text-xs text-neutral-600">{t.year}</span>
                  </div>
                  {t.description && (
                    <p className="mt-1 text-sm text-neutral-500">{t.description}</p>
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
