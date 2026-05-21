import { profile } from "@/data/profile";

export default function CastingProfile() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - profile.birthYear;

  const fields: { label: string; value: string }[] = [
    { label: "Ålder", value: `${age} år` },
    { label: "Baserad i", value: profile.location },
    { label: "Språk", value: profile.languages.join(", ") },
    { label: "Längd", value: profile.physical.height },
    { label: "Hårfärg", value: profile.physical.hairColor },
    { label: "Ögonfärg", value: profile.physical.eyeColor },
    { label: "Skostorlek", value: profile.physical.shoeSize },
    { label: "Klädstorlek", value: profile.physical.clothingSize },
  ];

  return (
    <section id="profil" className="site-section">
      <div className="site-container">
        <p className="section-label">Casting</p>

        <div className="details-grid">
          {fields.map(({ label, value }) => (
            <div key={label}>
              <p className="text-label" style={{ marginBottom: 4 }}>
                {label}
              </p>
              <p style={{ color: "#d4d4d4", fontSize: 14 }}>
                {value || (
                  <span style={{ color: "#525252", fontStyle: "italic" }}>
                    —
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
