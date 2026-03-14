"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Research & references",
    desc: "Each typeface begins with deep research — historical specimens, optical principles, and contextual analysis of where the type will live.",
  },
  {
    num: "02",
    title: "Sketching & drawing",
    desc: "We start on paper, then move to Glyphs. Key characters establish the DNA: proportions, contrast, terminal style, and spacing rhythm.",
  },
  {
    num: "03",
    title: "Spacing & kerning",
    desc: "More than half our time is spent on spacing. Optically correct rhythm across all weights and styles is non-negotiable.",
  },
  {
    num: "04",
    title: "Testing & refinement",
    desc: "We print, set, render, and stress-test across environments — offset print, screen, small sizes, display scale — before any release.",
  },
];

export function ProcessSection() {
  return (
    <section className="border-b border-black/10">
      {/* Header */}
      <div className="px-8 md:px-16 py-16 border-b border-black/10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end gap-6 md:gap-24"
        >
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-4">
              Our Process
            </p>
            <h2
              className="font-display text-[clamp(36px,5vw,64px)] font-light leading-none tracking-tight"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              How we
              <br />
              <em
                className="italic text-muted"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                make type
              </em>
            </h2>
          </div>
          <p className="text-[13px] text-muted max-w-xs leading-relaxed md:mb-1">
            Every Inventype typeface follows the same rigorous process — because
            good type cannot be rushed.
          </p>
        </motion.div>
      </div>

      {/* Steps grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-paper px-10 py-12 flex flex-col gap-6"
          >
            <span className="text-[10px] tracking-[0.2em] text-muted/50">
              {step.num}
            </span>
            <h3
              className="font-display text-[24px] font-light leading-tight"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              {step.title}
            </h3>
            <p className="text-[12px] text-muted leading-relaxed flex-1">
              {step.desc}
            </p>
            {/* Decorative rule */}
            <div className="w-8 h-px bg-ink/20 mt-2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
