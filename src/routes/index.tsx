import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { Positioning } from "@/components/site/Positioning";
import { CapabilityRows } from "@/components/site/CapabilityRows";
import { Method } from "@/components/site/Method";
import { IndustriesGrid } from "@/components/site/IndustriesGrid";
import { CTA } from "@/components/site/CTA";

const title = "MiGenIA — Ingeniería tecnológica para transformación empresarial";
const description =
  "Firma de ingeniería que diseña e implementa IA aplicada, automatización, software, business intelligence e integración de sistemas para empresas medianas y grandes.";

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
      <Positioning />
      <CapabilityRows />
      <Method />
      <IndustriesGrid limit={3} withCta />
      <CTA />
    </SiteLayout>
  );
}
