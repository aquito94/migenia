import { Check } from "lucide-react";
import { Container, Reveal } from "./primitives";
import { ButtonAction, ButtonLink } from "./Buttons";
import { openLeadDialog } from "./LeadDialog";
import { EcosystemDiagram } from "./EcosystemDiagram";

const INDICATORS = [
  "Procesos conectados",
  "Decisiones basadas en datos",
  "Automatización inteligente",
  "Arquitectura escalable",
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 glow-blue" />
      <Container className="relative max-w-7xl">
        <div className="grid gap-14 py-20 sm:py-28 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20 lg:py-32">
          <div className="min-w-0">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Ingeniería tecnológica empresarial
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-7 text-[clamp(2.3rem,4.9vw,3.9rem)] font-semibold leading-[1.04] tracking-tight text-foreground text-balance">
                Tu empresa no necesita más herramientas.
                <span className="block text-muted-foreground">
                  Necesita que todas trabajen como una sola.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                En MiGenIA diseñamos la arquitectura tecnológica que conecta
                procesos, personas, datos e inteligencia artificial para
                eliminar ineficiencias, acelerar decisiones y hacer que las
                empresas operen mejor.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ButtonAction
                  variant="primary"
                  withArrow
                  onClick={() => openLeadDialog("hero")}
                >
                  Agenda un diagnóstico estratégico
                </ButtonAction>
                <ButtonLink variant="outline" href="#metodo">
                  Conoce cómo trabajamos
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <EcosystemDiagram />
          </Reveal>
        </div>
      </Container>

      <div className="relative border-t border-border bg-card/60">
        <Container className="max-w-7xl">
          <ul className="grid gap-x-8 gap-y-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDICATORS.map((item, i) => (
              <Reveal key={item} delay={0.05 * i}>
                <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
