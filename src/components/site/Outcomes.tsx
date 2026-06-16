import { ArrowUpRight } from "lucide-react";

const CASES = [
  {
    sector: "Bankowość",
    company: "Bank notowany na GPW",
    headline: "Analiza umów kredytowych skrócona z 4 godzin do 23 minut.",
    bullets: [
      "RAG z 14 lat archiwum + custom evaluator",
      "p95 latency 1.8s · koszt 0.04 zł/zapytanie",
      "67% redukcji czasu, zero zwiększenia FTE",
    ],
    metric: "67%",
    metricLabel: "krótszy czas analizy",
  },
  {
    sector: "Przemysł",
    company: "Producent automotive Tier-1",
    headline: "Kontrola jakości spawów na linii — model wizyjny w 9 tygodni.",
    bullets: [
      "Edge inference na 4 stanowiskach montażowych",
      "Recall 97.4% przy 0.8% false positive",
      "Roczne oszczędności: 1.2 mln zł na braku",
    ],
    metric: "9 tyg.",
    metricLabel: "od warsztatu do produkcji",
  },
];

export function Outcomes() {
  return (
    <section
      id="wyniki"
      aria-labelledby="outcomes-heading"
      className="bg-[#0C0A09] text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <header className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#E1B847]">
              Wyniki w produkcji
            </p>
            <h2
              id="outcomes-heading"
              className="mt-4 font-display text-4xl sm:text-5xl text-balance"
            >
              Dwie krótkie historie. Bez slajdu „kosmiczna transformacja".
            </h2>
          </div>
          <p className="md:col-span-4 text-pretty text-base text-white/70">
            Liczby pochodzą z systemów monitoringu klientów po 90 dniach od
            wdrożenia. Pełne case studies dostępne pod NDA.
          </p>
        </header>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {CASES.map((c) => (
            <article
              key={c.headline}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full border border-white/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80">
                  {c.sector}
                </span>
                <span className="text-white/55">· {c.company}</span>
              </div>

              <h3 className="mt-6 font-display text-2xl text-balance">
                {c.headline}
              </h3>

              <ul className="mt-5 space-y-2 text-sm text-white/75">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 flex-none rounded-full bg-[#E1B847]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-end justify-between border-t border-white/10 pt-5">
                <div>
                  <div className="font-display text-4xl text-[#E1B847]">{c.metric}</div>
                  <div className="text-xs text-white/55">{c.metricLabel}</div>
                </div>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-white/80 hover:text-white"
                >
                  Pełne case
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        <Testimonial />
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <figure className="mt-16 grid gap-8 rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 md:grid-cols-12">
      <blockquote className="md:col-span-9">
        <p className="font-display text-2xl sm:text-3xl text-balance leading-snug">
          „Po dwóch poprzednich szkoleniach AI byliśmy umięśnieni w slajdy.
          Tutaj inżynier po 6 tygodniach przyniósł kawałek systemu, który
          poszedł na produkcję. To była różnica klasy, nie poziomu."
        </p>
      </blockquote>
      <figcaption className="md:col-span-3 flex flex-col justify-end text-sm text-white/65">
        <div className="font-display text-lg text-white">Krzysztof Banaś</div>
        <div>VP Engineering</div>
        <div className="mt-1 text-white/45">Spółka fintech, seria C</div>
      </figcaption>
    </figure>
  );
}
