import { profile } from "@/data/profile";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Media() {
  const hasYouTube = profile.social.youtube;

  return (
    <section id="media" className="site-section">
      <div className="site-container">
        <p className="section-label">Media</p>

        <div style={{ marginBottom: 32 }}>
          <p className="text-label" style={{ marginBottom: 12 }}>Selftape</p>
          <video
            controls
            preload="metadata"
            playsInline
            poster="/hero-hugo.jpg"
            style={{
              width: "100%",
              maxWidth: 280,
              background: "#171717",
              display: "block",
            }}
          >
            <source src="/hugo-selftape.mp4" type="video/mp4" />
            Din webbläsare stöder inte HTML5-video.
          </video>
        </div>

        {hasYouTube && (
          <a
            href={profile.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="media-row"
          >
            <Play size={18} style={{ color: "#ef4444", flexShrink: 0 }} />
            <div>
              <p className="media-title">SketchSpark - YouTube</p>
              <p className="text-small">Hugos YouTube-kanal med teckningar</p>
            </div>
          </a>
        )}

        <Link href="/videos" className="media-row">
          <Play size={18} style={{ color: "#525252", flexShrink: 0 }} />
          <div>
            <p className="media-title">Klipp och videos</p>
            <p className="text-small">Vi inväntar klipp från Hugos första inspelningar</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
