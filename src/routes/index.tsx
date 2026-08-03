import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import {
  Problems,
  Transformation,
  Capabilities,
  Method,
  Cases,
} from "@/components/site/HomeSections";
import { CTA } from "@/components/site/CTA";

const title = "MiGenIA — Ingeniería tecnológica para empresas";
const description =
  "Diseñamos la arquitectura tecnológica que conecta procesos, personas y datos para eliminar ineficiencias y acelerar decisiones.";

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
      <Transformation />
      <Capabilities />
      <Method />
      <Cases />
      <CTA />
    </SiteLayout>
  );
}
