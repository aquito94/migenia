import {
  Container,
  Reveal,
  Section,
  SectionHeading,
  SectionShell,
} from "./primitives";
import { HeadingSlot, ListSlot, MediaSlot, SlotLabel, TextSlot } from "./Slots";
import {
  BarChart3,
  Boxes,
  Briefcase,
  HeartPulse,
  RadioTower,
  Rocket,
  Store,
  Truck,
  Code2,
  Compass,
  Headphones,
  Layers,
  LineChart,
  PenTool,
  RefreshCw,
  Search,
  Share2,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { ArchitectureDiagram } from "./ArchitectureDiagram";
/* 3. Los desafíos que frenan el crecimiento */
const CHALLENGES: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: Boxes,
    title: "Operaciones",
    text: "Procesos manuales, información dispersa en hojas de cálculo y tareas repetidas entre áreas que retrasan la ejecución.",
  },
  {
    icon: TrendingUp,
    title: "Comercial",
    text: "Oportunidades sin seguimiento, pronósticos poco confiables y una visión incompleta del cliente entre CRM y canales de venta.",
  },
  {
    icon: BarChart3,
    title: "Finanzas",
    text: "Cierres lentos, conciliaciones manuales y reportes que llegan cuando la decisión ya se tomó.",
  },
  {
    icon: Headphones,
    title: "Servicio al Cliente",
    text: "Consultas repetitivas sin automatizar, tiempos de respuesta altos y conversaciones que no quedan registradas en los sistemas.",
  },
  {
    icon: Compass,
    title: "Dirección",
    text: "Indicadores que no cuadran entre áreas y falta de una única fuente de verdad para dirigir el negocio.",
  },
  {
    icon: Users,
    title: "Talento Humano",
    text: "Trámites internos en papel, datos duplicados y equipos dedicando horas a tareas que no agregan valor.",
  },
];

