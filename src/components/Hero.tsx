"use client";

import { profile } from "@/data/profile";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="min-h-svh flex flex-col items-center justify-center px-4 sm:px-6 pt-14">
      <div className="w-full max-w-2xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-white mb-4 leading-none">
          Hugo
          <br />
          Herrlin
        </h1>

        <div className="w-12 sm:w-16 h-px bg-red-600 mx-auto mb-4 sm:mb-6" />

        <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-light tracking-wide mb-8 sm:mb-12">
          Skådespelare
        </p>

        <div className="mx-auto w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 overflow-hidden bg-neutral-900">
          {imgError ? (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-5xl font-bold text-neutral-700">HH</span>
            </div>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src="/hero-hugo.jpg"
              alt={profile.name}
              className="object-cover w-full h-full"
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
