import { useEffect, useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ButtonAction } from "./Buttons";
import { Eyebrow } from "./primitives";

const LEAD_EVENT = "open-lead-dialog";

export function openLeadDialog(source?: string) {
  window.dispatchEvent(new CustomEvent(LEAD_EVENT, { detail: { source } }));
}

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(120),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export async function submitLead(data: Record<string, unknown>, source?: string) {
  const res = await fetch("/api/public/lead-submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, source: source ?? null }),
  });
  return res.ok;
}

export function LeadForm({
  source,
  onDone,
  compact = false,
}: {
  source?: string;
  onDone?: () => void;
  compact?: boolean;
}) {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = leadSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      company: form.get("company"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Datos inválidos");
      return;
    }
    setSubmitting(true);
    const ok = await submitLead(
      {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        company: parsed.data.company || null,
        message: parsed.data.message || null,
      },
      source,
    );
    setSubmitting(false);
    if (!ok) {
      toast.error("No pudimos enviar tu solicitud. Inténtalo de nuevo.");
      return;
    }
    toast.success("Solicitud recibida. Te contactaremos en breve.");
    onDone?.();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="lead-name">Nombre y apellido *</Label>
          <Input id="lead-name" name="name" required maxLength={120} placeholder="Ej. María Torres" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lead-email">Email corporativo *</Label>
          <Input
            id="lead-email"
            name="email"
            type="email"
            required
            maxLength={255}
            placeholder="nombre@empresa.com"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lead-company">Empresa</Label>
          <Input id="lead-company" name="company" maxLength={160} placeholder="Nombre de la empresa" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lead-phone">Teléfono</Label>
          <Input id="lead-phone" name="phone" maxLength={40} placeholder="+593 ..." />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="lead-message">Contexto del proyecto o desafío</Label>
        <Textarea
          id="lead-message"
          name="message"
          rows={compact ? 3 : 4}
          maxLength={2000}
          placeholder="Objetivo de negocio, procesos involucrados, sistemas actuales..."
        />
      </div>
      <ButtonAction type="submit" variant="accent" className="w-full" disabled={submitting}>
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {submitting ? "Enviando" : "Solicitar diagnóstico"}
      </ButtonAction>
      <p className="text-center text-xs text-muted-foreground">
        Respondemos en menos de 24 horas hábiles. Sin compromiso comercial.
      </p>
    </form>
  );
}

export function LeadDialog() {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ source?: string }>).detail;
      setSource(detail?.source);
      setDone(false);
      setOpen(true);
    };
    window.addEventListener(LEAD_EVENT, handler);
    return () => window.removeEventListener(LEAD_EVENT, handler);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-xl">
        {done ? (
          <div className="py-8 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">Solicitud recibida</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
              Un consultor senior de MiGenIA revisará tu caso y te contactará para coordinar la
              sesión de diagnóstico.
            </p>
            <ButtonAction className="mt-6" onClick={() => setOpen(false)}>
              Cerrar
            </ButtonAction>
          </div>
        ) : (
          <>
            <DialogHeader>
              <Eyebrow>Diagnóstico ejecutivo</Eyebrow>
              <DialogTitle className="mt-3 font-display text-2xl font-semibold">
                Hablemos de tu negocio, no de herramientas
              </DialogTitle>
              <DialogDescription>
                Una sesión de 45 minutos con nuestro equipo de ingeniería para identificar dónde la
                tecnología genera valor medible en tu organización.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-2">
              <LeadForm source={source} onDone={() => setDone(true)} compact />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
