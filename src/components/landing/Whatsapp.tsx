import { MessageCircle, Phone, Mail, Instagram } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

export function Whatsapp() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Omnicanalidad"
          title={<>Conversaciones que convierten,<br/>en cada canal.</>}
          subtitle="Automatiza WhatsApp y unifica todos tus canales con una sola IA empresarial."
        />
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="space-y-5">
              {[
                { t: "Atención al cliente automatizada", d: "Resuelve consultas frecuentes, escala lo complejo a tu equipo." },
                { t: "Captura inteligente de leads", d: "Conversaciones que califican, segmentan y agendan en automático." },
                { t: "Mensajería omnicanal", d: "WhatsApp, Instagram, correo y voz, unificados en una bandeja." },
                { t: "IA conversacional empresarial", d: "Tono de marca consistente con seguridad y cumplimiento de nivel enterprise." },
              ].map((b) => (
                <div key={b.t} className="flex gap-4">
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-gradient-accent grid place-items-center shadow-glow">
                    <MessageCircle className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{b.t}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{b.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ChatMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ChatMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-accent opacity-25 blur-3xl rounded-3xl" />
      <div className="relative glass-strong rounded-3xl p-5 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-accent grid place-items-center text-xs font-semibold text-primary-foreground">AI</div>
            <div>
              <p className="text-sm font-semibold">Agente Inteligente</p>
              <p className="text-[10px] text-accent flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" /> En línea
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {[MessageCircle, Phone, Mail, Instagram].map((I, i) => (
              <div key={i} className="h-7 w-7 grid place-items-center rounded-lg glass">
                <I className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <Bubble side="left">Hola 👋 quiero agendar una demo para mi empresa.</Bubble>
          <Bubble side="right">¡Excelente! ¿Cuántas conversaciones manejan al mes y qué canales priorizan?</Bubble>
          <Bubble side="left">~25k al mes. WhatsApp, web y correo.</Bubble>
          <Bubble side="right">Perfecto. Te propongo este martes 10:30 con un especialista enterprise. ¿Te funciona?</Bubble>
          <Bubble side="left">Sí, confirmado.</Bubble>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Lead calificado · Agenda creada · CRM actualizado
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "left" | "right"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
          side === "right"
            ? "bg-gradient-accent text-primary-foreground rounded-br-sm"
            : "glass text-foreground rounded-bl-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}