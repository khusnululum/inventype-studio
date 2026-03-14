export interface FontFamily {
  id: string;
  name: string;
  tagline: string;
  category: "Serif" | "Sans-Serif" | "Display" | "Mono" | "Script";
  styles: number;
  year: number;
  price: string;
  previewText: string;
  previewSize: string;
  description: string;
  weights: string[];
  featured: boolean;
}

export const fonts: FontFamily[] = [
  {
    id: "vellum",
    name: "Vellum",
    tagline: "Refined editorial serif",
    category: "Serif",
    styles: 12,
    year: 2024,
    price: "$149",
    previewText: "Aa",
    previewSize: "text-[160px]",
    description:
      "A high-contrast editorial serif drawn from 18th-century punchcutter traditions. Vellum brings timeless authority to long-form publishing, luxury branding, and fine print.",
    weights: ["Thin", "Light", "Regular", "Medium", "Bold", "Black"],
    featured: true,
  },
  {
    id: "struktur",
    name: "Struktur",
    tagline: "Geometric grotesque",
    category: "Sans-Serif",
    styles: 18,
    year: 2024,
    price: "$189",
    previewText: "Gg",
    previewSize: "text-[160px]",
    description:
      "A precise geometric grotesque built on strict circular geometry. Struktur excels in corporate identity, wayfinding systems, and UI environments demanding clarity at all scales.",
    weights: ["Thin", "Light", "Regular", "Medium", "SemiBold", "Bold", "ExtraBold", "Black"],
    featured: true,
  },
  {
    id: "nocturne",
    name: "Nocturne",
    tagline: "Expressive display face",
    category: "Display",
    styles: 6,
    year: 2023,
    price: "$99",
    previewText: "Nn",
    previewSize: "text-[160px]",
    description:
      "An expressive display typeface for the brave. Nocturne's dramatic strokes and unconventional proportions command attention across posters, packaging, and editorial headlines.",
    weights: ["Light", "Regular", "Bold"],
    featured: true,
  },
  {
    id: "axiom",
    name: "Axiom",
    tagline: "Technical monospace",
    category: "Mono",
    styles: 8,
    year: 2023,
    price: "$79",
    previewText: "0x",
    previewSize: "text-[160px]",
    description:
      "A highly legible monospace optimised for code, data interfaces, and technical documentation. Axiom offers exceptional rhythm at every size.",
    weights: ["Light", "Regular", "Medium", "Bold"],
    featured: false,
  },
  {
    id: "plume",
    name: "Plume",
    tagline: "Humanist text serif",
    category: "Serif",
    styles: 10,
    year: 2022,
    price: "$129",
    previewText: "Pp",
    previewSize: "text-[160px]",
    description:
      "A warm humanist serif optimised for body text. Plume's generous x-height and careful spacing ensure superb readability across print and screen.",
    weights: ["Light", "Regular", "Medium", "SemiBold", "Bold"],
    featured: false,
  },
  {
    id: "meridian",
    name: "Meridian",
    tagline: "Transitional sans",
    category: "Sans-Serif",
    styles: 14,
    year: 2022,
    price: "$159",
    previewText: "Mm",
    previewSize: "text-[160px]",
    description:
      "A versatile transitional sans-serif bridging Swiss rationalism and humanist warmth. Ideal for corporate communications, editorial systems, and digital products.",
    weights: ["Thin", "Light", "Regular", "Medium", "Bold", "ExtraBold", "Black"],
    featured: false,
  },
];
