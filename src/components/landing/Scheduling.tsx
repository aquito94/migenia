import { Calendar, Bell, CheckCircle2, Clock } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

export function Scheduling() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Agenda inteligente"
          title={<>Citas y recordatorios sin fricción.</>}
          subtitle="Disponibilidad en tiempo real, recordatorios automáticos y sincronización total con tu calendario corporativo."
        />
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-accent opacity-20 blur-3xl rounded-3xl" />
              <div className="relative glass-strong rounded-3xl p-6 shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold">Octubre 2026</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">Disponibilidad en vivo</span>
                </div>
                <div className="grid grid-cols-7 gap-1.5 mb-4 text-center text-[10px] text-muted-foreground">
                  {["L","M","X","J","V","S","D"].map(d => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {Array.from({length: 35}).map((_, i) => {
                    const day = i - 2;
                    const active = day === 14;
                    const avail = [3, 7, 10, 14, 17, 21, 24, 28].includes(day);
                    return (
                      <div
                        key={i}
                        className={`aspect-square rounded-lg text-[11px] grid place-items-center ${
                          active ? "bg-gradient-accent text-primary-foreground font-semibold shadow-glow" :
                          avail ? "glass text-foreground" : "text-muted-foreground/40"
                        }`}
                      >
                        {day > 0 && day <= 31 ? day : ""}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["09:30","10:30","11:30","14:00","15:00","16:30"].map((t, i) => (
                    <div key={t} className={`rounded-lg py-2 text-xs text-center ${i===1?"bg-gradient-accent text-primary-foreground":"glass text-muted-foreground"}`}>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5">
              {[
                { i: Calendar, t: "Agendamiento automático", d: "El agente propone, confirma y reserva sin intervención humana." },
                { i: Bell, t: "Recordatorios inteligentes", d: "Notificaciones por WhatsApp, correo o SMS, en el momento óptimo." },
                { i: CheckCircle2, t: "Sincronización con calendarios", d: "Google, Outlook y Microsoft 365 con detección de conflictos en tiempo real." },
                { i: Clock, t: "Gestión de disponibilidad", d: "Reglas avanzadas por zona horaria, equipo, prioridad y SLA." },
              ].map((b) => (
                <div key={b.t} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg glass-strong grid place-items-center">
                    <b.i className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{b.t}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{b.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}