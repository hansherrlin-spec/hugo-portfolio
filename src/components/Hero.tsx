"use client";

import { profile } from "@/data/profile";
import { Film, Star, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-neutral-950" />

      {/* Subtle red glow */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-700 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-red-900 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        {/* Profile photo */}
        <div className="mx-auto mb-8 w-44 h-44 rounded-full border-2 border-red-600/30 overflow-hidden shadow-2xl shadow-red-950/40 bg-neutral-800 flex items-center justify-center">
          {imgError ? (
            <span className="text-4xl font-bold text-red-500">HH</span>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src="/hugo.jpg"
              alt={profile.name}
              className="object-cover w-full h-full"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-white">
          {profile.name}
        </h1>

        <p className="text-xl md:text-2xl text-neutral-400 mb-8 font-light">
          {profile.tagline}
        </p>

        {/* Production badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-neutral-300">
            <Film size={14} className="text-red-500" />
            TV & Film
          </span>
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-neutral-300">
            <Star size={14} className="text-red-500" />
            Jakten på sommarskuggan
          </span>
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-neutral-300">
            <Star size={14} className="text-red-500" />
            Vild - SVT
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cv"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-red-950/50"
          >
            Se CV
          </a>
          <a
            href="#kontakt"
            className="border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 px-8 py-3 rounded-full font-medium transition-colors"
          >
            Kontakta oss
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-neutral-600" />
      </div>
    </section>
  );
}
