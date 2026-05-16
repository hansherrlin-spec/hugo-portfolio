"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/#om", label: "Om Hugo" },
  { href: "/#cv", label: "CV" },
  { href: "/videos", label: "Videos" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="nav-brand">
          Hugo Herrlin
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
