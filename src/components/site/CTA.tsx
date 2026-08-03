import { Container, Reveal, Section } from "./primitives";
import { ButtonAction } from "./Buttons";
import { openLeadDialog } from "./LeadDialog";

export function CTA() {
  return (
    <Section id="cta">
      <Container className="max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-ink px-6 py-10 sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.07]" />
            <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[720px] -translate-x-1/2 glow-blue opacity-60" />

            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.35rem,2.4vw,1.75rem)] leading-[1.15] tracking-tight text-background">
                Descubre dónde tu empresa puede ganar eficiencia.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[14.5px] leading-relaxed text-background/65">
                Identificamos dónde tu empresa puede ganar eficiencia mediante
                procesos mejor conectados, datos que apoyan decisiones y
                automatización estratégica.
              </p>


              <div className="mt-6 flex justify-center">
                <ButtonAction
                  variant="accent"
                  withArrow
                  onClick={() => openLeadDialog("cta_final")}
                >
                  Agenda un diagnóstico estratégico
                </ButtonAction>
              </div>
            </div>

          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
