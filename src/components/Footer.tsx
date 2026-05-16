import { profile } from "@/data/profile";
import { Play, ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 px-6 bg-bg-card">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">
          &copy; {year} {profile.name}
        </p>

        <div className="flex items-center gap-4">
          {profile.social.youtube && (
            <a
              href={profile.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-red-500 transition-colors"
              aria-label="YouTube"
            >
              <Play size={20} />
            </a>
          )}
          {profile.social.instagram && (
            <a
              href={profile.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-red-500 transition-colors"
              aria-label="Instagram"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
