import { roles, training } from "@/data/profile";

export default function CV() {
  return (
    <section id="cv" className="site-section">
      <div className="site-container">
        <p className="section-label">CV</p>

        {roles.map((role) => (
          <div key={role.id} className="cv-entry">
            <div className="cv-header">
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", margin: 0 }}>
                  {role.title}
                </h3>
                <p style={{ fontSize: 13, color: "#f87171", margin: "2px 0 0" }}>
                  {role.role}
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: role.status === "Kommande" ? "#ef4444" : role.status === "Visas" ? "#22c55e" : "#eab308",
                    display: "inline-block",
                  }}
                />
                <span className="text-small">{role.year}</span>
              </div>
            </div>
            <p className="text-small" style={{ marginBottom: 4 }}>{role.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0 16px", fontSize: 12, color: "#525252" }}>
              {role.channel && <span>Kanal: {role.channel}</span>}
              {role.director && <span>Regi: {role.director}</span>}
              {role.production && <span>Produktion: {role.production}</span>}
            </div>
          </div>
        ))}

        {training.length > 0 && (
          <div style={{ marginTop: 56 }}>
            <p className="text-label" style={{ marginBottom: 24 }}>Utbildning</p>
            {training.map((t, i) => (
              <div key={i} className="cv-entry">
                <div className="cv-header">
                  <div>
                    <p style={{ fontWeight: 500, color: "#fff", fontSize: 15, margin: 0 }}>{t.title}</p>
                    <p className="text-small">{t.organization}</p>
                  </div>
                  <span style={{ fontSize: 12, color: "#525252" }}>{t.year}</span>
                </div>
                {t.description && <p className="text-small">{t.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
