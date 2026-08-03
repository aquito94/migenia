import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Node = {
  id: string;
  label: string;
  short: string;
  x: number;
  y: number;
  col: 0 | 1 | 2;
};

/* Column 0: fuentes empresariales · Column 1: capa de proceso · Column 2: salida */
const NODES: Node[] = [
  { id: "erp", label: "ERP", short: "Operación", x: 92, y: 108, col: 0 },
  { id: "crm", label: "CRM", short: "Clientes", x: 92, y: 234, col: 0 },
  { id: "db", label: "Datos", short: "Registro", x: 92, y: 360, col: 0 },
  { id: "auto", label: "Automatización", short: "Procesos", x: 306, y: 160, col: 1 },
  { id: "ai", label: "Inteligencia Artificial", short: "Decisión", x: 306, y: 308, col: 1 },
  { id: "dash", label: "Dashboard Ejecutivo", short: "Control", x: 514, y: 234, col: 2 },
];

const EDGES: Array<[string, string]> = [
  ["erp", "auto"],
  ["crm", "auto"],
  ["db", "auto"],
  ["erp", "ai"],
  ["crm", "ai"],
  ["db", "ai"],
  ["auto", "dash"],
  ["ai", "dash"],
];

const byId = (id: string) => NODES.find((n) => n.id === id)!;

function path(a: Node, b: Node) {
  const mx = (a.x + b.x) / 2;
  return `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
}

const widthFor = (n: Node) => (n.col === 2 ? 176 : n.col === 1 ? 168 : 148);

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
            Arquitectura tecnológica conectada
          </span>
        </div>
        <span className="hidden text-[11px] tabular-nums text-muted-foreground sm:block">
          6 sistemas · 8 conexiones
        </span>
      </div>

      <div className="relative px-2 py-6 sm:px-5">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
        <svg
          viewBox="0 20 616 428"
          className="relative w-full"
          role="img"
          aria-label="Diagrama de arquitectura que conecta ERP, CRM, WhatsApp, Correo y Base de Datos con Automatización e Inteligencia Artificial hacia un Dashboard Ejecutivo"
        >
          {EDGES.map(([a, b], i) => {
            const A = byId(a);
            const B = byId(b);
            const d = path(A, B);
            const dim = isDim(a) && isDim(b);
            const lit = active !== null && (a === active || b === active);
            return (
              <g
                key={`${a}-${b}`}
                opacity={dim ? 0.2 : 1}
                className="transition-opacity duration-300"
              >
                <path
                  d={d}
                  fill="none"
                  className={lit ? "stroke-primary" : "stroke-border"}
                  strokeWidth={lit ? 1.4 : 1}
                />
                <circle r={2.1} className="fill-primary" opacity={0}>
                  <animateMotion
                    dur="3.6s"
                    begin={`${i * 0.3}s`}
                    repeatCount="indefinite"
                    path={d}
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="3.6s"
                    begin={`${i * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {NODES.map((n, i) => {
            const isHub = n.id === "dash";
            const w = widthFor(n);
            const h = 52;
            const dim = isDim(n.id);
            return (
              <motion.g
                key={n.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: dim ? 0.32 : 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06 * i }}
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
                  className={
                    isHub || active === n.id
                      ? "fill-primary"
                      : "fill-muted-foreground"
                  }
                />
                <text
                  x={n.x - w / 2 + 28}
                  y={n.y - 3}
                  className="fill-foreground font-medium"
                  style={{ fontSize: 12.5 }}
                >
                  {n.label}
                </text>
                <text
                  x={n.x - w / 2 + 28}
                  y={n.y + 13}
                  className="fill-muted-foreground"
                  style={{
                    fontSize: 9.5,
                    letterSpacing: "0.06em",
                  }}
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
          ["Capas de proceso", "2"],
          ["Salida ejecutiva", "1"],
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
