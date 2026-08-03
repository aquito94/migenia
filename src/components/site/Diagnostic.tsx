import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  BarChart3,
  Bot,
  CheckCircle2,
  Database,
  Loader2,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Container, Eyebrow, Reveal, Section } from "./primitives";
import { ButtonAction } from "./Buttons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitLead } from "./LeadDialog";
import { cn } from "@/lib/utils";

type Option = {
  label: string;
  score: number;
  focus: "Automatización" | "Datos" | "Integración" | "Inteligencia artificial";
  icon: LucideIcon;
  problem?: string;
  opportunity?: string;
};

const Q1: Option[] = [
  {
    label: "Procesos manuales que consumen demasiado tiempo",
    score: 4,
    focus: "Automatización",
    icon: Workflow,
    problem:
      "El equipo dedica horas a tareas repetitivas que no aportan valor al negocio.",
    opportunity:
      "Liberar capacidad operativa automatizando los flujos de mayor volumen.",
  },
  {
    label: "Información dispersa entre sistemas",
    score: 6,
    focus: "Datos",
    icon: Database,
    problem:
      "La información vive en sistemas distintos y nadie tiene una versión única de la operación.",
    opportunity:
      "Consolidar una fuente única de información para operación y dirección.",
  },
  {
    label: "Dificultad para obtener indicadores",
    score: 8,
    focus: "Datos",
    icon: BarChart3,
    problem:
      "Las decisiones se toman con reportes tardíos o construidos manualmente.",
    opportunity:
      "Habilitar indicadores confiables y actualizados para decidir con rapidez.",
  },
  {
    label: "Falta de integración entre áreas",
    score: 6,
    focus: "Integración",
    icon: Network,
    problem:
      "Cada área opera con su propio proceso y la información se traspasa a mano.",
    opportunity:
      "Conectar procesos y sistemas para eliminar reprocesos y pérdidas de trazabilidad.",
  },
  {
    label: "Procesos comerciales poco eficientes",
    score: 7,
    focus: "Inteligencia artificial",
    icon: Bot,
    problem:
      "El ciclo comercial pierde oportunidades por seguimiento manual e inconsistente.",
    opportunity:
      "Ordenar y asistir el ciclo comercial con automatización e inteligencia aplicada.",
  },
];

const Q2: Option[] = [
  {
    label: "Excel, correos y procesos manuales",
    score: 6,
    focus: "Automatización",
    icon: Workflow,
  },
  {
    label: "Sistemas existentes pero desconectados",
    score: 16,
    focus: "Integración",
    icon: Network,
  },
  {
    label: "Herramientas parcialmente integradas",
    score: 28,
    focus: "Datos",
    icon: Database,
  },
  {
    label: "Sistemas conectados con analítica",
    score: 42,
    focus: "Inteligencia artificial",
    icon: BarChart3,
  },
];

const Q3: Option[] = [
  {
    label: "Reducir costos operativos",
    score: 8,
    focus: "Automatización",
    icon: Workflow,
    opportunity: "Reducir costo por operación estandarizando y automatizando procesos núcleo.",
  },
  {
    label: "Ahorrar tiempo",
    score: 8,
    focus: "Automatización",
    icon: Workflow,
    opportunity: "Recuperar horas del equipo eliminando tareas manuales de alto volumen.",
  },
  {
    label: "Mejorar decisiones",
    score: 12,
    focus: "Datos",
    icon: BarChart3,
    opportunity: "Dar a la dirección indicadores únicos, confiables y oportunos.",
  },
  {
    label: "Aumentar ventas",
    score: 11,
    focus: "Inteligencia artificial",
    icon: Bot,
    opportunity: "Aumentar conversión con seguimiento comercial asistido y medible.",
  },
  {
    label: "Preparar crecimiento",
    score: 14,
    focus: "Integración",
    icon: Network,
    opportunity: "Preparar una arquitectura que soporte más volumen sin sumar fricción.",
  },
];

const QUESTIONS: { title: string; hint: string; options: Option[] }[] = [
  {
    title: "¿Cuál es el principal desafío operativo que enfrenta tu empresa?",
    hint: "Selecciona el que más se parezca a tu realidad actual.",
    options: Q1,
  },
  {
    title: "¿Cómo gestiona actualmente la información y procesos?",
    hint: "Nos ayuda a entender el punto de partida tecnológico.",
    options: Q2,
  },
  {
    title: "¿Qué resultado tendría mayor impacto?",
    hint: "El resultado que la dirección valoraría primero.",
    options: Q3,
  },
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(120),
  email: z.string().trim().email("Email inválido").max(255),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
});

type Picks = [string, string, string];

