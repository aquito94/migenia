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


/* 7. Casos de uso */
export function UseCases() {
  return (
    <Section id="casos" className="border-b border-border">
      <Container className="max-w-7xl">
        <SectionShell index="05" title="Casos de uso" />
        <div className="mt-14 space-y-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <article className="grid gap-8 rounded-2xl border border-border bg-card p-7 shadow-card sm:p-9 lg:grid-cols-[0.9fr_1.1fr_0.9fr]">
                <div className="min-w-0">
                  <SlotLabel>Contexto / sector</SlotLabel>
                  <HeadingSlot label="Situación inicial" className="mt-5" />
                </div>
                <TextSlot label="Solución implementada" lines={4} />
                <div className="min-w-0 lg:border-l lg:border-border lg:pl-8">
                  <ListSlot label="Resultados" items={3} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* 8. Tecnologías */
export function Technologies() {
  return (
    <Section id="tecnologias" className="border-b border-border bg-secondary/40">
      <Container className="max-w-7xl">
        <SectionShell index="06" title="Tecnologías" />
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="min-w-0 space-y-8">
              <TextSlot label="Criterio de selección tecnológica" lines={4} />
              <div className="space-y-3">
                {["Categoría 01", "Categoría 02", "Categoría 03", "Categoría 04"].map((c) => (
                  <div
                    key={c}
                    className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4"
                  >
                    <SlotLabel>{c}</SlotLabel>
                    <div className="h-2.5 w-24 rounded-full bg-secondary" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="min-w-0 rounded-2xl border border-border bg-card p-7 shadow-card sm:p-9">
              <SlotLabel>Stack / logotipos de tecnologías</SlotLabel>
              <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex h-16 items-center justify-center rounded-xl border border-dashed border-border bg-background text-[10px] uppercase tracking-eyebrow text-muted-foreground"
                  >
                    Logo
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <MediaSlot label="Diagrama de arquitectura" ratio="aspect-[16/7]" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
