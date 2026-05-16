import { profile } from "@/data/profile";
import { Play, ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {(profile.social.youtube || profile.social.instagram) && (
        <div className="footer-social">
          {profile.social.youtube && (
            <a
              href={profile.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Play size={18} />
            </a>
          )}
          {profile.social.instagram && (
            <a
              href={profile.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      )}

      <hr className="divider" style={{ marginBottom: 24 }} />
      <p style={{ fontSize: 11, color: "#404040" }}>
        &copy; {year} {profile.name}
      </p>
    </footer>
  );
}
