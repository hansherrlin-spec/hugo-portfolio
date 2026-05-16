import { media, profile } from "@/data/profile";
import { Play } from "lucide-react";

export default function Media() {
  const hasYouTube = profile.social.youtube;
  const hasMedia = media.length > 0;

  if (!hasMedia && !hasYouTube) return null;

  return (
    <section id="media" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-red-500 mb-10">
          Media
        </h2>

        <div className="space-y-4">
          {hasYouTube && (
            <a
              href={profile.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-4 border-b border-neutral-900 group"
            >
              <Play size={20} className="text-red-500 shrink-0" />
              <div>
                <p className="font-medium text-white group-hover:text-red-400 transition-colors">
                  SketchSpark - YouTube
                </p>
                <p className="text-sm text-neutral-500">
                  Hugos YouTube-kanal med videos och sketcher
                </p>
              </div>
            </a>
          )}

          {hasMedia &&
            media.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-4 border-b border-neutral-900 group"
              >
                <Play size={20} className="text-neutral-600 shrink-0" />
                <div>
                  <p className="font-medium text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="text-sm text-neutral-500">{item.description}</p>
                  )}
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
