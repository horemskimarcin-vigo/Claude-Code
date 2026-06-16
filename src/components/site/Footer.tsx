import Link from "next/link";

const GROUPS = [
  {
    title: "Programy",
    items: [
      { href: "#programy", label: "Ścieżka inżynieryjna" },
      { href: "#programy", label: "Ścieżka produktowa" },
      { href: "#programy", label: "Ścieżka liderska" },
      { href: "#programy", label: "Kohorty firmowe" },
    ],
  },
  {
    title: "Akademia",
    items: [
      { href: "#metoda", label: "Metoda" },
      { href: "#trenerzy", label: "Trenerzy" },
      { href: "#wyniki", label: "Case studies" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Materiały",
    items: [
      { href: "#", label: "Raport „AI w polskim enterprise 2026”" },
      { href: "#", label: "Mapa EU AI Act" },
      { href: "#", label: "Eval cookbook (open-source)" },
      { href: "#", label: "Newsletter Forge.note" },
    ],
  },
  {
    title: "Firma",
    items: [
      { href: "#", label: "O nas" },
      { href: "#", label: "Praca" },
      { href: "#kontakt", label: "Kontakt" },
      { href: "#", label: "Dla mediów" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="border-t border-[#1C1917]/15 bg-[#070608] text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Stopka
      </h2>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 font-display text-2xl">
              <svg
                aria-hidden="true"
                viewBox="0 0 28 28"
                className="h-7 w-7"
                fill="none"
              >
                <circle cx="14" cy="14" r="13" stroke="#FFFFFF" strokeOpacity="0.25" />
                <path
                  d="M7 21V7l14 14V7"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <circle cx="7" cy="7" r="1.4" fill="#CA8A04" />
                <circle cx="21" cy="21" r="1.4" fill="#CA8A04" />
              </svg>
              NeuroForge
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60 leading-relaxed">
              Akademia praktyki AI dla zespołów technologicznych i liderów.
              Programy 4–12 tygodni z mentoringiem 1:1 i wdrożeniem.
            </p>
            <p className="mt-6 text-xs text-white/40">
              Forge Education sp. z o.o. · NIP 5252912345
              <br />
              ul. Ząbkowska 23, 03-735 Warszawa
            </p>
          </div>

          <nav
            aria-label="Stopka"
            className="grid gap-8 sm:grid-cols-2 md:col-span-8 md:grid-cols-4"
          >
            {GROUPS.map((g) => (
              <div key={g.title}>
                <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                  {g.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        href={it.href}
                        className="text-sm text-white/75 transition-colors hover:text-white"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Forge Education sp. z o.o. Wszystkie
            prawa zastrzeżone.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/50">
            <li>
              <a href="#" className="hover:text-white">Regulamin</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Polityka prywatności</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Deklaracja dostępności</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">BUR / KFS</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
