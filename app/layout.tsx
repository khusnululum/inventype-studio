import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Inventype Studio — Independent Type Foundry",
  description:
    "Inventype Studio is an independent type foundry crafting distinctive typefaces for editorial, branding, and digital design.",
  keywords: ["type foundry", "fonts", "typography", "typefaces", "lettering"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grain bg-paper text-ink">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
