import { Code2, Compass, Crown, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Program = {
  id: string;
  label: string;
  title: string;
  duration: string;
  audience: string;
  icon: LucideIcon;
  blurb: string;
  outcomes: string[];
  price: string;
  cohort: string;
};

const PROGRAMS: Program[] = [
  {
    id: "engineering",
    label: "Ścieżka inżynieryjna",
    title: "Systemy AI w produkcji",
    duration: "12 tygodni · 96 godz.",
    audience: "Senior dev, ML engineer, platform engineer",
    icon: Code2,
    blurb:
      "Architektura RAG, agentów i pipeline'ów inference. Mierzymy nie wow-demo, tylko p95 latency, koszt na zapytanie i recall na evalu.",
    outcomes: [
      "Production-ready RAG z evaluacją",
      "Agent z narzędziami i guardrailami",
      "Obserwowalność: tracing, koszt, retry",
      "Recenzja techniczna sprintu przed wdrożeniem",
    ],
    price: "od 18 900 zł / osoba",
    cohort: "Kohorta Q1 — start 12 lutego",
  },
  {
    id: "product",
    label: "Ścieżka produktowa",
    title: "Produkt z AI od discovery do KPI",
    duration: "8 tygodni · 56 godz.",
    audience: "Product Manager, Product Owner, UX Lead",
    icon: Compass,
    blurb:
      "Jak nie wpaść w pułapkę „zróbmy czat”. Discovery z modelem, walidacja na 5 użytkownikach, metryki, które mówią o wartości — nie o NPS.",
    outcomes: [
      "Framework decyzyjny AI/Non-AI",
      "Prototyp w 2 tygodnie z evaluacją",
      "North-star + leading KPI dla funkcji AI",
      "Plan go-to-market i komunikacja ryzyk",
    ],
    price: "od 12 400 zł / osoba",
    cohort: "Kohorta Q1 — start 19 lutego",
  },
  {
    id: "leadership",
    label: "Ścieżka liderska",
    title: "Liderzy w erze AI",
    duration: "4 tygodnie · 24 godz.",
    audience: "C-suite, Head of, dyrektor liniowy",
    icon: Crown,
    blurb:
      "Strategia, ryzyko, ekonomia. EU AI Act bez paniki, koszty operacyjne bez mglistych szacunków, wybór dostawcy bez sprzedawcy.",
    outcomes: [
      "Decyzja kup/buduj/dzierżaw na konkretach",
      "Mapa kompetencji zespołu vs. roadmapa",
      "EU AI Act: matryca obowiązków",
      "Symulacja TCO i ROI dla 3 use case'ów",
    ],
    price: "od 22 500 zł / osoba",
    cohort: "Kohorta Q1 — start 5 marca",
  },
];

export function Programs() {
  return (
    <section
      id="programy"
      aria-labelledby="programs-heading"
      className="bg-[#FAFAF9]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent-hover">
            Programy
          </p>
          <h2
            id="programs-heading"
            className="mt-4 font-display text-4xl sm:text-5xl text-balance text-[#0C0A09]"
          >
            Trzy ścieżki. Jedna decyzja o tym,
            <br className="hidden sm:block" /> kogo posyłasz na pierwsze szkolenie.
          </h2>
          <p className="mt-5 text-pretty text-base text-[#57534E]">
            Każda ścieżka kończy się projektem wdrożeniowym z mentorem i
            recenzją techniczną. Nie ma „certyfikatu za obecność".
          </p>
        </header>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PROGRAMS.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon;
  return (
    <article className="group relative flex flex-col rounded-2xl border border-[#E7E5E4] bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] hover:border-[#1C1917]/15">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0C0A09] text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#57534E]">
          {program.label}
        </span>
      </div>

      <h3 className="mt-7 font-display text-2xl text-[#0C0A09] text-balance">
        {program.title}
      </h3>
      <p className="mt-3 text-sm text-[#57534E] leading-relaxed">
        {program.blurb}
      </p>

      <dl className="mt-5 grid grid-cols-2 gap-3 text-xs">
        <div className="rounded-md border border-[#E7E5E4] bg-[#FAFAF9] px-3 py-2">
          <dt className="text-[10px] uppercase tracking-wider text-[#57534E]">Czas</dt>
          <dd className="mt-0.5 text-sm text-[#0C0A09]">{program.duration}</dd>
        </div>
        <div className="rounded-md border border-[#E7E5E4] bg-[#FAFAF9] px-3 py-2">
          <dt className="text-[10px] uppercase tracking-wider text-[#57534E]">Dla kogo</dt>
          <dd className="mt-0.5 text-sm text-[#0C0A09]">{program.audience}</dd>
        </div>
      </dl>

      <ul className="mt-5 space-y-2 text-sm text-[#1C1917]">
        {program.outcomes.map((o) => (
          <li key={o} className="flex items-start gap-2.5">
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 flex-none rounded-full bg-accent"
            />
            <span>{o}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex items-end justify-between gap-3 border-t border-[#E7E5E4] pt-5">
        <div>
          <div className="font-display text-xl text-[#0C0A09]">{program.price}</div>
          <div className="text-xs text-[#57534E]">{program.cohort}</div>
        </div>
        <a
          href="#kontakt"
          className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-[#0C0A09] transition-colors hover:bg-[#0C0A09]/[0.04]"
        >
          Porozmawiajmy
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}
