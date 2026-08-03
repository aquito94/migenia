import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
      <span className="h-1 w-1 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3.25rem)] font-semibold text-foreground text-balance">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground",
              align === "center" && "mx-auto max-w-2xl",
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28 lg:py-32", className)}>
      {children}
    </section>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0">
      <p className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold tracking-tight text-foreground">
        {value}
      </p>
      <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{label}</p>
    </div>
  );
}

export function SectionShell({ index, title }: { index: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="font-display text-xs font-semibold tracking-eyebrow text-primary">
            {index}
          </span>
          <span className="h-px w-10 bg-border" />
          <span className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
            Sección
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-[clamp(1.8rem,4.2vw,3rem)] font-semibold text-foreground text-balance">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-6 space-y-2.5">
          <div className="h-2.5 w-full max-w-xl rounded-full bg-secondary" />
          <div className="h-2.5 w-3/4 max-w-lg rounded-full bg-secondary" />
        </div>
        <p className="mt-3 text-[11px] uppercase tracking-eyebrow text-muted-foreground">
          Bajada de sección
        </p>
      </Reveal>
    </div>
  );
}
