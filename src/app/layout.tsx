import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hugo Herrlin - Ung Skådespelare",
  description:
    "Portfolio och CV for Hugo Herrlin - ung skådespelare baserad i Sverige. Medverkat i Jakten på sommarskuggan och Vild (SVT).",
  keywords: [
    "Hugo Herrlin",
    "skådespelare",
    "barneskådespelare",
    "svensk skådespelare",
    "casting",
    "portfolio",
  ],
  openGraph: {
    title: "Hugo Herrlin - Ung Skådespelare",
    description:
      "Portfolio och CV for Hugo Herrlin - ung skådespelare baserad i Sverige.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full bg-neutral-950 text-neutral-100"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