export function Problems() {
  return (
    <Section id="problemas" className="border-b border-border">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="El punto de partida"
          title="Los desafíos que frenan el crecimiento de muchas empresas"
          lead="Cuando los procesos, los datos y los sistemas trabajan por separado, el costo no es técnico: es operativo, comercial y estratégico."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.05} className="min-w-0 h-full">
              <article className="group relative flex h-full min-w-0 flex-col bg-card p-8 transition-colors duration-300 hover:bg-secondary/40 sm:p-10">
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                  </span>
                  <span className="font-display text-xs tabular-nums text-muted-foreground/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* 3b. De la complejidad a una operación inteligente */
export function Complexity() {
  return (
    <Section id="arquitectura" className="border-b border-border bg-secondary/30">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="De la complejidad a una operación inteligente"
          title="El problema no es tener tecnología. Es que todo funcione de forma aislada."
          lead="Muchas empresas tienen ERP, CRM, hojas de cálculo, canales digitales y múltiples sistemas, pero trabajan desconectados. MiGenIA diseña la arquitectura tecnológica que conecta personas, procesos y datos para convertir esa complejidad en eficiencia operacional."
          className="max-w-2xl"
        />
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <Reveal delay={0.05}>
              <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {[
                  ["Diagnóstico de negocio", "Entendemos procesos, roles y decisiones antes de proponer tecnología."],
                  ["Arquitectura e integración", "Conectamos sistemas, datos y canales bajo un mismo modelo."],
                  ["Implementación y adopción", "Automatización, analítica e IA puestas en operación real."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="group bg-card p-6 transition-colors duration-300 hover:bg-secondary/50 sm:p-7"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      <h3 className="text-sm font-semibold tracking-tight text-foreground">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="min-w-0">
            <ArchitectureDiagram />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* 4. Qué hace diferente a MiGenIA */

export function Differentiators() {
  return (
    <Section id="diferencial" className="border-b border-border bg-secondary/40">
      <Container className="max-w-7xl">
        <SectionShell index="02" title="Qué hace diferente a MiGenIA" />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="min-w-0 space-y-8">
              <TextSlot label="Declaración de diferencial" lines={4} />
              <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {["Diferencial 01", "Diferencial 02", "Diferencial 03", "Diferencial 04"].map(
                  (d) => (
                    <div key={d} className="bg-card p-6">
                      <SlotLabel>{d}</SlotLabel>
                      <div className="mt-4 space-y-2">
                        <div className="h-2.5 w-full rounded-full bg-secondary" />
                        <div className="h-2.5 w-3/4 rounded-full bg-secondary" />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="min-w-0 rounded-2xl border border-border bg-card p-7 shadow-card sm:p-9">
              <SlotLabel>Comparativa: enfoque tradicional vs. MiGenIA</SlotLabel>
              <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                {["Enfoque habitual", "Enfoque MiGenIA"].map((col) => (
                  <div key={col} className="bg-background p-6">
                    <p className="text-[11px] uppercase tracking-eyebrow text-muted-foreground">
                      {col}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span
                            className="h-2.5 rounded-full bg-secondary"
                            style={{ width: `${85 - i * 10}%` }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* 5. Capacidades */
const CAPABILITIES: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: Sparkles,
    title: "Inteligencia Artificial Aplicada",
    text: "Diseñamos soluciones con IA que automatizan tareas, mejoran la experiencia del cliente y aumentan la capacidad de análisis de los equipos.",
  },
  {
    icon: Workflow,
    title: "Automatización Empresarial",
    text: "Transformamos procesos manuales en flujos inteligentes que reducen tiempos operativos y aumentan la productividad.",
  },
  {
    icon: Share2,
    title: "Integración de Sistemas",
    text: "Conectamos ERP, CRM, plataformas digitales y aplicaciones empresariales para crear ecosistemas tecnológicos unificados.",
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    text: "Convertimos datos dispersos en indicadores claros para que los líderes puedan tomar decisiones basadas en información.",
  },
  {
    icon: Code2,
    title: "Desarrollo de Software",
    text: "Diseñamos aplicaciones y soluciones digitales adaptadas a las necesidades específicas de cada organización.",
  },
  {
    icon: Layers,
    title: "Arquitectura Tecnológica",
    text: "Diseñamos la estructura tecnológica adecuada para que las soluciones sean escalables, seguras y preparadas para crecer.",
  },
];

export function Capabilities() {
  return (
    <Section id="capacidades" className="border-b border-border">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Capacidades"
          title="Capacidades para construir empresas más inteligentes"
          lead="MiGenIA no implementa herramientas aisladas. Combinamos capacidades tecnológicas para resolver problemas empresariales complejos."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.05} className="min-w-0 h-full">
              <article className="group relative flex h-full min-w-0 flex-col bg-card p-8 transition-colors duration-300 hover:bg-secondary/40 sm:p-10">
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                </span>
                <h3 className="mt-8 text-lg font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}


/* 6. Cómo trabajamos — MiGenIA Transformation Framework */
const FRAMEWORK: Array<{
  n: string;
  name: string;
  title: string;
  text: string;
  icon: LucideIcon;
}> = [
  {
    n: "01",
    name: "Discover",
    title: "Entendemos el negocio",
    text: "Analizamos procesos, roles y decisiones para identificar dónde está el valor antes de proponer tecnología.",
    icon: Search,
  },
  {
    n: "02",
    name: "Design",
    title: "Diseñamos la arquitectura adecuada",
    text: "Definimos el modelo de datos, sistemas y flujos que sostienen la operación a largo plazo.",
    icon: PenTool,
  },
  {
    n: "03",
    name: "Build",
    title: "Construimos soluciones a medida",
    text: "Desarrollamos e implementamos con estándares de ingeniería, calidad y seguridad empresarial.",
    icon: Code2,
  },
  {
    n: "04",
    name: "Connect",
    title: "Integramos el ecosistema tecnológico",
    text: "Conectamos ERP, CRM, canales digitales y aplicaciones internas bajo una sola fuente de verdad.",
    icon: Share2,
  },
  {
    n: "05",
    name: "Intelligence",
    title: "Aplicamos IA y analítica",
    text: "Convertimos la información integrada en indicadores, automatizaciones y mejores decisiones.",
    icon: Sparkles,
  },
  {
    n: "06",
    name: "Evolve",
    title: "Optimizamos continuamente",
    text: "Medimos resultados, ajustamos y escalamos la solución conforme evoluciona el negocio.",
    icon: RefreshCw,
  },
];

export function HowWeWork() {
  return (
    <Section id="metodo" className="border-b border-border bg-secondary/40">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Metodología propia"
          title={
            <>
              MiGenIA Transformation Framework
              <sup className="ml-1 align-super text-[0.4em] font-normal text-muted-foreground">
                TM
              </sup>
            </>
          }
          lead="Un proceso estructurado en seis etapas que combina consultoría estratégica e ingeniería tecnológica para llevar una empresa desde el diagnóstico hasta la evolución continua."
        />

        <div className="relative mt-20">
          {/* línea de progreso */}
          <div className="pointer-events-none absolute left-[26px] top-0 bottom-0 w-px bg-border lg:left-0 lg:right-0 lg:top-[26px] lg:bottom-auto lg:h-px lg:w-auto">
            <Reveal>
              <div className="h-full w-full origin-top animate-[fade-in_1.2s_ease-out] bg-gradient-to-b from-primary/60 via-primary/25 to-transparent lg:bg-gradient-to-r" />
            </Reveal>
          </div>

          <ol className="grid gap-12 lg:grid-cols-6 lg:gap-6">
            {FRAMEWORK.map(({ n, name, title, text, icon: Icon }, i) => (
              <Reveal key={n} delay={i * 0.08} className="min-w-0">
                <li className="group relative min-w-0 pl-16 lg:pl-0">
                  <span className="absolute left-0 top-0 grid h-[53px] w-[53px] place-items-center rounded-full border border-border bg-background text-muted-foreground shadow-card transition-colors duration-300 group-hover:border-primary/50 group-hover:text-primary lg:static lg:h-[53px] lg:w-[53px]">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                  </span>
                  <div className="lg:mt-7">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-xs tabular-nums text-primary/60">
                        {n}
                      </span>
                      <span className="font-display text-base font-semibold tracking-tight text-foreground">
                        {name}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium leading-snug text-foreground/80">
                      {title}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

/* 6b. Industrias */
const INDUSTRIES: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: Store,
    title: "Retail y Comercio",
    text: "Optimizamos operaciones comerciales, automatizamos procesos y conectamos sistemas para mejorar eficiencia y experiencia del cliente.",
  },
  {
    icon: RadioTower,
    title: "Telecomunicaciones",
    text: "Diseñamos soluciones para automatizar atención, conectar canales y mejorar procesos de alto volumen.",
  },
  {
    icon: HeartPulse,
    title: "Salud",
    text: "Ayudamos a organizaciones de salud a digitalizar procesos, mejorar gestión y aprovechar sus datos.",
  },
  {
    icon: Truck,
    title: "Logística y Distribución",
    text: "Integramos sistemas y automatizamos operaciones para mejorar control y productividad.",
  },
  {
    icon: Briefcase,
    title: "Servicios Profesionales",
    text: "Transformamos procesos administrativos y operativos mediante tecnología personalizada.",
  },
  {
    icon: Rocket,
    title: "Empresas en crecimiento",
    text: "Construimos la base tecnológica necesaria para escalar operaciones.",
  },
];

export function Industries() {
  return (
    <Section id="industrias" className="border-b border-border">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Industrias"
          title="Soluciones adaptadas a la realidad de cada industria"
          lead="Cada sector opera con procesos, volúmenes y prioridades distintas. Diseñamos la solución tecnológica a partir de ese contexto, no de una plantilla."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.05} className="min-w-0 h-full">
              <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card sm:p-9">
                <span className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                </span>
                <h3 className="relative mt-8 text-lg font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}


/* 7. Casos de éxito */
const CASES: Array<{
  industry: string;
  icon: LucideIcon;
  title: string;
  problem: string;
  capabilities: string[];
  before: string;
  after: string;
  result: string;
}> = [
  {
    industry: "Retail y Comercio",
    icon: Store,
    title: "Operación comercial sin visibilidad en tiempo real",
    problem:
      "El equipo consolidaba ventas, inventario y pedidos en hojas de cálculo alimentadas manualmente desde el ERP y los canales digitales. La información llegaba a la dirección con días de retraso y cada área trabajaba con cifras distintas.",
    capabilities: ["Integración de sistemas", "Automatización", "Business Intelligence"],
    before:
      "Consolidación manual de datos, sistemas desconectados y reportes con días de retraso.",
    after:
      "ERP, canales digitales e inventario integrados en un modelo de datos único con tableros ejecutivos actualizados de forma automática.",
    result:
      "Una sola fuente de verdad para la operación comercial y decisiones diarias basadas en información del día, no del mes anterior.",
  },
  {
    industry: "Servicios y atención al cliente",
    icon: Headphones,
    title: "Alto volumen de consultas repetitivas en canales digitales",
    problem:
      "La atención se gestionaba de forma manual en WhatsApp y correo, sin registro estructurado en el CRM. Los tiempos de respuesta crecían con la demanda y no existía trazabilidad de las solicitudes.",
    capabilities: ["Inteligencia Artificial aplicada", "Automatización", "Integración de sistemas"],
    before:
      "Atención 100% manual, sin trazabilidad ni registro estructurado de las conversaciones.",
    after:
      "Canales digitales conectados al CRM con asistentes de IA que resuelven consultas frecuentes y derivan los casos complejos al equipo.",
    result:
      "Respuesta inmediata en las consultas de mayor volumen y equipos enfocados en los casos que realmente requieren criterio humano.",
  },
  {
    industry: "Logística y Distribución",
    icon: Truck,
    title: "Procesos operativos dispersos entre múltiples sistemas",
    problem:
      "Despachos, facturación y seguimiento vivían en aplicaciones distintas sin comunicación entre ellas. Cada control implicaba revisiones cruzadas manuales y el reproceso se volvió parte de la operación diaria.",
    capabilities: ["Arquitectura tecnológica", "Desarrollo de software", "Analítica de datos"],
    before:
      "Aplicaciones aisladas, controles cruzados manuales y reprocesos constantes.",
    after:
      "Arquitectura de integración con flujos automatizados de punta a punta e indicadores operacionales en un tablero único.",
    result:
      "Control operativo continuo, menos reprocesos y capacidad de escalar volumen sin sumar carga administrativa.",
  },
];

export function UseCases() {
  return (
    <Section id="casos" className="border-b border-border">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Casos de transformación"
          title="Transformaciones que generan resultados reales"
          lead="Cada proyecto empieza por un problema de negocio concreto. Esto es cómo se ve el cambio entre el punto de partida y la operación resultante."
        />

        <div className="mt-16 space-y-6 lg:space-y-8">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-card transition-colors duration-300 hover:border-primary/25">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  {/* Left: problem */}
                  <div className="min-w-0 p-8 sm:p-12 lg:p-14">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary">
                        <c.icon className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {c.industry}
                      </span>
                    </div>

                    <h3 className="mt-8 font-display text-2xl leading-[1.15] tracking-tight text-foreground sm:text-3xl lg:max-w-xl">
                      {c.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                      {c.problem}
                    </p>

                    <div className="mt-9">
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        Capacidades utilizadas
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {c.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-foreground/80"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: before / after / result */}
                  <div className="min-w-0 border-t border-border bg-secondary/30 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
                    <div className="space-y-8">
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                          Antes
                        </p>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                          {c.before}
                        </p>
                      </div>

                      <div className="flex items-center gap-4" aria-hidden="true">
                        <span className="h-px flex-1 bg-gradient-to-r from-border to-primary/40" />
                        <TrendingUp className="h-4 w-4 text-primary" strokeWidth={1.8} />
                        <span className="h-px flex-1 bg-gradient-to-l from-border to-primary/40" />
                      </div>

                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                          Después
                        </p>
                        <p className="mt-3 text-[15px] leading-relaxed text-foreground">
                          {c.after}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-border bg-card p-6">
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                          Resultado
                        </p>
                        <p className="mt-3 text-[15px] leading-relaxed text-foreground">
                          {c.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}


/* 8. Ecosistema tecnológico */
const STACK_LAYERS: Array<{
  id: string;
  icon: LucideIcon;
  layer: string;
  title: string;
  caption: string;
  items: string[];
}> = [
  {
    id: "01",
    icon: Sparkles,
    layer: "Capa 1",
    title: "Experiencias digitales",
    caption: "El punto donde las personas y los clientes interactúan con el negocio.",
    items: ["IA Conversacional", "Aplicaciones Empresariales", "Automatización Inteligente"],
  },
  {
    id: "02",
    icon: LineChart,
    layer: "Capa 2",
    title: "Inteligencia y Datos",
    caption: "Donde la información se convierte en criterio para decidir.",
    items: ["Business Intelligence", "Analítica", "Modelos de IA", "Dashboards"],
  },
  {
    id: "03",
    icon: Share2,
    layer: "Capa 3",
    title: "Integración Empresarial",
    caption: "La conexión entre los sistemas que ya sostienen la operación.",
    items: ["APIs", "ERP", "CRM", "Sistemas internos"],
  },
  {
    id: "04",
    icon: Layers,
    layer: "Capa 4",
    title: "Infraestructura",
    caption: "La base que sostiene el crecimiento en el tiempo.",
    items: ["Cloud", "Arquitectura", "Seguridad", "Escalabilidad"],
  },
];

export function Technologies() {
  return (
    <Section id="tecnologias" className="border-b border-border bg-secondary/40">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Arquitectura"
          title="Ecosistema tecnológico"
          lead="No trabajamos con herramientas sueltas. Diseñamos capas que se sostienen entre sí, desde la infraestructura hasta la experiencia que ve el usuario final."
        />

        <div className="mt-16 space-y-3 sm:space-y-4">
          {STACK_LAYERS.map((l, i) => (
            <Reveal key={l.id} delay={i * 0.07}>
              <article className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/30">
                <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-primary/0 transition-colors duration-300 group-hover:bg-primary/50" />
                <div className="grid gap-6 p-7 sm:p-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary">
                        <l.icon className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {l.layer}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl tracking-tight text-foreground sm:text-2xl">
                      {l.title}
                    </h3>
                    <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {l.caption}
                    </p>
                  </div>

                  <div className="min-w-0 lg:border-l lg:border-border lg:pl-12">
                    <div className="flex flex-wrap gap-2.5">
                      {l.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground/80 transition-colors duration-300 group-hover:border-primary/25"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <figure className="mx-auto mt-16 max-w-3xl text-center">
            <blockquote className="font-display text-2xl leading-[1.25] tracking-tight text-foreground sm:text-[34px]">
              “La tecnología cambia constantemente. La arquitectura correcta permite evolucionar.”
            </blockquote>
            <span className="mx-auto mt-8 block h-px w-16 bg-primary/40" />
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}

