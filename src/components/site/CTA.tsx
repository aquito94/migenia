import { Container, Reveal, Section } from "./primitives";
import { ButtonAction } from "./Buttons";
import { openLeadDialog } from "./LeadDialog";

export function CTA() {
  return (
    <Section id="cta">
      <Container className="max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-20 sm:px-14 sm:py-28">
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.07]" />
            <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[720px] -translate-x-1/2 glow-blue opacity-60" />

            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="mx-auto max-w-2xl font-display text-3xl leading-[1.12] tracking-tight text-background sm:text-[44px]">
                Descubre dónde tu empresa puede ganar eficiencia.
              </h2>
              <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-background/65">
                Agenda un diagnóstico estratégico y descubre cómo conectar
                procesos, datos y tecnología para impulsar mejores resultados.
              </p>

              <div className="mt-12 flex justify-center">
                <ButtonAction
                  variant="accent"
                  withArrow
                  onClick={() => openLeadDialog("cta_final")}
                >
                  Agenda un diagnóstico
                </ButtonAction>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
