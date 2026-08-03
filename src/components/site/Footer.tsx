import { Container } from "./primitives";
import logo from "@/assets/migenia-logo.png.asset.json";

const solutions = [
  { label: "Inteligencia Artificial Empresarial", href: "#capacidades" },
  { label: "Automatización Inteligente", href: "#capacidades" },
  { label: "Business Intelligence", href: "#capacidades" },
  { label: "Arquitectura e Integración", href: "#capacidades" },
];

const company = [
  { label: "Método MiGenIA", href: "#metodo" },
  { label: "Transformación", href: "#transformacion" },
  { label: "Casos", href: "#casos" },
];


function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground/45">
      {children}
    </h3>
  );
}

const linkClass =
  "text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground";

export function Footer() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <Container className="max-w-7xl">
        <div className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-16">
          <div className="min-w-0">
            <a href="#top" aria-label="MiGenIA — inicio" className="inline-flex">
              <img
                src={logo.url}
                alt="MiGenIA"
                width={190}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Ingeniería tecnológica para empresas que buscan operar mejor.
            </p>
          </div>

          <nav className="min-w-0" aria-label="Soluciones">
            <ColumnTitle>Soluciones</ColumnTitle>
            <ul className="mt-6 space-y-3.5">
              {solutions.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className={linkClass}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="min-w-0" aria-label="Empresa">
            <ColumnTitle>Empresa</ColumnTitle>
            <ul className="mt-6 space-y-3.5">
              {company.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className={linkClass}>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <ColumnTitle>Contacto</ColumnTitle>
            <ul className="mt-6 space-y-3.5">
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event("open-lead-dialog"))}
                  className="text-sm font-medium text-primary-foreground underline decoration-primary-foreground/30 underline-offset-4 transition-colors hover:decoration-primary-foreground"
                >
                  Agenda un diagnóstico
                </button>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/migenia"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={linkClass}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:contacto@migenia.com" className={linkClass}>
                  Correo electrónico
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-primary-foreground/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-primary-foreground/45">
            © {new Date().getFullYear()} MiGenIA. Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-foreground/45">
            Ingeniería · Automatización · Inteligencia de datos
          </p>
        </div>
      </Container>
    </footer>
  );
}
