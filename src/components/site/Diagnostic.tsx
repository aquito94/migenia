import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Gauge,
  Loader2,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Container, Eyebrow, Reveal, Section } from "./primitives";
import { ButtonAction } from "./Buttons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitLead } from "./LeadDialog";
import { cn } from "@/lib/utils";

type Answers = {
  industry: string;
  size: string;
  area: string;
  pain: string;
  automation: string;
  systems: string[];
  integration: string;
  hoursLost: string;
  decisionSpeed: string;
  goal: string;
};

const empty: Answers = {
  industry: "",
  size: "",
  area: "",
  pain: "",
  automation: "",
  systems: [],
  integration: "",
  hoursLost: "",
  decisionSpeed: "",
  goal: "",
};

const INDUSTRIES = [
  "Retail y comercio",
  "Telecomunicaciones",
  "Salud",
  "Logística y distribución",
  "Servicios profesionales",
  "Manufactura",
  "Financiero",
  "Otra",
];
const SIZES = ["1 - 20", "21 - 100", "101 - 500", "Más de 500"];
const AREAS = [
  "Operaciones",
  "Comercial y ventas",
  "Finanzas",
  "Servicio al cliente",
  "Dirección general",
  "Talento humano",
];
const AUTOMATION = [
  { label: "Casi todo es manual", score: 0 },
  { label: "Automatizaciones aisladas", score: 8 },
  { label: "Procesos clave automatizados", score: 16 },
  { label: "Automatización transversal", score: 24 },
];
const SYSTEMS = [
  "ERP",
  "CRM",
  "Excel / hojas de cálculo",
  "WhatsApp / mensajería",
  "E-commerce",
  "Sistema propio",
  "Herramientas de BI",
];
const INTEGRATION = [
  { label: "Las áreas trabajan por separado", score: 0 },
  { label: "Se comparte información manualmente", score: 8 },
  { label: "Algunos sistemas están conectados", score: 16 },
  { label: "Información integrada en tiempo real", score: 24 },
];
const HOURS = [
  { label: "Menos de 10 h / semana", score: 20 },
  { label: "10 - 30 h / semana", score: 13 },
  { label: "30 - 80 h / semana", score: 7 },
  { label: "Más de 80 h / semana", score: 0 },
];
const DECISIONS = [
  { label: "Decidimos con datos actualizados", score: 20 },
  { label: "Hay reportes, pero con retraso", score: 12 },
  { label: "Cada área reporta distinto", score: 6 },
  { label: "Decidimos por intuición", score: 0 },
];

const STEPS = [
  { title: "Información de empresa", icon: Building2 },
  { title: "Dolores actuales", icon: Workflow },
  { title: "Estado actual", icon: Gauge },
  { title: "Impacto", icon: TrendingUp },
  { title: "Objetivo", icon: Target },
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(120),
  email: z.string().trim().email("Email inválido").max(255),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
});

function scoreOf(list: { label: string; score: number }[], value: string) {
  return list.find((o) => o.label === value)?.score ?? 0;
}

function useDiagnosis(a: Answers) {
  return useMemo(() => {
    const automation = scoreOf(AUTOMATION, a.automation);
    const integration = scoreOf(INTEGRATION, a.integration);
    const hours = scoreOf(HOURS, a.hoursLost);
    const decisions = scoreOf(DECISIONS, a.decisionSpeed);
    const systemsScore = Math.min(12, a.systems.length * 2);
    const index = Math.max(
      8,
      Math.min(100, automation + integration + hours + decisions + systemsScore),
    );
    const level = index < 40 ? "Inicial" : index < 70 ? "En desarrollo" : "Optimizado";

    const potentials = [
      { area: "Automatización", value: Math.round(((24 - automation) / 24) * 100) },
      { area: "Integración", value: Math.round(((24 - integration) / 24) * 100) },
      { area: "Datos", value: Math.round(((20 - decisions) / 20) * 100) },
      {
        area: "Inteligencia artificial",
        value: Math.round(((20 - hours) / 20) * 85 + 15),
      },
    ].sort((x, y) => y.value - x.value);

    const opportunities: string[] = [];
    if (automation <= 8)
      opportunities.push(
        "Alta carga de trabajo manual en procesos repetitivos: existe margen para liberar capacidad del equipo.",
      );
    if (integration <= 8)
      opportunities.push(
        "La información no fluye entre áreas: se duplica esfuerzo y se pierde trazabilidad operativa.",
      );
    if (decisions <= 12)
      opportunities.push(
        "Las decisiones dependen de reportes tardíos o criterios distintos por área.",
      );
    if (hours <= 13)
      opportunities.push(
        "Un volumen relevante de horas se consume en tareas que no agregan valor al negocio.",
      );
    if (a.systems.includes("Excel / hojas de cálculo"))
      opportunities.push(
        "Procesos críticos sostenidos en hojas de cálculo: riesgo operativo y dependencia de personas.",
      );
    if (opportunities.length === 0)
      opportunities.push(
        "La base operativa es sólida: la oportunidad está en profundizar analítica avanzada y escalar el modelo.",
      );

    const recommendations = [
      level === "Inicial"
        ? "Priorizar el ordenamiento de los procesos núcleo antes de incorporar nueva tecnología."
        : "Consolidar una fuente única de información para las decisiones del comité ejecutivo.",
      "Definir una hoja de ruta por fases, con impacto medible en los primeros 90 días.",
      `Enfocar el primer avance en ${a.area || "el área con mayor fricción"}, donde el retorno es más visible.`,
      "Establecer indicadores operativos que permitan sostener la mejora en el tiempo.",
    ];

    return { index, level, potentials: potentials.slice(0, 4), opportunities: opportunities.slice(0, 4), recommendations };
  }, [a]);
}

