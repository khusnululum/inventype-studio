"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FontFamily } from "@/lib/fonts";

interface Props {
  font: FontFamily;
}

// ─── OpenType feature definitions ────────────────────────────────────────────
const OPENTYPE_FEATURES: {
  id: string;
  tag: string;
  label: string;
  description: string;
  group: "ligatures" | "alternates" | "numerals" | "spacing";
}[] = [
  // Ligatures
  { id: "liga",  tag: "liga",  label: "Standard Ligatures",   description: "fi, fl, ff, ffi, ffl",          group: "ligatures"  },
  { id: "dlig",  tag: "dlig",  label: "Discretionary Ligatures", description: "st, ct, sp, rare pairs",     group: "ligatures"  },
  { id: "hlig",  tag: "hlig",  label: "Historical Ligatures",  description: "ſt, ſi, archaic forms",         group: "ligatures"  },
  // Alternates
  { id: "calt",  tag: "calt",  label: "Contextual Alternates", description: "Auto-contextual substitutions", group: "alternates" },
  { id: "salt",  tag: "salt",  label: "Stylistic Alternates",  description: "Alternative letterforms",       group: "alternates" },
  { id: "ss01",  tag: "ss01",  label: "Stylistic Set 01",      description: "First stylistic variation",     group: "alternates" },
  { id: "ss02",  tag: "ss02",  label: "Stylistic Set 02",      description: "Second stylistic variation",    group: "alternates" },
  { id: "ss03",  tag: "ss03",  label: "Stylistic Set 03",      description: "Third stylistic variation",     group: "alternates" },
  { id: "swsh",  tag: "swsh",  label: "Swashes",               description: "Decorative swash forms",        group: "alternates" },
  { id: "titl",  tag: "titl",  label: "Titling Alternates",    description: "Optimised for large sizes",     group: "alternates" },
  { id: "smcp",  tag: "smcp",  label: "Small Capitals",        description: "Lowercase → small caps",        group: "alternates" },
  { id: "c2sc",  tag: "c2sc",  label: "Caps to Small Caps",    description: "Uppercase → small caps",        group: "alternates" },
  // Numerals
  { id: "lnum",  tag: "lnum",  label: "Lining Figures",        description: "Uniform-height numerals",       group: "numerals"   },
  { id: "onum",  tag: "onum",  label: "Oldstyle Figures",      description: "Ascending/descending numerals", group: "numerals"   },
  { id: "pnum",  tag: "pnum",  label: "Proportional Figures",  description: "Variable-width numerals",       group: "numerals"   },
  { id: "tnum",  tag: "tnum",  label: "Tabular Figures",       description: "Fixed-width numerals",          group: "numerals"   },
  { id: "frac",  tag: "frac",  label: "Fractions",             description: "Auto diagonal fractions",       group: "numerals"   },
  { id: "ordn",  tag: "ordn",  label: "Ordinals",              description: "1st, 2nd superscript forms",    group: "numerals"   },
  // Spacing
  { id: "kern",  tag: "kern",  label: "Kerning",               description: "Optical pair kerning",          group: "spacing"    },
  { id: "case",  tag: "case",  label: "Case-Sensitive Forms",  description: "Adjusted punctuation for caps", group: "spacing"    },
];

const GROUP_LABELS: Record<string, string> = {
  ligatures:  "Ligatures",
  alternates: "Alternates",
  numerals:   "Numerals",
  spacing:    "Spacing & Kerning",
};

const SAMPLE_STRINGS: Record<string, string[]> = {
  ligatures:  [
    "fi fl ff ffi ffl affect office",
    "flightffle afflict sufficient",
    "ſtanding ſilence hiſtory",
  ],
  alternates: [
    "Wonderful Typography Craft",
    "The quick brown fox jumps",
    "Sphinx of black quartz",
  ],
  numerals:   [
    "1234567890 $49.99 €1,200",
    "1st 2nd 3rd 4th ordinals",
    "1/2 3/4 5/8 fractions",
  ],
  spacing:    [
    "WAVE AWAY TITLE CASE",
    "Kerned pairs: AV WA Te Yo",
    "( Brackets ) — Dashes — Em",
  ],
};

