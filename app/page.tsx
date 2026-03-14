import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { FeaturedFonts } from "@/components/sections/FeaturedFonts";
import { AboutStrip } from "@/components/sections/AboutStrip";
import { TypeSpecimen } from "@/components/sections/TypeSpecimen";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <FeaturedFonts />
      <TypeSpecimen />
      <AboutStrip />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
