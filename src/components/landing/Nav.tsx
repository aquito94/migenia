import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { openLeadDialog } from "./LeadDialog";

const links = [
  { href: "#services", label: "Metodología" },
  { href: "#roi", label: "Calculadora ROI" },
  { href: "#use-cases", label: "Casos de uso" },
  { href: "#integrations", label: "Integraciones" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass-strong shadow-soft" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-accent grid place-items-center shadow-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold tracking-tight text-base sm:text-lg">
              Agente Inteligente
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Iniciar sesión
            </a>
            <button
              type="button"
              onClick={() => openLeadDialog("nav")}
              className="rounded-full bg-gradient-accent px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              Solicitar Demo
            </button>
          </div>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openLeadDialog("nav_mobile");
              }}
              className="rounded-full bg-gradient-accent px-4 py-2 text-sm font-medium text-primary-foreground text-center"
            >
              Solicitar Demo
            </button>
          </div>
        )}
      </div>
    </header>
  );
}