const WEIGHTS = [
  { label: "Thin",      value: 100 },
  { label: "Light",     value: 300 },
  { label: "Regular",   value: 400 },
  { label: "Medium",    value: 500 },
  { label: "SemiBold",  value: 600 },
  { label: "Bold",      value: 700 },
  { label: "ExtraBold", value: 800 },
  { label: "Black",     value: 900 },
];

export function TryPageClient({ font }: Props) {
  // ── Specimen text state ────────────────────────────────────────────────
  const [customText, setCustomText]       = useState(`${font.name}\nThe quick brown fox jumps over the lazy dog.\nfi fl ff 1234 — "Typography"`);
  const [fontSize, setFontSize]           = useState(48);
  const [lineHeight, setLineHeight]       = useState(1.2);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [fontWeight, setFontWeight]       = useState(400);
  const [isItalic, setIsItalic]           = useState(false);
  const [textAlign, setTextAlign]         = useState<"left"|"center"|"right">("left");
  const [darkMode, setDarkMode]           = useState(false);

  // ── OpenType features ──────────────────────────────────────────────────
  const [activeFeatures, setActiveFeatures] = useState<Set<string>>(
    new Set(["liga", "kern", "calt"])
  );

  // ── Active group tab ───────────────────────────────────────────────────
  const [activeGroup, setActiveGroup] = useState<string>("ligatures");

  // ── Active feature preview ─────────────────────────────────────────────
  const [previewFeature, setPreviewFeature] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const toggleFeature = useCallback((id: string) => {
    setActiveFeatures((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  // Build font-feature-settings CSS value
  const featureSettings = Array.from(activeFeatures)
    .map((f) => `"${f}" 1`)
    .join(", ") || "normal";

  // Preview override: show specific feature on/off
  const previewFeatureSettings = previewFeature
    ? `"${previewFeature}" 1`
    : "normal";
  const previewFeatureOffSettings = previewFeature
    ? `"${previewFeature}" 0`
    : "normal";

  const specimenStyle: React.CSSProperties = {
    fontFamily: "var(--font-display), Georgia, serif",
    fontSize: `${fontSize}px`,
    lineHeight,
    letterSpacing: `${letterSpacing}em`,
    fontWeight,
    fontStyle: isItalic ? "italic" : "normal",
    textAlign,
    fontFeatureSettings: featureSettings,
    fontVariantLigatures: activeFeatures.has("liga") ? "common-ligatures" : "none",
  };

  const groupedFeatures = OPENTYPE_FEATURES.filter((f) => f.group === activeGroup);

  return (
    <div className={`pt-16 min-h-screen transition-colors duration-300 ${darkMode ? "bg-ink text-paper" : "bg-paper text-ink"}`}>

      {/* ── Top bar ──────────────────────────────────────────────── */}
      <div className={`sticky top-16 z-40 border-b ${darkMode ? "bg-ink border-white/10" : "bg-paper border-black/10"} px-6 md:px-12 py-3 flex items-center justify-between gap-4`}>
        <div className="flex items-center gap-4">
          <Link
            href={`/typefaces/${font.id}`}
            className={`text-[9px] tracking-[0.2em] uppercase transition-colors ${darkMode ? "text-white/40 hover:text-white" : "text-muted hover:text-ink"} flex items-center gap-2`}
          >
            ← {font.name}
          </Link>
          <span className={`text-[9px] ${darkMode ? "text-white/20" : "text-black/20"}`}>/</span>
          <span className={`text-[9px] tracking-[0.2em] uppercase ${darkMode ? "text-white/60" : "text-muted"}`}>
            Try Before You Buy
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Dark/light toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`text-[9px] tracking-[0.18em] uppercase px-3 py-1.5 border transition-all ${
              darkMode
                ? "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                : "border-black/20 text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {darkMode ? "☀ Light" : "◐ Dark"}
          </button>

          {/* Buy CTA */}
          <Link
            href={`/typefaces/${font.id}`}
            className={`text-[9px] tracking-[0.2em] uppercase px-5 py-1.5 transition-opacity hover:opacity-70 ${
              darkMode ? "bg-paper text-ink" : "bg-ink text-paper"
            }`}
          >
            Purchase {font.price} →
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-112px)]">

        {/* ── Left panel: Controls ──────────────────────────────── */}
        <aside className={`lg:w-80 xl:w-96 shrink-0 border-r ${darkMode ? "border-white/10" : "border-black/10"} flex flex-col`}>

          {/* Font info */}
          <div className={`px-6 py-5 border-b ${darkMode ? "border-white/10" : "border-black/10"}`}>
            <p className={`text-[9px] tracking-[0.22em] uppercase mb-1 ${darkMode ? "text-white/30" : "text-muted"}`}>
              Testing
            </p>
            <p
              className="text-[22px] font-light leading-tight"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              {font.name}
            </p>
            <p className={`text-[10px] mt-0.5 ${darkMode ? "text-white/40" : "text-muted"}`}>
              {font.tagline}
            </p>
          </div>

          {/* ── Typography controls ───────────────────────────── */}
          <div className={`px-6 py-5 border-b ${darkMode ? "border-white/10" : "border-black/10"} flex flex-col gap-5`}>
            <p className={`text-[9px] tracking-[0.22em] uppercase ${darkMode ? "text-white/30" : "text-muted"}`}>
              Controls
            </p>

            {/* Font size */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <label className={`text-[9px] tracking-[0.15em] uppercase ${darkMode ? "text-white/40" : "text-muted"}`}>Size</label>
                <span className={`text-[9px] font-mono ${darkMode ? "text-white/50" : "text-muted"}`}>{fontSize}px</span>
              </div>
              <input type="range" min={8} max={200} value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-current h-px" />
            </div>

            {/* Line height */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <label className={`text-[9px] tracking-[0.15em] uppercase ${darkMode ? "text-white/40" : "text-muted"}`}>Line Height</label>
                <span className={`text-[9px] font-mono ${darkMode ? "text-white/50" : "text-muted"}`}>{lineHeight.toFixed(1)}</span>
              </div>
              <input type="range" min={0.8} max={3} step={0.1} value={lineHeight}
                onChange={(e) => setLineHeight(Number(e.target.value))}
                className="w-full accent-current h-px" />
            </div>

            {/* Letter spacing */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <label className={`text-[9px] tracking-[0.15em] uppercase ${darkMode ? "text-white/40" : "text-muted"}`}>Letter Spacing</label>
                <span className={`text-[9px] font-mono ${darkMode ? "text-white/50" : "text-muted"}`}>{letterSpacing.toFixed(2)}em</span>
              </div>
              <input type="range" min={-0.1} max={0.5} step={0.01} value={letterSpacing}
                onChange={(e) => setLetterSpacing(Number(e.target.value))}
                className="w-full accent-current h-px" />
            </div>

            {/* Weight */}
            <div className="flex flex-col gap-2">
              <label className={`text-[9px] tracking-[0.15em] uppercase ${darkMode ? "text-white/40" : "text-muted"}`}>Weight</label>
              <div className="grid grid-cols-4 gap-1">
                {WEIGHTS.map((w) => (
                  <button
                    key={w.value}
                    onClick={() => setFontWeight(w.value)}
                    className={`text-[8px] tracking-wider uppercase py-1.5 border transition-all ${
                      fontWeight === w.value
                        ? darkMode
                          ? "border-white bg-white text-ink"
                          : "border-ink bg-ink text-paper"
                        : darkMode
                          ? "border-white/15 text-white/40 hover:border-white/40"
                          : "border-black/15 text-muted hover:border-ink"
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Style & alignment toggles */}
            <div className="flex gap-2">
              <button
                onClick={() => setIsItalic(!isItalic)}
                className={`flex-1 text-[9px] tracking-[0.15em] uppercase py-1.5 border transition-all italic font-light ${
                  isItalic
                    ? darkMode ? "border-white bg-white text-ink" : "border-ink bg-ink text-paper"
                    : darkMode ? "border-white/15 text-white/40 hover:border-white/40" : "border-black/15 text-muted hover:border-ink"
                }`}
              >
                Italic
              </button>
              {(["left","center","right"] as const).map((a) => (
                <button
                  key={a}
                  onClick={() => setTextAlign(a)}
                  className={`flex-1 text-[9px] py-1.5 border transition-all ${
                    textAlign === a
                      ? darkMode ? "border-white bg-white text-ink" : "border-ink bg-ink text-paper"
                      : darkMode ? "border-white/15 text-white/40 hover:border-white/40" : "border-black/15 text-muted hover:border-ink"
                  }`}
                >
                  {a === "left" ? "⬛◻◻" : a === "center" ? "◻⬛◻" : "◻◻⬛"}
                </button>
              ))}
            </div>
          </div>

          {/* ── OpenType Features ─────────────────────────────── */}
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className={`px-6 pt-5 pb-0 ${darkMode ? "" : ""}`}>
              <p className={`text-[9px] tracking-[0.22em] uppercase mb-3 ${darkMode ? "text-white/30" : "text-muted"}`}>
                OpenType Features
              </p>
              {/* Group tabs */}
              <div className="flex gap-0 border-b border-current/10">
                {Object.keys(GROUP_LABELS).map((g) => (
                  <button
                    key={g}
                    onClick={() => setActiveGroup(g)}
                    className={`text-[8px] tracking-[0.15em] uppercase px-3 py-2 border-b-2 -mb-px transition-colors ${
                      activeGroup === g
                        ? darkMode ? "border-white text-white" : "border-ink text-ink"
                        : darkMode ? "border-transparent text-white/30 hover:text-white/60" : "border-transparent text-muted hover:text-ink"
                    }`}
                  >
                    {GROUP_LABELS[g]}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature list */}
            <div className="px-6 py-4 flex flex-col gap-1 overflow-y-auto flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGroup}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col gap-1"
                >
                  {groupedFeatures.map((feat) => (
                    <div
                      key={feat.id}
                      className={`group flex items-start justify-between gap-3 px-3 py-2.5 rounded-sm transition-colors ${
                        activeFeatures.has(feat.id)
                          ? darkMode ? "bg-white/8" : "bg-black/5"
                          : darkMode ? "hover:bg-white/5" : "hover:bg-black/[0.025]"
                      }`}
                      onMouseEnter={() => setPreviewFeature(feat.id)}
                      onMouseLeave={() => setPreviewFeature(null)}
                    >
                      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] font-mono tracking-wider ${darkMode ? "text-white/30" : "text-muted"}`}>
                            {feat.tag}
                          </span>
                          <span className={`text-[10px] ${darkMode ? "text-white/80" : "text-ink"}`}>
                            {feat.label}
                          </span>
                        </div>
                        <span className={`text-[9px] truncate ${darkMode ? "text-white/30" : "text-muted"}`}>
                          {feat.description}
                        </span>
                      </div>
                      {/* Toggle */}
                      <button
                        onClick={() => toggleFeature(feat.id)}
                        className={`shrink-0 mt-0.5 w-8 h-4 rounded-full transition-colors relative ${
                          activeFeatures.has(feat.id)
                            ? darkMode ? "bg-white" : "bg-ink"
                            : darkMode ? "bg-white/15" : "bg-black/15"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 w-3 h-3 rounded-full transition-all ${
                            activeFeatures.has(feat.id)
                              ? darkMode ? "left-4 bg-ink" : "left-4 bg-paper"
                              : "left-0.5 bg-white"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Quick actions */}
          <div className={`px-6 py-4 border-t ${darkMode ? "border-white/10" : "border-black/10"} flex gap-2`}>
            <button
              onClick={() => setActiveFeatures(new Set(OPENTYPE_FEATURES.map((f) => f.id)))}
              className={`flex-1 text-[8px] tracking-[0.15em] uppercase py-2 border transition-all ${darkMode ? "border-white/15 text-white/40 hover:border-white/40 hover:text-white" : "border-black/15 text-muted hover:border-ink hover:text-ink"}`}
            >
              Enable all
            </button>
            <button
              onClick={() => setActiveFeatures(new Set())}
              className={`flex-1 text-[8px] tracking-[0.15em] uppercase py-2 border transition-all ${darkMode ? "border-white/15 text-white/40 hover:border-white/40 hover:text-white" : "border-black/15 text-muted hover:border-ink hover:text-ink"}`}
            >
              Disable all
            </button>
            <button
              onClick={() => setActiveFeatures(new Set(["liga", "kern", "calt"]))}
              className={`flex-1 text-[8px] tracking-[0.15em] uppercase py-2 border transition-all ${darkMode ? "border-white/15 text-white/40 hover:border-white/40 hover:text-white" : "border-black/15 text-muted hover:border-ink hover:text-ink"}`}
            >
              Reset
            </button>
          </div>
        </aside>

        {/* ── Right panel: Specimen ─────────────────────────────────── */}
        <main className="flex-1 flex flex-col overflow-hidden">

          {/* Editable specimen */}
          <div className={`flex-1 relative p-8 md:p-16 min-h-[400px]`}>
            <textarea
              ref={textareaRef}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              style={specimenStyle}
              className={`w-full h-full min-h-[360px] bg-transparent border-none outline-none resize-none placeholder:opacity-20 transition-all duration-150 ${darkMode ? "text-paper" : "text-ink"}`}
              placeholder="Type your text here…"
              spellCheck={false}
            />
            <p className={`absolute bottom-4 right-6 text-[9px] tracking-[0.15em] uppercase ${darkMode ? "text-white/15" : "text-black/15"}`}>
              Click to edit
            </p>
          </div>

          {/* ── Feature preview strip ──────────────────────────────── */}
          <AnimatePresence>
            {previewFeature && (() => {
              const feat = OPENTYPE_FEATURES.find((f) => f.id === previewFeature)!;
              const samples = SAMPLE_STRINGS[feat.group] ?? ["The quick brown fox"];
              return (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2 }}
                  className={`border-t ${darkMode ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]"} px-8 md:px-16 py-6`}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className={`text-[9px] font-mono tracking-wider ${darkMode ? "text-white/30" : "text-muted"}`}>
                      {feat.tag}
                    </span>
                    <span className={`text-[11px] tracking-wide ${darkMode ? "text-white/70" : "text-ink"}`}>
                      {feat.label}
                    </span>
                    <span className={`text-[9px] ${darkMode ? "text-white/30" : "text-muted"}`}>
                      — {feat.description}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
                    {samples.map((s, i) => (
                      <div key={i} className={`${darkMode ? "bg-white/[0.02]" : "bg-black/[0.015]"} p-4`}>
                        <p className={`text-[9px] tracking-[0.15em] uppercase mb-3 ${darkMode ? "text-white/20" : "text-muted/50"}`}>
                          Feature {activeFeatures.has(feat.id) ? "ON" : "OFF"} → ON
                        </p>
                        {/* Off vs On comparison */}
                        <div className="flex flex-col gap-3">
                          <div>
                            <p className={`text-[8px] tracking-wider mb-1 ${darkMode ? "text-white/20" : "text-muted/40"}`}>
                              Without
                            </p>
                            <p
                              className={`text-[22px] font-light leading-tight ${darkMode ? "text-white/40" : "text-ink/40"}`}
                              style={{
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontFeatureSettings: previewFeatureOffSettings,
                                fontWeight,
                                fontStyle: isItalic ? "italic" : "normal",
                              }}
                            >
                              {s}
                            </p>
                          </div>
                          <div>
                            <p className={`text-[8px] tracking-wider mb-1 ${darkMode ? "text-white/40" : "text-muted/70"}`}>
                              With
                            </p>
                            <p
                              className={`text-[22px] font-light leading-tight ${darkMode ? "text-white" : "text-ink"}`}
                              style={{
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontFeatureSettings: previewFeatureSettings,
                                fontWeight,
                                fontStyle: isItalic ? "italic" : "normal",
                              }}
                            >
                              {s}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>

          {/* ── Waterfall specimen ────────────────────────────────── */}
          <div className={`border-t ${darkMode ? "border-white/10" : "border-black/10"} px-8 md:px-16 py-10`}>
            <p className={`text-[9px] tracking-[0.22em] uppercase mb-8 ${darkMode ? "text-white/30" : "text-muted"}`}>
              Size Waterfall
            </p>
            <div className="flex flex-col gap-4">
              {[72, 48, 36, 24, 18, 14, 12].map((size) => (
                <div key={size} className={`flex items-baseline gap-6 border-b pb-4 ${darkMode ? "border-white/5" : "border-black/5"}`}>
                  <span className={`text-[8px] font-mono w-8 shrink-0 ${darkMode ? "text-white/20" : "text-muted/40"}`}>
                    {size}
                  </span>
                  <p
                    className={`leading-tight ${darkMode ? "text-paper" : "text-ink"}`}
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: `${size}px`,
                      fontFeatureSettings: featureSettings,
                      fontWeight,
                      fontStyle: isItalic ? "italic" : "normal",
                    }}
                  >
                    {font.name} — The quick brown fox
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Glyphs grid ──────────────────────────────────────── */}
          <div className={`border-t ${darkMode ? "border-white/10" : "border-black/10"} px-8 md:px-16 py-10`}>
            <p className={`text-[9px] tracking-[0.22em] uppercase mb-6 ${darkMode ? "text-white/30" : "text-muted"}`}>
              Character Set
            </p>
            <div className="flex flex-wrap gap-px">
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?àáâãäåæçèéêëìíîïðñòóôõöùúûüýþÿ"
                .split("")
                .map((char, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 flex items-center justify-center text-[20px] border transition-all hover:scale-110 ${
                      darkMode
                        ? "border-white/5 hover:bg-white/10 hover:border-white/20"
                        : "border-black/5 hover:bg-black/5 hover:border-black/15"
                    }`}
                    title={`U+${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontFeatureSettings: featureSettings,
                        fontWeight,
                        fontStyle: isItalic ? "italic" : "normal",
                      }}
                    >
                      {char}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* ── Bottom CTA ────────────────────────────────────────── */}
          <div className={`border-t ${darkMode ? "border-white/10" : "border-black/10"} px-8 md:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6`}>
            <div>
              <p
                className={`font-display text-[clamp(24px,3vw,40px)] font-light leading-tight ${darkMode ? "text-paper" : "text-ink"}`}
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Ready to license {font.name}?
              </p>
              <p className={`text-[12px] mt-1 ${darkMode ? "text-white/40" : "text-muted"}`}>
                {font.styles} styles · {font.category} · Desktop, Web & App licenses available
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href={`/typefaces/${font.id}`}
                className={`text-[10px] tracking-[0.2em] uppercase px-7 py-3.5 transition-opacity hover:opacity-70 ${
                  darkMode ? "bg-paper text-ink" : "bg-ink text-paper"
                }`}
              >
                Buy {font.price}
              </Link>
              <Link
                href="/contact"
                className={`text-[10px] tracking-[0.2em] uppercase px-7 py-3.5 border transition-all ${
                  darkMode
                    ? "border-white/20 text-white/60 hover:border-white hover:text-white"
                    : "border-black/20 text-muted hover:border-ink hover:text-ink"
                }`}
              >
                Custom license
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
