"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#om", label: "Om Hugo" },
  { href: "#cv", label: "CV" },
  { href: "#media", label: "Media" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" className="text-sm font-semibold uppercase tracking-widest text-white">
          Hugo Herrlin
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider text-neutral-500 hover:text-white transition-colors"
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
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-neutral-950 border-t border-neutral-900">
          <div className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-neutral-400 hover:text-white"
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
