"use client";

import { motion } from "framer-motion";
import { FontFamily } from "@/lib/fonts";
import Link from "next/link";

interface FontCardProps {
  font: FontFamily;
  index: number;
}

const previewLetters: Record<string, string> = {
  vellum: "Vellum",
  struktur: "Struktur",
  nocturne: "Nocturne",
  axiom: "Axiom",
  plume: "Plume",
  meridian: "Meridian",
};

export function FontCard({ font, index }: FontCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="bg-paper group"
    >
      <Link href={`/typefaces/${font.id}`} className="block">
        {/* Preview */}
        <div className="relative h-56 border-b border-black/10 overflow-hidden flex items-center justify-center px-8 bg-ink/[0.02] group-hover:bg-ink/[0.04] transition-colors">
          <span
            className="font-display text-[72px] font-light leading-none tracking-tight text-ink/80 group-hover:text-ink transition-colors duration-300 select-none"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {previewLetters[font.id] ?? font.name}
          </span>
          {font.featured && (
            <span className="absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase border border-ink/20 px-2 py-1 text-muted">
              Featured
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-display text-[22px] font-light leading-tight">
                {font.name}
              </h3>
              <p className="text-[11px] text-muted mt-0.5">{font.tagline}</p>
            </div>
            <span className="font-display text-[20px] font-light text-muted">
              {font.price}
            </span>
          </div>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-black/8">
            <span className="text-[9px] tracking-[0.2em] uppercase text-muted/60 border border-black/10 px-2 py-0.5">
              {font.category}
            </span>
            <span className="text-[9px] tracking-[0.15em] text-muted">
              {font.styles} styles
            </span>
            <span className="text-[9px] tracking-[0.15em] text-muted ml-auto">
              {font.year}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
