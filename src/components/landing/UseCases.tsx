import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UtensilsCrossed, Stethoscope, Briefcase, Check } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const cases = [
  {
    id: "retail",
    label: "Restaurantes y Comercio",
    icon: UtensilsCrossed,
    title: "Pedidos, menú y reservas en piloto automático.",
    desc: "Tu IA atiende, sugiere, vende y agenda mientras tu equipo se enfoca en la experiencia presencial.",
    bullets: [
      "Recepción de pedidos automatizados por WhatsApp",
      "Consultas de menú y promociones en tiempo real",
      "Gestión de reservas y confirmaciones automáticas",
      "Upsell inteligente basado en historial del cliente",
    ],
  },
  {
    id: "salud",
    label: "Clínicas y Sector Médico",
    icon: Stethoscope,
    title: "Agenda llena y pacientes acompañados 24/7.",
    desc: "Reduce el ausentismo, organiza la agenda médica y resuelve dudas frecuentes sin saturar a tu recepción.",
    bullets: [
      "Agendamiento de citas integrado con tu calendario",
      "Recordatorios automáticos para reducir ausentismo",
      "Respuestas a preguntas frecuentes con tono clínico",
      "Triage conversacional seguro y trazable",
    ],
  },
  {
    id: "b2b",
    label: "Ventas B2B y Consultoría",
    icon: Briefcase,
    title: "Leads calificados y agendados sin intervención humana.",
    desc: "Tu IA precalifica oportunidades 24/7 y entrega solo prospectos listos para cerrar al equipo comercial.",
    bullets: [
      "Calificación automática de leads las 24 horas",
      "Pre-agendamiento directo en Calendly o Google Calendar",
      "Enriquecimiento de datos del prospecto antes del meeting",
      "Handoff inteligente al ejecutivo comercial",
    ],
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Casos de uso"
          title={<>Una solución de IA<br/>para cada industria.</>}
          subtitle="Explora cómo nuestros agentes inteligentes se adaptan al ADN de tu sector."
        />

        <Reveal>
          <Tabs defaultValue="retail" className="w-full">
            <TabsList className="mx-auto flex flex-wrap justify-center gap-2 h-auto bg-transparent p-0 mb-8">
              {cases.map((c) => (
                <TabsTrigger
                  key={c.id}
                  value={c.id}
                  className="glass rounded-full px-5 py-2.5 text-sm data-[state=active]:bg-gradient-accent data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow data-[state=active]:border-transparent transition"
                >
                  <c.icon className="h-4 w-4 mr-2" />
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {cases.map((c) => (
              <TabsContent key={c.id} value={c.id} className="mt-0">
                <div className="relative glass-strong rounded-3xl p-8 sm:p-10 overflow-hidden shadow-soft">
                  <div className="absolute -top-32 -right-24 h-64 w-64 rounded-full bg-gradient-accent opacity-15 blur-3xl" />
                  <div className="relative grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-2">
                      <div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center shadow-glow mb-5">
                        <c.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-gradient leading-tight">{c.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                    <div className="md:col-span-3">
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {c.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 glass rounded-xl p-4">
                            <div className="h-7 w-7 rounded-lg bg-gradient-accent grid place-items-center shrink-0">
                              <Check className="h-3.5 w-3.5 text-primary-foreground" />
                            </div>
                            <p className="text-sm text-foreground/90">{b}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}