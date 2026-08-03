import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { IndustriesGrid } from "@/components/site/IndustriesGrid";
import { CTA } from "@/components/site/CTA";
import { Container, Reveal, Section, SectionHeading, Stat } from "@/components/site/primitives";

const title = "Industrias que atendemos | MiGenIA";
const description =
  "Retail, servicios financieros, manufactura y logística, salud, servicios profesionales y sector público: soluciones tecnológicas adaptadas al contexto de cada industria.";

const cases = [
  {
    sector: "Distribución mayorista",
    challenge: "Pedidos por múltiples canales, digitados manualmente por seis personas.",
    solution:
      "Capa de integración entre canales de venta y ERP, con validación automática de stock, precios y crédito.",
    results: ["-72% tiempo de procesamiento", "-90% errores de digitación", "Sin ampliar el equipo"],
  },
  {
    sector: "Servicios financieros",
    challenge: "Onboarding de clientes con revisión documental 100% manual.",
    solution:
      "Automatización del flujo con extracción y validación asistida por IA, más trazabilidad para auditoría.",
    results: ["De 4 días a 6 horas", "Cobertura de auditoría total", "+38% conversión de solicitudes"],
  },
  {
    sector: "Manufactura",
    challenge: "Gerencia sin visibilidad consolidada de producción, mermas y costos.",
    solution:
      "Modelo de datos unificado y tableros ejecutivos por planta, línea y turno, actualizados a diario.",
    results: ["Decisiones semanales, no mensuales", "-18% mermas en 2 trimestres", "KPIs únicos por área"],
  },
];

export const Route = createFileRoute("/industrias")({
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
  component: Industrias,
});

function Industrias() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industrias"
        title="Cada sector tiene su propia física operativa."
        lead="Trabajamos con empresas medianas y grandes en sectores donde el volumen, la regulación o la complejidad operativa hacen que la tecnología sea una decisión de dirección."
      >
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-3">
          <Stat value="6" label="Industrias con experiencia comprobada" />
          <Stat value="+40" label="Proyectos implementados" />
          <Stat value="24 h" label="Tiempo de respuesta a nuevas solicitudes" />
        </div>
      </PageHero>

      <IndustriesGrid />

      <Section className="border-b border-border bg-secondary/40">
        <Container>
          <SectionHeading
            eyebrow="Casos representativos"
            title="Del problema operativo al resultado de negocio."
            lead="Ejemplos representativos del tipo de trabajo que ejecutamos. Los nombres se omiten por acuerdos de confidencialidad."
          />
          <div className="mt-14 space-y-5">
            {cases.map((c, i) => (
              <Reveal key={c.sector} delay={i * 0.06}>
                <article className="grid gap-8 rounded-2xl border border-border bg-card p-7 shadow-card sm:p-9 lg:grid-cols-3">
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-eyebrow text-muted-foreground">
                      {c.sector}
                    </p>
                    <h3 className="mt-4 font-display text-lg font-semibold text-balance">
                      {c.challenge}
                    </h3>
                  </div>
                  <p className="min-w-0 text-sm leading-relaxed text-muted-foreground">
                    {c.solution}
                  </p>
                  <ul className="min-w-0 space-y-2.5 lg:border-l lg:border-border lg:pl-8">
                    {c.results.map((r) => (
                      <li key={r} className="flex gap-2.5 text-sm font-medium text-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTA
        title="¿Tu desafío se parece a alguno de estos?"
        lead="Conversemos con datos de tu operación y definamos la vía más corta al resultado."
        source="industrias_cta"
      />
    </SiteLayout>
  );
}
