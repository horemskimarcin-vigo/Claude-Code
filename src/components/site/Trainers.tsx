import Image from "next/image";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

type Trainer = {
  name: string;
  role: string;
  bio: string;
  img: string;
  tags: string[];
};

const TRAINERS: Trainer[] = [
  {
    name: "Dr Anna Wojciechowska",
    role: "Head of AI Engineering",
    bio: "11 lat w ML. Wcześniej research scientist w DeepMind i tech lead RAG dla 4 polskich banków.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    tags: ["RAG", "Evaluations", "Fine-tuning"],
  },
  {
    name: "Marek Kowalski",
    role: "Principal ML Engineer",
    bio: "Architekt platform inference dla startupów serii B+. Ex-OpenAI applied team, autor narzędzia open-source `evalkit`.",
    img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=800&q=80",
    tags: ["Agents", "MLOps", "Observability"],
  },
  {
    name: "Joanna Nowak",
    role: "Product Lead, AI",
    bio: "Prowadziła pierwszy w Polsce zespół Product Discovery z modelami generatywnymi. Mentor 30+ PM-ek.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    tags: ["Discovery", "Metryki", "GTM"],
  },
  {
    name: "Tomasz Wiśniewski",
    role: "AI Compliance Counsel",
    bio: "Radca prawny, ekspert EU AI Act. Konsultował 22 projekty zaklasyfikowane jako high-risk.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    tags: ["EU AI Act", "Risk", "Ład korporacyjny"],
  },
];

export function Trainers() {
  return (
    <section
      id="trenerzy"
      aria-labelledby="trainers-heading"
      className="bg-[#FAFAF9]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent-hover">
            Trenerzy
          </p>
          <h2
            id="trainers-heading"
            className="mt-4 font-display text-4xl sm:text-5xl text-balance text-[#0C0A09]"
          >
            Ludzie, którzy uczą, bo wcześniej
            <br className="hidden sm:block" /> wdrażali to w produkcji.
          </h2>
          <p className="mt-5 text-pretty text-[#57534E]">
            Każdy mentor ma za sobą minimum jedno wdrożenie AI w organizacji
            zatrudniającej powyżej 500 osób. To nie jest kryterium kosmetyczne —
            takie wdrożenia mają zupełnie inne problemy niż prototypy.
          </p>
        </header>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((t) => (
            <article
              key={t.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1C1917]/15 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E7E5E4]">
                <Image
                  src={t.img}
                  alt={`Portret trenera: ${t.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0C0A09]/65 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white">
                  <div>
                    <div className="font-display text-lg leading-tight">{t.name}</div>
                    <div className="text-xs text-white/80">{t.role}</div>
                  </div>
                  <a
                    href="#"
                    aria-label={`LinkedIn: ${t.name}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/30 bg-white/10 backdrop-blur hover:bg-white hover:text-[#0C0A09] transition-colors"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm text-[#57534E] leading-relaxed">{t.bio}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {t.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[#E7E5E4] bg-[#FAFAF9] px-2.5 py-1 text-[11px] text-[#1C1917]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
