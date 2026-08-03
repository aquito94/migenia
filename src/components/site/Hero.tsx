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
        <div className="grid gap-16 py-24 sm:py-32 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20 lg:py-36">
          <div className="min-w-0">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Ingeniería tecnológica empresarial
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-8 text-[clamp(2.2rem,4.7vw,3.7rem)] font-semibold leading-[1.05] tracking-tight text-foreground text-balance">
                Tu empresa tiene tecnología.
                <span className="block text-muted-foreground">
                  El reto es hacer que funcione como un sistema.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Diseñamos e implementamos ecosistemas tecnológicos que conectan
                procesos, datos, sistemas e inteligencia artificial para mejorar
                la eficiencia, reducir fricción operativa y acelerar decisiones.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-11 flex flex-wrap items-center gap-3">
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
