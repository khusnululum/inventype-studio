// app/typefaces/[slug]/page.tsx — Server Component

import { fonts } from "@/lib/fonts";
import { notFound } from "next/navigation";
import { FontDetailClient } from "./FontDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return fonts.map((f) => ({ slug: f.id }));
}

export default async function FontDetailPage({ params }: Props) {
  const { slug } = await params;
  const font = fonts.find((f) => f.id === slug);
  if (!font) notFound();
  return <FontDetailClient font={font} />;
}
