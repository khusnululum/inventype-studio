"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AboutStrip() {
  return (
    <section className="px-8 md:px-16 py-28 border-b border-black/10 grid md:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-6">
          About the Foundry
        </p>
        <h2
          className="font-display text-[clamp(40px,5.5vw,76px)] font-light leading-[0.95] tracking-tight"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          Type is the
          <br />
          <em
            className="italic text-muted"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            silent voice
          </em>
          <br />
          of design.
        </h2>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="flex flex-col gap-8"
      >
        <p className="text-[13px] text-muted leading-relaxed">
          Inventype Studio is an independent type foundry founded in 2019. We
          make typefaces that serve — and endure. Each family is drawn from
          historical and contemporary references, then adapted for the demands
          of modern publishing and digital interfaces.
        </p>
        <p className="text-[13px] text-muted leading-relaxed">
          Our work is used by editorial teams, brand studios, and independent
          designers across 40+ countries. We believe in slow design, optical
          precision, and releasing type only when it's truly finished.
        </p>
        <Link
          href="/about"
          className="self-start text-[10px] tracking-[0.22em] uppercase text-ink flex items-center gap-3 hover:gap-5 transition-all group"
        >
          Our full story
          <span className="block w-8 h-px bg-ink group-hover:w-12 transition-all" />
        </Link>
      </motion.div>
    </section>
  );
}
