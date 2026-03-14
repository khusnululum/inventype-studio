"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/typefaces", label: "Typefaces" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 h-16 bg-paper/90 backdrop-blur-sm border-b border-black/10">
        {/* Logo */}
        <Link
          href="/"
          className="text-[11px] tracking-[0.22em] uppercase font-medium text-ink hover:opacity-60 transition-opacity"
        >
          Inventype Studio
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "text-[10px] tracking-[0.18em] uppercase transition-colors",
                  pathname.startsWith(l.href)
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/typefaces"
            className="text-[10px] tracking-[0.2em] uppercase bg-ink text-paper px-5 py-2.5 hover:opacity-70 transition-opacity"
          >
            Browse fonts
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-ink origin-center transition-all"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-ink"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-ink origin-center transition-all"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 bg-paper flex flex-col px-8 pt-12 gap-8"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-[40px] font-light"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-auto mb-16"
            >
              <Link
                href="/typefaces"
                onClick={() => setMenuOpen(false)}
                className="inline-block bg-ink text-paper text-[10px] tracking-[0.2em] uppercase px-8 py-4"
              >
                Browse fonts
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
