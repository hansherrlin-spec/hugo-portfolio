import { profile } from "@/data/profile";
import { Play, ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Social links */}
        {(profile.social.youtube || profile.social.instagram) && (
          <div className="flex items-center justify-center gap-6 mb-10">
            {profile.social.youtube && (
              <a
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-red-500 transition-colors"
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
                className="text-neutral-600 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        )}

        <div className="border-t border-neutral-900 pt-8 text-center">
          <p className="text-xs text-neutral-700">
            &copy; {year} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
