"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="px-8 md:px-16 py-32 border-b border-black/10 overflow-hidden relative">
      {/* Background large letterform */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 font-display text-[40vw] font-light leading-none select-none pointer-events-none text-ink/[0.03]"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        aria-hidden
      >
        I
      </div>

      <div className="relative z-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.25em] uppercase text-muted mb-8"
        >
          Ready to set something beautiful?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(44px,7vw,100px)] font-light leading-[0.93] tracking-tight mb-12"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          Find your
          <br />
          <em
            className="italic text-muted"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            perfect typeface
          </em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <Link
            href="/typefaces"
            className="bg-ink text-paper text-[10px] tracking-[0.22em] uppercase px-9 py-4 hover:opacity-70 transition-opacity"
          >
            Browse all typefaces
          </Link>
          <Link
            href="/contact"
            className="text-[10px] tracking-[0.22em] uppercase text-muted hover:text-ink transition-colors flex items-center gap-3"
          >
            Commission custom type
            <span className="w-6 h-px bg-current inline-block" />
          </Link>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-black/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        >
          <p className="text-[11px] text-muted shrink-0">
            Get notified of new releases:
          </p>
          <div className="flex w-full max-w-sm gap-0">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent border-b border-black/20 pb-2 text-[12px] placeholder:text-muted/30 focus:outline-none focus:border-ink transition-colors"
            />
            <button className="ml-4 text-[9px] tracking-[0.22em] uppercase text-ink hover:text-muted transition-colors shrink-0">
              Subscribe →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
