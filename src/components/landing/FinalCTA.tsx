import { ArrowRight, Calendar } from "lucide-react";
import { Reveal } from "./Section";
import { openLeadDialog } from "./LeadDialog";

export function FinalCTA() {
  const scrollToAudit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16 text-center shadow-soft">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[60%] bg-gradient-accent opacity-30 blur-3xl rounded-full" />
            <div className="relative">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gradient leading-[1.05]">
                ¿Quieres saber cuánto podría<br/>crecer tu negocio con IA?
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
                Agenda una evaluación gratuita y recibe un diagnóstico personalizado.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => openLeadDialog("final_cta_primary")}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition"
                >
                  <Calendar className="h-4 w-4" />
                  Agendar evaluación gratuita
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={() => openLeadDialog("final_cta_secondary")}
                  className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition"
                >
                  Hablar con Ventas
                </button>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">Implementación enterprise · SLA 99.99% · Seguridad y cumplimiento</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}