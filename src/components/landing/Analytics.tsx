import { Activity, TrendingUp, Brain } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

export function Analytics() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Analytics & Insights"
          title={<>Decisiones con datos,<br/>en tiempo real.</>}
          subtitle="Visualiza el rendimiento de tu IA, descubre oportunidades y optimiza con recomendaciones inteligentes."
        />
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-accent opacity-20 blur-3xl rounded-3xl" />
            <div className="relative glass-strong rounded-3xl p-5 sm:p-8 shadow-soft">
              <div className="grid lg:grid-cols-3 gap-4 mb-5">
                <KPI icon={Activity} label="Interacciones" value="142,857" delta="+18.4%" />
                <KPI icon={TrendingUp} label="Conversión IA" value="34.2%" delta="+6.1 pts" />
                <KPI icon={Brain} label="Confianza modelo" value="98.7%" delta="estable" />
              </div>
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 glass rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold">Rendimiento por canal</h4>
                    <div className="flex gap-2 text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary"/>IA</span>
                      <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-accent"/>Humano</span>
                    </div>
                  </div>
                  <LineChart />
                </div>
                <div className="glass rounded-2xl p-5">
                  <h4 className="text-sm font-semibold mb-4">Insights del agente</h4>
                  <ul className="space-y-3">
                    {[
                      "Mejor horario de conversión: 18:00–20:00",
                      "Canal con mayor crecimiento: WhatsApp +42%",
                      "Top intento: agendamiento de demo",
                      "Recomendación: ampliar workflow de cobranza",
                    ].map((t, i) => (
                      <li key={i} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function KPI({ icon: Icon, label, value, delta }: { icon: any; label: string; value: string; delta: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
        <Icon className="h-4 w-4 text-accent" />
      </div>
      <p className="mt-2 text-2xl sm:text-3xl font-semibold">{value}</p>
      <p className="text-xs text-accent mt-1">{delta}</p>
    </div>
  );
}

function LineChart() {
  const w = 600, h = 160;
  const a = [20,40,30,55,48,70,65,82,75,90,86,100].map(v => h - (v/100)*h*0.85 - 10);
  const b = [10,25,22,38,32,45,40,52,48,60,55,65].map(v => h - (v/100)*h*0.85 - 10);
  const path = (arr: number[]) => arr.map((y, i) => `${i===0?"M":"L"} ${(i/(arr.length-1))*w} ${y}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.68 0.21 255)" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="oklch(0.68 0.21 255)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={`${path(a)} L ${w} ${h} L 0 ${h} Z`} fill="url(#g1)" />
      <path d={path(a)} fill="none" stroke="oklch(0.68 0.21 255)" strokeWidth="2"/>
      <path d={path(b)} fill="none" stroke="oklch(0.82 0.14 205)" strokeWidth="2" strokeDasharray="4 4"/>
    </svg>
  );
}