import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./primitives";
import { ButtonAction } from "./Buttons";
import { openLeadDialog } from "./LeadDialog";
import { cn } from "@/lib/utils";

const links = [
  { to: "/soluciones", label: "Soluciones" },
  { to: "/industrias", label: "Industrias" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <Container>
        <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:justify-between">
          <Logo />

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <ButtonAction variant="primary" onClick={() => openLeadDialog("header")}>
              Agendar diagnóstico
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
          <Container>
            <div className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <ButtonAction
                className="mt-3 w-full"
                onClick={() => {
                  setOpen(false);
                  openLeadDialog("header_mobile");
                }}
              >
                Agendar diagnóstico
              </ButtonAction>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
