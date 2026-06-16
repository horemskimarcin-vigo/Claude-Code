import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neuroforge.academy"),
  title: {
    default: "NeuroForge — Akademia AI dla zespołów, które chcą wyprzedzić rynek",
    template: "%s · NeuroForge Academy",
  },
  description:
    "Szkolenia z generatywnego AI dla zespołów technicznych i biznesowych. Programy 4–12 tygodni, mentoring 1:1, projekty wdrożeniowe. Certyfikacja zgodna z EU AI Act.",
  openGraph: {
    title: "NeuroForge Academy",
    description:
      "Praktyczne szkolenia AI dla zespołów. Nie kurs nagrany w 2023 — żywy program z mentoringiem.",
    locale: "pl_PL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#0C0A09] focus:px-4 focus:py-2 focus:text-white"
        >
          Przejdź do treści
        </a>
        {children}
      </body>
    </html>
  );
}
