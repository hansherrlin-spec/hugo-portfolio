import { profile } from "@/data/profile";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="site-section">
      <div className="site-container">
        <p className="section-label">Kontakt</p>

        <p className="text-body" style={{ marginBottom: 32 }}>
          Intresserad av att boka Hugo? All kontakt sker genom Hugos
          förälder/vårdnadshavare.
        </p>

        <div className="contact-row">
          <span className="text-small">Kontaktperson</span>
          <span style={{ color: "#fff", fontSize: 14 }}>{profile.contact.guardianName}</span>
        </div>

        <div className="contact-row">
          <span className="text-small">E-post</span>
          <a
            href={`mailto:${profile.contact.email}`}
            style={{
              color: "#fff",
              fontSize: 14,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s",
            }}
          >
            <Mail size={14} style={{ color: "#ef4444" }} />
            {profile.contact.email}
          </a>
        </div>

        {profile.contact.phone && (
          <div className="contact-row">
            <span className="text-small">Telefon</span>
            <a
              href={`tel:${profile.contact.phone}`}
              style={{ color: "#fff", fontSize: 14, textDecoration: "none" }}
            >
              {profile.contact.phone}
            </a>
          </div>
        )}

        <div className="contact-row">
          <span className="text-small">Baserad i</span>
          <span style={{ color: "#fff", fontSize: 14 }}>{profile.contact.city}</span>
        </div>
      </div>
    </section>
  );
}
