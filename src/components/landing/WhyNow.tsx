import { AlertTriangle } from "lucide-react";
import { Reveal } from "./Section";

const metrics = [
  { v: "+85%", l: "Reducción en tiempo de respuesta inicial." },
  { v: "0%", l: "Leads ignorados o perdidos fuera de horario laboral." },
  { v: "3x", l: "Incremento en la capacidad de atención comercial simultánea." },
];

export function WhyNow() {
  return (
    <section id="why-now" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12 shadow-soft">
            <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-destructive/30 opacity-30 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-gradient-accent opacity-30 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 border border-destructive/30 px-3 py-1 text-xs font-medium text-destructive">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  ¿Por qué ahora?
                </span>
                <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-gradient">
                  Cada mes que esperas, tu competencia avanza.
                </h2>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  Mientras respondes manualmente, tu competencia ya está automatizando ventas, atención y
                  seguimiento. <span className="text-foreground/90 font-medium">Cada mes que esperas son oportunidades y dinero real que se pierden.</span>
                </p>
              </div>

              <div className="grid sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
                {metrics.map((m, i) => (
                  <Reveal key={m.v} delay={0.1 + i * 0.08}>
                    <div className="relative rounded-2xl glass p-6 text-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-accent opacity-5" />
                      <p className="relative text-4xl sm:text-5xl font-semibold text-gradient leading-none">{m.v}</p>
                      <p className="relative mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{m.l}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}