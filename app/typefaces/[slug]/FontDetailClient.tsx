"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FontFamily } from "@/lib/fonts";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface Props {
  font: FontFamily;
}

const sampleTexts = [
  "The art of typography is the art of correctly displaying text.",
  "Form follows function — that has been misunderstood.",
  "Good design is as little design as possible.",
  "Simplicity is the ultimate sophistication.",
];

// SVG placeholder — dipakai kalau file gambar belum ada
function MockupPlaceholder({
  index,
  caption,
  fontName,
}: {
  index: number;
  caption?: string;
  fontName: string;
}) {
  const patterns = [
    // Pola 1 — magazine spread
    <svg key="1" viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="520" fill="#f0efe9" />
      <rect x="40" y="40" width="340" height="440" fill="#e8e6de" />
      <rect x="420" y="40" width="340" height="210" fill="#dddbd2" />
      <rect x="420" y="270" width="160" height="210" fill="#e8e6de" />
      <rect x="600" y="270" width="160" height="100" fill="#d4d2ca" />
      <rect x="600" y="390" width="160" height="90" fill="#e8e6de" />
      {/* Font name large */}
      <text x="60" y="200" fontFamily="Georgia, serif" fontSize="72" fontWeight="300" fill="rgba(10,10,10,0.18)" letterSpacing="-2">{fontName}</text>
      <text x="60" y="260" fontFamily="Georgia, serif" fontSize="22" fontWeight="300" fontStyle="italic" fill="rgba(10,10,10,0.25)">Editorial specimen</text>
      {/* Fake body text lines */}
      {[320, 345, 370, 395, 420, 445].map((y) => (
        <rect key={y} x="60" y={y} width={200 + (y % 3) * 40} height="6" rx="2" fill="rgba(10,10,10,0.1)" />
      ))}
      {/* Right column lines */}
      {[60, 80, 100, 120, 140, 160, 180].map((y) => (
        <rect key={y} x="440" y={y} width={260 + (y % 2) * 30} height="5" rx="2" fill="rgba(10,10,10,0.08)" />
      ))}
    </svg>,

    // Pola 2 — poster
    <svg key="2" viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="520" fill="#0a0a0a" />
      <rect x="60" y="60" width="680" height="400" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <text x="400" y="200" fontFamily="Georgia, serif" fontSize="88" fontWeight="300" fill="rgba(255,255,255,0.12)" textAnchor="middle" letterSpacing="-3">{fontName}</text>
      <text x="400" y="270" fontFamily="Georgia, serif" fontSize="18" fontWeight="300" fontStyle="italic" fill="rgba(255,255,255,0.2)" textAnchor="middle" letterSpacing="4">TYPE SPECIMEN</text>
      <line x1="200" y1="300" x2="600" y2="300" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <text x="400" y="340" fontFamily="Georgia, serif" fontSize="13" fill="rgba(255,255,255,0.15)" textAnchor="middle" letterSpacing="3">INVENTYPE STUDIO — 2024</text>
      {[380, 400, 420].map((y, i) => (
        <rect key={y} x={120 + i * 20} y={y} width={400 - i * 40} height="4" rx="2" fill="rgba(255,255,255,0.06)" />
      ))}
    </svg>,

    // Pola 3 — packaging / product
    <svg key="3" viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="520" fill="#ede9e0" />
      {/* Box shape */}
      <rect x="180" y="80" width="440" height="360" fill="#f5f3ec" stroke="rgba(10,10,10,0.1)" strokeWidth="1" />
      {/* Lid perspective */}
      <polygon points="180,80 620,80 680,30 240,30" fill="#e8e4db" stroke="rgba(10,10,10,0.08)" strokeWidth="1" />
      <polygon points="620,80 680,30 680,390 620,440" fill="#dedad0" stroke="rgba(10,10,10,0.08)" strokeWidth="1" />
      {/* Label on box */}
      <rect x="220" y="160" width="360" height="200" fill="rgba(10,10,10,0.03)" />
      <text x="400" y="260" fontFamily="Georgia, serif" fontSize="52" fontWeight="300" fill="rgba(10,10,10,0.2)" textAnchor="middle" letterSpacing="-1">{fontName}</text>
      <text x="400" y="295" fontFamily="Georgia, serif" fontSize="11" fill="rgba(10,10,10,0.2)" textAnchor="middle" letterSpacing="4">TYPE FOUNDRY</text>
      <line x1="280" y1="310" x2="520" y2="310" stroke="rgba(10,10,10,0.1)" strokeWidth="1" />
    </svg>,
  ];

  return (
    <div className="w-full h-full relative">
      {patterns[index % patterns.length]}
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent px-4 py-3">
          <p className="text-[9px] tracking-[0.18em] uppercase text-white/60">{caption}</p>
        </div>
      )}
    </div>
  );
}

