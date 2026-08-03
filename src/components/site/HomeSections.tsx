import {
  ArrowDown,
  BarChart3,
  Boxes,
  Brain,
  Clock,
  FileStack,
  Layers,
  Puzzle,
  Repeat,
  Unplug,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container, Reveal, Section, SectionHeading } from "./primitives";

/* ── 2. Problema ───────────────────────────────────────────── */

const PROBLEMS: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Unplug,
    title: "Procesos desconectados",
    body: "Cada área trabaja con herramientas aisladas y la información no fluye entre ellas.",
  },
  {
    icon: FileStack,
    title: "Información dispersa",
    body: "Los datos existen, pero viven en sistemas distintos y nunca cuentan la misma historia.",
  },
  {
    icon: Repeat,
    title: "Trabajo manual",
    body: "Tareas repetitivas consumen el tiempo del equipo y abren espacio al error.",
  },
  {
    icon: Puzzle,
    title: "Tecnología sin estrategia",
    body: "Se suman herramientas nuevas y la operación sigue siendo igual de compleja.",
  },
];

export function Problems() {
  return (
    <Section id="problema" className="border-b border-border">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="El punto de partida"
          title="¿Por qué tantas empresas siguen creciendo con procesos que las frenan?"
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {PROBLEMS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={0.05 * i}>
              <article className="group h-full rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-foreground/20 sm:p-10">
                <span className="inline-grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </span>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ── 3. La transformación ──────────────────────────────────── */

const SHIFTS: Array<{ before: string; after: string }> = [
  {
    before: "Cada área con su propia versión de la información",
    after: "Una sola fuente de verdad para toda la operación",
  },
  {
    before: "Decisiones que esperan reportes",
    after: "Decisiones con información disponible en el momento",
  },
  {
    before: "Equipos ocupados en tareas repetitivas",
    after: "Equipos enfocados en lo que genera valor",
  },
  {
    before: "Crecer implica más complejidad",
    after: "Crecer sin multiplicar la carga operativa",
  },
];

export function Transformation() {
  return (
    <Section id="transformacion" className="border-b border-border bg-secondary/40">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="La transformación"
          title="De procesos aislados a una operación inteligente."
          lead="El cambio no se mide en tecnología instalada, sino en cómo trabaja la empresa después."
        />

        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-1 border-b border-border sm:grid-cols-2">
            <p className="px-8 py-4 text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground sm:border-r sm:border-border">
              Antes
            </p>
            <p className="hidden px-8 py-4 text-[11px] font-medium uppercase tracking-eyebrow text-foreground sm:block">
              Después
            </p>
          </div>
          {SHIFTS.map(({ before, after }, i) => (
            <Reveal key={before} delay={0.05 * i}>
              <div className="grid grid-cols-1 items-stretch border-b border-border last:border-b-0 sm:grid-cols-2">
                <div className="flex items-center gap-4 px-8 py-7 sm:border-r sm:border-border">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{before}</p>
                </div>
                <div className="flex items-center gap-4 border-t border-border px-8 py-7 sm:border-t-0">
                  <ArrowDown className="h-4 w-4 shrink-0 -rotate-90 text-primary sm:rotate-0 sm:hidden" />
                  <span className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-primary sm:block" />
                  <p className="text-[15px] font-medium leading-relaxed text-foreground">{after}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ── 4. Capacidades ────────────────────────────────────────── */

const CAPABILITIES: Array<{
  icon: LucideIcon;
  title: string;
  problem: string;
  impact: string;
}> = [
  {
    icon: Brain,
    title: "Inteligencia Artificial Empresarial",
    problem:
      "El conocimiento del negocio está atrapado en documentos, conversaciones y sistemas que nadie consulta a tiempo.",
    impact:
      "Respuestas, análisis y criterios disponibles en segundos, con el contexto real de la empresa.",
  },
  {
    icon: Workflow,
    title: "Automatización Inteligente",
    problem:
      "Los procesos avanzan a la velocidad de la persona que los ejecuta manualmente.",
    impact:
      "Operaciones que se ejecutan solas, con menos errores y tiempos de respuesta más cortos.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    problem:
      "La dirección revisa reportes que llegan tarde y no coinciden entre áreas.",
    impact:
      "Indicadores confiables y actualizados para decidir sobre hechos, no sobre percepciones.",
  },
  {
    icon: Layers,
    title: "Arquitectura e Integración",
    problem:
      "Cada nuevo sistema agrega complejidad en lugar de resolverla.",
    impact:
      "Una base tecnológica ordenada donde todo se conecta y la empresa puede escalar.",
  },
];

export function Capabilities() {
  return (
    <Section id="capacidades" className="border-b border-border">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Capacidades"
          title="Cuatro frentes de trabajo. Un mismo objetivo: que la empresa opere mejor."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {CAPABILITIES.map(({ icon: Icon, title, problem, impact }, i) => (
            <Reveal key={title} delay={0.05 * i}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-foreground/20 sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {title}
                  </h3>
                </div>
                <dl className="mt-8 space-y-6 border-t border-border pt-8">
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                      Problema
                    </dt>
                    <dd className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-eyebrow text-primary">
                      Impacto
                    </dt>
                    <dd className="mt-2 text-[15px] leading-relaxed text-foreground">{impact}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ── 5. Método MiGenIA ─────────────────────────────────────── */

const STEPS: Array<{ n: string; title: string; body: string }> = [
  { n: "01", title: "Entender", body: "Analizamos la operación, los procesos y dónde se pierde eficiencia." },
  { n: "02", title: "Diseñar", body: "Definimos cómo debería funcionar la empresa antes de tocar tecnología." },
  { n: "03", title: "Construir", body: "Desarrollamos las soluciones necesarias, sin piezas de más." },
  { n: "04", title: "Conectar", body: "Integramos sistemas y datos para que todo trabaje como una sola operación." },
  { n: "05", title: "Optimizar", body: "Medimos resultados y mejoramos de forma continua." },
];

export function Method() {
  return (
    <Section id="metodo" className="border-b border-border bg-secondary/40">
      <Container className="max-w-7xl">
        <SectionHeading eyebrow="Método MiGenIA" title="Cómo trabajamos." />

        <div className="mt-16">
          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-[19px] h-px bg-border" />
            <ol className="relative grid grid-cols-5 gap-6">
              {STEPS.map(({ n, title, body }, i) => (
                <Reveal key={n} delay={0.07 * i}>
                  <li>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card font-display text-xs font-semibold tabular-nums text-foreground">
                      {n}
                    </span>
                    <h3 className="mt-7 text-lg font-semibold tracking-tight text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <ol className="relative space-y-8 border-l border-border pl-8 lg:hidden">
            {STEPS.map(({ n, title, body }, i) => (
              <Reveal key={n} delay={0.05 * i}>
                <li className="relative">
                  <span className="absolute -left-[41px] grid h-5 w-5 place-items-center rounded-full border border-border bg-card text-[9px] font-semibold tabular-nums text-foreground">
                    {n}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

/* ── 6. Casos ──────────────────────────────────────────────── */

const CASES: Array<{
  sector: string;
  problem: string;
  solution: string;
  result: string;
}> = [
  {
    sector: "Distribución",
    problem:
      "Los pedidos llegaban por WhatsApp, correo y llamadas, y se registraban a mano en el sistema.",
    solution:
      "Diseñamos un flujo único de captura y validación conectado directamente al sistema de gestión.",
    result:
      "El equipo comercial dejó de transcribir pedidos y la información quedó disponible el mismo día.",
  },
  {
    sector: "Servicios profesionales",
    problem:
      "La dirección tomaba decisiones con reportes armados manualmente cada fin de mes.",
    solution:
      "Consolidamos las fuentes de datos en un modelo único con indicadores de operación y rentabilidad.",
    result:
      "Las decisiones pasaron de un cierre mensual a una lectura diaria de la operación.",
  },
  {
    sector: "Retail",
    problem:
      "La atención al cliente respondía las mismas consultas una y otra vez, con tiempos de espera altos.",
    solution:
      "Construimos una capa de atención asistida conectada al inventario y al histórico del cliente.",
    result:
      "Las consultas repetitivas se resolvieron sin intervención y el equipo se enfocó en casos complejos.",
  },
];

export function Cases() {
  return (
    <Section id="casos" className="border-b border-border">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Casos"
          title="Tres empresas. Tres formas de trabajar mejor."
        />

        <div className="mt-16 space-y-5">
          {CASES.map(({ sector, problem, solution, result }, i) => (
            <Reveal key={sector} delay={0.05 * i}>
              <article className="grid gap-8 rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-foreground/20 sm:p-10 lg:grid-cols-[220px_1fr] lg:gap-14">
                <div className="flex items-start gap-3">
                  <Boxes className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} />
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                      Sector
                    </p>
                    <p className="mt-1.5 text-lg font-semibold tracking-tight text-foreground">
                      {sector}
                    </p>
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
                  {[
                    ["Problema", problem, false],
                    ["Solución", solution, false],
                    ["Resultado", result, true],
                  ].map(([label, text, strong]) => (
                    <div key={label as string}>
                      <p
                        className={
                          strong
                            ? "text-[11px] font-medium uppercase tracking-eyebrow text-primary"
                            : "text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground"
                        }
                      >
                        {label as string}
                      </p>
                      <p
                        className={
                          strong
                            ? "mt-3 text-[15px] leading-relaxed text-foreground"
                            : "mt-3 text-[15px] leading-relaxed text-muted-foreground"
                        }
                      >
                        {text as string}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 flex items-center gap-2.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 shrink-0" strokeWidth={1.6} />
            Cada transformación comienza entendiendo la operación, no eligiendo tecnología.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
