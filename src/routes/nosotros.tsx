import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Method } from "@/components/site/Method";
import { CTA } from "@/components/site/CTA";
import { Container, Reveal, Section, SectionHeading } from "@/components/site/primitives";

const title = "Nosotros | MiGenIA, firma de ingeniería tecnológica";
const description =
  "Somos ingenieros y consultores que entienden el negocio antes que la tecnología. Conoce los principios y el método con que MiGenIA implementa transformación empresarial.";

const principles = [
  {
    t: "El negocio primero",
    d: "Ninguna decisión técnica se toma sin entender su efecto en margen, capacidad, riesgo o experiencia del cliente.",
  },
  {
    t: "Ingeniería, no improvisación",
    d: "Arquitectura documentada, control de versiones, pruebas y despliegues controlados. Lo que construimos se puede auditar y mantener.",
  },
  {
    t: "Resultados medibles",
    d: "Definimos indicadores antes de empezar. Si una fase no mueve un número relevante, se replantea.",
  },
  {
    t: "Sin dependencia forzada",
    d: "No vendemos licencias propias. La solución queda en tu infraestructura y tu equipo puede operarla.",
  },
  {
    t: "Claridad ejecutiva",
    d: "Hablamos el idioma del comité de dirección: alcance, inversión, riesgos, retorno y plazos.",
  },
  {
    t: "Continuidad operativa",
    d: "Implementamos por fases para que la operación nunca se detenga durante la transformación.",
  },
];

const disciplines = [
  "Ingeniería de software",
  "Arquitectura de datos",
  "Inteligencia artificial aplicada",
  "Automatización de procesos",
  "Business Intelligence",
  "Integración de sistemas",
  "Gestión del cambio",
  "Seguridad y cumplimiento",
];

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nosotros"
        title="Entendemos el negocio antes que la tecnología."
        lead="MiGenIA es una firma de ingeniería tecnológica. Reunimos ingenieros de software, arquitectos de datos y consultores de negocio en un mismo equipo, para que la solución técnica y la decisión empresarial se diseñen juntas."
      />

      <Section className="border-b border-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="min-w-0">
                <SectionHeading eyebrow="Nuestra razón de ser" title="Tecnología con propósito económico." />
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                  <p>
                    La mayoría de las inversiones tecnológicas fallan por la misma razón: se elige
                    la herramienta antes de comprender el problema. El resultado son plataformas
                    costosas que nadie usa y equipos escépticos frente al cambio.
                  </p>
                  <p>
                    Nacimos para invertir ese orden. Primero medimos y entendemos la operación, la
                    economía del negocio y las restricciones reales de tu organización. Luego
                    diseñamos la solución mínima suficiente y la implementamos por fases, dejando
                    resultados visibles en cada una.
                  </p>
                  <p>
                    Trabajamos con CEOs, gerentes generales y directores de tecnología, operaciones,
                    comercial y finanzas. Nuestro compromiso no es entregar un sistema: es mover un
                    indicador.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="min-w-0 rounded-2xl border border-border bg-card p-7 shadow-card sm:p-9">
                <p className="font-display text-sm font-semibold">Disciplinas del equipo</p>
                <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                  {disciplines.map((d) => (
                    <div key={d} className="bg-background px-4 py-4 text-sm text-foreground/85">
                      {d}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  Un equipo multidisciplinario asignado por proyecto, con un responsable técnico y
                  un responsable de negocio como contrapartes permanentes de la dirección.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border">
        <Container>
          <SectionHeading
            eyebrow="Principios"
            title="Seis criterios que ordenan cada proyecto."
            lead="Son la base de cómo decidimos, priorizamos y entregamos."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.04}>
                <div className="h-full bg-card p-7">
                  <h3 className="font-display text-base font-semibold">{p.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Method />

      <CTA
        title="Trabajemos juntos en tu próxima decisión tecnológica."
        lead="Te acompañamos desde el diagnóstico hasta la operación, con responsabilidad sobre el resultado."
        source="nosotros_cta"
      />
    </SiteLayout>
  );
}
