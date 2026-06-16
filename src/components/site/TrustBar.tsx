const LOGOS = [
  "PKO Tech",
  "Allegro",
  "DocPlanner",
  "Brainly",
  "CD Projekt",
  "Asseco",
  "InPost",
  "Vinted",
];

export function TrustBar() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="border-y border-[#E7E5E4] bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h2
          id="trust-heading"
          className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#57534E]"
        >
          Zaufały nam zespoły z firm, których produktów używasz codziennie
        </h2>
        <ul className="mt-7 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {LOGOS.map((name) => (
            <li
              key={name}
              className="text-center font-display text-base tracking-tight text-[#1C1917]/55 transition-opacity hover:text-[#1C1917]"
              aria-label={name}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
