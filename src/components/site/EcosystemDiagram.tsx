import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Node = {
  id: string;
  label: string;
  short: string;
  x: number;
  y: number;
};

const NODES: Node[] = [
  { id: "erp", label: "ERP", short: "Operación", x: 96, y: 88 },
  { id: "crm", label: "CRM", short: "Clientes", x: 96, y: 196 },
  { id: "wa", label: "WhatsApp", short: "Canal", x: 96, y: 304 },
  { id: "auto", label: "Automatización", short: "Procesos", x: 300, y: 108 },
  { id: "ai", label: "Inteligencia Artificial", short: "Decisión", x: 300, y: 284 },
  { id: "bi", label: "Business Intelligence", short: "Modelo de datos", x: 300, y: 196 },
  { id: "dash", label: "Dashboard Ejecutivo", short: "Control", x: 508, y: 196 },
];

const EDGES: Array<[string, string]> = [
  ["erp", "auto"],
  ["crm", "auto"],
  ["wa", "auto"],
  ["erp", "bi"],
  ["crm", "bi"],
  ["wa", "ai"],
  ["auto", "bi"],
  ["ai", "bi"],
  ["auto", "ai"],
  ["bi", "dash"],
  ["ai", "dash"],
  ["auto", "dash"],
];

const byId = (id: string) => NODES.find((n) => n.id === id)!;

function path(a: Node, b: Node) {
  const mx = (a.x + b.x) / 2;
  return `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
}

export function EcosystemDiagram({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const isDim = (id: string) =>
    active !== null &&
    active !== id &&
    !EDGES.some(
      ([a, b]) => (a === active && b === id) || (b === active && a === id),
    );

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card shadow-card",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-medium uppercase tracking-eyebrow text-muted-foreground">
            Ecosistema empresarial integrado
          </span>
        </div>
        <span className="hidden text-[11px] tabular-nums text-muted-foreground sm:block">
          7 sistemas · 12 integraciones
        </span>
      </div>

      <div className="relative px-2 py-4 sm:px-4">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
        <svg
          viewBox="0 34 604 324"
          className="relative w-full"
          role="img"
          aria-label="Diagrama de integración entre ERP, CRM, WhatsApp, Automatización, Inteligencia Artificial, Business Intelligence y Dashboard Ejecutivo"
        >
          {EDGES.map(([a, b], i) => {
            const A = byId(a);
            const B = byId(b);
            const d = path(A, B);
            const dim = isDim(a) && isDim(b);
            const lit =
              active !== null && (a === active || b === active);
            return (
              <g key={`${a}-${b}`} opacity={dim ? 0.25 : 1} className="transition-opacity duration-300">
                <path
                  d={d}
                  fill="none"
                  className={lit ? "stroke-primary" : "stroke-border"}
                  strokeWidth={lit ? 1.4 : 1}
                />
                <motion.circle
                  r={2.2}
                  className="fill-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 3.2,
                    delay: i * 0.35,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    ease: "linear",
                  }}
                >
                  <animateMotion
                    dur="3.2s"
                    begin={`${i * 0.35}s`}
                    repeatCount="indefinite"
                    path={d}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                </motion.circle>
              </g>
            );
          })}

          {NODES.map((n, i) => {
            const isHub = n.id === "dash";
            const w = isHub ? 172 : n.x === 300 ? 176 : 150;
            const h = 54;
            const dim = isDim(n.id);
            return (
              <motion.g
                key={n.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: dim ? 0.35 : 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 * i }}
                onMouseEnter={() => setActive(n.id)}
                onMouseLeave={() => setActive(null)}
                className="cursor-default"
              >
                <rect
                  x={n.x - w / 2}
                  y={n.y - h / 2}
                  width={w}
                  height={h}
                  rx={10}
                  className={cn(
                    "fill-background transition-colors duration-300",
                    active === n.id ? "stroke-primary" : "stroke-border",
                  )}
                  strokeWidth={1}
                />
                <circle
                  cx={n.x - w / 2 + 16}
                  cy={n.y}
                  r={3}
                  className={isHub || active === n.id ? "fill-primary" : "fill-muted-foreground"}
                />
                <text
                  x={n.x - w / 2 + 28}
                  y={n.y - 4}
                  className="fill-foreground text-[12px] font-medium"
                  style={{ fontSize: 12.5 }}
                >
                  {n.label}
                </text>
                <text
                  x={n.x - w / 2 + 28}
                  y={n.y + 12}
                  className="fill-muted-foreground"
                  style={{ fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}
                >
                  {n.short.toUpperCase()}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-3 divide-x divide-border border-t border-border text-center">
        {[
          ["Fuentes", "3"],
          ["Capas de proceso", "3"],
          ["Salida", "1"],
        ].map(([label, value]) => (
          <div key={label} className="px-3 py-3">
            <p className="font-display text-base font-semibold tabular-nums text-foreground">
              {value}
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-eyebrow text-muted-foreground">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
