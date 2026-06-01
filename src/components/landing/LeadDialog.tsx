import { useEffect, useState } from "react";
import { z } from "zod";
import { Loader2, CheckCircle2, Sparkles } from "lucide-react";
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
import { supabase } from "@/integrations/supabase/client";

const LEAD_EVENT = "open-lead-dialog";

export function openLeadDialog(source?: string) {
  window.dispatchEvent(new CustomEvent(LEAD_EVENT, { detail: { source } }));
}

const leadSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(120),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export function LeadDialog() {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>();
  const [submitting, setSubmitting] = useState(false);
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
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      company: parsed.data.company || null,
      message: parsed.data.message || null,
      source: source ?? null,
    });
    setSubmitting(false);
    if (error) {
      toast.error("No pudimos enviar tu solicitud. Inténtalo de nuevo.");
      return;
    }
    setDone(true);
    toast.success("¡Solicitud recibida! Te contactaremos pronto.");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg glass-strong border-white/10">
        {done ? (
          <div className="py-6 text-center">
            <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-accent grid place-items-center shadow-glow">
              <CheckCircle2 className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">¡Gracias por tu interés!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Un especialista te contactará en menos de 24 horas hábiles.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-accent px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="inline-flex items-center gap-2 self-start rounded-full glass px-3 py-1 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Solicitar Demo
              </div>
              <DialogTitle className="text-2xl font-semibold tracking-tight">
                Agenda tu evaluación gratuita
              </DialogTitle>
              <DialogDescription>
                Déjanos tus datos y un especialista te contactará con un diagnóstico personalizado.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="space-y-4 mt-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Nombre *</Label>
                  <Input id="name" name="name" required maxLength={120} placeholder="Tu nombre" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} placeholder="tu@empresa.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" name="phone" maxLength={40} placeholder="+56 9 ..." />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" name="company" maxLength={160} placeholder="Nombre de tu empresa" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">¿En qué te podemos ayudar?</Label>
                <Textarea id="message" name="message" maxLength={2000} rows={3} placeholder="Cuéntanos brevemente tu caso..." />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition disabled:opacity-60"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {submitting ? "Enviando..." : "Enviar solicitud"}
              </button>
              <p className="text-[11px] text-center text-muted-foreground">
                Al enviar aceptas que te contactemos para coordinar la evaluación.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
