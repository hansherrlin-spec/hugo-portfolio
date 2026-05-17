"use client";

import { useState, useEffect, type ReactNode } from "react";

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("hh_auth");
    if (stored === "true") {
      setAuthed(true);
    }
    setChecking(false);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        sessionStorage.setItem("hh_auth", "true");
        setAuthed(true);
      } else {
        setError(true);
        setPassword("");
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (checking) {
    return null;
  }

  if (authed) {
    return <>{children}</>;
  }

  return (
    <div className="password-gate">
      <div className="password-card">
        <h1 className="password-name">Hugo Herrlin</h1>
        <p className="password-subtitle">Den här sidan är lösenordsskyddad</p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ange lösenord"
            className="password-input"
            autoFocus
          />
          {error && (
            <p className="password-error">Fel lösenord. Försök igen.</p>
          )}
          <button type="submit" className="password-btn" disabled={loading}>
            {loading ? "..." : "Logga in"}
          </button>
        </form>
      </div>
    </div>
  );
}
