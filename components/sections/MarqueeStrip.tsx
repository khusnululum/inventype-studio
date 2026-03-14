"use client";

export function MarqueeStrip() {
  const items = [
    "Editorial Typefaces",
    "Identity Systems",
    "Display Fonts",
    "Text Families",
    "Monospace",
    "Variable Fonts",
    "OpenType Features",
    "Custom Lettering",
  ];

  return (
    <div className="bg-ink overflow-hidden py-3.5 border-y border-ink">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-8 text-[9px] tracking-[0.28em] uppercase text-paper/60"
          >
            {item}
            <span className="text-paper/20">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
