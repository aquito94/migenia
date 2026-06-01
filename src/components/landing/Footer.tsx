import { Sparkles, Linkedin, Twitter, Youtube, Github } from "lucide-react";

const cols = [
  { t: "Producto", l: ["Capacidades", "Workflows", "Analytics", "Integraciones", "Pricing"] },
  { t: "Soluciones", l: ["Ventas", "Atención al cliente", "Operaciones", "Marketing", "Industrias"] },
  { t: "Integraciones", l: ["WhatsApp", "Salesforce", "HubSpot", "SAP", "Microsoft Teams"] },
  { t: "Empresa", l: ["Sobre nosotros", "Clientes", "Carreras", "Prensa", "Contacto"] },
];

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/5 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-accent grid place-items-center shadow-glow">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold text-lg">Agente Inteligente</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              La plataforma de IA empresarial para automatizar ventas, atención y operaciones a escala global.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[Linkedin, Twitter, Youtube, Github].map((I, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-lg glass grid place-items-center hover:bg-white/5 transition">
                  <I className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.t}>
              <h4 className="text-sm font-semibold mb-3">{c.t}</h4>
              <ul className="space-y-2">
                {c.l.map(i => (
                  <li key={i}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Agente Inteligente. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
            <a href="#" className="hover:text-foreground transition-colors">Términos</a>
            <a href="#" className="hover:text-foreground transition-colors">Seguridad</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}