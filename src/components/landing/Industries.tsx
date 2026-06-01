import { ShoppingBag, HeartPulse, Home, Banknote, Truck, Headphones, Signal, Briefcase } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const inds = [
  { i: ShoppingBag, t: "Retail", d: "Carrito recuperado, atención post-venta y upsell automatizado." },
  { i: HeartPulse, t: "Salud", d: "Agendamiento, recordatorios y triage conversacional seguro." },
  { i: Home, t: "Inmobiliario", d: "Calificación de prospectos y visitas agendadas 24/7." },
  { i: Banknote, t: "Finanzas", d: "Onboarding, cobranza inteligente y soporte regulado." },
  { i: Truck, t: "Logística", d: "Tracking conversacional y resolución proactiva de incidencias." },
  { i: Headphones, t: "Atención al cliente", d: "Soporte omnicanal con resolución autónoma de alto volumen." },
  { i: Signal, t: "Telecomunicaciones", d: "Activaciones, soporte técnico y retención asistida por IA." },
  { i: Briefcase, t: "Servicios profesionales", d: "Captura de leads, propuestas y agenda comercial inteligente." },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Industrias"
          title={<>IA empresarial diseñada<br/>para cada sector.</>}
          subtitle="Casos de uso probados con resultados de negocio reales."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {inds.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.04}>
              <div className="group relative glass rounded-2xl p-5 h-full hover:bg-white/[0.06] transition overflow-hidden">
                <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
                <div className="relative">
                  <div className="h-10 w-10 rounded-lg glass-strong grid place-items-center mb-3">
                    <s.i className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="font-semibold">{s.t}</h4>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}