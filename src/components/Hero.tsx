import { profile } from "@/data/profile";
import { Film, Star, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-bg" />

      {/* Subtle red glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-800 rounded-full blur-[100px]" />
      </div>

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        {/* Profile photo */}
        <div className="mx-auto mb-8 w-44 h-44 rounded-full border-2 border-red-600/40 overflow-hidden shadow-2xl shadow-red-900/20 bg-neutral-800 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hugo.jpg"
            alt={profile.name}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
          {profile.name}
        </h1>

        <p className="text-xl md:text-2xl text-neutral-400 mb-8 font-light">
          {profile.tagline}
        </p>

        {/* Production badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur px-4 py-2 rounded-full text-sm text-neutral-300">
            <Film size={14} className="text-red-500" />
            TV & Film
          </span>
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur px-4 py-2 rounded-full text-sm text-neutral-300">
            <Star size={14} className="text-red-500" />
            Jakten på sommarskuggan
          </span>
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur px-4 py-2 rounded-full text-sm text-neutral-300">
            <Star size={14} className="text-red-500" />
            Vild - SVT
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cv"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-red-900/30"
          >
            Se CV
          </a>
          <a
            href="#kontakt"
            className="border border-white/20 text-neutral-300 hover:text-white hover:border-white/40 px-8 py-3 rounded-full font-medium transition-colors"
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
