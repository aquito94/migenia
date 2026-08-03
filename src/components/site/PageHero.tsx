import type { ReactNode } from "react";
import { Container, Eyebrow, Reveal } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines" />
      <Container className="relative">
        <div className="max-w-3xl py-20 sm:py-28">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 text-[clamp(2.1rem,5.4vw,3.75rem)] font-semibold text-balance">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{lead}</p>
          </Reveal>
          {children && <Reveal delay={0.18}>{children}</Reveal>}
        </div>
      </Container>
    </section>
  );
}
