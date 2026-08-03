import { cn } from "@/lib/utils";

/**
 * Structural placeholders.
 * Used while the final copy is defined — no invented content.
 */

export function SlotLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-eyebrow text-muted-foreground">
      {children}
    </span>
  );
}

export function TextSlot({
  label,
  lines = 3,
  className,
}: {
  label: string;
  lines?: number;
  className?: string;
}) {
  const widths = ["100%", "94%", "88%", "72%", "60%"];
  return (
    <div className={cn("min-w-0", className)}>
      <SlotLabel>{label}</SlotLabel>
      <div className="mt-3 space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-2.5 rounded-full bg-secondary"
            style={{ width: widths[i % widths.length] }}
          />
        ))}
      </div>
    </div>
  );
}

export function HeadingSlot({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("min-w-0", className)}>
      <SlotLabel>{label}</SlotLabel>
      <div className="mt-3 space-y-2.5">
        <div className="h-5 w-3/4 rounded-md bg-secondary" />
        <div className="h-5 w-1/2 rounded-md bg-secondary" />
      </div>
    </div>
  );
}

export function ListSlot({ label, items = 3 }: { label: string; items?: number }) {
  return (
    <div className="min-w-0">
      <SlotLabel>{label}</SlotLabel>
      <ul className="mt-4 space-y-3">
        {Array.from({ length: items }).map((_, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span
              className="h-2.5 rounded-full bg-secondary"
              style={{ width: `${88 - i * 12}%` }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MediaSlot({
  label,
  ratio = "aspect-[4/3]",
  className,
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-border bg-secondary/40",
        ratio,
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />
      <SlotLabel>{label}</SlotLabel>
    </div>
  );
}

export function LogoSlot({ label }: { label: string }) {
  return (
    <div className="flex h-16 items-center justify-center rounded-xl border border-dashed border-border bg-card">
      <span className="text-[11px] uppercase tracking-eyebrow text-muted-foreground">{label}</span>
    </div>
  );
}
