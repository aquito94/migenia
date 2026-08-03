import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./primitives";
import { ButtonAction } from "./Buttons";
import { openLeadDialog } from "./LeadDialog";
import { cn } from "@/lib/utils";

const links = [
  { href: "#capacidades", label: "Soluciones" },
  { href: "#industrias", label: "Industrias" },
  { href: "#casos", label: "Casos de éxito" },
  { href: "#metodo", label: "Método MiGenIA" },
  { href: "#diferencial", label: "Nosotros" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky inset-x-0 top-0 z-50 bg-background transition-shadow duration-300",
        scrolled ? "border-b border-border/80 shadow-[0_1px_2px_rgba(15,23,42,0.04)]" : "border-b border-transparent",
      )}
    >
      <Container className="max-w-7xl">
        <div className="grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-6 md:flex md:justify-between md:gap-10">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <ButtonAction variant="primary" onClick={() => openLeadDialog("header")}>
              Agenda un diagnóstico
            </ButtonAction>
          </div>

          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="justify-self-end rounded-md p-2 text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="max-w-7xl">
            <div className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <ButtonAction
                className="mt-3 w-full"
                onClick={() => {
                  setOpen(false);
                  openLeadDialog("header_mobile");
                }}
              >
                Agenda un diagnóstico
              </ButtonAction>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