// Komponen satu mockup — pakai Image kalau file ada, placeholder kalau belum
function MockupItem({
  src,
  alt,
  caption,
  index,
  fontName,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  index: number;
  fontName: string;
  priority?: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-ink/[0.03] group">
      {!imgError ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          onError={() => setImgError(true)}
        />
      ) : (
        <MockupPlaceholder index={index} caption={caption} fontName={fontName} />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />

      {/* Caption */}
      {caption && !imgError && (
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-ink/80 px-4 py-3">
          <p className="text-[9px] tracking-[0.18em] uppercase text-paper/70">{caption}</p>
        </div>
      )}
    </div>
  );
}

export function FontDetailClient({ font }: Props) {
  const [fontSize, setFontSize] = useState(72);
  const [sampleIdx, setSampleIdx] = useState(0);
  const [isItalic, setIsItalic] = useState(false);
  const [activeMockup, setActiveMockup] = useState(0);

  const fontStyle: React.CSSProperties = {
    fontFamily: font.fontFamily ?? "var(--font-display), Georgia, serif",
  };

  const hasMockups = font.mockups && font.mockups.length > 0;

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

      {/* ── Hero specimen ─────────────────────────────────────────── */}
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
          className="font-light leading-none tracking-tight mb-6 overflow-hidden"
          style={{ ...fontStyle, fontSize: `${fontSize}px`, fontStyle: isItalic ? "italic" : "normal" }}
        >
          {font.name}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[clamp(16px,2.5vw,28px)] font-light italic text-muted"
          style={fontStyle}
        >
          {font.tagline}
        </motion.p>
      </section>

      {/* ── Mockup Gallery ────────────────────────────────────────── */}
      {hasMockups && (
        <section className="border-b border-black/10">
          {/* Label */}
          <div className="px-8 md:px-16 pt-14 pb-8 flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
                In Use
              </p>
              <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-light leading-none tracking-tight"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                {font.name} <em className="italic text-muted">in context</em>
              </h2>
            </div>
            {/* Thumbnail nav */}
            <div className="hidden md:flex gap-2">
              {font.mockups!.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMockup(i)}
                  className={`w-8 h-1 transition-all ${
                    activeMockup === i ? "bg-ink" : "bg-ink/20 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Main featured mockup */}
          <div className="px-8 md:px-16 mb-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMockup}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[21/9] overflow-hidden bg-ink/[0.03]"
              >
                <MockupItem
                  src={font.mockups![activeMockup].src}
                  alt={font.mockups![activeMockup].alt}
                  caption={font.mockups![activeMockup].caption}
                  index={activeMockup}
                  fontName={font.name}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail row */}
          {font.mockups!.length > 1 && (
            <div className={`px-8 md:px-16 pb-14 grid gap-3 ${
              font.mockups!.length === 2 ? "grid-cols-2" :
              font.mockups!.length >= 3 ? "grid-cols-3" : "grid-cols-1"
            }`}>
              {font.mockups!.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMockup(i)}
                  className={`relative aspect-[16/10] overflow-hidden transition-all ${
                    activeMockup === i
                      ? "ring-1 ring-ink ring-offset-2"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <MockupItem
                    src={m.src}
                    alt={m.alt}
                    index={i}
                    fontName={font.name}
                  />
                </button>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ── Interactive specimen ──────────────────────────────────── */}
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
            className="font-light leading-tight transition-all"
            style={{
              ...fontStyle,
              fontSize: `${fontSize}px`,
              fontStyle: isItalic ? "italic" : "normal",
            }}
          >
            {sampleTexts[sampleIdx]}
          </p>
        </div>
      </section>

      {/* ── Info + weights ────────────────────────────────────────── */}
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
          <p className="text-[22px] font-light leading-snug mb-6" style={fontStyle}>
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
                <span className="text-[18px] font-light" style={fontStyle}>{m.val}</span>
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
                  className="text-[20px] leading-none"
                  style={{
                    ...fontStyle,
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

      {/* ── Buy CTA ───────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-2">
            Licensing starts at
          </p>
          <p className="text-[64px] font-light leading-none" style={fontStyle}>
            {font.price}
          </p>
          <p className="text-[12px] text-muted mt-2">Desktop license · 1-5 users</p>
        </div>

        <div className="flex flex-col gap-4">
          <button className="bg-ink text-paper text-[10px] tracking-[0.22em] uppercase px-10 py-4 hover:opacity-70 transition-opacity">
            Purchase license
          </button>
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