function useDiagnosis(picks: Picks) {
  return useMemo(() => {
    const o1 = Q1.find((o) => o.label === picks[0]);
    const o2 = Q2.find((o) => o.label === picks[1]);
    const o3 = Q3.find((o) => o.label === picks[2]);

    const index = Math.max(
      12,
      Math.min(100, 18 + (o1?.score ?? 0) + (o2?.score ?? 0) + (o3?.score ?? 0)),
    );
    const level = index < 45 ? "Inicial" : index < 72 ? "En evolución" : "Optimizado";

    const weights: Record<Option["focus"], number> = {
      Automatización: 0,
      Datos: 0,
      Integración: 0,
      "Inteligencia artificial": 0,
    };
    const gap = 100 - index;
    if (o1) weights[o1.focus] += 46;
    if (o2) weights[o2.focus] += 22;
    if (o3) weights[o3.focus] += 30;
    const areas = (Object.keys(weights) as Option["focus"][])
      .map((area) => ({
        area,
        value: Math.min(96, Math.round(12 + weights[area] * 0.55 + gap * 0.35)),
      }))
      .sort((a, b) => b.value - a.value);

    const problem =
      o1?.problem ??
      "Existe fricción operativa que limita la capacidad del equipo y la velocidad del negocio.";

    const opportunity = o3?.opportunity ?? o1?.opportunity ?? "";

    const recommendation =
      level === "Inicial"
        ? `Ordenar y estandarizar los procesos núcleo antes de incorporar nueva tecnología, partiendo por ${areas[0]!.area.toLowerCase()}.`
        : level === "En evolución"
          ? `Conectar lo que ya existe y priorizar ${areas[0]!.area.toLowerCase()} con una hoja de ruta por fases e impacto medible en 90 días.`
          : `Profundizar en ${areas[0]!.area.toLowerCase()} y escalar el modelo operativo con analítica avanzada e inteligencia aplicada.`;

    return { index, level, areas, problem, opportunity, recommendation };
  }, [picks]);
}

