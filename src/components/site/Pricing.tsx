import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const TIERS = [
  {
    name: "Indywidualny",
    description: "Dla pojedynczego inżyniera lub PM-ki, której zespół nie jest jeszcze gotowy.",
    price: "12 400 zł",
    unit: "/ uczestnik",
    cta: "Dołącz do kohorty",
    features: [
      "Pełna ścieżka 8–12 tygodni",
      "Sesje grupowe + 6 godz. mentoringu 1:1",
      "Projekt na sandbox academy",
      "Certyfikat CPD",
    ],
    featured: false,
  },
  {
    name: "Zespół",
    description: "Najczęściej wybierane przez działy 4–10 osób budujące pierwszy produkt z AI.",
    price: "84 000 zł",
    unit: "/ kohorta 6 osób",
    cta: "Zapytaj o ofertę",
    features: [
      "Wszystko z planu Indywidualnego",
      "Sprint wdrożeniowy na Waszym kodzie",
      "Dedykowany architekt na 12 tygodni",
      "Recenzja techniczna + raport zarządczy",
      "Materiały białe znakowane Waszą marką",
    ],
    featured: true,
  },
  {
    name: "Organizacja",
    description: "Program dla 20+ osób w 2–3 ścieżkach z mapowaniem do EU AI Act.",
    price: "od 320 000 zł",
    unit: "/ rok",
    cta: "Umów rozmowę z partnerem",
    features: [
      "Wszystko z planu Zespół, x3 kohorty",
      "Roadmap AI z C-suite",
      "Wsparcie compliance AI Act",
      "Office hours architekta — 365 dni",
      "SLA 4 godz. robocze na odpowiedź",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section
      id="cennik"
      aria-labelledby="pricing-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent-hover">
            Inwestycja
          </p>
          <h2
            id="pricing-heading"
            className="mt-4 font-display text-4xl sm:text-5xl text-balance text-[#0C0A09]"
          >
            Bez „skontaktuj się po wycenę" dla pierwszych dwóch planów.
          </h2>
          <p className="mt-5 text-pretty text-base text-[#57534E]">
            Ceny netto. Refundacja BUR/KFS dostępna dla obu planów. Faktura
            14 dni, możliwe rozłożenie na 2 raty bez odsetek.
          </p>
        </header>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={
                t.featured
                  ? "relative flex flex-col rounded-2xl border-2 border-[#0C0A09] bg-[#0C0A09] p-7 text-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]"
                  : "relative flex flex-col rounded-2xl border border-[#E7E5E4] bg-white p-7 text-[#0C0A09]"
              }
            >
              {t.featured && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#1C1917]">
                  Najczęściej wybierane
                </span>
              )}

              <div>
                <h3 className="font-display text-2xl">{t.name}</h3>
                <p className={t.featured ? "mt-2 text-sm text-white/70" : "mt-2 text-sm text-[#57534E]"}>
                  {t.description}
                </p>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl tracking-tight">{t.price}</span>
                <span className={t.featured ? "text-sm text-white/55" : "text-sm text-[#57534E]"}>
                  {t.unit}
                </span>
              </div>

              <ul className="mt-7 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={
                        t.featured
                          ? "mt-0.5 h-4 w-4 flex-none text-[#E1B847]"
                          : "mt-0.5 h-4 w-4 flex-none text-accent"
                      }
                      aria-hidden="true"
                    />
                    <span className={t.featured ? "text-white/90" : "text-[#1C1917]"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10 sm:mt-auto">
                <Button
                  variant={t.featured ? "gold" : "outline"}
                  size="md"
                  className="w-full"
                  asChild
                >
                  <a href="#kontakt">{t.cta}</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
