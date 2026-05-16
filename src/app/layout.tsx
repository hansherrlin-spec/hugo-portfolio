import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hugo Herrlin - Ung Skådespelare",
  description:
    "Portfolio och CV för Hugo Herrlin - ung skådespelare baserad i Sverige. Medverkat i Jakten på sommarskuggan och Vild (SVT).",
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
      "Portfolio och CV för Hugo Herrlin - ung skådespelare baserad i Sverige.",
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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
