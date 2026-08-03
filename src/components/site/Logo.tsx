import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5">
      <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-foreground">
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            d="M4 18V6l8 7 8-7v12"
            fill="none"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
          MiGen<span className="text-primary">IA</span>
        </span>
      )}
    </Link>
  );
}
