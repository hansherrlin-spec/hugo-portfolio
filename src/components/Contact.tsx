import { profile } from "@/data/profile";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Kontakt</h2>
        <div className="w-16 h-1 bg-accent rounded mb-4" />
        <p className="text-muted mb-10">
          Intresserad av att boka Hugo? Kontakta oss via mejl. All kontakt sker
          genom Hugos förälder/vårdnadshavare.
        </p>

        <div className="border border-border rounded-2xl p-8 bg-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center">
              <span className="text-xl">👋</span>
            </div>
            <div>
              <p className="font-semibold">{profile.contact.guardianName}</p>
              <p className="text-sm text-muted">Förälder / Kontaktperson</p>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-accent-light/50 transition-colors group"
            >
              <Mail
                size={20}
                className="text-accent group-hover:scale-110 transition-transform"
              />
              <div>
                <p className="text-sm text-muted">E-post</p>
                <p className="font-medium">{profile.contact.email}</p>
              </div>
            </a>

            {profile.contact.phone && (
              <a
                href={`tel:${profile.contact.phone}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-accent-light/50 transition-colors group"
              >
                <Phone
                  size={20}
                  className="text-accent group-hover:scale-110 transition-transform"
                />
                <div>
                  <p className="text-sm text-muted">Telefon</p>
                  <p className="font-medium">{profile.contact.phone}</p>
                </div>
              </a>
            )}

            <div className="flex items-center gap-3 p-4 rounded-xl border border-border">
              <MapPin size={20} className="text-accent" />
              <div>
                <p className="text-sm text-muted">Baserad i</p>
                <p className="font-medium">{profile.contact.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