export function Diagnostic() {
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<Picks>(["", "", ""]);
  const [showResult, setShowResult] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const d = useDiagnosis(picks);

  const total = QUESTIONS.length;
  const answered = picks.filter(Boolean).length;
  const progress = showResult ? 100 : (answered / total) * 100;

  const choose = (value: string) => {
    setPicks((prev) => {
      const next = [...prev] as Picks;
      next[step] = value;
      return next;
    });
    window.setTimeout(() => {
      if (step < total - 1) setStep(step + 1);
      else setShowResult(true);
    }, 220);
  };

  const reset = () => {
    setPicks(["", "", ""]);
    setStep(0);
    setShowResult(false);
    setSent(false);
  };

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
      `DIAGNÓSTICO RÁPIDO — Madurez ${d.index}/100 (${d.level})`,
      `Desafío principal: ${picks[0]}`,
      `Gestión actual: ${picks[1]}`,
      `Resultado esperado: ${picks[2]}`,
      `Áreas de impacto: ${d.areas.map((a) => `${a.area} ${a.value}%`).join(" · ")}`,
      `Recomendación inicial: ${d.recommendation}`,
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
      "diagnostico-rapido",
    );
    setSubmitting(false);
    if (!ok) {
      toast.error("No pudimos enviar tu solicitud. Inténtalo de nuevo.");
      return;
    }
    setSent(true);
    toast.success("Diagnóstico enviado. Te contactaremos en breve.");
  };

  const q = QUESTIONS[step]!;

  return (
    <Section id="diagnostico" className="border-y border-border bg-secondary/40">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Herramienta</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2.5 text-[clamp(1.45rem,2.6vw,2rem)] font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
              Diagnóstico Rápido MiGenIA™
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
              Tres preguntas, menos de 60 segundos. Entendemos primero tu operación y te
              entregamos un diagnóstico inicial con las oportunidades de mayor impacto.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5 sm:px-7">
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-foreground/5">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                </span>
                <span className="text-[12.5px] font-medium text-foreground">
                  {showResult ? "Diagnóstico Estratégico MiGenIA™" : "Evaluación operativa"}
                </span>
              </div>
              <span className="text-[11px] uppercase tracking-eyebrow text-muted-foreground">
                {showResult ? "Completado" : `Pregunta ${step + 1} de ${total}`}
              </span>
            </div>

            <div className="h-0.5 w-full bg-border">
              <motion.div
                className="h-full bg-primary"
                animate={{ width: `${Math.max(4, progress)}%` }}
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
                      <div className="rounded-xl border border-border bg-secondary/50 p-5">
                        <p className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                          Madurez operacional estimada
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
                          {["Inicial", "En evolución", "Optimizado"].map((l) => (
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
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="rounded-xl border border-border p-4">
                            <p className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                              Problema principal detectado
                            </p>
                            <p className="mt-2 text-[13.5px] leading-relaxed text-foreground">
                              {d.problem}
                            </p>
                          </div>
                          <div className="rounded-xl border border-border p-4">
                            <p className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                              Oportunidad principal
                            </p>
                            <p className="mt-2 text-[13.5px] leading-relaxed text-foreground">
                              {d.opportunity}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                            Áreas de impacto
                          </p>
                          <div className="mt-3 space-y-2.5">
                            {d.areas.map((a, i) => (
                              <div key={a.area} className="flex items-center gap-3">
                                <span className="w-40 shrink-0 text-[13px] text-foreground">
                                  {a.area}
                                </span>
                                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
                                  <motion.div
                                    className="h-full rounded-full bg-foreground/70"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${a.value}%` }}
                                    transition={{ duration: 0.7, delay: 0.1 * i }}
                                  />
                                </div>
                                <span className="w-9 text-right text-[12px] tabular-nums text-muted-foreground">
                                  {a.value}%
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2.5 rounded-xl border border-border bg-secondary/40 p-4">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <div>
                            <p className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
                              Recomendación inicial
                            </p>
                            <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground">
                              {d.recommendation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 rounded-xl border border-border bg-secondary/50 p-5 sm:p-6">
                      {sent ? (
                        <div className="flex flex-col items-center py-4 text-center">
                          <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </span>
                          <p className="mt-4 font-display text-lg font-semibold text-foreground">
                            Solicitud recibida
                          </p>
                          <p className="mt-1.5 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
                            Un consultor de MiGenIA revisará tus respuestas y te contactará para
                            profundizar el diagnóstico.
                          </p>
                          <ButtonAction className="mt-5" variant="outline" onClick={reset}>
                            Volver a empezar
                          </ButtonAction>
                        </div>
                      ) : (
                        <>
                          <p className="text-[13.5px] leading-relaxed text-muted-foreground">
                            Este es un diagnóstico inicial. Déjanos tus datos y preparamos un
                            análisis detallado para tu operación.
                          </p>
                          <form onSubmit={onSubmitContact} className="mt-4 space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div className="space-y-1.5">
                                <Label htmlFor="dq-name">Nombre y apellido *</Label>
                                <Input id="dq-name" name="name" required maxLength={120} />
                              </div>
                              <div className="space-y-1.5">
                                <Label htmlFor="dq-email">Email corporativo *</Label>
                                <Input
                                  id="dq-email"
                                  name="email"
                                  type="email"
                                  required
                                  maxLength={255}
                                />
                              </div>
                              <div className="space-y-1.5">
                                <Label htmlFor="dq-company">Empresa</Label>
                                <Input id="dq-company" name="company" maxLength={160} />
                              </div>
                              <div className="space-y-1.5">
                                <Label htmlFor="dq-phone">Teléfono</Label>
                                <Input id="dq-phone" name="phone" maxLength={40} />
                              </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                              <ButtonAction
                                type="submit"
                                variant="accent"
                                withArrow
                                disabled={submitting}
                              >
                                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                                Solicitar diagnóstico estratégico personalizado
                              </ButtonAction>
                              <ButtonAction variant="ghost" onClick={reset}>
                                Volver a empezar
                              </ButtonAction>
                            </div>
                          </form>
                        </>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`q-${step}`}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -14 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="max-w-2xl text-[clamp(1.05rem,1.9vw,1.3rem)] font-semibold leading-snug tracking-tight text-foreground">
                      {q.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] text-muted-foreground">{q.hint}</p>

                    <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {q.options.map((o) => {
                        const Icon = o.icon;
                        const active = picks[step] === o.label;
                        return (
                          <button
                            key={o.label}
                            type="button"
                            onClick={() => choose(o.label)}
                            className={cn(
                              "group flex items-start gap-3 rounded-xl border p-4 text-left transition-all duration-200",
                              active
                                ? "border-primary bg-primary/5 shadow-card"
                                : "border-border bg-card hover:-translate-y-px hover:border-foreground/25 hover:shadow-card",
                            )}
                          >
                            <span
                              className={cn(
                                "grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-colors",
                                active
                                  ? "bg-primary/10 text-primary"
                                  : "bg-secondary text-muted-foreground group-hover:text-foreground",
                              )}
                            >
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="text-[13.5px] leading-snug text-foreground">
                              {o.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {step > 0 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Anterior
                      </button>
                    )}
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
