const STEPS = [
  {
    n: "01",
    title: "Audyt i wybór ścieżki",
    body:
      "60-minutowa rozmowa z architektem AI. Mapujemy aktualny stack, kompetencje i 3 use case'y o najwyższym ROI. Wynik: rekomendacja ścieżki i sprintu wdrożeniowego.",
    duration: "Tydzień 0",
  },
  {
    n: "02",
    title: "Warsztaty + mentoring 1:1",
    body:
      "Sesje hybrydowe: 2 dni warsztatów na żywo w tygodniu + 90 minut mentoringu indywidualnego. Wszystkie materiały są aktualizowane na 7 dni przed kohortą — bez nagrań z 2023.",
    duration: "Tygodnie 1–8",
  },
  {
    n: "03",
    title: "Sprint wdrożeniowy",
    body:
      "Twój zespół buduje funkcję na własnym kodzie i danych. Mentor pracuje code-by-code, nie slajd-po-slajdzie. Bramki jakościowe: eval, latency, koszt, fallback.",
    duration: "Tygodnie 6–10",
  },
  {
    n: "04",
    title: "Recenzja i certyfikacja",
    body:
      "Niezależny review architektury i bezpieczeństwa. Certyfikat zgodny z CPD i mapowaniem do EU AI Act dla każdego uczestnika. Plan utrzymania na 90 dni.",
    duration: "Tydzień 12",
  },
];

export function Approach() {
  return (
    <section
      id="metoda"
      aria-labelledby="approach-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <header className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent-hover">
              Metoda
            </p>
            <h2
              id="approach-heading"
              className="mt-4 font-display text-4xl sm:text-5xl text-balance text-[#0C0A09]"
            >
              Cztery kroki od pierwszej rozmowy
              <br className="hidden sm:block" /> do bramki produkcyjnej.
            </h2>
          </div>
          <p className="md:col-span-5 text-pretty text-base text-[#57534E]">
            Każdy etap ma kryteria wyjścia. Jeśli zespół ich nie spełnia,
            wstrzymujemy następny krok — to nie jest fabryka certyfikatów.
          </p>
        </header>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#E7E5E4] bg-[#E7E5E4] md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="group relative flex flex-col bg-white p-7 transition-colors duration-300 hover:bg-[#FAFAF9]"
            >
              <div className="flex items-baseline justify-between">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl font-medium text-[#E7E5E4] transition-colors group-hover:text-accent"
                >
                  {s.n}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#57534E]">
                  {s.duration}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl text-[#0C0A09] text-balance">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-[#57534E] leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
