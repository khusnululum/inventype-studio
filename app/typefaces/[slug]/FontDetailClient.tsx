"use client";

import { motion } from "framer-motion";
import { FontFamily } from "@/lib/fonts";
import Link from "next/link";
import { useState } from "react";

interface Props {
  font: FontFamily;
}

const sampleTexts = [
  "The art of typography is the art of correctly displaying text.",
  "Form follows function — that has been misunderstood.",
  "Good design is as little design as possible.",
  "Simplicity is the ultimate sophistication.",
];

export function FontDetailClient({ font }: Props) {
  const [fontSize, setFontSize] = useState(72);
  const [sampleIdx, setSampleIdx] = useState(0);
  const [isItalic, setIsItalic] = useState(false);

  return (
    <div className="pt-28 min-h-screen">
      {/* Breadcrumb */}
      <div className="px-8 md:px-16 py-4 border-b border-black/10 flex items-center gap-3 text-[10px] tracking-[0.18em] uppercase text-muted">
        <Link href="/typefaces" className="hover:text-ink transition-colors">
          Typefaces
        </Link>
        <span>/</span>
        <span className="text-ink">{font.name}</span>
      </div>

      {/* Hero specimen */}
      <section className="px-8 md:px-16 py-20 border-b border-black/10 overflow-hidden bg-ink/[0.02]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] tracking-[0.25em] uppercase text-muted mb-4"
        >
          {font.category} — {font.styles} styles
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light leading-none tracking-tight mb-6 overflow-hidden"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: `${fontSize}px`,
            fontStyle: isItalic ? "italic" : "normal",
          }}
        >
          {font.name}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-display text-[clamp(16px,2.5vw,28px)] font-light italic text-muted"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {font.tagline}
        </motion.p>
      </section>

      {/* Controls + interactive specimen */}
      <section className="border-b border-black/10">
        <div className="px-8 md:px-16 py-4 flex flex-wrap items-center gap-6 border-b border-black/10 bg-ink/[0.015]">
          <div className="flex items-center gap-3">
            <span className="text-[9px] tracking-[0.2em] uppercase text-muted">Size</span>
            <input
              type="range" min={16} max={160} value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-24 accent-ink"
            />
            <span className="text-[10px] text-muted w-10">{fontSize}px</span>
          </div>
          <button
            onClick={() => setIsItalic(!isItalic)}
            className={`text-[9px] tracking-[0.2em] uppercase px-3 py-1 border transition-colors ${
              isItalic
                ? "border-ink bg-ink text-paper"
                : "border-black/20 text-muted hover:border-ink hover:text-ink"
            }`}
          >
            Italic
          </button>
          <div className="flex items-center gap-2">
            <span className="text-[9px] tracking-[0.2em] uppercase text-muted">Sample</span>
            <select
              value={sampleIdx}
              onChange={(e) => setSampleIdx(Number(e.target.value))}
              className="bg-transparent border border-black/20 text-[10px] px-2 py-1 focus:outline-none text-muted"
            >
              {sampleTexts.map((_, i) => (
                <option key={i} value={i}>Sample {i + 1}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="px-8 md:px-16 py-16 min-h-48">
          <p
            className="font-display font-light leading-tight transition-all"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: `${fontSize}px`,
              fontStyle: isItalic ? "italic" : "normal",
            }}
          >
            {sampleTexts[sampleIdx]}
          </p>
        </div>
      </section>

      {/* Info + weights */}
      <section className="px-8 md:px-16 py-20 grid md:grid-cols-2 gap-16 border-b border-black/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-5">
            About {font.name}
          </p>
          <p
            className="font-display text-[22px] font-light leading-snug mb-6"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {font.description}
          </p>
          <div className="grid grid-cols-3 gap-px bg-black/10 mt-10">
            {[
              { label: "Category", val: font.category },
              { label: "Styles",   val: `${font.styles}` },
              { label: "Released", val: `${font.year}` },
            ].map((m) => (
              <div key={m.label} className="bg-paper p-4">
                <span className="text-[9px] tracking-[0.2em] uppercase text-muted block mb-1">
                  {m.label}
                </span>
                <span
                  className="font-display text-[18px] font-light"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {m.val}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-5">
            Styles Included
          </p>
          <div className="flex flex-col gap-3">
            {font.weights.map((w, i) => (
              <div key={w} className="flex items-center justify-between py-3 border-b border-black/8">
                <span
                  className="font-display text-[20px] leading-none"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontWeight: Math.min(300 + i * 100, 900),
                  }}
                >
                  {w}
                </span>
                <span className="text-[9px] tracking-[0.15em] uppercase text-muted">
                  {font.name} {w}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Buy CTA */}
      <section className="px-8 md:px-16 py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-2">
            Licensing starts at
          </p>
          <p
            className="font-display text-[64px] font-light leading-none"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {font.price}
          </p>
          <p className="text-[12px] text-muted mt-2">Desktop license · 1–5 users</p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Purchase */}
          <button className="bg-ink text-paper text-[10px] tracking-[0.22em] uppercase px-10 py-4 hover:opacity-70 transition-opacity">
            Purchase license
          </button>

          {/* Try Before You Buy — links to /typefaces/[slug]/try */}
          <Link
            href={`/typefaces/${font.id}/try`}
            className="border border-black/20 text-ink text-[10px] tracking-[0.22em] uppercase px-10 py-4 hover:bg-ink hover:text-paper transition-all text-center"
          >
            Try before you buy →
          </Link>

          <Link
            href="/contact"
            className="text-center text-[10px] tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors"
          >
            Need a custom license? →
          </Link>
        </div>
      </section>
    </div>
  );
}
