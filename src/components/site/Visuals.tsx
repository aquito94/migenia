import { motion } from "motion/react";

/* Abstract, engineering-flavoured visuals. No robots, no brains, no clichés. */

export function PanelFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function FlowVisual() {
  const nodes = ["Origen de datos", "Motor de decisión", "Sistema de negocio"];
  return (
    <PanelFrame>
      <div className="space-y-3">
        {nodes.map((n, i) => (
          <div key={n} className="flex items-center gap-3">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-border bg-background font-display text-[11px] font-semibold text-muted-foreground">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1 rounded-lg border border-border bg-background px-3.5 py-2.5">
              <p className="truncate text-sm font-medium">{n}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {["Validación", "Trazabilidad", "Escalabilidad"].map((t) => (
          <div
            key={t}
            className="rounded-md border border-border bg-background px-2 py-1.5 text-center text-[11px] text-muted-foreground"
          >
            {t}
          </div>
        ))}
      </div>
    </PanelFrame>
  );
}

export function MetricsVisual() {
  const bars = [38, 52, 47, 64, 71, 66, 84, 92];
  return (
    <PanelFrame>
      <div className="flex items-baseline justify-between">
        <p className="font-display text-sm font-semibold">Indicador operativo</p>
        <p className="text-xs text-muted-foreground">12 meses</p>
      </div>
      <div className="mt-6 flex h-36 items-end gap-2">
        {bars.map((b, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${b}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={`flex-1 rounded-t ${i === bars.length - 1 ? "bg-primary" : "bg-secondary"}`}
          />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-4">
        <div>
          <p className="font-display text-xl font-semibold">-34%</p>
          <p className="text-xs text-muted-foreground">Costo por transacción</p>
        </div>
        <div>
          <p className="font-display text-xl font-semibold">+2.1x</p>
          <p className="text-xs text-muted-foreground">Capacidad sin nuevo headcount</p>
        </div>
      </div>
    </PanelFrame>
  );
}

export function IntegrationVisual() {
  const systems = ["ERP", "CRM", "E-commerce", "BI", "Contabilidad", "WhatsApp API"];
  return (
    <PanelFrame>
      <div className="grid grid-cols-3 gap-2.5">
        {systems.map((s) => (
          <div
            key={s}
            className="rounded-lg border border-border bg-background px-2 py-4 text-center text-xs font-medium text-muted-foreground"
          >
            {s}
          </div>
        ))}
      </div>
      <div className="relative mt-5 rounded-xl border border-primary/25 bg-primary/[0.06] px-4 py-4 text-center">
        <p className="font-display text-sm font-semibold text-foreground">
          Capa de integración MiGenIA
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Un solo flujo de información, sin islas de datos
        </p>
      </div>
    </PanelFrame>
  );
}

export function CodeVisual() {
  const lines = [
    "requisito → objetivo de negocio",
    "arquitectura → modular y auditable",
    "entrega → iterativa, con QA",
    "operación → monitoreo y soporte",
  ];
  return (
    <PanelFrame>
      <div className="space-y-2.5 font-mono text-[12.5px]">
        {lines.map((l, i) => (
          <div key={l} className="flex gap-3">
            <span className="w-4 shrink-0 text-right text-muted-foreground/60">{i + 1}</span>
            <span className="min-w-0 text-foreground/85">{l}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {["Cloud", "APIs", "Seguridad", "Documentación"].map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </PanelFrame>
  );
}
