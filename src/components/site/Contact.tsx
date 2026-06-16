"use client";

import { FormEvent, useState } from "react";
import { Clock, Mail, MapPin, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TRACKS = [
  { id: "engineering", label: "Ścieżka inżynieryjna" },
  { id: "product", label: "Ścieżka produktowa" },
  { id: "leadership", label: "Ścieżka liderska" },
  { id: "other", label: "Jeszcze nie wiem" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="kontakt"
      aria-labelledby="contact-heading"
      className="bg-[#0C0A09] text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#E1B847]">
              Kontakt
            </p>
            <h2
              id="contact-heading"
              className="mt-4 font-display text-4xl sm:text-5xl text-balance"
            >
              Pierwsza rozmowa to 30 minut.
              <br className="hidden sm:block" /> Bez slajdów. Bez sprzedawcy.
            </h2>
            <p className="mt-5 text-pretty text-white/65">
              Rozmawiamy z architektem. Mapujemy use case, blokery i to,
              czy program nas dwóch ma w ogóle sens. Jeśli nie — powiemy to.
            </p>

            <dl className="mt-10 space-y-5">
              <DetailRow icon={Clock} label="Odpowiadamy">
                Maksymalnie 4 godziny robocze.
              </DetailRow>
              <DetailRow icon={Mail} label="Email">
                <a
                  href="mailto:akademia@neuroforge.dev"
                  className="text-white underline-offset-4 hover:underline"
                >
                  akademia@neuroforge.dev
                </a>
              </DetailRow>
              <DetailRow icon={MapPin} label="Siedziba">
                Warszawa, Praga-Północ. Sesje hybrydowe — online + 2 zjazdy
                stacjonarne w kohorcie.
              </DetailRow>
            </dl>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm">
              {submitted ? (
                <SuccessState />
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="name"
                      label="Imię i nazwisko"
                      required
                      autoComplete="name"
                    />
                    <Field
                      id="email"
                      type="email"
                      label="Email służbowy"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="company"
                      label="Firma"
                      autoComplete="organization"
                    />
                    <Field
                      id="role"
                      label="Stanowisko"
                      autoComplete="organization-title"
                    />
                  </div>

                  <fieldset>
                    <legend className="mb-2 text-sm text-white/80">
                      Najbardziej interesuje mnie
                    </legend>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {TRACKS.map((t) => (
                        <label
                          key={t.id}
                          className="group cursor-pointer rounded-md border border-white/15 bg-white/[0.02] px-3 py-2.5 text-xs text-white/80 transition-colors has-[:checked]:border-[#E1B847] has-[:checked]:bg-[#E1B847]/10 has-[:checked]:text-white hover:border-white/30"
                        >
                          <input
                            type="radio"
                            name="track"
                            value={t.id}
                            className="sr-only"
                          />
                          {t.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label
                      htmlFor="msg"
                      className="mb-2 block text-sm text-white/80"
                    >
                      Krótko, nad czym pracujecie
                    </label>
                    <textarea
                      id="msg"
                      name="message"
                      rows={4}
                      className="w-full rounded-md border border-white/15 bg-white/[0.02] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-[#E1B847]/60 focus:bg-white/[0.04] focus:outline-none"
                      placeholder="Np. RAG na 200k dokumentów regulacyjnych, planujemy zacząć w marcu."
                    />
                  </div>

                  <div className="flex items-start gap-3 text-xs text-white/55">
                    <input
                      id="rodo"
                      type="checkbox"
                      required
                      className="mt-0.5 h-4 w-4 cursor-pointer rounded border-white/30 bg-transparent accent-[#E1B847]"
                    />
                    <label htmlFor="rodo" className="cursor-pointer leading-relaxed">
                      Wyrażam zgodę na kontakt w sprawie zapytania. Twoje dane
                      przetwarzamy wyłącznie do udzielenia odpowiedzi —{" "}
                      <a
                        href="#"
                        className="text-white underline-offset-4 hover:underline"
                      >
                        polityka prywatności
                      </a>
                      .
                    </label>
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="mt-2">
                    Wyślij zapytanie
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-md border border-white/15 bg-white/[0.04]">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <dt className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
          {label}
        </dt>
        <dd className="mt-1 text-sm text-white/85">{children}</dd>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-white/80">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-[#E1B847]">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={cn(
          "w-full rounded-md border border-white/15 bg-white/[0.02] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 transition-colors",
          "focus:border-[#E1B847]/60 focus:bg-white/[0.04] focus:outline-none",
        )}
      />
    </div>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-start gap-4 py-6">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E1B847]/15 text-[#E1B847]">
        <Check className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="font-display text-2xl">Dzięki — mamy Twoje zapytanie.</h3>
      <p className="text-sm text-white/70">
        Odezwiemy się w ciągu 4 godzin roboczych z propozycją terminu
        30-minutowej rozmowy z architektem. Jeśli sprawa pali — napisz na{" "}
        <a
          href="mailto:akademia@neuroforge.dev"
          className="text-white underline-offset-4 hover:underline"
        >
          akademia@neuroforge.dev
        </a>
        .
      </p>
    </div>
  );
}
