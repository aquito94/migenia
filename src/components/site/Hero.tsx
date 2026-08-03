import { motion } from "motion/react";
import { Container, Reveal, Stat } from "./primitives";
import { ButtonAction, ButtonLink } from "./Buttons";
import { openLeadDialog } from "./LeadDialog";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 glow-blue" />
      <Container className="relative">
        <div className="pt-20 pb-16 sm:pt-28 sm:pb-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground shadow-card">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Firma de ingeniería tecnológica
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-7 max-w-4xl text-[clamp(2.4rem,6.4vw,4.75rem)] font-semibold text-foreground text-balance">
              Transformación empresarial
              <br className="hidden sm:block" /> diseñada con criterio de ingeniería.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              En MiGenIA diseñamos, desarrollamos e implementamos soluciones que integran
              inteligencia artificial, automatización, software, business intelligence e
              integración de sistemas. Entendemos el negocio antes que la tecnología.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonAction variant="primary" withArrow onClick={() => openLeadDialog("hero")}>
                Agendar diagnóstico ejecutivo
              </ButtonAction>
              <ButtonLink to="/soluciones" variant="outline">
                Ver capacidades
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
              <Stat value="+40" label="Proyectos de transformación ejecutados" />
              <Stat value="6 sem." label="Del diagnóstico al primer resultado medible" />
              <Stat value="-30%" label="Reducción típica de costo operativo" />
              <Stat value="100%" label="Soluciones a medida, sin licencias atadas" />
            </div>
          </Reveal>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-px w-full bg-border"
      />
    </section>
  );
}
