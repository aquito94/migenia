import { useMemo, useState, type FormEvent } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Bot, TrendingDown, Sparkles, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, SectionHeader } from "./Section";

const HUMAN_COST = 482;
const AI_COST = 150;

const fmt = (n: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export function RoiAudit() {
  const [count, setCount] = useState<number>(3);
  const humanTotal = useMemo(() => count * HUMAN_COST, [count]);
  const savings = useMemo(() => Math.max(0, humanTotal - AI_COST), [humanTotal]);

  return (
    <section id="roi" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Calculadora ROI"
          title={<>Calcula tu ahorro con IA<br/>en menos de 30 segundos.</>}
          subtitle="Compara el costo real de un equipo humano contra un Agente Inteligente operando 24/7."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <Calculator count={count} setCount={setCount} humanTotal={humanTotal} savings={savings} />
          </Reveal>
          <Reveal delay={0.1}>
            <AuditForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Calculator({
  count,
  setCount,
  humanTotal,
  savings,
}: {
  count: number;
  setCount: (n: number) => void;
  humanTotal: number;
  savings: number;
}) {
  return (
    <div className="relative h-full glass-strong rounded-3xl p-7 sm:p-9 shadow-soft overflow-hidden">
      <div className="absolute -top-32 -left-24 h-64 w-64 rounded-full bg-gradient-accent opacity-15 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-accent">Simulador</p>
            <h3 className="text-2xl font-semibold mt-1">Costo real vs IA</h3>
          </div>
          <div className="h-10 w-10 rounded-xl bg-gradient-accent grid place-items-center shadow-glow">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-end justify-between mb-3">
            <Label className="text-sm text-muted-foreground">Asistentes a contratar</Label>
            <span className="text-3xl font-semibold text-gradient">{count}</span>
          </div>
          <Slider
            value={[count]}
            min={1}
            max={10}
            step={1}
            onValueChange={(v) => setCount(v[0] ?? 1)}
            className="my-3"
          />
          <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
            <span>1</span><span>5</span><span>10</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-8">
          {/* Human */}
          <div className="relative rounded-2xl p-5 border border-destructive/30 bg-destructive/5">
            <div className="flex items-center gap-2 text-destructive">
              <Users className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Equipo humano</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{count} {count === 1 ? "asistente" : "asistentes"} × {fmt(HUMAN_COST)}</p>
            <p className="mt-1 text-2xl sm:text-3xl font-semibold text-destructive">
              <AnimatedNumber value={humanTotal} />
              <span className="text-xs font-normal text-muted-foreground"> /mes</span>
            </p>
          </div>
          {/* AI */}
          <div className="relative rounded-2xl p-5 border border-accent/30 bg-accent/5">
            <div className="flex items-center gap-2 text-accent">
              <Bot className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Agente de IA</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Capacidad 24/7 ilimitada</p>
            <p className="mt-1 text-2xl sm:text-3xl font-semibold text-foreground">
              Desde {fmt(AI_COST)}
              <span className="text-xs font-normal text-muted-foreground"> /mes</span>
            </p>
          </div>
        </div>

        {/* Savings */}
        <div className="relative mt-5 rounded-2xl p-6 text-center overflow-hidden bg-gradient-accent/10 border border-accent/40 shadow-glow">
          <div className="absolute inset-0 bg-gradient-accent opacity-10" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-accent">
              <TrendingDown className="h-3.5 w-3.5" />
              Ahorro mensual estimado
            </div>
            <p className="mt-2 text-4xl sm:text-5xl font-semibold text-gradient">
              <AnimatedNumber value={savings} />
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Equivalente a {fmt(savings * 12)} al año reinvertibles en crecimiento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="inline-block"
    >
      {fmt(value)}
    </motion.span>
  );
}

type LeadData = {
  nombre: string;
  negocio: string;
  celular: string;
  email: string;
  redes: string;
};

function AuditForm() {
  const [data, setData] = useState<LeadData>({ nombre: "", negocio: "", celular: "", email: "", redes: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof LeadData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!data.nombre.trim() || !data.negocio.trim() || !data.celular.trim() || !data.email.trim()) {
      setError("Completa todos los campos obligatorios.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }
    setStatus("loading");
    try {
      // TODO: conectar a webhook externo o tabla de Supabase 'leads_auditoria'
      // await fetch('/api/public/lead-auditoria', { method: 'POST', body: JSON.stringify(data) })
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
    } catch {
      setStatus("error");
      setError("No se pudo enviar. Intenta nuevamente.");
    }
  };

  return (
    <div id="audit" className="relative h-full glass-strong rounded-3xl p-7 sm:p-9 shadow-soft overflow-hidden">
      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-accent opacity-15 blur-3xl" />
      <div className="relative">
        <p className="text-xs uppercase tracking-wider text-accent">Auditoría gratuita</p>
        <h3 className="mt-1 text-2xl font-semibold">Diagnóstico de IA para tu negocio</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Recibe un análisis personalizado de las oportunidades de automatización de tu operación. 100% gratuito.
        </p>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 rounded-2xl border border-accent/40 bg-accent/5 p-6 text-center shadow-glow"
            >
              <CheckCircle2 className="h-10 w-10 text-accent mx-auto" />
              <p className="mt-3 text-lg font-semibold text-gradient">¡Diagnóstico en camino!</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Nos comunicaremos contigo al correo proporcionado.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={onSubmit}
              className="mt-6 space-y-3"
              noValidate
            >
              <Field label="Nombre de contacto*" id="nombre" value={data.nombre} onChange={update("nombre")} placeholder="Ej. María Pérez" autoComplete="name" />
              <Field label="Nombre del negocio*" id="negocio" value={data.negocio} onChange={update("negocio")} placeholder="Ej. Clínica Bienestar" autoComplete="organization" />
              <div className="grid sm:grid-cols-2 gap-3">
                <Field label="WhatsApp*" id="celular" value={data.celular} onChange={update("celular")} placeholder="+57 300 000 0000" type="tel" autoComplete="tel" />
                <Field label="Correo electrónico*" id="email" value={data.email} onChange={update("email")} placeholder="tu@empresa.com" type="email" autoComplete="email" />
              </div>
              <Field label="Redes sociales (opcional)" id="redes" value={data.redes} onChange={update("redes")} placeholder="@tunegocio / sitio web" />

              {error && <p className="text-xs text-destructive">{error}</p>}

              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative w-full overflow-hidden rounded-full bg-gradient-accent px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition disabled:opacity-70"
              >
                <span className="absolute inset-0 animate-shimmer opacity-60" />
                <span className="relative inline-flex items-center justify-center gap-2">
                  {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                  Descubre en 5 minutos cuánto tiempo está perdiendo tu negocio
                </span>
              </button>
              <p className="text-[10px] text-muted-foreground text-center">
                Al enviar aceptas ser contactado por nuestro equipo. Nunca compartimos tu información.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  ...props
}: { label: string; id: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label htmlFor={id} className="text-xs text-muted-foreground">{label}</Label>
      <Input
        id={id}
        {...props}
        className="mt-1.5 bg-white/5 border-white/10 focus-visible:ring-accent/50 focus-visible:border-accent/40 text-sm"
      />
    </div>
  );
}