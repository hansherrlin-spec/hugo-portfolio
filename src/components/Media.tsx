import { media, profile } from "@/data/profile";
import { Play, Image as ImageIcon, Video } from "lucide-react";

export default function Media() {
  const hasYouTube = profile.social.youtube;
  const hasMedia = media.length > 0;

  return (
    <section id="media" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Media & Showreel</h2>
        <div className="w-16 h-1 bg-accent rounded mb-10" />

        {!hasMedia && !hasYouTube ? (
          <div className="text-center py-16 border-2 border-dashed border-border rounded-2xl">
            <Video size={48} className="mx-auto text-muted mb-4" />
            <p className="text-lg text-muted mb-2">
              Media kommer snart!
            </p>
            <p className="text-sm text-muted">
              Klipp och bilder från Hugos produktioner läggs upp här efter hand.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* YouTube link */}
            {hasYouTube && (
              <a
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-border rounded-xl hover:shadow-md transition-shadow bg-card group"
              >
                <div className="p-3 rounded-xl bg-red-50 text-red-600 group-hover:bg-red-100 transition-colors">
                  <Play size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">YouTube-kanal</h3>
                  <p className="text-sm text-muted">
                    Se Hugos videos och klipp
                  </p>
                </div>
              </a>
            )}

            {/* Media grid */}
            {hasMedia && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {media.map((item) => (
                  <div
                    key={item.id}
                    className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-md transition-shadow"
                  >
                    {item.type === "youtube" ? (
                      <div className="aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
                        >
                          <Play size={40} />
                          <span className="text-sm">Spela video</span>
                        </a>
                      </div>
                    ) : (
                      <div className="aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <ImageIcon size={40} className="text-muted" />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-medium">{item.title}</h3>
                      {item.description && (
                        <p className="text-sm text-muted mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
