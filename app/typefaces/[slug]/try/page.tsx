// app/typefaces/[slug]/try/page.tsx
// Server Component — unwrap async params, pass font to client

import { fonts } from "@/lib/fonts";
import { notFound } from "next/navigation";
import { TryPageClient } from "./TryPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return fonts.map((f) => ({ slug: f.id }));
}

export default async function TryPage({ params }: Props) {
  const { slug } = await params;
  const font = fonts.find((f) => f.id === slug);
  if (!font) notFound();
  return <TryPageClient font={font} />;
}
