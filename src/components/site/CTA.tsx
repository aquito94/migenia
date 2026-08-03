import { Container, Reveal, Section } from "./primitives";
import { ButtonAction } from "./Buttons";
import { openLeadDialog } from "./LeadDialog";
import { SlotLabel, TextSlot } from "./Slots";

export function CTA() {
  return (
    <Section id="cta">
      <Container className="max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-7 py-14 shadow-card sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[600px] -translate-x-1/2 glow-blue" />
            <div className="relative mx-auto max-w-2xl text-center">
              <div className="flex justify-center">
                <SlotLabel>Titular de cierre</SlotLabel>
              </div>
              <div className="mx-auto mt-6 space-y-3">
                <div className="mx-auto h-8 w-full max-w-lg rounded-md bg-secondary sm:h-10" />
                <div className="mx-auto h-8 w-3/4 max-w-md rounded-md bg-secondary sm:h-10" />
              </div>
              <TextSlot label="Texto de apoyo" lines={2} className="mx-auto mt-8 max-w-md" />
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <ButtonAction variant="accent" withArrow onClick={() => openLeadDialog("cta")}>
                  CTA primario
                </ButtonAction>
                <ButtonAction variant="outline" onClick={() => openLeadDialog("cta_secondary")}>
                  CTA secundario
                </ButtonAction>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
