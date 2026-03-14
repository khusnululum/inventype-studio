(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/fonts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        featured: true
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
        featured: true
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
        featured: true
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
        featured: false
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
        featured: false
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
        featured: false
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/typefaces/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FontDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fonts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const sampleTexts = [
    "The art of typography is the art of correctly displaying text.",
    "Form follows function — that has been misunderstood. Form and function should be one.",
    "Good design is as little design as possible.",
    "Simplicity is the ultimate sophistication."
];
function FontDetailPage({ params }) {
    _s();
    const font = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fonts"].find((f)=>f.id === params.slug);
    if (!font) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    const [fontSize, setFontSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(72);
    const [sampleIdx, setSampleIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isItalic, setIsItalic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-28 min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 md:px-16 py-4 border-b border-black/10 flex items-center gap-3 text-[10px] tracking-[0.18em] uppercase text-muted",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/typefaces",
                        className: "hover:text-ink transition-colors",
                        children: "Typefaces"
                    }, void 0, false, {
                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-ink",
                        children: font.name
                    }, void 0, false, {
                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-8 md:px-16 py-20 border-b border-black/10 overflow-hidden bg-ink/[0.02]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "text-[10px] tracking-[0.25em] uppercase text-muted mb-4",
                        children: [
                            font.category,
                            " — ",
                            font.styles,
                            " styles"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 32
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.9,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        className: "font-display font-light leading-none tracking-tight mb-6 overflow-hidden",
                        style: {
                            fontFamily: "var(--font-display), Georgia, serif",
                            fontSize: `${fontSize}px`,
                            fontStyle: isItalic ? "italic" : "normal"
                        },
                        children: font.name
                    }, void 0, false, {
                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.4
                        },
                        className: "font-display text-[clamp(16px,2.5vw,28px)] font-light italic text-muted",
                        style: {
                            fontFamily: "var(--font-display), Georgia, serif"
                        },
                        children: font.tagline
                    }, void 0, false, {
                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-b border-black/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-8 md:px-16 py-4 flex flex-wrap items-center gap-6 border-b border-black/10 bg-ink/[0.015]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] tracking-[0.2em] uppercase text-muted",
                                        children: "Size"
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: 16,
                                        max: 160,
                                        value: fontSize,
                                        onChange: (e)=>setFontSize(Number(e.target.value)),
                                        className: "w-24 accent-ink"
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-muted w-10",
                                        children: [
                                            fontSize,
                                            "px"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsItalic(!isItalic),
                                className: `text-[9px] tracking-[0.2em] uppercase px-3 py-1 border transition-colors ${isItalic ? "border-ink bg-ink text-paper" : "border-black/20 text-muted hover:border-ink hover:text-ink"}`,
                                children: "Italic"
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] tracking-[0.2em] uppercase text-muted",
                                        children: "Sample"
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: sampleIdx,
                                        onChange: (e)=>setSampleIdx(Number(e.target.value)),
                                        className: "bg-transparent border border-black/20 text-[10px] px-2 py-1 focus:outline-none text-muted",
                                        children: sampleTexts.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: i,
                                                children: [
                                                    "Sample ",
                                                    i + 1
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-8 md:px-16 py-16 min-h-48",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-display font-light leading-tight transition-all",
                            style: {
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontSize: `${fontSize}px`,
                                fontStyle: isItalic ? "italic" : "normal"
                            },
                            children: sampleTexts[sampleIdx]
                        }, void 0, false, {
                            fileName: "[project]/app/typefaces/[slug]/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-8 md:px-16 py-20 grid md:grid-cols-2 gap-16 border-b border-black/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            duration: 0.7
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] tracking-[0.25em] uppercase text-muted mb-5",
                                children: [
                                    "About ",
                                    font.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-[22px] font-light leading-snug mb-6",
                                style: {
                                    fontFamily: "var(--font-display), Georgia, serif"
                                },
                                children: font.description
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-px bg-black/10 mt-10",
                                children: [
                                    {
                                        label: "Category",
                                        val: font.category
                                    },
                                    {
                                        label: "Styles",
                                        val: `${font.styles}`
                                    },
                                    {
                                        label: "Released",
                                        val: `${font.year}`
                                    }
                                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-paper p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] tracking-[0.2em] uppercase text-muted block mb-1",
                                                children: m.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-[18px] font-light",
                                                style: {
                                                    fontFamily: "var(--font-display), Georgia, serif"
                                                },
                                                children: m.val
                                            }, void 0, false, {
                                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, m.label, true, {
                                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            duration: 0.7,
                            delay: 0.15
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] tracking-[0.25em] uppercase text-muted mb-5",
                                children: "Styles Included"
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    font.weights.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between py-3 border-b border-black/8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-display text-[20px] leading-none",
                                                    style: {
                                                        fontFamily: "var(--font-display), Georgia, serif",
                                                        fontWeight: 300 + i * 100 > 900 ? 900 : 300 + i * 100
                                                    },
                                                    children: w
                                                }, void 0, false, {
                                                    fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] tracking-[0.15em] uppercase text-muted",
                                                    children: [
                                                        font.name,
                                                        " ",
                                                        w
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, w, true, {
                                            fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between py-3 border-b border-black/8",
                                        children: font.weights.slice(0, 3).map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-[20px] leading-none italic text-muted",
                                                style: {
                                                    fontFamily: "var(--font-display), Georgia, serif",
                                                    fontWeight: 300 + i * 100
                                                },
                                                children: [
                                                    w,
                                                    " Italic"
                                                ]
                                            }, w + "-italic", true, {
                                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-8 md:px-16 py-20 flex flex-col md:flex-row md:items-center justify-between gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] tracking-[0.25em] uppercase text-muted mb-2",
                                children: "Licensing starts at"
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-[64px] font-light leading-none",
                                style: {
                                    fontFamily: "var(--font-display), Georgia, serif"
                                },
                                children: font.price
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] text-muted mt-2",
                                children: "Desktop license · 1–5 users"
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-ink text-paper text-[10px] tracking-[0.22em] uppercase px-10 py-4 hover:opacity-70 transition-opacity",
                                children: "Purchase license"
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "border border-black/20 text-ink text-[10px] tracking-[0.22em] uppercase px-10 py-4 hover:bg-ink hover:text-paper transition-all",
                                children: "Try before you buy"
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "text-center text-[10px] tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors",
                                children: "Need a custom license? →"
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/typefaces/[slug]/page.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/typefaces/[slug]/page.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/typefaces/[slug]/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(FontDetailPage, "IT/OEjfNWtfSuiUU/SZVtssBjm0=");
_c = FontDetailPage;
var _c;
__turbopack_context__.k.register(_c, "FontDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_576164a0._.js.map