# Inventype Studio

An independent type foundry website built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Stack

- **Next.js 14** — App Router
- **TypeScript** — full type safety
- **Tailwind CSS** — utility styling with custom design tokens
- **Framer Motion** — scroll animations, page transitions, parallax
- **DM Mono** — body / UI font (Google Fonts)
- **Cormorant Garamond** — display / serif font (Google Fonts)

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, featured fonts, specimen, about strip, process, CTA |
| `/typefaces` | Full catalog with category filter |
| `/typefaces/[slug]` | Individual font detail with live interactive specimen |
| `/about` | Studio story, values, stats |
| `/contact` | Contact form + studio info |

## Design tokens (tailwind.config.ts)

| Token | Value | Usage |
|---|---|---|
| `ink` | `#0a0a0a` | Primary text / backgrounds |
| `paper` | `#f4f3ef` | Page background |
| `muted` | `#888888` | Secondary text |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## Project structure

```
inventype-studio/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer + cursor)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind + Google Fonts + custom CSS
│   ├── not-found.tsx       # 404 page
│   ├── typefaces/
│   │   ├── page.tsx        # Catalog page
│   │   └── [slug]/
│   │       └── page.tsx    # Font detail page
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── ui/
│   │   ├── CustomCursor.tsx
│   │   └── FontCard.tsx
│   └── sections/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── MarqueeStrip.tsx
│       ├── FeaturedFonts.tsx
│       ├── TypeSpecimen.tsx
│       ├── AboutStrip.tsx
│       ├── ProcessSection.tsx
│       └── CtaSection.tsx
├── lib/
│   ├── fonts.ts            # Font data / types
│   └── utils.ts            # cn() helper
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customisation

- **Add a font family:** edit `lib/fonts.ts` — add a new entry to the `fonts` array
- **Change colours:** edit `tailwind.config.ts` → `theme.extend.colors`
- **Replace fonts:** swap Google Fonts `@import` in `app/globals.css` and update `--font-display` / `--font-body` CSS variables
