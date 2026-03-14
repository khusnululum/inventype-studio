"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function TypeSpecimen() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={ref}
      className="py-24 border-b border-black/10 overflow-hidden bg-ink text-paper"
    >
      {/* Label */}
      <div className="px-8 md:px-16 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.25em] uppercase text-paper/40"
        >
          Type Specimen — Vellum Regular
        </motion.p>
      </div>

      {/* Sliding alphabet rows */}
      <div className="overflow-hidden space-y-2 mb-12">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap">
          <span
            className="font-display text-[clamp(48px,9vw,130px)] font-light leading-none tracking-tight text-paper/90 select-none"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {alphabet}
          </span>
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap">
          <span
            className="font-display text-[clamp(48px,9vw,130px)] font-light leading-none tracking-tight text-paper/20 italic select-none"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {alphabet.toLowerCase()}
          </span>
        </motion.div>
      </div>

      {/* Numerals + punctuation */}
      <div className="px-8 md:px-16 border-t border-paper/10 pt-10 grid md:grid-cols-3 gap-10">
        <div>
          <p className="text-[9px] tracking-[0.25em] uppercase text-paper/30 mb-4">
            Numerals
          </p>
          <p
            className="font-display text-[clamp(32px,4vw,56px)] font-light leading-tight text-paper/70 tracking-tight"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            0123456789
          </p>
        </div>
        <div>
          <p className="text-[9px] tracking-[0.25em] uppercase text-paper/30 mb-4">
            Punctuation
          </p>
          <p
            className="font-display text-[clamp(32px,4vw,56px)] font-light leading-tight text-paper/70 tracking-tight"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            .,;:!?&amp;@—
          </p>
        </div>
        <div>
          <p className="text-[9px] tracking-[0.25em] uppercase text-paper/30 mb-4">
            Sample text
          </p>
          <p
            className="font-display text-[18px] font-light leading-relaxed text-paper/50 italic"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            "The quick brown fox jumps over the lazy dog."
          </p>
        </div>
      </div>
    </section>
  );
}
