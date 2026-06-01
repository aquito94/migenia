import { Search, ClipboardList, Rocket, ArrowRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const phases = [
  {
    n: "01",
    i: Search,
    t: "Discovery",
    s: "Auditoría profunda",
    d: "Analizamos a fondo tus procesos actuales, identificando cuellos de botella, tareas repetitivas y fugas de tiempo y dinero que están frenando tu crecimiento.",
    bullets: ["Mapeo end-to-end de procesos", "Detección de fugas operativas", "Benchmark sectorial"],
  },
  {
    n: "02",
    i: ClipboardList,
    t: "Plan de Acción",
    s: "Arquitectura a medida",
    d: "Diseñamos la arquitectura tecnológica ideal y la estrategia de agentes de IA personalizada para los objetivos comerciales de tu negocio.",
    bullets: ["Stack tecnológico óptimo", "Roadmap por fases", "KPIs de impacto"],
  },
  {
    n: "03",
    i: Rocket,
    t: "Consultoría Personalizada",
    s: "Despliegue e integración",
    d: "Desarrollamos e integramos los sistemas avanzados: WhatsApp Business API, flujos automatizados en n8n, CRMs y agentes inteligentes en producción.",
    bullets: ["WhatsApp Business API", "Automatizaciones en n8n", "Integración con tu CRM"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Metodología"
          title={<>Tres fases para llevar tu negocio<br/>a operar con IA.</>}
          subtitle="Un proceso probado, ejecutivo y orientado a resultados medibles desde el primer mes."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {phases.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="group relative h-full glass-strong rounded-3xl p-7 overflow-hidden hover:bg-white/[0.06] transition">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-accent opacity-10 group-hover:opacity-25 blur-3xl transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center shadow-glow">
                      <p.i className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">FASE {p.n}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-gradient">{p.t}</h3>
                  <p className="text-sm text-accent mt-1">{p.s}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  <ul className="mt-5 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <ArrowRight className="h-3.5 w-3.5 text-accent mt-1 shrink-0" />
                        <span className="text-foreground/85">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}