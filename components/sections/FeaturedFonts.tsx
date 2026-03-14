"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fonts } from "@/lib/fonts";
import { useState } from "react";

const featured = fonts.filter((f) => f.featured);

export function FeaturedFonts() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="border-b border-black/10">
      {/* Header row */}
      <div className="px-8 md:px-16 py-12 flex items-end justify-between border-b border-black/10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
            Featured Releases
          </p>
          <h2
            className="font-display text-[clamp(36px,5vw,64px)] font-light leading-none tracking-tight"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            New &amp; Notable
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/typefaces"
            className="text-[10px] tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors flex items-center gap-3"
          >
            View all typefaces
            <span className="w-8 h-px bg-current inline-block" />
          </Link>
        </motion.div>
      </div>

      {/* Font list — editorial table style */}
      <div>
        {featured.map((font, i) => (
          <motion.div
            key={font.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/typefaces/${font.id}`}
              className="group block border-b border-black/10 hover:bg-ink/[0.025] transition-colors"
              onMouseEnter={() => setHovered(font.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="px-8 md:px-16 py-8 grid grid-cols-12 items-center gap-4">
                {/* Index */}
                <span className="col-span-1 text-[10px] text-muted/40 tracking-widest">
                  0{i + 1}
                </span>

                {/* Name */}
                <div className="col-span-4 md:col-span-3">
                  <h3
                    className="font-display text-[clamp(28px,3.5vw,48px)] font-light leading-none tracking-tight transition-all duration-300"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {font.name}
                  </h3>
                </div>

                {/* Preview specimen */}
                <div className="col-span-4 md:col-span-5 overflow-hidden">
                  <p
                    className="font-display text-[clamp(18px,2.5vw,32px)] font-light italic text-muted/50 group-hover:text-muted transition-colors truncate"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {font.tagline}
                  </p>
                </div>

                {/* Meta */}
                <div className="col-span-3 hidden md:flex items-center justify-end gap-6">
                  <span className="text-[9px] tracking-[0.18em] uppercase text-muted/50">
                    {font.category}
                  </span>
                  <span className="text-[9px] tracking-[0.18em] text-muted/50">
                    {font.styles} styles
                  </span>
                  <span
                    className="font-display text-[18px] font-light text-muted group-hover:text-ink transition-colors"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {font.price}
                  </span>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-muted/30 group-hover:text-ink group-hover:translate-x-1 transition-all inline-block">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
