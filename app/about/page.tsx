"use client";

import { motion } from "framer-motion";

const values = [
  {
    num: "01",
    title: "Craft over speed",
    desc: "Every typeface undergoes years of refinement before release. We believe good type cannot be rushed.",
  },
  {
    num: "02",
    title: "Optical precision",
    desc: "Spacing, weight, and proportion are tested across dozens of environments — print, screen, large and small.",
  },
  {
    num: "03",
    title: "Contextual thinking",
    desc: "We design typefaces for specific needs — not trend — ensuring longevity and function.",
  },
  {
    num: "04",
    title: "Independent always",
    desc: "Inventype is fully independent. No outside investment, no licensing compromises, no shortcuts.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 min-h-screen">
      {/* Header */}
      <section className="px-8 md:px-16 pb-24 border-b border-black/10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] tracking-[0.25em] uppercase text-muted mb-6"
        >
          Inventype Studio / About
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(52px,8vw,110px)] font-light leading-none tracking-tight max-w-4xl"
        >
          Type made with
          <br />
          <em className="italic text-muted">genuine care</em>
        </motion.h1>
      </section>

      {/* Story */}
      <section className="px-8 md:px-16 py-24 grid md:grid-cols-2 gap-16 border-b border-black/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-6">
            Our Story
          </p>
          <p className="font-display text-[28px] font-light leading-snug">
            Founded in 2019, Inventype Studio was born from a dissatisfaction
            with the homogeneity of digital typography.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-6 text-[13px] text-muted leading-relaxed pt-12"
        >
          <p>
            Our founders — a type designer and a letterpress printer — believed
            that the proliferation of cheap, utilitarian fonts had eroded
            typographic culture. They set out to restore intentionality to the
            act of choosing a typeface.
          </p>
          <p>
            Today, Inventype produces a focused library of families covering
            editorial, identity, and digital applications. Each typeface is the
            result of extensive research, drawing, and testing — often spanning
            two to four years from first sketch to final release.
          </p>
          <p>
            We work from a studio in the Netherlands, in close collaboration
            with printers, book designers, brand studios, and software teams
            who help us stress-test every decision.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="px-8 md:px-16 py-24 border-b border-black/10">
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-16">
          Our Values
        </p>
        <div className="grid md:grid-cols-2 gap-px bg-black/10">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-paper p-10"
            >
              <span className="text-[10px] tracking-[0.2em] text-muted">
                {v.num}
              </span>
              <h3 className="font-display text-[28px] font-light mt-4 mb-3">
                {v.title}
              </h3>
              <p className="text-[13px] text-muted leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 md:px-16 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10">
          {[
            { num: "6", label: "Typeface families" },
            { num: "68", label: "Total styles" },
            { num: "5+", label: "Years of practice" },
            { num: "2K+", label: "Licenses issued" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-paper p-10"
            >
              <span className="font-display text-[64px] font-light leading-none block">
                {s.num}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted mt-2 block">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
