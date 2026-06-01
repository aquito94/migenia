import { Reveal, SectionHeader } from "./Section";

const tools = [
  "WhatsApp", "HubSpot", "Salesforce", "SAP",
  "Odoo", "Google Calendar", "Stripe", "Slack",
  "Microsoft Teams", "Zapier", "Notion", "Zendesk",
];

export function Integrations() {
  return (
    <section id="integrations" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Integraciones empresariales"
          title={<>Tu ecosistema, perfectamente conectado.</>}
          subtitle="Conecta CRM, ERP, mensajería, pagos y herramientas internas mediante APIs nativas y workflows inteligentes."
        />
        <Reveal>
          <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative">
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-accent grid place-items-center shadow-glow">
                    <span className="font-display font-bold text-2xl text-primary-foreground">AI</span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-accent blur-2xl opacity-50 animate-pulse-glow" />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {tools.map((t, i) => (
                  <Reveal key={t} delay={i * 0.03}>
                    <div className="group glass rounded-xl px-4 py-4 flex items-center gap-3 hover:bg-white/[0.06] transition">
                      <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-white/10 to-white/5 grid place-items-center text-xs font-bold text-foreground/80 group-hover:text-accent transition-colors">
                        {t.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium">{t}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="text-center text-xs text-muted-foreground mt-8">
                + APIs REST, Webhooks y SDK para integraciones a medida.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}