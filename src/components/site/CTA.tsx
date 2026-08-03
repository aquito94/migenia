import { Container, Reveal, Section } from "./primitives";
import { ButtonAction, ButtonLink } from "./Buttons";
import { openLeadDialog } from "./LeadDialog";
import { Cpu, Gauge, Route, Workflow, type LucideIcon } from "lucide-react";

const BENEFITS: Array<{ icon: LucideIcon; title: string }> = [
  { icon: Route, title: "Identificación de procesos críticos" },
  { icon: Workflow, title: "Oportunidades de automatización" },
  { icon: Cpu, title: "Evaluación tecnológica inicial" },
  { icon: Gauge, title: "Recomendaciones estratégicas" },
];

export function CTA() {
  return (
    <Section id="cta">
      <Container className="max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-16 sm:px-14 sm:py-24 lg:py-28">
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.07]" />
            <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[720px] -translate-x-1/2 glow-blue opacity-60" />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-background/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-background/60">
                Diagnóstico Estratégico MiGenIA
              </span>

              <h2 className="mx-auto mt-8 max-w-2xl font-display text-3xl leading-[1.12] tracking-tight text-background sm:text-[44px]">
                Descubre dónde la tecnología puede generar mayor impacto en tu empresa
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-background/65">
                Analizamos tus procesos, sistemas y objetivos de negocio para identificar
                oportunidades de automatización, integración e inteligencia aplicada.
              </p>

              <div className="mt-12 grid gap-3 text-left sm:grid-cols-2">
                {BENEFITS.map(({ icon: Icon, title }, i) => (
                  <Reveal key={title} delay={0.06 + i * 0.05}>
                    <div className="flex h-full items-center gap-4 rounded-2xl border border-background/10 bg-background/[0.04] px-5 py-5 transition-colors duration-300 hover:border-background/25 hover:bg-background/[0.07]">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-background/15 text-background/70">
                        <Icon className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <p className="text-sm font-medium leading-snug text-background/90">{title}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                <ButtonAction
                  variant="accent"
                  withArrow
                  onClick={() => openLeadDialog("diagnostico_estrategico")}
                >
                  Agenda un diagnóstico estratégico
                </ButtonAction>
                <ButtonLink
                  href="https://wa.me/593992760828?text=Quiero%20transformar%20mi%20negocio"
                  variant="ghost"
                  className="border border-background/20 px-5 py-2.5 text-background hover:bg-background/10 hover:text-background"
                >
                  Habla con un especialista
                </ButtonLink>
              </div>

              <p className="mt-10 text-sm text-background/45">
                El primer paso para transformar tu empresa comienza con entenderla.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
