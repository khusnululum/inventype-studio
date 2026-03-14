"use client";

import { motion } from "framer-motion";
import { fonts } from "@/lib/fonts";
import { FontCard } from "@/components/ui/FontCard";
import { useState } from "react";

const categories = ["All", "Serif", "Sans-Serif", "Display", "Mono", "Script"];

export default function TypefacesPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? fonts : fonts.filter((f) => f.category === active);

  return (
    <div className="pt-28 min-h-screen">
      {/* Page header */}
      <section className="px-8 md:px-16 pb-16 border-b border-black/10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] tracking-[0.25em] uppercase text-muted mb-6"
        >
          Inventype Studio / Typefaces
        </motion.p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(52px,8vw,110px)] font-light leading-none tracking-tight"
          >
            Our
            <br />
            <em className="italic text-muted">Typefaces</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[13px] text-muted max-w-xs leading-relaxed"
          >
            {fonts.length} families crafted with intention — for print, screen,
            and everything between.
          </motion.p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="px-8 md:px-16 py-6 border-b border-black/10 flex gap-6 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-[10px] tracking-[0.2em] uppercase whitespace-nowrap pb-1 transition-all ${
              active === cat
                ? "text-ink border-b border-ink"
                : "text-muted hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Grid */}
      <section className="px-8 md:px-16 py-16">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-black/10"
        >
          {filtered.map((font, i) => (
            <FontCard key={font.id} font={font} index={i} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
