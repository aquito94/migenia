import { Reveal, SectionHeader } from "./Section";

const quotes = [
  {
    q: "Pasamos de tiempos de respuesta de 6 horas a 30 segundos. Agente Inteligente transformó cómo operamos a escala enterprise.",
    a: "María Restrepo",
    r: "Chief Customer Officer · Atlas Group",
  },
  {
    q: "Automatizamos el 78% del soporte sin perder calidad. Es la inversión con mayor ROI que hemos hecho en tecnología.",
    a: "Diego Vásquez",
    r: "VP Operations · Nordex Industries",
  },
  {
    q: "La integración con nuestro CRM y ERP fue impecable. Tenemos una sola fuente de verdad y una sola IA orquestando todo.",
    a: "Laura Henao",
    r: "CTO · Meridian Finance",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Confianza enterprise"
          title={<>Líderes que ya escalan con IA.</>}
        />
        <div className="grid lg:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <Reveal key={q.a} delay={i * 0.08}>
              <figure className="glass-strong rounded-3xl p-7 h-full flex flex-col justify-between">
                <blockquote className="text-base sm:text-lg leading-relaxed text-foreground/90">
                  <span className="text-gradient text-3xl font-display align-top mr-1">“</span>
                  {q.q}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-white/5">
                  <div className="h-10 w-10 rounded-full bg-gradient-accent grid place-items-center text-xs font-semibold text-primary-foreground">
                    {q.a.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{q.a}</p>
                    <p className="text-xs text-muted-foreground">{q.r}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}