function OptionGrid({
  options,
  value,
  onChange,
  cols = 2,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  cols?: number;
}) {
  return (
    <div className={cn("grid gap-2", cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-4")}>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={cn(
            "rounded-xl border px-3.5 py-2.5 text-left text-[13.5px] transition-all duration-200",
            value === o
              ? "border-primary bg-primary/5 text-foreground shadow-card"
              : "border-border bg-card text-muted-foreground hover:border-foreground/25 hover:text-foreground",
          )}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
        {label}
      </p>
      {children}
    </div>
  );
}

export function Diagnostic() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>(empty);
  const [showResult, setShowResult] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const d = useDiagnosis(a);

  const set = <K extends keyof Answers>(k: K, v: Answers[K]) => setA((p) => ({ ...p, [k]: v }));
  const toggleSystem = (s: string) =>
    setA((p) => ({
      ...p,
      systems: p.systems.includes(s) ? p.systems.filter((x) => x !== s) : [...p.systems, s],
    }));

  const canContinue = [
    Boolean(a.industry && a.size && a.area),
    a.pain.trim().length >= 10,
    Boolean(a.automation && a.integration),
    Boolean(a.hoursLost && a.decisionSpeed),
    a.goal.trim().length >= 10,
  ][step];

  const onSubmitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
      phone: form.get("phone"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Datos inválidos");
      return;
    }
    const message = [
      `DIAGNÓSTICO ESTRATÉGICO — Índice ${d.index}/100 (${d.level})`,
      `Industria: ${a.industry}`,
      `Empleados: ${a.size}`,
      `Área a mejorar: ${a.area}`,
      `Problema operativo: ${a.pain}`,
      `Automatización actual: ${a.automation}`,
      `Sistemas: ${a.systems.join(", ") || "-"}`,
      `Integración entre áreas: ${a.integration}`,
      `Horas perdidas en tareas manuales: ${a.hoursLost}`,
      `Velocidad de decisiones: ${a.decisionSpeed}`,
      `Objetivo a 6 meses: ${a.goal}`,
      `Áreas con mayor potencial: ${d.potentials.map((p) => `${p.area} ${p.value}%`).join(" · ")}`,
    ]
      .join("\n")
      .slice(0, 2000);

    setSubmitting(true);
    const ok = await submitLead(
      {
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company || null,
        phone: parsed.data.phone || null,
        message,
      },
      "diagnostico-estrategico",
    );
    setSubmitting(false);
    if (!ok) {
      toast.error("No pudimos enviar tu solicitud. Inténtalo de nuevo.");
      return;
    }
    setSent(true);
    toast.success("Diagnóstico enviado. Te contactaremos en breve.");
  };

  return (
    <Section id="diagnostico" className="border-y border-border bg-secondary/40">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Herramienta</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2.5 text-[clamp(1.45rem,2.6vw,2rem)] font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
              Diagnóstico Estratégico MiGenIA
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
              Cinco pasos para evaluar la madurez operativa de tu empresa e identificar dónde está
              el mayor potencial de mejora. Toma menos de dos minutos.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5 sm:px-7">
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-foreground/5">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                </span>
                <span className="text-[12.5px] font-medium text-foreground">
                  {showResult ? "Resultado del diagnóstico" : STEPS[step]!.title}
                </span>
              </div>
              <span className="text-[11px] uppercase tracking-eyebrow text-muted-foreground">
                {showResult ? "Completado" : `Paso ${step + 1} de 5`}
              </span>
            </div>

            {/* Progress */}
            <div className="h-0.5 w-full bg-border">
              <motion.div
                className="h-full bg-primary"
                animate={{ width: showResult ? "100%" : `${((step + 1) / 5) * 100}%` }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <div className="px-5 py-6 sm:px-7 sm:py-7">
              <AnimatePresence mode="wait">
                {showResult ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="grid items-start gap-7 lg:grid-cols-[300px_1fr]">
                      {/* Index */}
                      <div className="rounded-xl border border-border bg-secondary/50 p-5">
                        <p className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                          Índice de madurez operacional
                        </p>
                        <div className="mt-3 flex items-end gap-1.5">
                          <span className="font-display text-[3.25rem] font-semibold leading-none tracking-tight text-foreground">
                            {d.index}
                          </span>
                          <span className="pb-1.5 text-sm text-muted-foreground">/ 100</span>
                        </div>
                        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-border">
                          <motion.div
                            className="h-full rounded-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${d.index}%` }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {["Inicial", "En desarrollo", "Optimizado"].map((l) => (
                            <span
                              key={l}
                              className={cn(
                                "rounded-full border px-2.5 py-1 text-[11px]",
                                d.level === l
                                  ? "border-primary bg-primary/10 text-foreground"
                                  : "border-border text-muted-foreground",
                              )}
                            >
                              {l}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Potential */}
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                            Áreas con mayor potencial
                          </p>
                          <div className="mt-3 space-y-2.5">
                            {d.potentials.map((p, i) => (
                              <div key={p.area} className="flex items-center gap-3">
                                <span className="w-40 shrink-0 text-[13px] text-foreground">
                                  {p.area}
                                </span>
                                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
                                  <motion.div
                                    className="h-full rounded-full bg-foreground/70"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.max(6, p.value)}%` }}
                                    transition={{ duration: 0.7, delay: 0.1 * i }}
                                  />
                                </div>
                                <span className="w-9 text-right text-[12px] tabular-nums text-muted-foreground">
                                  {p.value}%
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Opportunities */}
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <p className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                              Oportunidades detectadas
                            </p>
                            <ul className="mt-3 space-y-2">
                              {d.opportunities.map((o) => (
                                <li key={o} className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground">
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                  {o}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                              Recomendaciones generales
                            </p>
                            <ul className="mt-3 space-y-2">
                              {d.recommendations.map((r) => (
                                <li key={r} className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground">
                                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact / CTA */}
                    <div className="mt-7 rounded-xl border border-border bg-secondary/50 p-5 sm:p-6">
                      {sent ? (
                        <div className="flex flex-col items-center py-4 text-center">
                          <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </span>
                          <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                            Diagnóstico registrado
                          </h3>
                          <p className="mt-1.5 max-w-md text-[13.5px] text-muted-foreground">
                            Un consultor senior revisará tus respuestas y te contactará para
                            coordinar el diagnóstico estratégico personalizado.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={onSubmitContact} className="space-y-4">
                          <div>
                            <h3 className="font-display text-lg font-semibold text-foreground">
                              Agenda un diagnóstico estratégico personalizado
                            </h3>
                            <p className="mt-1 text-[13.5px] text-muted-foreground">
                              Revisamos tus respuestas contigo y priorizamos las oportunidades con
                              mayor impacto en tu operación.
                            </p>
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2">
                            <div className="space-y-1.5">
                              <Label htmlFor="dg-name">Nombre y apellido *</Label>
                              <Input id="dg-name" name="name" required maxLength={120} placeholder="Ej. María Torres" />
                            </div>
                            <div className="space-y-1.5">
                              <Label htmlFor="dg-email">Email corporativo *</Label>
                              <Input id="dg-email" name="email" type="email" required maxLength={255} placeholder="nombre@empresa.com" />
                            </div>
                            <div className="space-y-1.5">
                              <Label htmlFor="dg-company">Empresa</Label>
                              <Input id="dg-company" name="company" maxLength={160} placeholder="Nombre de la empresa" />
                            </div>
                            <div className="space-y-1.5">
                              <Label htmlFor="dg-phone">Teléfono</Label>
                              <Input id="dg-phone" name="phone" maxLength={40} placeholder="+593 ..." />
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-3">
                            <ButtonAction type="submit" variant="accent" withArrow disabled={submitting}>
                              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                              {submitting ? "Enviando" : "Agenda un diagnóstico estratégico"}
                            </ButtonAction>
                            <button
                              type="button"
                              onClick={() => {
                                setShowResult(false);
                                setStep(0);
                                setA(empty);
                              }}
                              className="text-[13px] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                            >
                              Reiniciar evaluación
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-5"
                  >
                    {step === 0 && (
                      <>
                        <Field label="Industria">
                          <OptionGrid options={INDUSTRIES} value={a.industry} onChange={(v) => set("industry", v)} />
                        </Field>
                        <Field label="Número de empleados">
                          <OptionGrid options={SIZES} value={a.size} onChange={(v) => set("size", v)} cols={4} />
                        </Field>
                        <Field label="Área principal a mejorar">
                          <OptionGrid options={AREAS} value={a.area} onChange={(v) => set("area", v)} />
                        </Field>
                      </>
                    )}

                    {step === 1 && (
                      <Field label="Describe el principal problema operativo que enfrenta tu empresa">
                        <Textarea
                          rows={6}
                          maxLength={1000}
                          value={a.pain}
                          onChange={(e) => set("pain", e.target.value)}
                          placeholder="Ej. la información de ventas y operaciones no coincide, y el equipo pierde días consolidando reportes manuales."
                        />
                        <p className="text-[12px] text-muted-foreground">
                          Mientras más contexto, más preciso será el diagnóstico.
                        </p>
                      </Field>
                    )}

                    {step === 2 && (
                      <>
                        <Field label="Nivel de automatización actual">
                          <OptionGrid
                            options={AUTOMATION.map((o) => o.label)}
                            value={a.automation}
                            onChange={(v) => set("automation", v)}
                          />
                        </Field>
                        <Field label="Sistemas utilizados (selecciona todos los que apliquen)">
                          <div className="flex flex-wrap gap-2">
                            {SYSTEMS.map((s) => (
                              <button
                                key={s}
                                type="button"
                                onClick={() => toggleSystem(s)}
                                className={cn(
                                  "rounded-full border px-3.5 py-1.5 text-[13px] transition-all duration-200",
                                  a.systems.includes(s)
                                    ? "border-primary bg-primary/5 text-foreground"
                                    : "border-border bg-card text-muted-foreground hover:border-foreground/25 hover:text-foreground",
                                )}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </Field>
                        <Field label="Nivel de integración entre áreas">
                          <OptionGrid
                            options={INTEGRATION.map((o) => o.label)}
                            value={a.integration}
                            onChange={(v) => set("integration", v)}
                          />
                        </Field>
                      </>
                    )}

                    {step === 3 && (
                      <>
                        <Field label="Horas aproximadas perdidas en tareas manuales">
                          <OptionGrid
                            options={HOURS.map((o) => o.label)}
                            value={a.hoursLost}
                            onChange={(v) => set("hoursLost", v)}
                          />
                        </Field>
                        <Field label="Impacto en la velocidad de decisiones">
                          <OptionGrid
                            options={DECISIONS.map((o) => o.label)}
                            value={a.decisionSpeed}
                            onChange={(v) => set("decisionSpeed", v)}
                          />
                        </Field>
                      </>
                    )}

                    {step === 4 && (
                      <Field label="¿Qué resultado te gustaría lograr en los próximos 6 meses?">
                        <Textarea
                          rows={6}
                          maxLength={1000}
                          value={a.goal}
                          onChange={(e) => set("goal", e.target.value)}
                          placeholder="Ej. reducir el tiempo de cierre mensual y tener visibilidad diaria de la operación."
                        />
                      </Field>
                    )}

                    <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
                      <button
                        type="button"
                        onClick={() => setStep((s) => Math.max(0, s - 1))}
                        disabled={step === 0}
                        className={cn(
                          "inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors",
                          step === 0 ? "opacity-40" : "hover:text-foreground",
                        )}
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Anterior
                      </button>
                      <ButtonAction
                        variant="primary"
                        disabled={!canContinue}
                        onClick={() => (step === 4 ? setShowResult(true) : setStep((s) => s + 1))}
                      >
                        {step === 4 ? "Generar diagnóstico" : "Continuar"}
                        <ArrowRight className="h-4 w-4" />
                      </ButtonAction>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
