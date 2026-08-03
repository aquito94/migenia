import { Check, Minus } from "lucide-react";
import { Container, Reveal, Section, SectionHeading } from "./primitives";

const notThis = [
  "Vender licencias o herramientas de IA",
  "Proyectos tecnológicos sin caso de negocio",
  "Pilotos eternos que nunca llegan a producción",
];

const thisIs = [
  "Entender la economía del negocio antes de proponer tecnología",
  "Ingeniería de soluciones integradas a tus sistemas y procesos",
  "Resultados medibles por fase, con responsables e indicadores",
];

export function Positioning() {
  return (
    <Section className="border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Posicionamiento"
          title="No vendemos tecnología. Diseñamos resultados de negocio."
          lead="MiGenIA es una firma de ingeniería tecnológica. Nuestra conversación inicial no es sobre modelos ni plataformas: es sobre márgenes, capacidad, riesgo y crecimiento."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-secondary/60 p-7 sm:p-9">
              <p className="font-display text-sm font-semibold text-muted-foreground">
                Lo que no hacemos
              </p>
              <ul className="mt-6 space-y-4">
                {notThis.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card sm:p-9">
              <p className="font-display text-sm font-semibold text-foreground">Cómo trabajamos</p>
              <ul className="mt-6 space-y-4">
                {thisIs.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
