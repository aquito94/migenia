import { Reveal } from "./Section";

const logos = ["NOVATEL", "ATLAS", "QUANTIQ", "MERIDIAN", "NORDEX", "AURION", "VECTORA"];

export function TrustBar() {
  return (
    <section className="py-14 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Empresas líderes ya escalan con Agente Inteligente
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 opacity-70">
            {logos.map((l) => (
              <span key={l} className="font-display font-semibold text-lg sm:text-xl tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}