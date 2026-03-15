"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-16 pb-16 px-8 md:px-16 border-b border-black/10 overflow-hidden">
      {/* ── Background image (foto studio/letterpress) ─────────── */}
      {!imgError ? (
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Inventype Studio — type design workspace"
            fill
            priority
            className="object-cover"
            onError={() => setImgError(true)}
          />
          {/* Overlay: fade bawah lebih kuat supaya teks tetap terbaca */}
          <div className="absolute inset-0 bg-paper/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/60 to-paper/20" />
        </div>
      ) : (
        /* Fallback SVG kalau /hero-bg.jpg belum ada */
        <div className="absolute inset-0 z-0 overflow-hidden">
          <svg
            viewBox="0 0 1440 900"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <rect width="1440" height="900" fill="#f4f3ef" />
            {/* Grid of blurred type blocks */}
            {[
              { x: 60, y: 80, w: 380, h: 260, op: 0.07 },
              { x: 500, y: 40, w: 520, h: 320, op: 0.05 },
              { x: 1080, y: 100, w: 300, h: 200, op: 0.06 },
              { x: 100, y: 420, w: 260, h: 380, op: 0.05 },
              { x: 420, y: 480, w: 600, h: 380, op: 0.04 },
              { x: 1100, y: 400, w: 280, h: 440, op: 0.06 },
            ].map((b, i) => (
              <rect
                key={i}
                x={b.x}
                y={b.y}
                width={b.w}
                height={b.h}
                rx="2"
                fill={`rgba(10,10,10,${b.op})`}
              />
            ))}
            {/* Large bg letters */}
            <text
              x="50"
              y="600"
              fontFamily="Georgia,serif"
              fontSize="320"
              fontWeight="300"
              fill="none"
              stroke="rgba(10,10,10,0.04)"
              strokeWidth="1"
              letterSpacing="-8"
            >
              Iv
            </text>
            <text
              x="700"
              y="500"
              fontFamily="Georgia,serif"
              fontSize="220"
              fontWeight="300"
              fill="none"
              stroke="rgba(10,10,10,0.04)"
              strokeWidth="1"
              letterSpacing="-4"
            >
              ty
            </text>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/50 to-transparent" />
        </div>
      )}

      {/* ── Giant running ticker ────────────────────────────────── */}
      <div className="absolute inset-0 z-[1] flex items-center overflow-hidden pointer-events-none select-none">
        <div className="animate-ticker whitespace-nowrap flex">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="font-display text-[18vw] font-light leading-none tracking-tighter text-transparent"
              style={{
                WebkitTextStroke: "1.5px rgba(10,10,10,0.12)",
                paddingRight: "4vw",
                fontFamily: "var(--font-display), Georgia, serif",
              }}
            >
              Inventype Studio — Type & Lettering —&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-end">
        {/* Headline */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[10px] tracking-[0.25em] uppercase text-muted mb-6"
          >
            Independent Type Foundry — Est. 2019
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(56px,8vw,120px)] font-light leading-[0.93] tracking-tight"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Typefaces
            <br />
            made with{" "}
            <em
              className="italic text-muted"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              intent
            </em>
          </motion.h1>
        </div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col gap-8 md:pb-2"
        >
          <p className="text-[13px] text-muted leading-relaxed max-w-sm">
            We design and distribute original typefaces for editorial, identity,
            and digital design. Each family is drawn slowly, tested rigorously,
            and released when it's truly ready.
          </p>

          {/* Stats */}
          <div className="flex gap-10 border-t border-black/10 pt-8">
            {[
              { n: "6", l: "Families" },
              { n: "68", l: "Styles" },
              { n: "2K+", l: "Licenses" },
            ].map((s) => (
              <div key={s.l}>
                <span
                  className="font-display text-[40px] font-light leading-none block"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {s.n}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-muted mt-1 block">
                  {s.l}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-4 items-center flex-wrap">
            <Link
              href="/typefaces"
              className="bg-ink text-paper text-[10px] tracking-[0.2em] uppercase px-7 py-3.5 hover:opacity-70 transition-opacity"
            >
              Browse typefaces
            </Link>
            <Link
              href="/about"
              className="text-[10px] tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors flex items-center gap-2"
            >
              Our story
              <span className="w-6 h-px bg-current inline-block" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-ink/20"
        />
        <span className="text-[9px] tracking-[0.25em] uppercase text-muted/50">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
