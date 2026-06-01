import { Plug, Brain, Workflow, TrendingUp } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const steps = [
  { i: Plug, t: "Conecta tus canales", d: "Integra WhatsApp, web, correo, CRM y ERP en minutos." },
  { i: Brain, t: "Entrena tu IA", d: "Carga tu conocimiento empresarial, tono y políticas." },
  { i: Workflow, t: "Automatiza workflows", d: "Diseña procesos inteligentes con orquestación visual." },
  { i: TrendingUp, t: "Escala tu negocio", d: "Mide, optimiza y multiplica resultados con insights de IA." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Cómo funciona"
          title={<>De cero a IA empresarial en 4 pasos.</>}
          subtitle="Implementación enterprise simple, rápida y sin fricción técnica."
        />
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08}>
              <div className="relative glass-strong rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center shadow-glow">
                    <s.i className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-3xl font-display font-bold text-white/10">0{i + 1}</span>
                </div>
                <h4 className="font-semibold text-lg">{s.t}</h4>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}