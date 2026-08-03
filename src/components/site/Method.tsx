import { Container, Reveal, Section, SectionHeading } from "./primitives";
import { method } from "./data";

export function Method() {
  return (
    <Section className="border-b border-border bg-secondary/40">
      <Container>
        <SectionHeading
          eyebrow="Metodología"
          title="Un método de ingeniería, no un ciclo de ventas."
          lead="Cuatro etapas con entregables claros. Cada una puede detenerse, auditarse y justificarse ante el comité de dirección."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {method.map((m, i) => (
            <Reveal key={m.step} delay={i * 0.06}>
              <div className="h-full bg-card p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-semibold text-primary/25">
                    {m.step}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {m.detail.map((d) => (
                    <li key={d} className="flex gap-2.5 text-sm text-foreground/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
