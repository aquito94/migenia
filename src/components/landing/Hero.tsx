import { ArrowRight, Sparkles, Zap, MessageSquare, BarChart3, Workflow } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "./Section";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>Nueva era TechCo — IA empresarial de próxima generación</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              <span className="text-gradient">Tu nuevo Agente Inteligente</span>
              <br />
              <span className="text-foreground/90">para automatizar ventas, atención</span>
              <br />
              <span className="text-foreground/90">y operaciones.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Transforma la comunicación y productividad de tu empresa con inteligencia artificial,
              automatización e integraciones empresariales de nivel mundial.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://w.app/migenia"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition"
            >
              Solicitar Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://w.app/migenia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
            >
              Hablar con un Especialista
            </a>
            </div>
          </Reveal>
        </div>

        {/* Hero dashboard mockup */}
        <Reveal delay={0.4}>
          <div className="relative mt-16 sm:mt-20 mx-auto max-w-6xl">
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-accent opacity-30 blur-3xl rounded-[2rem]" />
            <div className="relative glass-strong rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-soft">
              <div className="rounded-xl sm:rounded-2xl bg-card/80 overflow-hidden">
                <DashboardMock />
              </div>
            </div>

            {/* Floating chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden md:flex absolute -left-6 top-20 glass-strong rounded-2xl px-4 py-3 items-center gap-3 shadow-glow"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-accent grid place-items-center">
                <MessageSquare className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Conversaciones activas</p>
                <p className="text-sm font-semibold">+128% este mes</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden md:flex absolute -right-6 top-40 glass-strong rounded-2xl px-4 py-3 items-center gap-3 shadow-glow"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-accent grid place-items-center">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Tareas automatizadas</p>
                <p className="text-sm font-semibold">12,4k / día</p>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="grid grid-cols-12 gap-3 p-4 sm:p-6 text-xs">
      {/* Sidebar */}
      <div className="col-span-3 hidden sm:flex flex-col gap-2 border-r border-white/5 pr-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-accent" />
          <span className="font-semibold">AI Console</span>
        </div>
        {["Resumen", "Conversaciones", "Workflows", "Integraciones", "Insights", "Equipo"].map((i, idx) => (
          <div
            key={i}
            className={`px-3 py-2 rounded-lg flex items-center gap-2 ${
              idx === 0 ? "bg-white/5 text-foreground" : "text-muted-foreground hover:bg-white/5"
            }`}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-accent/70" />
            {i}
          </div>
        ))}
      </div>
      {/* Main */}
      <div className="col-span-12 sm:col-span-9 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground">Buenos días</p>
            <p className="text-base sm:text-lg font-semibold">Panel de operaciones IA</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="glass rounded-full px-3 py-1 text-[10px] text-muted-foreground">Tiempo real</div>
            <div className="rounded-full bg-gradient-accent px-3 py-1 text-[10px] text-primary-foreground">Nuevo workflow</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Stat label="Conversaciones" value="48.2k" delta="+24%" />
          <Stat label="Tasa de resolución" value="92%" delta="+6 pts" />
          <Stat label="Tiempo de respuesta" value="0.8s" delta="-41%" />
        </div>
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3 glass rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium flex items-center gap-2"><BarChart3 className="h-3.5 w-3.5 text-accent" />Volumen por canal</span>
              <span className="text-[10px] text-muted-foreground">Últimos 30 días</span>
            </div>
            <ChartBars />
          </div>
          <div className="col-span-2 glass rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium flex items-center gap-2"><Workflow className="h-3.5 w-3.5 text-accent" />Workflows activos</span>
            </div>
            <div className="space-y-2">
              {[
                { n: "Calificación de leads", p: 92 },
                { n: "Soporte 24/7", p: 87 },
                { n: "Agenda inteligente", p: 78 },
                { n: "Recuperación de carrito", p: 64 },
              ].map((w) => (
                <div key={w.n}>
                  <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                    <span>{w.n}</span><span>{w.p}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-gradient-accent" style={{ width: `${w.p}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="glass rounded-xl p-4">
      <p className="text-muted-foreground text-[10px] uppercase tracking-wider">{label}</p>
      <p className="mt-1 text-xl font-semibold">{value}</p>
      <p className="text-[10px] text-accent">{delta}</p>
    </div>
  );
}

function ChartBars() {
  const data = [40, 55, 48, 70, 62, 80, 75, 88, 72, 95, 82, 100];
  return (
    <div className="flex items-end gap-1.5 h-24">
      {data.map((v, i) => (
        <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-accent/80" style={{ height: `${v}%` }} />
      ))}
    </div>
  );
}