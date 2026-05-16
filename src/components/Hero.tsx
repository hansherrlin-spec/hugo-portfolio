"use client";

import { profile } from "@/data/profile";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero">
      <h1 className="hero-name">
        Hugo
        <br />
        Herrlin
      </h1>

      <div className="hero-line" />

      <p className="hero-subtitle">Skådespelare</p>

      <div className="hero-photo">
        {imgError ? (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 48, fontWeight: 700, color: "#404040" }}>HH</span>
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/hero-hugo.jpg"
            alt={profile.name}
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </section>
  );
}
