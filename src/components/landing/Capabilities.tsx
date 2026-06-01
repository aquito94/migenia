import { Bot, MessageSquare, Filter, Sparkles, Route, BrainCircuit } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const items = [
  { icon: MessageSquare, title: "Conversaciones automatizadas", desc: "Diálogos naturales 24/7 con comprensión profunda del contexto y la intención." },
  { icon: Filter, title: "Calificación inteligente de leads", desc: "Tu agente evalúa, segmenta y prioriza prospectos al instante." },
  { icon: Sparkles, title: "Respuestas inteligentes", desc: "Generación adaptativa con tono de marca y conocimiento empresarial." },
  { icon: BrainCircuit, title: "Workflows con IA", desc: "Procesos automatizados que aprenden y mejoran con cada interacción." },
  { icon: Route, title: "Ruteo inteligente", desc: "Deriva automáticamente a humanos, áreas o canales según prioridad." },
  { icon: Bot, title: "Agentes especializados", desc: "Crea agentes por área —ventas, atención, operaciones— en minutos." },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Capacidades de IA"
          title={<>Inteligencia empresarial<br/>diseñada para escalar.</>}
          subtitle="Una plataforma unificada para automatizar conversaciones, procesos y decisiones en toda tu organización."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <div className="group relative h-full glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
                <div className="relative">
                  <div className="h-11 w-11 rounded-xl glass-strong grid place-items-center mb-4 group-hover:shadow-glow transition-shadow">
                    <it.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1.5">{it.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}