(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/typefaces/[slug]/try/TryPageClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TryPageClient",
    ()=>TryPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// ─── OpenType feature definitions ────────────────────────────────────────────
const OPENTYPE_FEATURES = [
    // Ligatures
    {
        id: "liga",
        tag: "liga",
        label: "Standard Ligatures",
        description: "fi, fl, ff, ffi, ffl",
        group: "ligatures"
    },
    {
        id: "dlig",
        tag: "dlig",
        label: "Discretionary Ligatures",
        description: "st, ct, sp, rare pairs",
        group: "ligatures"
    },
    {
        id: "hlig",
        tag: "hlig",
        label: "Historical Ligatures",
        description: "ſt, ſi, archaic forms",
        group: "ligatures"
    },
    // Alternates
    {
        id: "calt",
        tag: "calt",
        label: "Contextual Alternates",
        description: "Auto-contextual substitutions",
        group: "alternates"
    },
    {
        id: "salt",
        tag: "salt",
        label: "Stylistic Alternates",
        description: "Alternative letterforms",
        group: "alternates"
    },
    {
        id: "ss01",
        tag: "ss01",
        label: "Stylistic Set 01",
        description: "First stylistic variation",
        group: "alternates"
    },
    {
        id: "ss02",
        tag: "ss02",
        label: "Stylistic Set 02",
        description: "Second stylistic variation",
        group: "alternates"
    },
    {
        id: "ss03",
        tag: "ss03",
        label: "Stylistic Set 03",
        description: "Third stylistic variation",
        group: "alternates"
    },
    {
        id: "swsh",
        tag: "swsh",
        label: "Swashes",
        description: "Decorative swash forms",
        group: "alternates"
    },
    {
        id: "titl",
        tag: "titl",
        label: "Titling Alternates",
        description: "Optimised for large sizes",
        group: "alternates"
    },
    {
        id: "smcp",
        tag: "smcp",
        label: "Small Capitals",
        description: "Lowercase → small caps",
        group: "alternates"
    },
    {
        id: "c2sc",
        tag: "c2sc",
        label: "Caps to Small Caps",
        description: "Uppercase → small caps",
        group: "alternates"
    },
    // Numerals
    {
        id: "lnum",
        tag: "lnum",
        label: "Lining Figures",
        description: "Uniform-height numerals",
        group: "numerals"
    },
    {
        id: "onum",
        tag: "onum",
        label: "Oldstyle Figures",
        description: "Ascending/descending numerals",
        group: "numerals"
    },
    {
        id: "pnum",
        tag: "pnum",
        label: "Proportional Figures",
        description: "Variable-width numerals",
        group: "numerals"
    },
    {
        id: "tnum",
        tag: "tnum",
        label: "Tabular Figures",
        description: "Fixed-width numerals",
        group: "numerals"
    },
    {
        id: "frac",
        tag: "frac",
        label: "Fractions",
        description: "Auto diagonal fractions",
        group: "numerals"
    },
    {
        id: "ordn",
        tag: "ordn",
        label: "Ordinals",
        description: "1st, 2nd superscript forms",
        group: "numerals"
    },
    // Spacing
    {
        id: "kern",
        tag: "kern",
        label: "Kerning",
        description: "Optical pair kerning",
        group: "spacing"
    },
    {
        id: "case",
        tag: "case",
        label: "Case-Sensitive Forms",
        description: "Adjusted punctuation for caps",
        group: "spacing"
    }
];
const GROUP_LABELS = {
    ligatures: "Ligatures",
    alternates: "Alternates",
    numerals: "Numerals",
    spacing: "Spacing & Kerning"
};
const SAMPLE_STRINGS = {
    ligatures: [
        "fi fl ff ffi ffl affect office",
        "flightffle afflict sufficient",
        "ſtanding ſilence hiſtory"
    ],
    alternates: [
        "Wonderful Typography Craft",
        "The quick brown fox jumps",
        "Sphinx of black quartz"
    ],
    numerals: [
        "1234567890 $49.99 €1,200",
        "1st 2nd 3rd 4th ordinals",
        "1/2 3/4 5/8 fractions"
    ],
    spacing: [
        "WAVE AWAY TITLE CASE",
        "Kerned pairs: AV WA Te Yo",
        "( Brackets ) — Dashes — Em"
    ]
};
const WEIGHTS = [
    {
        label: "Thin",
        value: 100
    },
    {
        label: "Light",
        value: 300
    },
    {
        label: "Regular",
        value: 400
    },
    {
        label: "Medium",
        value: 500
    },
    {
        label: "SemiBold",
        value: 600
    },
    {
        label: "Bold",
        value: 700
    },
    {
        label: "ExtraBold",
        value: 800
    },
    {
        label: "Black",
        value: 900
    }
];
function TryPageClient({ font }) {
    _s();
    // ── Specimen text state ────────────────────────────────────────────────
    const [customText, setCustomText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(`${font.name}\nThe quick brown fox jumps over the lazy dog.\nfi fl ff 1234 — "Typography"`);
    const [fontSize, setFontSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(48);
    const [lineHeight, setLineHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.2);
    const [letterSpacing, setLetterSpacing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fontWeight, setFontWeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(400);
    const [isItalic, setIsItalic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [textAlign, setTextAlign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("left");
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── OpenType features ──────────────────────────────────────────────────
    const [activeFeatures, setActiveFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set([
        "liga",
        "kern",
        "calt"
    ]));
    // ── Active group tab ───────────────────────────────────────────────────
    const [activeGroup, setActiveGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ligatures");
    // ── Active feature preview ─────────────────────────────────────────────
    const [previewFeature, setPreviewFeature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TryPageClient.useCallback[toggleFeature]": (id)=>{
            setActiveFeatures({
                "TryPageClient.useCallback[toggleFeature]": (prev)=>{
                    const next = new Set(prev);
                    next.has(id) ? next.delete(id) : next.add(id);
                    return next;
                }
            }["TryPageClient.useCallback[toggleFeature]"]);
        }
    }["TryPageClient.useCallback[toggleFeature]"], []);
    // Build font-feature-settings CSS value
    const featureSettings = Array.from(activeFeatures).map((f)=>`"${f}" 1`).join(", ") || "normal";
    // Preview override: show specific feature on/off
    const previewFeatureSettings = previewFeature ? `"${previewFeature}" 1` : "normal";
    const previewFeatureOffSettings = previewFeature ? `"${previewFeature}" 0` : "normal";
    const specimenStyle = {
        fontFamily: "var(--font-display), Georgia, serif",
        fontSize: `${fontSize}px`,
        lineHeight,
        letterSpacing: `${letterSpacing}em`,
        fontWeight,
        fontStyle: isItalic ? "italic" : "normal",
        textAlign,
        fontFeatureSettings: featureSettings,
        fontVariantLigatures: activeFeatures.has("liga") ? "common-ligatures" : "none"
    };
    const groupedFeatures = OPENTYPE_FEATURES.filter((f)=>f.group === activeGroup);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `pt-16 min-h-screen transition-colors duration-300 ${darkMode ? "bg-ink text-paper" : "bg-paper text-ink"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `sticky top-16 z-40 border-b ${darkMode ? "bg-ink border-white/10" : "bg-paper border-black/10"} px-6 md:px-12 py-3 flex items-center justify-between gap-4`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/typefaces/${font.id}`,
                                className: `text-[9px] tracking-[0.2em] uppercase transition-colors ${darkMode ? "text-white/40 hover:text-white" : "text-muted hover:text-ink"} flex items-center gap-2`,
                                children: [
                                    "← ",
                                    font.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[9px] ${darkMode ? "text-white/20" : "text-black/20"}`,
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[9px] tracking-[0.2em] uppercase ${darkMode ? "text-white/60" : "text-muted"}`,
                                children: "Try Before You Buy"
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setDarkMode(!darkMode),
                                className: `text-[9px] tracking-[0.18em] uppercase px-3 py-1.5 border transition-all ${darkMode ? "border-white/20 text-white/60 hover:border-white/50 hover:text-white" : "border-black/20 text-muted hover:border-ink hover:text-ink"}`,
                                children: darkMode ? "☀ Light" : "◐ Dark"
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/typefaces/${font.id}`,
                                className: `text-[9px] tracking-[0.2em] uppercase px-5 py-1.5 transition-opacity hover:opacity-70 ${darkMode ? "bg-paper text-ink" : "bg-ink text-paper"}`,
                                children: [
                                    "Purchase ",
                                    font.price,
                                    " →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row min-h-[calc(100vh-112px)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: `lg:w-80 xl:w-96 shrink-0 border-r ${darkMode ? "border-white/10" : "border-black/10"} flex flex-col`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-6 py-5 border-b ${darkMode ? "border-white/10" : "border-black/10"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[9px] tracking-[0.22em] uppercase mb-1 ${darkMode ? "text-white/30" : "text-muted"}`,
                                        children: "Testing"
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[22px] font-light leading-tight",
                                        style: {
                                            fontFamily: "var(--font-display), Georgia, serif"
                                        },
                                        children: font.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[10px] mt-0.5 ${darkMode ? "text-white/40" : "text-muted"}`,
                                        children: font.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-6 py-5 border-b ${darkMode ? "border-white/10" : "border-black/10"} flex flex-col gap-5`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[9px] tracking-[0.22em] uppercase ${darkMode ? "text-white/30" : "text-muted"}`,
                                        children: "Controls"
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `text-[9px] tracking-[0.15em] uppercase ${darkMode ? "text-white/40" : "text-muted"}`,
                                                        children: "Size"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[9px] font-mono ${darkMode ? "text-white/50" : "text-muted"}`,
                                                        children: [
                                                            fontSize,
                                                            "px"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: 8,
                                                max: 200,
                                                value: fontSize,
                                                onChange: (e)=>setFontSize(Number(e.target.value)),
                                                className: "w-full accent-current h-px"
                                            }, void 0, false, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 222,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `text-[9px] tracking-[0.15em] uppercase ${darkMode ? "text-white/40" : "text-muted"}`,
                                                        children: "Line Height"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[9px] font-mono ${darkMode ? "text-white/50" : "text-muted"}`,
                                                        children: lineHeight.toFixed(1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: 0.8,
                                                max: 3,
                                                step: 0.1,
                                                value: lineHeight,
                                                onChange: (e)=>setLineHeight(Number(e.target.value)),
                                                className: "w-full accent-current h-px"
                                            }, void 0, false, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `text-[9px] tracking-[0.15em] uppercase ${darkMode ? "text-white/40" : "text-muted"}`,
                                                        children: "Letter Spacing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[9px] font-mono ${darkMode ? "text-white/50" : "text-muted"}`,
                                                        children: [
                                                            letterSpacing.toFixed(2),
                                                            "em"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 240,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: -0.1,
                                                max: 0.5,
                                                step: 0.01,
                                                value: letterSpacing,
                                                onChange: (e)=>setLetterSpacing(Number(e.target.value)),
                                                className: "w-full accent-current h-px"
                                            }, void 0, false, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `text-[9px] tracking-[0.15em] uppercase ${darkMode ? "text-white/40" : "text-muted"}`,
                                                children: "Weight"
                                            }, void 0, false, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-4 gap-1",
                                                children: WEIGHTS.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setFontWeight(w.value),
                                                        className: `text-[8px] tracking-wider uppercase py-1.5 border transition-all ${fontWeight === w.value ? darkMode ? "border-white bg-white text-ink" : "border-ink bg-ink text-paper" : darkMode ? "border-white/15 text-white/40 hover:border-white/40" : "border-black/15 text-muted hover:border-ink"}`,
                                                        children: w.label
                                                    }, w.value, false, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsItalic(!isItalic),
                                                className: `flex-1 text-[9px] tracking-[0.15em] uppercase py-1.5 border transition-all italic font-light ${isItalic ? darkMode ? "border-white bg-white text-ink" : "border-ink bg-ink text-paper" : darkMode ? "border-white/15 text-white/40 hover:border-white/40" : "border-black/15 text-muted hover:border-ink"}`,
                                                children: "Italic"
                                            }, void 0, false, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 275,
                                                columnNumber: 15
                                            }, this),
                                            [
                                                "left",
                                                "center",
                                                "right"
                                            ].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setTextAlign(a),
                                                    className: `flex-1 text-[9px] py-1.5 border transition-all ${textAlign === a ? darkMode ? "border-white bg-white text-ink" : "border-ink bg-ink text-paper" : darkMode ? "border-white/15 text-white/40 hover:border-white/40" : "border-black/15 text-muted hover:border-ink"}`,
                                                    children: a === "left" ? "⬛◻◻" : a === "center" ? "◻⬛◻" : "◻◻⬛"
                                                }, a, false, {
                                                    fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col flex-1 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-6 pt-5 pb-0 ${darkMode ? "" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-[9px] tracking-[0.22em] uppercase mb-3 ${darkMode ? "text-white/30" : "text-muted"}`,
                                                children: "OpenType Features"
                                            }, void 0, false, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 304,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-0 border-b border-current/10",
                                                children: Object.keys(GROUP_LABELS).map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setActiveGroup(g),
                                                        className: `text-[8px] tracking-[0.15em] uppercase px-3 py-2 border-b-2 -mb-px transition-colors ${activeGroup === g ? darkMode ? "border-white text-white" : "border-ink text-ink" : darkMode ? "border-transparent text-white/30 hover:text-white/60" : "border-transparent text-muted hover:text-ink"}`,
                                                        children: GROUP_LABELS[g]
                                                    }, g, false, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 308,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-4 flex flex-col gap-1 overflow-y-auto flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            mode: "wait",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 6
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: -6
                                                },
                                                transition: {
                                                    duration: 0.18
                                                },
                                                className: "flex flex-col gap-1",
                                                children: groupedFeatures.map((feat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `group flex items-start justify-between gap-3 px-3 py-2.5 rounded-sm transition-colors ${activeFeatures.has(feat.id) ? darkMode ? "bg-white/8" : "bg-black/5" : darkMode ? "hover:bg-white/5" : "hover:bg-black/[0.025]"}`,
                                                        onMouseEnter: ()=>setPreviewFeature(feat.id),
                                                        onMouseLeave: ()=>setPreviewFeature(null),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-0.5 flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-[9px] font-mono tracking-wider ${darkMode ? "text-white/30" : "text-muted"}`,
                                                                                children: feat.tag
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                                lineNumber: 349,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-[10px] ${darkMode ? "text-white/80" : "text-ink"}`,
                                                                                children: feat.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                                lineNumber: 352,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                        lineNumber: 348,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-[9px] truncate ${darkMode ? "text-white/30" : "text-muted"}`,
                                                                        children: feat.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                        lineNumber: 356,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleFeature(feat.id),
                                                                className: `shrink-0 mt-0.5 w-8 h-4 rounded-full transition-colors relative ${activeFeatures.has(feat.id) ? darkMode ? "bg-white" : "bg-ink" : darkMode ? "bg-white/15" : "bg-black/15"}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `absolute top-0.5 w-3 h-3 rounded-full transition-all ${activeFeatures.has(feat.id) ? darkMode ? "left-4 bg-ink" : "left-4 bg-paper" : "left-0.5 bg-white"}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                    lineNumber: 369,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, feat.id, true, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this))
                                            }, activeGroup, false, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-6 py-4 border-t ${darkMode ? "border-white/10" : "border-black/10"} flex gap-2`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveFeatures(new Set(OPENTYPE_FEATURES.map((f)=>f.id))),
                                        className: `flex-1 text-[8px] tracking-[0.15em] uppercase py-2 border transition-all ${darkMode ? "border-white/15 text-white/40 hover:border-white/40 hover:text-white" : "border-black/15 text-muted hover:border-ink hover:text-ink"}`,
                                        children: "Enable all"
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 386,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveFeatures(new Set()),
                                        className: `flex-1 text-[8px] tracking-[0.15em] uppercase py-2 border transition-all ${darkMode ? "border-white/15 text-white/40 hover:border-white/40 hover:text-white" : "border-black/15 text-muted hover:border-ink hover:text-ink"}`,
                                        children: "Disable all"
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveFeatures(new Set([
                                                "liga",
                                                "kern",
                                                "calt"
                                            ])),
                                        className: `flex-1 text-[8px] tracking-[0.15em] uppercase py-2 border transition-all ${darkMode ? "border-white/15 text-white/40 hover:border-white/40 hover:text-white" : "border-black/15 text-muted hover:border-ink hover:text-ink"}`,
                                        children: "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-1 relative p-8 md:p-16 min-h-[400px]`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        ref: textareaRef,
                                        value: customText,
                                        onChange: (e)=>setCustomText(e.target.value),
                                        style: specimenStyle,
                                        className: `w-full h-full min-h-[360px] bg-transparent border-none outline-none resize-none placeholder:opacity-20 transition-all duration-150 ${darkMode ? "text-paper" : "text-ink"}`,
                                        placeholder: "Type your text here…",
                                        spellCheck: false
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 412,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `absolute bottom-4 right-6 text-[9px] tracking-[0.15em] uppercase ${darkMode ? "text-white/15" : "text-black/15"}`,
                                        children: "Click to edit"
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: previewFeature && (()=>{
                                    const feat = OPENTYPE_FEATURES.find((f)=>f.id === previewFeature);
                                    const samples = SAMPLE_STRINGS[feat.group] ?? [
                                        "The quick brown fox"
                                    ];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 12
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: 12
                                        },
                                        transition: {
                                            duration: 0.2
                                        },
                                        className: `border-t ${darkMode ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]"} px-8 md:px-16 py-6`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 mb-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[9px] font-mono tracking-wider ${darkMode ? "text-white/30" : "text-muted"}`,
                                                        children: feat.tag
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[11px] tracking-wide ${darkMode ? "text-white/70" : "text-ink"}`,
                                                        children: feat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[9px] ${darkMode ? "text-white/30" : "text-muted"}`,
                                                        children: [
                                                            "— ",
                                                            feat.description
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 439,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-3 gap-px",
                                                children: samples.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${darkMode ? "bg-white/[0.02]" : "bg-black/[0.015]"} p-4`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-[9px] tracking-[0.15em] uppercase mb-3 ${darkMode ? "text-white/20" : "text-muted/50"}`,
                                                                children: [
                                                                    "Feature ",
                                                                    activeFeatures.has(feat.id) ? "ON" : "OFF",
                                                                    " → ON"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: `text-[8px] tracking-wider mb-1 ${darkMode ? "text-white/20" : "text-muted/40"}`,
                                                                                children: "Without"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                                lineNumber: 459,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: `text-[22px] font-light leading-tight ${darkMode ? "text-white/40" : "text-ink/40"}`,
                                                                                style: {
                                                                                    fontFamily: "var(--font-display), Georgia, serif",
                                                                                    fontFeatureSettings: previewFeatureOffSettings,
                                                                                    fontWeight,
                                                                                    fontStyle: isItalic ? "italic" : "normal"
                                                                                },
                                                                                children: s
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                                lineNumber: 462,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                        lineNumber: 458,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: `text-[8px] tracking-wider mb-1 ${darkMode ? "text-white/40" : "text-muted/70"}`,
                                                                                children: "With"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                                lineNumber: 475,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: `text-[22px] font-light leading-tight ${darkMode ? "text-white" : "text-ink"}`,
                                                                                style: {
                                                                                    fontFamily: "var(--font-display), Georgia, serif",
                                                                                    fontFeatureSettings: previewFeatureSettings,
                                                                                    fontWeight,
                                                                                    fontStyle: isItalic ? "italic" : "normal"
                                                                                },
                                                                                children: s
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                                lineNumber: 478,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                        lineNumber: 474,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 450,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 432,
                                        columnNumber: 17
                                    }, this);
                                })()
                            }, void 0, false, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border-t ${darkMode ? "border-white/10" : "border-black/10"} px-8 md:px-16 py-10`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[9px] tracking-[0.22em] uppercase mb-8 ${darkMode ? "text-white/30" : "text-muted"}`,
                                        children: "Size Waterfall"
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            72,
                                            48,
                                            36,
                                            24,
                                            18,
                                            14,
                                            12
                                        ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-baseline gap-6 border-b pb-4 ${darkMode ? "border-white/5" : "border-black/5"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[8px] font-mono w-8 shrink-0 ${darkMode ? "text-white/20" : "text-muted/40"}`,
                                                        children: size
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `leading-tight ${darkMode ? "text-paper" : "text-ink"}`,
                                                        style: {
                                                            fontFamily: "var(--font-display), Georgia, serif",
                                                            fontSize: `${size}px`,
                                                            fontFeatureSettings: featureSettings,
                                                            fontWeight,
                                                            fontStyle: isItalic ? "italic" : "normal"
                                                        },
                                                        children: [
                                                            font.name,
                                                            " — The quick brown fox"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, size, true, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 506,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 500,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border-t ${darkMode ? "border-white/10" : "border-black/10"} px-8 md:px-16 py-10`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[9px] tracking-[0.22em] uppercase mb-6 ${darkMode ? "text-white/30" : "text-muted"}`,
                                        children: "Character Set"
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 529,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-px",
                                        children: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?àáâãäåæçèéêëìíîïðñòóôõöùúûüýþÿ".split("").map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-10 h-10 flex items-center justify-center text-[20px] border transition-all hover:scale-110 ${darkMode ? "border-white/5 hover:bg-white/10 hover:border-white/20" : "border-black/5 hover:bg-black/5 hover:border-black/15"}`,
                                                title: `U+${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "var(--font-display), Georgia, serif",
                                                        fontFeatureSettings: featureSettings,
                                                        fontWeight,
                                                        fontStyle: isItalic ? "italic" : "normal"
                                                    },
                                                    children: char
                                                }, void 0, false, {
                                                    fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 21
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 536,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border-t ${darkMode ? "border-white/10" : "border-black/10"} px-8 md:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `font-display text-[clamp(24px,3vw,40px)] font-light leading-tight ${darkMode ? "text-paper" : "text-ink"}`,
                                                style: {
                                                    fontFamily: "var(--font-display), Georgia, serif"
                                                },
                                                children: [
                                                    "Ready to license ",
                                                    font.name,
                                                    "?"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 563,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-[12px] mt-1 ${darkMode ? "text-white/40" : "text-muted"}`,
                                                children: [
                                                    font.styles,
                                                    " styles · ",
                                                    font.category,
                                                    " · Desktop, Web & App licenses available"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 569,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 562,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/typefaces/${font.id}`,
                                                className: `text-[10px] tracking-[0.2em] uppercase px-7 py-3.5 transition-opacity hover:opacity-70 ${darkMode ? "bg-paper text-ink" : "bg-ink text-paper"}`,
                                                children: [
                                                    "Buy ",
                                                    font.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 574,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: `text-[10px] tracking-[0.2em] uppercase px-7 py-3.5 border transition-all ${darkMode ? "border-white/20 text-white/60 hover:border-white hover:text-white" : "border-black/20 text-muted hover:border-ink hover:text-ink"}`,
                                                children: "Custom license"
                                            }, void 0, false, {
                                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                                lineNumber: 582,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                        lineNumber: 573,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                                lineNumber: 561,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/typefaces/[slug]/try/TryPageClient.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_s(TryPageClient, "n8cNwSNrJONJAV+Myldeohl+/54=");
_c = TryPageClient;
var _c;
__turbopack_context__.k.register(_c, "TryPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_typefaces_%5Bslug%5D_try_TryPageClient_tsx_193c8b41._.js.map