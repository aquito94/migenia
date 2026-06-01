import { X, Check, Clock, MessageSquareOff, UserX, Repeat, Zap, Bell, TrendingUp, Workflow } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const before = [
  { i: MessageSquareOff, t: "Respondiendo manualmente", d: "Clientes esperando en WhatsApp sin respuesta inmediata." },
  { i: Clock, t: "Sin seguimiento", d: "Leads enfriándose en la bandeja, sin nutrición ni recordatorios." },
  { i: UserX, t: "Leads perdidos", d: "Mensajes acumulados durante fines de semana y feriados." },
  { i: Repeat, t: "Procesos lentos", d: "Tareas repetitivas que consumen el tiempo de tu equipo." },
];

const after = [
  { i: Zap, t: "Respuesta inmediata", d: "Menos de 5 segundos, 24/7, en todos los canales." },
  { i: Bell, t: "Seguimiento automático", d: "Nutrición inteligente y constante de cada prospecto." },
  { i: TrendingUp, t: "Conversión mayor", d: "Ningún cliente sin atender, en cualquier horario." },
  { i: Workflow, t: "Automatización absoluta", d: "Flujo comercial extremo a extremo orquestado por IA." },
];

export function BeforeAfter() {
  return (
    <section id="before-after" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Antes vs Después"
          title={<>Así cambia tu operación<br/>con un Agente Inteligente.</>}
          subtitle="La diferencia entre operar manualmente y operar con inteligencia artificial es inmediata y medible."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {/* Antes */}
          <Reveal>
            <div className="relative h-full rounded-3xl p-7 border border-destructive/25 bg-destructive/5 overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-destructive/20 grid place-items-center">
                    <X className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-destructive">Antes</p>
                    <h3 className="text-xl font-semibold text-foreground/80">Operación manual</h3>
                  </div>
                </div>
                <ul className="space-y-4">
                  {before.map((b) => (
                    <li key={b.t} className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-destructive/10 grid place-items-center shrink-0">
                        <b.i className="h-4 w-4 text-destructive" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground/85">{b.t}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{b.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Después */}
          <Reveal delay={0.1}>
            <div className="relative h-full rounded-3xl p-7 border border-accent/40 bg-accent/5 overflow-hidden shadow-glow">
              <div className="absolute -top-32 -right-24 h-64 w-64 rounded-full bg-gradient-accent opacity-25 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-gradient-accent grid place-items-center shadow-glow">
                    <Check className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent">Después</p>
                    <h3 className="text-xl font-semibold text-gradient">Operación con IA</h3>
                  </div>
                </div>
                <ul className="space-y-4">
                  {after.map((a) => (
                    <li key={a.t} className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-gradient-accent grid place-items-center shrink-0 shadow-glow">
                        <a.i className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{a.t}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{a.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}