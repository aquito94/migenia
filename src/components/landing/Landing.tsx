import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { TrustBar } from "./TrustBar";
import { Services } from "./Services";
import { Capabilities } from "./Capabilities";
import { Whatsapp } from "./Whatsapp";
import { BeforeAfter } from "./BeforeAfter";
import { WhyNow } from "./WhyNow";
import { RoiAudit } from "./RoiAudit";
import { UseCases } from "./UseCases";
import { Integrations } from "./Integrations";
import { Scheduling } from "./Scheduling";
import { Benefits } from "./Benefits";
import { HowItWorks } from "./HowItWorks";
import { Analytics } from "./Analytics";
import { Testimonials } from "./Testimonials";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { LeadDialog } from "./LeadDialog";
import { Toaster } from "@/components/ui/sonner";

export function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Capabilities />
        <Whatsapp />
        <BeforeAfter />
        <WhyNow />
        <RoiAudit />
        <UseCases />
        <Integrations />
        <Scheduling />
        <Benefits />
        <HowItWorks />
        <Analytics />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <LeadDialog />
      <Toaster richColors position="top-center" />
    </div>
  );
}