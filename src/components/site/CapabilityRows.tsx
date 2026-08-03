import { ArrowUpRight } from "lucide-react";
import { Container, Reveal, Section, SectionHeading } from "./primitives";
import { capabilities } from "./data";
import { CodeVisual, FlowVisual, IntegrationVisual, MetricsVisual } from "./Visuals";
import { ButtonLink } from "./Buttons";
import { cn } from "@/lib/utils";

const visuals = [FlowVisual, MetricsVisual, CodeVisual, MetricsVisual, IntegrationVisual];

export function CapabilityRows({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <Section className="border-b border-border">
      <Container>
        {withHeading && (
          <SectionHeading
            eyebrow="Capacidades"
            title="Cinco disciplinas, una sola arquitectura de valor."
            lead="Rara vez un desafío empresarial se resuelve con una sola disciplina. Integramos todas bajo un mismo criterio de ingeniería."
          />
        )}

        <div className="mt-16 space-y-20 sm:space-y-28">
          {capabilities.map((c, i) => {
            const Visual = visuals[i % visuals.length];
            const flipped = i % 2 === 1;
            return (
              <div
                key={c.slug}
                id={c.slug}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={cn(flipped && "lg:order-2")}>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card">
                        <c.icon className="h-4.5 w-4.5 text-primary" />
                      </span>
                      <span className="text-xs font-medium uppercase tracking-eyebrow text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-balance">
                      {c.title}
                    </h3>
                    <p className="mt-2 font-display text-base text-primary">{c.claim}</p>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                    <ul className="mt-7 space-y-3 border-t border-border pt-6">
                      {c.outcomes.map((o) => (
                        <li key={o} className="flex gap-3 text-sm text-foreground/85">
                          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={0.08} className={cn(flipped && "lg:order-1")}>
                  <Visual />
                </Reveal>
              </div>
            );
          })}
        </div>

        {withHeading && (
          <Reveal>
            <div className="mt-20 flex justify-center">
              <ButtonLink to="/soluciones" variant="outline" withArrow>
                Ver el detalle de cada solución
              </ButtonLink>
            </div>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
