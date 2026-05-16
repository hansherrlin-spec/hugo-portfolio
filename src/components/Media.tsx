import { media, profile } from "@/data/profile";
import { Play, Image as ImageIcon, Video } from "lucide-react";

export default function Media() {
  const hasYouTube = profile.social.youtube;
  const hasMedia = media.length > 0;

  return (
    <section id="media" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">
          Media
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Showreel & Klipp
        </h2>

        {!hasMedia && !hasYouTube ? (
          <div className="text-center py-16 border border-dashed border-neutral-800 rounded-2xl bg-neutral-900/50">
            <Video size={48} className="mx-auto text-neutral-700 mb-4" />
            <p className="text-lg text-neutral-400 mb-2">
              Media kommer snart!
            </p>
            <p className="text-sm text-neutral-500">
              Klipp och bilder från Hugos produktioner läggs upp här efter hand.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {hasYouTube && (
              <a
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-neutral-800 rounded-xl hover:border-red-900/50 transition-colors bg-neutral-900 group"
              >
                <div className="p-4 rounded-xl bg-red-950 text-red-500 group-hover:bg-red-900/60 transition-colors">
                  <Play size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">SketchSpark - YouTube</h3>
                  <p className="text-sm text-neutral-500">
                    Se Hugos videos och klipp på YouTube
                  </p>
                </div>
              </a>
            )}

            {hasMedia && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {media.map((item) => (
                  <div
                    key={item.id}
                    className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900 hover:border-red-900/50 transition-colors"
                  >
                    {item.type === "youtube" ? (
                      <div className="aspect-video bg-neutral-800 flex items-center justify-center">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 text-neutral-500 hover:text-red-500 transition-colors"
                        >
                          <Play size={40} />
                          <span className="text-sm">Spela video</span>
                        </a>
                      </div>
                    ) : (
                      <div className="aspect-video bg-neutral-800 flex items-center justify-center">
                        <ImageIcon size={40} className="text-neutral-700" />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-medium text-white">{item.title}</h3>
                      {item.description && (
                        <p className="text-sm text-neutral-500 mt-1">
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
