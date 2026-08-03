import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import {
  Problems,
  Differentiators,
  Capabilities,
  HowWeWork,
  UseCases,
  Technologies,
} from "@/components/site/HomeSections";
import { CTA } from "@/components/site/CTA";

const title = "MiGenIA — Ingeniería tecnológica para transformación empresarial";
const description =
  "MiGenIA es una firma de ingeniería tecnológica que diseña, desarrolla e implementa soluciones empresariales enfocadas en resultados de negocio.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Problems />
      <Differentiators />
      <Capabilities />
      <HowWeWork />
      <UseCases />
      <Technologies />
      <CTA />
    </SiteLayout>
  );
}
