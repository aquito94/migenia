import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LeadDialog } from "./LeadDialog";
import { Toaster } from "@/components/ui/sonner";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <LeadDialog />
      <Toaster position="top-center" />
    </div>
  );
}
