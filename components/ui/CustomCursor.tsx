"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot — langsung ikut mouse tanpa spring
  // Ring — spring ringan, cukup untuk efek lag tipis
  const ringX = useSpring(mouseX, { stiffness: 350, damping: 28, mass: 0.3 });
  const ringY = useSpring(mouseY, { stiffness: 350, damping: 28, mass: 0.3 });

  const ringScale = useMotionValue(1);
  const ringScaleSpring = useSpring(ringScale, { stiffness: 300, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Gunakan event delegation — satu listener di document,
    // tidak perlu attach ke setiap elemen satu per satu
    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-hover]")) {
        ringScale.set(1.8);
      }
    };
    const handleLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-hover]")) {
        ringScale.set(1);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", handleEnter, { passive: true });
    document.addEventListener("mouseout", handleLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
    };
  }, [mouseX, mouseY, ringScale]);

  return (
    <>
      {/* Dot — pakai mouseX/Y langsung, tidak ada spring = zero lag */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="fixed top-0 left-0 w-2 h-2 bg-ink rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply will-change-transform"
      />
      {/* Ring — spring ringan */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          scale: ringScaleSpring,
        }}
        className="fixed top-0 left-0 w-8 h-8 border border-ink/25 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
    </>
  );
}
