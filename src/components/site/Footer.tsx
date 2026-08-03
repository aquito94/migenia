import { Logo } from "./Logo";
import { Container } from "./primitives";
import { SlotLabel, TextSlot } from "./Slots";

const columns = ["Columna 01", "Columna 02", "Columna 03"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="max-w-7xl">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="min-w-0">
            <Logo />
            <TextSlot label="Descriptor de marca" lines={3} className="mt-6 max-w-xs" />
            <div className="mt-8 space-y-3">
              <SlotLabel>Datos de contacto</SlotLabel>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-2.5 w-40 rounded-full bg-secondary" />
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c} className="min-w-0">
              <SlotLabel>{c}</SlotLabel>
              <ul className="mt-5 space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i}>
                    <div
                      className="h-2.5 rounded-full bg-secondary"
                      style={{ width: `${80 - i * 8}%` }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MiGenIA</p>
          <div className="flex gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-2.5 w-20 rounded-full bg-secondary" />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
