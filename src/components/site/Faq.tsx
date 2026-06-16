"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    q: "Czy materiały są naprawdę aktualne?",
    a: "Lekcje aktualizujemy nie rzadziej niż 7 dni przed startem każdej kohorty. Konkretnie: data ostatniej aktualizacji widnieje przy każdym module, a wszystkie zalecane modele LLM, narzędzia i biblioteki mają wskazaną wersję. Jeśli między startem a końcem programu coś istotnie się zmieni — robimy update na bieżąco.",
  },
  {
    q: "Mam zespół o różnym poziomie. Jak to ogarniacie?",
    a: "Każdy program zaczynamy od mapowania kompetencji. Uczestnicy są dzieleni na pary peer-review tak, aby seniorzy mentorowali juniorów w zadaniach domowych. Sesje warsztatowe są wspólne, ale mentoring 1:1 jest indywidualizowany — dokładnie pod lukę kompetencyjną.",
  },
  {
    q: "Czy zapewniacie infrastrukturę GPU i klucze API?",
    a: "Dla wariantu Indywidualnego — tak, dostęp do akademickiej infrastruktury (Anthropic, OpenAI, vLLM, RunPod) z budżetem 200 USD na uczestnika. Dla wariantów Zespół i Organizacja domyślnie wdrażamy na Waszym tenancie, żeby zespół pracował na środowisku, do którego potem wraca.",
  },
  {
    q: "Co dostajemy poza certyfikatem?",
    a: "Kod projektu wdrożeniowego (Wasza własność), raport recenzji technicznej i bezpieczeństwa, plan utrzymania na 90 dni oraz dostęp do aktualizacji materiałów przez 12 miesięcy. Certyfikat jest formalnym dokumentem CPD z mapowaniem do EU AI Act.",
  },
  {
    q: "Jak wygląda płatność, refundacja, faktura?",
    a: "Faktura z terminem 14 dni. Możliwe rozłożenie na 2 raty bez odsetek. Dla pracodawców wnioskujących o refundację z BUR/KFS wystawiamy wszystkie dokumenty wymagane przez operatora — z naszej strony to bezpłatne. Realny zwrot kosztów BUR-em sięga do 80%.",
  },
  {
    q: "Co jeśli zespół nie spełnia kryteriów wyjścia po sprincie?",
    a: "Wstrzymujemy program i dajemy dodatkowe sesje mentoringu (do 6 godzin na uczestnika) bez dodatkowej opłaty. To jest nasza odpowiedzialność, nie Wasza. Jeśli po wydłużeniu nadal nie spełnia — wpłatę zwracamy proporcjonalnie do nieukończonej części.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-[#FAFAF9]"
    >
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <header className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent-hover">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-4 font-display text-4xl sm:text-5xl text-balance text-[#0C0A09]"
          >
            Najczęstsze pytania,
            <br className="hidden sm:block" /> na które nie odpowiada strona głównego konkurenta.
          </h2>
        </header>

        <ul className="mt-14 divide-y divide-[#E7E5E4] overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}-panel`}
                  id={`faq-${i}-trigger`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-[#FAFAF9]"
                >
                  <span className="font-display text-lg text-[#0C0A09] text-balance">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-[#E7E5E4] text-[#0C0A09] transition-colors group-hover:border-[#1C1917]"
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  id={`faq-${i}-panel`}
                  role="region"
                  aria-labelledby={`faq-${i}-trigger`}
                  hidden={!isOpen}
                  className={cn(
                    "px-6 pb-6 text-[15px] leading-relaxed text-[#57534E]",
                  )}
                >
                  {item.a}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
