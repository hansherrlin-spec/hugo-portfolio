import { profile } from "@/data/profile";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Media() {
  const hasYouTube = profile.social.youtube;

  return (
    <section id="media" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-red-500 mb-8 sm:mb-10">
          Media
        </h2>

        <div className="space-y-0">
          {hasYouTube && (
            <a
              href={profile.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 py-4 border-b border-neutral-900 group"
            >
              <Play size={18} className="text-red-500 shrink-0" />
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-medium text-white group-hover:text-red-400 transition-colors">
                  SketchSpark - YouTube
                </p>
                <p className="text-xs sm:text-sm text-neutral-500">
                  Hugos YouTube-kanal med videos och sketcher
                </p>
              </div>
            </a>
          )}

          <Link
            href="/videos"
            className="flex items-center gap-3 sm:gap-4 py-4 border-b border-neutral-900 group"
          >
            <Play size={18} className="text-neutral-600 shrink-0" />
            <div className="min-w-0">
              <p className="text-sm sm:text-base font-medium text-white group-hover:text-red-400 transition-colors">
                Klipp och videos
              </p>
              <p className="text-xs sm:text-sm text-neutral-500">
                Se Hugos showreel och klipp från produktioner
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
