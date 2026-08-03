import { Container, Reveal } from "./primitives";
import { ButtonAction } from "./Buttons";
import { openLeadDialog } from "./LeadDialog";
import { HeadingSlot, MediaSlot, SlotLabel, TextSlot } from "./Slots";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 glow-blue" />
      <Container className="relative max-w-7xl">
        <div className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <Reveal>
              <SlotLabel>Eyebrow / categoría</SlotLabel>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-6 space-y-3">
                <div className="h-11 w-full max-w-xl rounded-lg bg-secondary sm:h-14" />
                <div className="h-11 w-4/5 max-w-lg rounded-lg bg-secondary sm:h-14" />
                <div className="h-11 w-2/3 max-w-md rounded-lg bg-secondary sm:h-14" />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-eyebrow text-muted-foreground">
                Titular principal (H1)
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <TextSlot label="Subtítulo de valor" lines={3} className="mt-10 max-w-xl" />
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ButtonAction variant="primary" withArrow onClick={() => openLeadDialog("hero")}>
                  CTA primario
                </ButtonAction>
                <ButtonAction variant="outline" onClick={() => openLeadDialog("hero_secondary")}>
                  CTA secundario
                </ButtonAction>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-3">
                {["Indicador 01", "Indicador 02", "Indicador 03"].map((k) => (
                  <div key={k} className="min-w-0">
                    <div className="h-8 w-20 rounded-md bg-secondary" />
                    <p className="mt-3 text-[11px] uppercase tracking-eyebrow text-muted-foreground">
                      {k}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="min-w-0 space-y-4">
              <MediaSlot label="Visual principal / producto" ratio="aspect-[5/4]" />
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <HeadingSlot label="Mensaje de apoyo" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
