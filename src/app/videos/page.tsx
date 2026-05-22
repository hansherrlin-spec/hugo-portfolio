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
  const videos = media.filter(
    (item) => item.type === "video" || item.type === "youtube"
  );

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: 56 }}>
        <section className="site-section">
          <div className="site-container-wide">
            <h1 style={{
              fontSize: "clamp(36px, 8vw, 56px)",
              fontWeight: 900,
              textTransform: "uppercase" as const,
              letterSpacing: "-0.02em",
              color: "#fff",
              lineHeight: 1,
              marginBottom: 16,
            }}>
              Videos
            </h1>
            <div style={{ width: 48, height: 2, background: "#dc2626", marginBottom: 20 }} />
            <p className="text-body" style={{ marginBottom: 48, maxWidth: 480 }}>
              Hugos selftape och scenklipp.
            </p>

            {profile.social.youtube && (
              <a
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="media-row"
                style={{ marginBottom: 48 }}
              >
                <Play size={18} style={{ color: "#ef4444", flexShrink: 0 }} />
                <div>
                  <p className="media-title">SketchSpark - YouTube</p>
                  <p className="text-small">Hugos YouTube-kanal med teckningar</p>
                </div>
              </a>
            )}

            {videos.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                {videos.map((item) => {
                  const videoId =
                    item.type === "youtube" ? getYouTubeId(item.url) : null;
                  return (
                    <div key={item.id}>
                      {item.type === "youtube" ? (
                        <div style={{ position: "relative", paddingBottom: "56.25%", background: "#171717" }}>
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              border: "none",
                            }}
                          />
                        </div>
                      ) : (
                        <video
                          controls
                          preload="metadata"
                          playsInline
                          style={{
                            width: "100%",
                            maxWidth: 360,
                            background: "#171717",
                            display: "block",
                          }}
                        >
                          <source src={item.url} type="video/mp4" />
                          Din webbläsare stöder inte HTML5-video.
                        </video>
                      )}
                      <div style={{ marginTop: 12 }}>
                        <h2 style={{ fontSize: 17, fontWeight: 600, color: "#fff", margin: 0 }}>
                          {item.title}
                        </h2>
                        {item.description && (
                          <p className="text-small" style={{ marginTop: 4 }}>
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{
                padding: "64px 20px",
                textAlign: "center",
                border: "1px dashed #262626",
              }}>
                <Video size={36} style={{ color: "#404040", margin: "0 auto 16px" }} />
                <p style={{ color: "#a3a3a3", marginBottom: 8 }}>Klipp kommer snart</p>
                <p className="text-small" style={{ maxWidth: 320, margin: "0 auto" }}>
                  Vi inväntar klipp från Hugos första inspelningar och publicerar dem här efter hand.
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
