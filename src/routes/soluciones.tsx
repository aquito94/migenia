import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CapabilityRows } from "@/components/site/CapabilityRows";
import { CTA } from "@/components/site/CTA";
import { Container, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { capabilities } from "@/components/site/data";

const title = "Soluciones empresariales | MiGenIA";
const description =
  "IA aplicada, automatización de procesos, desarrollo de software, business intelligence e integración de sistemas: cinco disciplinas integradas bajo un mismo criterio de ingeniería.";

export const Route = createFileRoute("/soluciones")({
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
  component: Soluciones,
});

function Soluciones() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Soluciones"
        title="Ingeniería aplicada a los problemas que mueven el resultado."
        lead="No partimos de una herramienta. Partimos del objetivo de negocio y construimos la arquitectura mínima suficiente para alcanzarlo, con indicadores desde la primera fase."
      />

      <CapabilityRows withHeading={false} />

      <Section className="border-b border-border bg-secondary/40">
        <Container>
          <SectionHeading
            eyebrow="Entregables"
            title="Qué recibe tu organización en cada frente."
            lead="Documentación, soluciones en producción y capacidades internas. Nada queda como caja negra."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <div className="h-full bg-card p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <c.icon className="h-4.5 w-4.5 shrink-0 text-primary" />
                    <h3 className="min-w-0 font-display text-lg font-semibold">{c.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {c.deliverables.map((d) => (
                      <li key={d} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTA
        title="¿Cuál de estas capacidades necesita tu empresa primero?"
        lead="En el diagnóstico ejecutivo lo definimos con datos de tu operación, no con supuestos."
        source="soluciones_cta"
      />
    </SiteLayout>
  );
}
