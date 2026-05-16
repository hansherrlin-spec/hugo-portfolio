"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#om", label: "Om Hugo" },
  { href: "#cv", label: "CV" },
  { href: "#media", label: "Media" },
  { href: "#profil", label: "Casting-profil" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-lg font-bold tracking-tight text-text">
          Hugo Herrlin
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text-muted"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <div className="flex flex-col p-4 gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-accent py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
