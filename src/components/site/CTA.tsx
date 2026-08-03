import { Container, Reveal, Section } from "./primitives";
import { ButtonAction, ButtonLink } from "./Buttons";
import { openLeadDialog } from "./LeadDialog";

export function CTA({
  title = "Conversemos sobre el próximo salto de tu operación.",
  lead = "Una sesión de diagnóstico ejecutivo, sin costo, para identificar dónde la tecnología produce valor medible en tu empresa.",
  source = "cta",
}: {
  title?: string;
  lead?: string;
  source?: string;
}) {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-7 py-14 shadow-card sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[600px] -translate-x-1/2 glow-blue" />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-[clamp(1.8rem,4.2vw,3rem)] font-semibold text-balance">
                {title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {lead}
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <ButtonAction variant="accent" withArrow onClick={() => openLeadDialog(source)}>
                  Agendar diagnóstico
                </ButtonAction>
                <ButtonLink
                  href="https://wa.me/593992760828?text=Quiero%20transformar%20mi%20negocio"
                  variant="outline"
                >
                  Escribir por WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
