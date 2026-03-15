module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/fonts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/typefaces/[slug]/FontDetailClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FontDetailClient",
    ()=>FontDetailClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FontDetailClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FontDetailClient() from the server but FontDetailClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/typefaces/[slug]/FontDetailClient.tsx <module evaluation>", "FontDetailClient");
}),
"[project]/app/typefaces/[slug]/FontDetailClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FontDetailClient",
    ()=>FontDetailClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FontDetailClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FontDetailClient() from the server but FontDetailClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/typefaces/[slug]/FontDetailClient.tsx", "FontDetailClient");
}),
"[project]/app/typefaces/[slug]/FontDetailClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$typefaces$2f5b$slug$5d2f$FontDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/typefaces/[slug]/FontDetailClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$typefaces$2f5b$slug$5d2f$FontDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/typefaces/[slug]/FontDetailClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$typefaces$2f5b$slug$5d2f$FontDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/typefaces/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FontDetailPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// app/typefaces/[slug]/page.tsx — Server Component
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fonts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fonts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$typefaces$2f5b$slug$5d2f$FontDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/typefaces/[slug]/FontDetailClient.tsx [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fonts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fonts"].map((f)=>({
            slug: f.id
        }));
}
async function FontDetailPage({ params }) {
    const { slug } = await params;
    const font = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fonts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fonts"].find((f)=>f.id === slug);
    if (!font) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$typefaces$2f5b$slug$5d2f$FontDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FontDetailClient"], {
        font: font
    }, void 0, false, {
        fileName: "[project]/app/typefaces/[slug]/page.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/typefaces/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/typefaces/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__424d1a4a._.js.map