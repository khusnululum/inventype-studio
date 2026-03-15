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
  fontFamily?: string;
  mockups?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export const fonts: FontFamily[] = [
  {
    id: "squarespace",
    name: "Square Space",
    tagline: "Futuristic geometric sans-serif",
    fontFamily: '"Square Space", sans-serif',
    category: "Display",
    styles: 12,
    year: 2022,
    price: "$149",
    previewText: "Sq",
    previewSize: "text-[160px]",
    description:
      "Square Space is a bold futuristic sans-serif built on strict square geometry and razor-sharp corners. Designed for the space age — its uniform stroke weight, cropped terminals, and architectural letterforms command authority on posters, game titles, sci-fi branding, and large-scale display applications. Where other display fonts whisper, Square Space broadcasts.",
    weights: ["Thin", "Light", "Regular", "Medium", "Bold", "Black"],
    featured: true,
    mockups: [
      {
        src: "/mockups/squarespace-01.jpg",
        alt: "Square Space on a sci-fi movie poster",
        caption: "Poster — Sci-fi film title treatment",
      },
      {
        src: "/mockups/squarespace-02.jpg",
        alt: "Square Space in a game title screen",
        caption: "Gaming — Title screen, Bold weight",
      },
      {
        src: "/mockups/squarespace-03.jpg",
        alt: "Square Space on futuristic packaging",
        caption: "Branding — Tech product packaging",
      },
    ],
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
    weights: [
      "Thin",
      "Light",
      "Regular",
      "Medium",
      "SemiBold",
      "Bold",
      "ExtraBold",
      "Black",
    ],
    featured: true,
    mockups: [
      {
        src: "/mockups/struktur-01.jpg",
        alt: "Struktur in a corporate identity system",
        caption: "Identity — Brand system, Bold weight",
      },
      {
        src: "/mockups/struktur-02.jpg",
        alt: "Struktur used in wayfinding signage",
        caption: "Signage — Airport wayfinding",
      },
      {
        src: "/mockups/struktur-03.jpg",
        alt: "Struktur in a digital UI product",
        caption: "Digital — SaaS product UI",
      },
    ],
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
    mockups: [
      {
        src: "/mockups/nocturne-01.jpg",
        alt: "Nocturne on a concert poster",
        caption: "Poster — Music event, Regular weight",
      },
      {
        src: "/mockups/nocturne-02.jpg",
        alt: "Nocturne on fashion packaging",
        caption: "Packaging — Fashion brand",
      },
      {
        src: "/mockups/nocturne-03.jpg",
        alt: "Nocturne as editorial headline",
        caption: "Editorial — Magazine headline",
      },
    ],
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
    mockups: [
      {
        src: "/mockups/axiom-01.jpg",
        alt: "Axiom in a code editor interface",
        caption: "Digital — Code editor theme",
      },
      {
        src: "/mockups/axiom-02.jpg",
        alt: "Axiom in technical documentation",
        caption: "Docs — Technical manual",
      },
    ],
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
    mockups: [
      {
        src: "/mockups/plume-01.jpg",
        alt: "Plume in a long-form book",
        caption: "Publishing — Novel interior",
      },
      {
        src: "/mockups/plume-02.jpg",
        alt: "Plume on a news website",
        caption: "Digital — Online news article",
      },
    ],
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
    weights: [
      "Thin",
      "Light",
      "Regular",
      "Medium",
      "Bold",
      "ExtraBold",
      "Black",
    ],
    featured: false,
    mockups: [
      {
        src: "/mockups/meridian-01.jpg",
        alt: "Meridian in an annual report",
        caption: "Corporate — Annual report",
      },
      {
        src: "/mockups/meridian-02.jpg",
        alt: "Meridian in a mobile app",
        caption: "Digital — Mobile application",
      },
    ],
  },
];
