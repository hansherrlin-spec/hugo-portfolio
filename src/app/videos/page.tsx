import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { profile, media } from "@/data/profile";
import { Play, Video } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos - Hugo Herrlin",
  description: "Showreel och klipp från Hugo Herrlins produktioner.",
};

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/
  );
  return match ? match[1] : null;
}

export default function VideosPage() {
  const youtubeVideos = media.filter((item) => item.type === "youtube");

  return (
    <>
      <Navigation />
      <main className="pt-14">
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-4 leading-none">
              Videos
            </h1>
            <div className="w-12 h-px bg-red-600 mb-6" />
            <p className="text-sm sm:text-base text-neutral-400 mb-12 sm:mb-16 max-w-lg">
              Klipp och showreel från Hugos produktioner och YouTube-kanal.
            </p>

            {/* YouTube channel link */}
            {profile.social.youtube && (
              <a
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mb-12 sm:mb-16 py-3 px-5 border border-neutral-800 rounded-sm hover:border-red-900/50 transition-colors group"
              >
                <Play size={18} className="text-red-500" />
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">
                    SketchSpark - YouTube
                  </p>
                  <p className="text-xs text-neutral-500">
                    Besök Hugos YouTube-kanal
                  </p>
                </div>
              </a>
            )}

            {/* Video grid */}
            {youtubeVideos.length > 0 ? (
              <div className="space-y-8 sm:space-y-12">
                {youtubeVideos.map((item) => {
                  const videoId = getYouTubeId(item.url);
                  return (
                    <div key={item.id}>
                      {videoId ? (
                        <div className="aspect-video bg-neutral-900 overflow-hidden">
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      ) : (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block aspect-video bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 transition-colors"
                        >
                          <Play size={48} className="text-neutral-600" />
                        </a>
                      )}
                      <div className="mt-3 sm:mt-4">
                        <h2 className="text-base sm:text-lg font-semibold text-white">
                          {item.title}
                        </h2>
                        {item.description && (
                          <p className="text-sm text-neutral-500 mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-16 sm:py-24 text-center border border-dashed border-neutral-800">
                <Video size={40} className="mx-auto text-neutral-700 mb-4" />
                <p className="text-neutral-400 mb-2">
                  Klipp kommer snart
                </p>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                  Här kommer vi lägga upp showreel och klipp från Hugos produktioner efter hand.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
