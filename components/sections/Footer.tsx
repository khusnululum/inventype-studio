"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  Typefaces: [
    { label: "All Families", href: "/typefaces" },
    { label: "Serifs", href: "/typefaces?cat=Serif" },
    { label: "Sans-Serifs", href: "/typefaces?cat=Sans-Serif" },
    { label: "Display", href: "/typefaces?cat=Display" },
    { label: "Monospace", href: "/typefaces?cat=Mono" },
  ],
  Studio: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/about#process" },
    { label: "Contact", href: "/contact" },
    { label: "Instagram", href: "#" },
    { label: "Are.na", href: "#" },
  ],
  Licensing: [
    { label: "Desktop License", href: "#" },
    { label: "Web License", href: "#" },
    { label: "App License", href: "#" },
    { label: "Custom / Bespoke", href: "/contact" },
    { label: "FAQ", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      {/* Main footer grid */}
      <div className="px-8 md:px-16 pt-20 pb-12 grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-paper/10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-2 md:col-span-1"
        >
          <Link
            href="/"
            className="text-[11px] tracking-[0.22em] uppercase font-medium text-paper block mb-5"
          >
            Inventype Studio
          </Link>
          <p className="text-[12px] text-paper/40 leading-relaxed max-w-[200px]">
            Independent type foundry. Crafting typefaces since 2019.
          </p>
          <p className="text-[11px] text-paper/25 mt-6 leading-relaxed">
            Surabaya, Indonesia
          </p>
        </motion.div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i + 1) * 0.08 }}
          >
            <p className="text-[9px] tracking-[0.25em] uppercase text-paper/30 mb-5">
              {category}
            </p>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[12px] text-paper/50 hover:text-paper transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="px-8 md:px-16 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[10px] text-paper/25 tracking-wide">
          © {new Date().getFullYear()} Inventype Studio. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Use", "Refund Policy"].map((l) => (
            <Link
              key={l}
              href="#"
              className="text-[10px] text-paper/25 hover:text-paper/50 transition-colors tracking-wide"
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
