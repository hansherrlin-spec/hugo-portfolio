"use client";

import { profile } from "@/data/profile";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-14">
      <div className="max-w-2xl mx-auto text-center">
        {/* Large name */}
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-white mb-4">
          Hugo
          <br />
          Herrlin
        </h1>

        <div className="w-16 h-px bg-red-600 mx-auto mb-6" />

        <p className="text-lg md:text-xl text-neutral-400 font-light tracking-wide mb-12">
          Skådespelare
        </p>

        {/* Profile photo - large and prominent */}
        <div className="mx-auto w-72 h-72 md:w-96 md:h-96 rounded-sm overflow-hidden bg-neutral-900">
          {imgError ? (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-5xl font-bold text-neutral-700">HH</span>
            </div>
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
      </div>
    </section>
  );
}
