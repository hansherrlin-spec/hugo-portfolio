import { profile } from "@/data/profile";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">
          Kontakt
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Boka Hugo</h2>
        <p className="text-neutral-500 mb-10">
          Intresserad av att boka Hugo? Kontakta oss via mejl. All kontakt sker
          genom Hugos förälder/vårdnadshavare.
        </p>

        <div className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-red-950 border border-red-900/40 flex items-center justify-center">
              <span className="text-xl">👋</span>
            </div>
            <div>
              <p className="font-semibold text-white">{profile.contact.guardianName}</p>
              <p className="text-sm text-neutral-500">Förälder / Kontaktperson</p>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href={`mailto:${profile.contact.email}`}
              className="flex items-center gap-3 p-4 rounded-xl border border-neutral-800 hover:border-red-900/50 transition-colors group bg-neutral-950"
            >
              <Mail
                size={20}
                className="text-red-500 group-hover:scale-110 transition-transform"
              />
              <div>
                <p className="text-xs text-neutral-500">E-post</p>
                <p className="font-medium text-white">{profile.contact.email}</p>
              </div>
            </a>

            {profile.contact.phone && (
              <a
                href={`tel:${profile.contact.phone}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-neutral-800 hover:border-red-900/50 transition-colors group bg-neutral-950"
              >
                <Phone
                  size={20}
                  className="text-red-500 group-hover:scale-110 transition-transform"
                />
                <div>
                  <p className="text-xs text-neutral-500">Telefon</p>
                  <p className="font-medium text-white">{profile.contact.phone}</p>
                </div>
              </a>
            )}

            <div className="flex items-center gap-3 p-4 rounded-xl border border-neutral-800 bg-neutral-950">
              <MapPin size={20} className="text-red-500" />
              <div>
                <p className="text-xs text-neutral-500">Baserad i</p>
                <p className="font-medium text-white">{profile.contact.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
