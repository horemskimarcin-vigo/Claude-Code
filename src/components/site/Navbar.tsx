"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#programy", label: "Programy" },
  { href: "#metoda", label: "Metoda" },
  { href: "#trenerzy", label: "Trenerzy" },
  { href: "#wyniki", label: "Wyniki" },
  { href: "#cennik", label: "Cennik" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-4 right-4 top-4 z-40 mx-auto max-w-6xl rounded-2xl border transition-all duration-300",
        scrolled
          ? "border-[#1C1917]/10 bg-white/85 backdrop-blur-xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_32px_-8px_rgba(0,0,0,0.18)]"
          : "border-white/10 bg-transparent",
      )}
    >
      <nav
        aria-label="Główna nawigacja"
        className="flex h-14 items-center gap-6 px-4 sm:px-5"
      >
        <Link
          href="/"
          className={cn(
            "group flex items-center gap-2 font-display text-xl tracking-tight",
            scrolled ? "text-[#0C0A09]" : "text-white",
          )}
        >
          <LogoMark scrolled={scrolled} />
          <span className="hidden sm:inline">NeuroForge</span>
        </Link>

        <ul className="ml-2 hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  scrolled
                    ? "text-[#1C1917]/70 hover:text-[#0C0A09] hover:bg-[#0C0A09]/[0.04]"
                    : "text-white/80 hover:text-white hover:bg-white/10",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <Button
            variant={scrolled ? "ghost" : "outlineDark"}
            size="sm"
            asChild
          >
            <a href="#kontakt">Porozmawiajmy</a>
          </Button>
          <Button variant="gold" size="sm" asChild>
            <a href="#kontakt" aria-label="Zarezerwuj rozmowę z doradcą">
              Zarezerwuj rozmowę
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden",
            scrolled ? "text-[#0C0A09]" : "text-white",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#1C1917]/10 bg-white/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 p-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm text-[#0C0A09] hover:bg-[#0C0A09]/5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex gap-2 px-1">
              <Button variant="outline" size="md" asChild className="flex-1">
                <a href="#kontakt" onClick={() => setOpen(false)}>
                  Porozmawiajmy
                </a>
              </Button>
              <Button variant="gold" size="md" asChild className="flex-1">
                <a href="#kontakt" onClick={() => setOpen(false)}>
                  Rezerwacja
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function LogoMark({ scrolled }: { scrolled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 28"
      className="h-7 w-7"
      fill="none"
    >
      <circle
        cx="14"
        cy="14"
        r="13"
        stroke={scrolled ? "#0C0A09" : "#FFFFFF"}
        strokeOpacity="0.18"
      />
      <path
        d="M7 21V7l14 14V7"
        stroke={scrolled ? "#0C0A09" : "#FFFFFF"}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="7" cy="7" r="1.4" fill="#CA8A04" />
      <circle cx="21" cy="21" r="1.4" fill="#CA8A04" />
    </svg>
  );
}
