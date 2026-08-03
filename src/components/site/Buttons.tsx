import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const styles = {
  primary:
    "bg-foreground text-background px-5 py-2.5 hover:bg-ink hover:-translate-y-px shadow-card",
  accent:
    "bg-primary text-primary-foreground px-5 py-2.5 hover:-translate-y-px hover:bg-primary/90 shadow-card",
  outline:
    "border border-border bg-card px-5 py-2.5 text-foreground hover:bg-secondary hover:-translate-y-px",
  ghost: "px-2 py-1 text-foreground hover:text-primary",
} as const;

type Variant = keyof typeof styles;

export function ButtonLink({
  to,
  href,
  children,
  variant = "primary",
  className,
  withArrow,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
}) {
  const cls = cn(base, styles[variant], className);
  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  );
}

export function ButtonAction({
  children,
  onClick,
  variant = "primary",
  className,
  withArrow,
  type = "button",
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, styles[variant], "disabled:opacity-60", className)}
    >
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </button>
  );
}
