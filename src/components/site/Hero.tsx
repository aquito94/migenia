import { Container, Reveal } from "./primitives";
import { ButtonAction, ButtonLink } from "./Buttons";
import { openLeadDialog } from "./LeadDialog";
import { EcosystemDiagram } from "./EcosystemDiagram";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 glow-blue" />
      <Container className="relative max-w-7xl">
        <div className="grid gap-8 py-10 sm:py-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12 lg:py-14">
          <div className="min-w-0">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Ingeniería tecnológica empresarial
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-4 text-[clamp(1.75rem,3.3vw,2.6rem)] font-semibold leading-[1.08] tracking-tight text-foreground text-balance">
                Tu empresa tiene tecnología.
                <span className="block text-muted-foreground">
                  El desafío es hacer que todo funcione como un solo sistema.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-muted-foreground">
                Conectamos procesos, datos y sistemas para reducir fricción
                operativa y acelerar decisiones.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <ButtonAction
                  variant="primary"
                  withArrow
                  onClick={() => openLeadDialog("hero")}
                >
                  Agenda un diagnóstico estratégico
                </ButtonAction>
                <ButtonLink variant="outline" href="#capacidades">
                  Conoce nuestras capacidades
                </ButtonLink>
              </div>
            </Reveal>
          </div>


          <Reveal delay={0.1}>
            <EcosystemDiagram />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
