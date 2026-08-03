import {
  BarChart3,
  Boxes,
  Brain,
  Clock,
  FileStack,
  Layers,
  Repeat,
  Timer,
  Unplug,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container, Reveal, Section, SectionHeading } from "./primitives";
import { ButtonAction } from "./Buttons";
import { openLeadDialog } from "./LeadDialog";


/* ── 2. Problema ───────────────────────────────────────────── */

const PROBLEMS: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Unplug,
    title: "Procesos desconectados",
    body: "Cada área trabaja con herramientas aisladas y la información no fluye.",
  },
  {
    icon: FileStack,
    title: "Datos dispersos",
    body: "Los datos existen, pero viven en sistemas que nunca coinciden.",
  },
  {
    icon: Repeat,
    title: "Trabajo manual",
    body: "Tareas repetitivas consumen el tiempo del equipo y abren espacio al error.",
  },
  {
    icon: Timer,
    title: "Decisiones lentas",
    body: "La dirección espera reportes que llegan tarde para decidir.",
  },
];

export function Problems() {
  return (
    <Section id="problema" className="border-b border-border">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="El punto de partida"
          title="¿Por qué tantas empresas crecen con procesos que las frenan?"
        />
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={0.04 * i}>
              <article className="group h-full rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:border-foreground/20">
                <span className="inline-grid h-8 w-8 place-items-center rounded-lg border border-border text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
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

        <div className="mt-7 overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid grid-cols-1 border-b border-border sm:grid-cols-2">
            <p className="px-5 py-2.5 text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground sm:border-r sm:border-border">
              Antes
            </p>
            <p className="hidden px-5 py-2.5 text-[11px] font-medium uppercase tracking-eyebrow text-foreground sm:block">
              Después
            </p>
          </div>
          {SHIFTS.map(({ before, after }, i) => (
            <Reveal key={before} delay={0.04 * i}>
              <div className="grid grid-cols-1 items-stretch border-b border-border last:border-b-0 sm:grid-cols-2">
                <div className="flex items-center gap-3 px-5 py-3 sm:border-r sm:border-border">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                  <p className="text-[13.5px] leading-relaxed text-muted-foreground">{before}</p>
                </div>
                <div className="flex items-center gap-3 border-t border-border px-5 py-3 sm:border-t-0">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-[13.5px] font-medium leading-relaxed text-foreground">{after}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </Container>
    </Section>
  );
}

/* ── 4. Solución MiGenIA ───────────────────────────────────── */

const CAPABILITIES: Array<{
  icon: LucideIcon;
  title: string;
  problem: string;
  impact: string;
}> = [
  {
    icon: Workflow,
    title: "Operaciones inteligentes",
    problem: "Los procesos avanzan a la velocidad de quien los ejecuta a mano.",
    impact: "Operaciones que se ejecutan solas, con menos errores y tiempos más cortos.",
  },
  {
    icon: BarChart3,
    title: "Decisiones inteligentes",
    problem: "La dirección revisa reportes que llegan tarde y no coinciden.",
    impact: "Indicadores confiables y actualizados para decidir sobre hechos.",
  },
  {
    icon: Layers,
    title: "Procesos conectados",
    problem: "Cada área opera con sistemas que no se hablan entre sí.",
    impact: "Información que fluye de punta a punta, sin transcripciones ni retrabajo.",
  },
  {
    icon: Brain,
    title: "Arquitectura escalable",
    problem: "Cada nuevo sistema agrega complejidad en lugar de resolverla.",
    impact: "Una base tecnológica ordenada donde la empresa puede crecer.",
  },
];

export function Capabilities() {
  return (
    <Section id="capacidades" className="border-b border-border">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="La solución"
          title="Cuatro frentes de trabajo. Un objetivo: que la empresa opere mejor."
        />
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {CAPABILITIES.map(({ icon: Icon, title, problem, impact }, i) => (
            <Reveal key={title} delay={0.04 * i}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:border-foreground/20">
                <div className="flex items-center gap-3">
                  <span className="inline-grid h-8 w-8 place-items-center rounded-lg border border-border text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
                    {title}
                  </h3>
                </div>
                <dl className="mt-4 space-y-3 border-t border-border pt-4">
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                      Problema
                    </dt>
                    <dd className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
                      {problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-eyebrow text-primary">
                      Impacto
                    </dt>
                    <dd className="mt-1 text-[13.5px] leading-relaxed text-foreground">{impact}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <div className="mt-7 flex flex-col items-start gap-3 rounded-xl border border-border bg-secondary/50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[14.5px] leading-relaxed text-foreground">
              ¿Dónde está la mayor oportunidad de eficiencia en tu operación?
            </p>
            <ButtonAction
              variant="primary"
              withArrow
              onClick={() => openLeadDialog("capacidades")}
            >
              Agenda un diagnóstico estratégico
            </ButtonAction>
          </div>
        </Reveal>

      </Container>
    </Section>
  );
}

/* ── 5. Método MiGenIA ─────────────────────────────────────── */

const STEPS: Array<{ n: string; title: string; body: string }> = [
  { n: "01", title: "Entender", body: "Analizamos la operación y dónde se pierde eficiencia." },
  { n: "02", title: "Diseñar", body: "Definimos cómo debería funcionar antes de tocar tecnología." },
  { n: "03", title: "Construir", body: "Desarrollamos lo necesario, sin piezas de más." },
  { n: "04", title: "Conectar", body: "Integramos sistemas y datos en una sola operación." },
  { n: "05", title: "Optimizar", body: "Medimos resultados y mejoramos de forma continua." },
];

export function Method() {
  return (
    <Section id="metodo" className="border-b border-border bg-secondary/40">
      <Container className="max-w-7xl">
        <SectionHeading eyebrow="Método MiGenIA" title="Cómo trabajamos." />

        <div className="mt-7">
          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-[14px] h-px bg-border" />
            <ol className="relative grid grid-cols-5 gap-4">
              {STEPS.map(({ n, title, body }, i) => (
                <Reveal key={n} delay={0.05 * i}>
                  <li>
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-border bg-card font-display text-[11px] font-semibold tabular-nums text-foreground">
                      {n}
                    </span>
                    <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-foreground">
                      {title}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">{body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <ol className="relative space-y-4 border-l border-border pl-6 lg:hidden">
            {STEPS.map(({ n, title, body }, i) => (
              <Reveal key={n} delay={0.04 * i}>
                <li className="relative">
                  <span className="absolute -left-[33px] grid h-5 w-5 place-items-center rounded-full border border-border bg-card text-[9px] font-semibold tabular-nums text-foreground">
                    {n}
                  </span>
                  <h3 className="text-[15px] font-semibold tracking-tight text-foreground">{title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">{body}</p>
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
    problem: "Los pedidos llegaban por WhatsApp, correo y llamadas, y se registraban a mano.",
    solution: "Un flujo único de captura y validación conectado al sistema de gestión.",
    result: "El equipo dejó de transcribir pedidos y la información quedó disponible el mismo día.",
  },
  {
    sector: "Servicios profesionales",
    problem: "La dirección decidía con reportes armados manualmente cada fin de mes.",
    solution: "Consolidación de fuentes en un modelo único de operación y rentabilidad.",
    result: "Las decisiones pasaron de un cierre mensual a una lectura diaria.",
  },
  {
    sector: "Retail",
    problem: "Atención al cliente respondía las mismas consultas con tiempos de espera altos.",
    solution: "Capa de atención asistida conectada al inventario y al histórico del cliente.",
    result: "Las consultas repetitivas se resolvieron solas y el equipo se enfocó en casos complejos.",
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

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {CASES.map(({ sector, problem, solution, result }, i) => (
            <Reveal key={sector} delay={0.04 * i}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-foreground/20">
                <div className="flex items-center gap-2.5">
                  <Boxes className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} />
                  <p className="text-base font-semibold tracking-tight text-foreground">
                    {sector}
                  </p>
                </div>

                <div className="mt-5 space-y-4 border-t border-border pt-5">
                  {[
                    ["Desafío", problem, false],
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
                            ? "mt-1.5 text-sm leading-relaxed text-foreground"
                            : "mt-1.5 text-sm leading-relaxed text-muted-foreground"
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
          <p className="mt-8 flex items-center gap-2.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 shrink-0" strokeWidth={1.6} />
            Cada transformación comienza entendiendo la operación, no eligiendo tecnología.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
