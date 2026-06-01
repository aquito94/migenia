import { Reveal, SectionHeader } from "./Section";

const stats = [
  { v: "−65%", l: "Tiempo de respuesta" },
  { v: "+3.2x", l: "Aceleración de ventas" },
  { v: "92%", l: "Tasa de resolución IA" },
  { v: "24/7", l: "Operación continua" },
];

const benefits = [
  { t: "Eficiencia operativa", d: "Automatiza tareas repetitivas y libera a tus equipos para lo estratégico." },
  { t: "Menor tiempo de respuesta", d: "Atención instantánea en cada canal, en cualquier zona horaria." },
  { t: "Escalabilidad sin fricción", d: "Crece de cientos a millones de interacciones sin tocar tu infraestructura." },
  { t: "Satisfacción del cliente", d: "Experiencias consistentes, personalizadas y siempre disponibles." },
  { t: "Ahorro por automatización", d: "Reduce costos operativos hasta en 60% con flujos inteligentes." },
  { t: "Aceleración comercial", d: "Califica, agenda y cierra más rápido con IA siempre activa." },
];

export function Benefits() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Resultados empresariales"
          title={<>Impacto medible<br/>desde la primera semana.</>}
          subtitle="No vendemos features. Entregamos resultados de negocio comprobables."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05}>
              <div className="glass-strong rounded-2xl p-6 text-center">
                <p className="text-3xl sm:text-4xl font-semibold text-gradient">{s.v}</p>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <Reveal key={b.t} delay={i * 0.04}>
              <div className="glass rounded-2xl p-6 h-full">
                <h4 className="font-semibold text-lg">{b.t}</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}