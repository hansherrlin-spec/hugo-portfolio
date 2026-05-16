import { profile } from "@/data/profile";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-red-500 mb-8 sm:mb-10">
          Kontakt
        </h2>

        <p className="text-sm sm:text-base text-neutral-400 mb-6 sm:mb-8">
          Intresserad av att boka Hugo? All kontakt sker genom Hugos
          förälder/vårdnadshavare.
        </p>

        <div className="border-t border-neutral-900 pt-4 sm:pt-6 space-y-0">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <p className="text-xs sm:text-sm text-neutral-500">Kontaktperson</p>
            <p className="text-sm sm:text-base text-white">{profile.contact.guardianName}</p>
          </div>

          <div className="flex items-center justify-between py-3 sm:py-4 border-t border-neutral-900">
            <p className="text-xs sm:text-sm text-neutral-500">E-post</p>
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-sm sm:text-base text-white hover:text-red-400 transition-colors inline-flex items-center gap-2"
            >
              <Mail size={14} className="hidden sm:block" />
              {profile.contact.email}
            </a>
          </div>

          {profile.contact.phone && (
            <div className="flex items-center justify-between py-3 sm:py-4 border-t border-neutral-900">
              <p className="text-xs sm:text-sm text-neutral-500">Telefon</p>
              <a
                href={`tel:${profile.contact.phone}`}
                className="text-sm sm:text-base text-white hover:text-red-400 transition-colors"
              >
                {profile.contact.phone}
              </a>
            </div>
          )}

          <div className="flex items-center justify-between py-3 sm:py-4 border-t border-neutral-900">
            <p className="text-xs sm:text-sm text-neutral-500">Baserad i</p>
            <p className="text-sm sm:text-base text-white">{profile.contact.city}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
