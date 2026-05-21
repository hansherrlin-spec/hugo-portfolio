import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="om" className="site-section">
      <div className="site-container">
        <p className="section-label">Välkommen</p>

        <div className="about-layout">
          <div className="about-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hugo-casual.jpg" alt="Hugo Herrlin" />
          </div>
          <div className="about-text">
            {profile.bio.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-body" style={{ marginBottom: 16 }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {profile.skills.length > 0 && (
          <div style={{ marginTop: 40, paddingTop: 40, borderTop: "1px solid #171717" }}>
            <p className="text-label" style={{ marginBottom: 12 }}>
              Färdigheter
            </p>
            <p className="text-body">{profile.skills.join(" / ")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
