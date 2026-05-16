"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#om", label: "Om Hugo" },
  { href: "#cv", label: "CV" },
  { href: "#media", label: "Media" },
  { href: "#profil", label: "Casting" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-lg font-bold tracking-tight text-white">
          Hugo Herrlin
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-red-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-neutral-400"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950">
          <div className="flex flex-col p-4 gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-red-500 py-2"
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
