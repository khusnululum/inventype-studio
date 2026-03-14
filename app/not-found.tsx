import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      <p
        className="font-display text-[clamp(80px,18vw,220px)] font-light leading-none text-ink/8 select-none"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
      >
        404
      </p>
      <h1
        className="font-display text-[clamp(28px,4vw,52px)] font-light -mt-6 mb-4"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
      >
        Page not found
      </h1>
      <p className="text-[13px] text-muted mb-10">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        href="/"
        className="bg-ink text-paper text-[10px] tracking-[0.22em] uppercase px-8 py-3.5 hover:opacity-70 transition-opacity"
      >
        Return home
      </Link>
    </div>
  );
}
