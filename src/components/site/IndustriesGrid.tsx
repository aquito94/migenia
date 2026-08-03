import { Container, Reveal, Section, SectionHeading } from "./primitives";
import { industries } from "./data";
import { ButtonLink } from "./Buttons";

export function IndustriesGrid({
  limit,
  withCta = false,
}: {
  limit?: number;
  withCta?: boolean;
}) {
  const list = limit ? industries.slice(0, limit) : industries;
  return (
    <Section className="border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Industrias"
          title="Conocemos el lenguaje de tu sector."
          lead="El valor de una solución depende del contexto. Adaptamos arquitectura, indicadores y prioridades a la realidad de cada industria."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.05}>
              <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <h3 className="font-display text-lg font-semibold text-balance">{ind.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {ind.challenge}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                  {ind.work.map((w) => (
                    <li key={w} className="flex gap-2.5 text-sm text-foreground/85">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {w}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {withCta && (
          <Reveal>
            <div className="mt-14 flex justify-center">
              <ButtonLink to="/industrias" variant="outline" withArrow>
                Ver todas las industrias
              </ButtonLink>
            </div>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
