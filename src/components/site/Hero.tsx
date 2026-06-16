"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import AetherFlowHero from "@/components/ui/aether-flow-hero";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12 + 0.2,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#070608] text-white"
      aria-labelledby="hero-heading"
    >
      <AetherFlowHero background="rgba(7,6,8,1)" />

      {/* dark gradient masks for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,6,8,0)_0%,rgba(7,6,8,0.4)_55%,rgba(7,6,8,0.95)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#070608]"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-24 pb-20 text-center">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md"
        >
          <Zap className="h-3.5 w-3.5 text-[#E1B847]" aria-hidden="true" />
          <span className="text-xs font-medium tracking-wide text-white/85">
            Nabór 2026 · 14 miejsc w kohorcie Q1
          </span>
        </motion.div>

        <motion.h1
          id="hero-heading"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display text-[3rem] sm:text-[4.25rem] md:text-[5.5rem] leading-[1.02] tracking-[-0.03em] text-balance"
        >
          Szkolenia z AI dla zespołów,
          <br />
          <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
            które już mają coś do
          </span>{" "}
          <em className="not-italic text-[#E1B847]">zrobienia.</em>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-7 max-w-2xl text-pretty text-base sm:text-lg text-white/65 leading-relaxed"
        >
          Nie nagrania z 2023 roku. Żywy program z mentoringiem 1:1, sprintem
          wdrożeniowym i recenzją techniczną przed produkcją. Dla inżynierów,
          product leadów i dyrekcji.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button variant="gold" size="lg" asChild>
            <a href="#kontakt">
              Zarezerwuj rozmowę
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button variant="outlineDark" size="lg" asChild>
            <a href="#programy">Zobacz programy</a>
          </Button>
        </motion.div>

        <motion.dl
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left sm:grid-cols-4"
        >
          {[
            { v: "73%", l: "uczestników wdraża AI w 90 dni" },
            { v: "12 tyg.", l: "od warsztatu do produkcji" },
            { v: "1:6", l: "mentor do uczestnika" },
            { v: "AI Act", l: "zgodność i certyfikacja" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-[#070608] px-5 py-5"
            >
              <dt className="font-display text-2xl text-white">{s.v}</dt>
              <dd className="mt-1 text-xs text-white/55">{s.l}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
