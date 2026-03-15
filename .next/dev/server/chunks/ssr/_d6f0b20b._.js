module.exports = [
"[project]/lib/fonts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fonts",
    ()=>fonts
]);
const fonts = [
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
        description: "A high-contrast editorial serif drawn from 18th-century punchcutter traditions. Vellum brings timeless authority to long-form publishing, luxury branding, and fine print.",
        weights: [
            "Thin",
            "Light",
            "Regular",
            "Medium",
            "Bold",
            "Black"
        ],
        featured: true,
        mockups: [
            {
                src: "/mockups/vellum-01.jpg",
                alt: "Vellum set on a luxury magazine cover",
                caption: "Editorial — Magazine cover, 2024"
            },
            {
                src: "/mockups/vellum-02.jpg",
                alt: "Vellum used in book typography",
                caption: "Publishing — Book interior, Thin weight"
            },
            {
                src: "/mockups/vellum-03.jpg",
                alt: "Vellum on packaging design",
                caption: "Branding — Perfume packaging"
            }
        ]
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
        description: "A precise geometric grotesque built on strict circular geometry. Struktur excels in corporate identity, wayfinding systems, and UI environments demanding clarity at all scales.",
        weights: [
            "Thin",
            "Light",
            "Regular",
            "Medium",
            "SemiBold",
            "Bold",
            "ExtraBold",
            "Black"
        ],
        featured: true,
        mockups: [
            {
                src: "/mockups/struktur-01.jpg",
                alt: "Struktur in a corporate identity system",
                caption: "Identity — Brand system, Bold weight"
            },
            {
                src: "/mockups/struktur-02.jpg",
                alt: "Struktur used in wayfinding signage",
                caption: "Signage — Airport wayfinding"
            },
            {
                src: "/mockups/struktur-03.jpg",
                alt: "Struktur in a digital UI product",
                caption: "Digital — SaaS product UI"
            }
        ]
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
        description: "An expressive display typeface for the brave. Nocturne's dramatic strokes and unconventional proportions command attention across posters, packaging, and editorial headlines.",
        weights: [
            "Light",
            "Regular",
            "Bold"
        ],
        featured: true,
        mockups: [
            {
                src: "/mockups/nocturne-01.jpg",
                alt: "Nocturne on a concert poster",
                caption: "Poster — Music event, Regular weight"
            },
            {
                src: "/mockups/nocturne-02.jpg",
                alt: "Nocturne on fashion packaging",
                caption: "Packaging — Fashion brand"
            },
            {
                src: "/mockups/nocturne-03.jpg",
                alt: "Nocturne as editorial headline",
                caption: "Editorial — Magazine headline"
            }
        ]
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
        description: "A highly legible monospace optimised for code, data interfaces, and technical documentation. Axiom offers exceptional rhythm at every size.",
        weights: [
            "Light",
            "Regular",
            "Medium",
            "Bold"
        ],
        featured: false,
        mockups: [
            {
                src: "/mockups/axiom-01.jpg",
                alt: "Axiom in a code editor interface",
                caption: "Digital — Code editor theme"
            },
            {
                src: "/mockups/axiom-02.jpg",
                alt: "Axiom in technical documentation",
                caption: "Docs — Technical manual"
            }
        ]
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
        description: "A warm humanist serif optimised for body text. Plume's generous x-height and careful spacing ensure superb readability across print and screen.",
        weights: [
            "Light",
            "Regular",
            "Medium",
            "SemiBold",
            "Bold"
        ],
        featured: false,
        mockups: [
            {
                src: "/mockups/plume-01.jpg",
                alt: "Plume in a long-form book",
                caption: "Publishing — Novel interior"
            },
            {
                src: "/mockups/plume-02.jpg",
                alt: "Plume on a news website",
                caption: "Digital — Online news article"
            }
        ]
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
        description: "A versatile transitional sans-serif bridging Swiss rationalism and humanist warmth. Ideal for corporate communications, editorial systems, and digital products.",
        weights: [
            "Thin",
            "Light",
            "Regular",
            "Medium",
            "Bold",
            "ExtraBold",
            "Black"
        ],
        featured: false,
        mockups: [
            {
                src: "/mockups/meridian-01.jpg",
                alt: "Meridian in an annual report",
                caption: "Corporate — Annual report"
            },
            {
                src: "/mockups/meridian-02.jpg",
                alt: "Meridian in a mobile app",
                caption: "Digital — Mobile application"
            }
        ]
    }
];
}),
"[project]/components/ui/FontCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FontCard",
    ()=>FontCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const previewLetters = {
    vellum: "Vellum",
    struktur: "Struktur",
    nocturne: "Nocturne",
    axiom: "Axiom",
    plume: "Plume",
    meridian: "Meridian"
};
function FontCard({ font, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.5,
            delay: index * 0.06
        },
        className: "bg-paper group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/typefaces/${font.id}`,
            className: "block",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-56 border-b border-black/10 overflow-hidden flex items-center justify-center px-8 bg-ink/[0.02] group-hover:bg-ink/[0.04] transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display text-[72px] font-light leading-none tracking-tight text-ink/80 group-hover:text-ink transition-colors duration-300 select-none",
                            style: {
                                fontFamily: "var(--font-display), Georgia, serif"
                            },
                            children: previewLetters[font.id] ?? font.name
                        }, void 0, false, {
                            fileName: "[project]/components/ui/FontCard.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        font.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase border border-ink/20 px-2 py-1 text-muted",
                            children: "Featured"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/FontCard.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/FontCard.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-display text-[22px] font-light leading-tight",
                                            children: font.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/FontCard.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-muted mt-0.5",
                                            children: font.tagline
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/FontCard.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/FontCard.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display text-[20px] font-light text-muted",
                                    children: font.price
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/FontCard.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/FontCard.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mt-4 pt-4 border-t border-black/8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] tracking-[0.2em] uppercase text-muted/60 border border-black/10 px-2 py-0.5",
                                    children: font.category
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/FontCard.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] tracking-[0.15em] text-muted",
                                    children: [
                                        font.styles,
                                        " styles"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/FontCard.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] tracking-[0.15em] text-muted ml-auto",
                                    children: font.year
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/FontCard.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/FontCard.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/FontCard.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/FontCard.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/FontCard.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/typefaces/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TypefacesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fonts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$FontCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/FontCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const categories = [
    "All",
    "Serif",
    "Sans-Serif",
    "Display",
    "Mono",
    "Script"
];
function TypefacesPage() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const filtered = active === "All" ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].filter((f)=>f.category === active);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-28 min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-8 md:px-16 pb-16 border-b border-black/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "text-[10px] tracking-[0.25em] uppercase text-muted mb-6",
                        children: "Inventype Studio / Typefaces"
                    }, void 0, false, {
                        fileName: "[project]/app/typefaces/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-end md:justify-between gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.1
                                },
                                className: "font-display text-[clamp(52px,8vw,110px)] font-light leading-none tracking-tight",
                                children: [
                                    "Our",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/typefaces/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: "italic text-muted",
                                        children: "Typefaces"
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/page.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 12
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.3
                                },
                                className: "text-[13px] text-muted max-w-xs leading-relaxed",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].length,
                                    " families crafted with intention — for print, screen, and everything between."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/typefaces/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/typefaces/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-8 md:px-16 py-6 border-b border-black/10 flex gap-6 overflow-x-auto",
                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive(cat),
                        className: `text-[10px] tracking-[0.2em] uppercase whitespace-nowrap pb-1 transition-all ${active === cat ? "text-ink border-b border-ink" : "text-muted hover:text-ink"}`,
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/app/typefaces/page.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/typefaces/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-8 md:px-16 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-black/10",
                    children: filtered.map((font, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$FontCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontCard"], {
                            font: font,
                            index: i
                        }, font.id, false, {
                            fileName: "[project]/app/typefaces/page.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/typefaces/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/typefaces/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/typefaces/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_d6f0b20b._.js.map