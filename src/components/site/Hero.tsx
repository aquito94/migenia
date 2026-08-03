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
        <div className="grid gap-14 py-20 sm:py-28 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20 lg:py-32">
          <div className="min-w-0">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Ingeniería tecnológica empresarial
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-7 text-[clamp(2.4rem,5.2vw,4.1rem)] font-semibold leading-[1.03] tracking-tight text-foreground text-balance">
                Integramos sus sistemas para que la empresa decida con datos, no con supuestos.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Diseñamos, desarrollamos e implementamos soluciones que conectan
                ERP, CRM, canales de atención, automatización, analítica e
                Inteligencia Artificial en una sola arquitectura empresarial.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ButtonAction
                  variant="primary"
                  withArrow
                  onClick={() => openLeadDialog("hero")}
                >
                  Agendar evaluación gratuita
                </ButtonAction>
                <ButtonLink
                  variant="outline"
                  href="https://wa.me/593992760828?text=Quiero%20transformar%20mi%20negocio"
                >
                  Hablar con un especialista
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
