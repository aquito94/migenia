import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type N = { id: string; label: string; x: number; y: number; kind: "source" | "layer" | "out" };

const R = 150;
const CX = 300;
const CY = 300;

/* radial arrangement around the integration layer */
const RING: Array<{ id: string; label: string; angle: number }> = [
  { id: "erp", label: "ERP", angle: -135 },
  { id: "crm", label: "CRM", angle: -90 },
  { id: "wa", label: "WhatsApp", angle: -45 },
  { id: "int", label: "Sistemas internos", angle: 180 },
  { id: "data", label: "Datos", angle: 0 },
  { id: "auto", label: "Automatización", angle: 135 },
  { id: "ai", label: "Inteligencia Artificial", angle: 45 },
];

const NODES: N[] = RING.map(({ id, label, angle }) => {
  const rad = (angle * Math.PI) / 180;
  return {
    id,
    label,
    x: CX + Math.cos(rad) * R * 1.28,
    y: CY + Math.sin(rad) * R,
    kind: (["erp", "crm", "wa", "int"].includes(id) ? "source" : "layer") as N["kind"],
  };
});

const HUB: N = { id: "hub", label: "Capa de integración", x: CX, y: CY, kind: "layer" };
const OUT: N = { id: "dash", label: "Dashboard Ejecutivo", x: CX, y: CY + 220, kind: "out" };

const ALL = [...NODES, HUB, OUT];
const byId = (id: string) => ALL.find((n) => n.id === id)!;

const EDGES: Array<[string, string]> = [
  ...RING.map(({ id }) => ["hub", id] as [string, string]),
  ["hub", "dash"],
  ["data", "ai"],
  ["auto", "ai"],
];

function curve(a: N, b: N) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const k = 0.16;
  return `M ${a.x} ${a.y} Q ${mx - dy * k} ${my + dx * k}, ${b.x} ${b.y}`;
}

export function ArchitectureDiagram({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const related = (id: string) =>
    active === null ||
    active === id ||
    EDGES.some(([a, b]) => (a === active && b === id) || (b === active && a === id));

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
            Arquitectura tecnológica empresarial
          </span>
        </div>
        <span className="hidden text-[11px] tabular-nums text-muted-foreground sm:block">
          Vista lógica
        </span>
      </div>

      <div className="relative px-3 py-5 sm:px-6">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
        <svg
          viewBox="10 110 580 440"
          className="relative w-full"
          role="img"
          aria-label="Arquitectura que conecta ERP, CRM, WhatsApp, sistemas internos, datos, inteligencia artificial y automatización con un dashboard ejecutivo"
        >
          <circle
            cx={CX}
            cy={CY}
            r={R * 1.05}
            className="fill-none stroke-border"
            strokeDasharray="3 6"
          />

          {EDGES.map(([a, b], i) => {
            const A = byId(a);
            const B = byId(b);
            const d = curve(A, B);
            const lit = active !== null && (a === active || b === active);
            const dim = !related(a) && !related(b);
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
                <circle r={2.1} className="fill-primary">
                  <animateMotion
                    dur="4s"
                    begin={`${i * 0.4}s`}
                    repeatCount="indefinite"
                    path={d}
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="4s"
                    begin={`${i * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {[...NODES, OUT].map((n, i) => {
            const w = n.kind === "out" ? 210 : Math.max(112, n.label.length * 7.4 + 34);
            const h = n.kind === "out" ? 58 : 46;
            const dim = !related(n.id);
            return (
              <motion.g
                key={n.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: dim ? 0.3 : 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                onMouseEnter={() => setActive(n.id)}
                onMouseLeave={() => setActive(null)}
              >
                <rect
                  x={n.x - w / 2}
                  y={n.y - h / 2}
                  width={w}
                  height={h}
                  rx={10}
                  className={cn(
                    "transition-colors duration-300",
                    n.kind === "out" ? "fill-secondary/60" : "fill-background",
                    active === n.id ? "stroke-primary" : "stroke-border",
                  )}
                  strokeWidth={1}
                />
                <circle
                  cx={n.x - w / 2 + 15}
                  cy={n.y}
                  r={2.8}
                  className={
                    n.kind === "source" ? "fill-muted-foreground" : "fill-primary"
                  }
                />
                <text
                  x={n.x - w / 2 + 26}
                  y={n.y + (n.kind === "out" ? -3 : 4)}
                  className="fill-foreground"
                  style={{ fontSize: 12.5, fontWeight: 500 }}
                >
                  {n.label}
                </text>
                {n.kind === "out" && (
                  <text
                    x={n.x - w / 2 + 26}
                    y={n.y + 13}
                    className="fill-muted-foreground"
                    style={{ fontSize: 10, letterSpacing: "0.08em" }}
                  >
                    DECISIONES CON UNA SOLA FUENTE DE VERDAD
                  </text>
                )}
              </motion.g>
            );
          })}

          {/* hub */}
          <motion.g
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          >
            <circle cx={CX} cy={CY} r={58} className="fill-none stroke-primary/30">
              <animate attributeName="r" values="58;78" dur="3.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0" dur="3.4s" repeatCount="indefinite" />
            </circle>
            <rect
              x={CX - 84}
              y={CY - 30}
              width={168}
              height={60}
              rx={12}
              className="fill-background stroke-primary/50"
              strokeWidth={1.2}
            />
            <text
              x={CX}
              y={CY - 4}
              textAnchor="middle"
              className="fill-foreground"
              style={{ fontSize: 13, fontWeight: 600 }}
            >
              Capa de integración
            </text>
            <text
              x={CX}
              y={CY + 13}
              textAnchor="middle"
              className="fill-muted-foreground"
              style={{ fontSize: 9.5, letterSpacing: "0.1em" }}
            >
              DISEÑADA POR MIGENIA
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
