import { profile } from "@/data/profile";
import { Film, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Placeholder for profile photo */}
        <div className="mx-auto mb-8 w-40 h-40 rounded-full bg-slate-700 border-4 border-white/20 flex items-center justify-center overflow-hidden">
          <span className="text-5xl">🎬</span>
          {/* Replace with: <Image src="/hugo.jpg" ... /> when photo is available */}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          {profile.name}
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">
            <Film size={16} />
            TV & Film
          </span>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">
            <Star size={16} />
            Jakten på sommarskuggan
          </span>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">
            <Star size={16} />
            Vild - SVT
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cv"
            className="bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-slate-100 transition-colors"
          >
            Se CV
          </a>
          <a
            href="#kontakt"
            className="border border-white/30 px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            Kontakta oss
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
