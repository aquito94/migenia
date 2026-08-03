import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./primitives";

const columns = [
  {
    title: "Soluciones",
    links: [
      { label: "Inteligencia Artificial aplicada", to: "/soluciones" },
      { label: "Automatización de procesos", to: "/soluciones" },
      { label: "Desarrollo de software", to: "/soluciones" },
      { label: "Business Intelligence", to: "/soluciones" },
      { label: "Integración de sistemas", to: "/soluciones" },
    ],
  },
  {
    title: "Industrias",
    links: [
      { label: "Retail y distribución", to: "/industrias" },
      { label: "Servicios financieros", to: "/industrias" },
      { label: "Manufactura y logística", to: "/industrias" },
      { label: "Salud", to: "/industrias" },
      { label: "Servicios profesionales", to: "/industrias" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { label: "Nosotros", to: "/nosotros" },
      { label: "Metodología", to: "/nosotros" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="min-w-0">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Firma de ingeniería tecnológica. Diseñamos, desarrollamos e implementamos
              soluciones empresariales que convierten tecnología en resultados de negocio.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:contacto@migenia.com"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" />
                contacto@migenia.com
              </a>
              <a
                href="https://wa.me/593992760828?text=Quiero%20transformar%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +593 99 276 0828
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4 shrink-0" />
                LinkedIn
              </a>
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title} className="min-w-0">
              <h4 className="font-display text-sm font-semibold text-foreground">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MiGenIA. Todos los derechos reservados.</p>
          <p>Ingeniería tecnológica para empresas medianas y grandes.</p>
        </div>
      </Container>
    </footer>
  );
}
