import { profile } from "@/data/profile";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Media() {
  const hasYouTube = profile.social.youtube;

  return (
    <section id="media" className="site-section">
      <div className="site-container">
        <p className="section-label">Media</p>

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
              <p className="text-small">Hugos YouTube-kanal med videos och sketcher</p>
            </div>
          </a>
        )}

        <Link href="/videos" className="media-row">
          <Play size={18} style={{ color: "#525252", flexShrink: 0 }} />
          <div>
            <p className="media-title">Klipp och videos</p>
            <p className="text-small">Se Hugos showreel och klipp från produktioner</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
