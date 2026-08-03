import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Clock, Mail, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Container, Eyebrow, Reveal, Section } from "@/components/site/primitives";
import { LeadForm } from "@/components/site/LeadDialog";
import { ButtonLink } from "@/components/site/Buttons";

const title = "Contacto | Agenda un diagnóstico ejecutivo con MiGenIA";
const description =
  "Agenda una sesión de diagnóstico ejecutivo con MiGenIA. Analizamos tu operación y definimos dónde la tecnología genera valor medible para tu empresa.";

const expect = [
  "Sesión de 45 minutos con un consultor senior y un ingeniero.",
  "Revisión de tus objetivos, procesos y sistemas actuales.",
  "Identificación de 2 a 3 oportunidades priorizadas por retorno.",
  "Resumen escrito con próximos pasos, sin compromiso comercial.",
];

export const Route = createFileRoute("/contacto")({
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
  component: Contacto,
});

function Contacto() {
  const [done, setDone] = useState(false);

  return (
    <SiteLayout>
      <Section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-lines" />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <div className="min-w-0">
              <Reveal>
                <Eyebrow>Contacto</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-5 text-[clamp(2.1rem,5vw,3.5rem)] font-semibold text-balance">
                  Empecemos por entender tu negocio.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Completa el formulario y coordinaremos una sesión de diagnóstico ejecutivo con tu
                  equipo. Sin presentaciones de producto: una conversación de negocio.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <ul className="mt-10 space-y-4 border-t border-border pt-8">
                  {expect.map((e) => (
                    <li key={e} className="flex gap-3 text-sm text-foreground/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                    <Mail className="h-4 w-4 text-primary" />
                    <p className="mt-3 text-xs uppercase tracking-eyebrow text-muted-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:contacto@migenia.com"
                      className="mt-1 block text-sm font-medium hover:text-primary"
                    >
                      contacto@migenia.com
                    </a>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="mt-3 text-xs uppercase tracking-eyebrow text-muted-foreground">
                      Respuesta
                    </p>
                    <p className="mt-1 text-sm font-medium">Menos de 24 horas hábiles</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-6">
                  <ButtonLink
                    href="https://wa.me/593992760828?text=Quiero%20transformar%20mi%20negocio"
                    variant="outline"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Escribir por WhatsApp
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="min-w-0 rounded-2xl border border-border bg-card p-7 shadow-lift sm:p-9">
                {done ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="mt-5 font-display text-xl font-semibold">Solicitud recibida</h2>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      Gracias por escribirnos. Un consultor senior de MiGenIA revisará tu caso y te
                      contactará para coordinar la sesión.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-xl font-semibold">
                      Solicitar diagnóstico ejecutivo
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Los campos con * son obligatorios.
                    </p>
                    <div className="mt-7">
                      <LeadForm source="contacto_page" onDone={() => setDone(true)} />
                    </div>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}
