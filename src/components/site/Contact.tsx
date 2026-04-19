import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const appointmentSchema = z.object({
  name: z.string().trim().min(1, "Ingresa tu nombre").max(100, "Máx. 100 caracteres"),
  phone: z
    .string()
    .trim()
    .min(7, "Ingresa un teléfono válido")
    .max(30, "Máx. 30 caracteres")
    .regex(/^[+\d\s()\-]+$/, "Solo números y símbolos +()- "),
  message: z.string().trim().max(1000, "Máx. 1000 caracteres").optional(),
});

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const parsed = appointmentSchema.safeParse({
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || ""),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Revisa los datos");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("appointment_requests").insert({
        name: parsed.data.name,
        phone: parsed.data.phone,
        message: parsed.data.message || null,
      });

      if (error) throw error;

      const text = `Hola, soy ${parsed.data.name}. Tel: ${parsed.data.phone}. ${parsed.data.message ?? ""}`.trim();
      window.open(`https://wa.me/524731637858?text=${encodeURIComponent(text)}`, "_blank");

      toast.success("¡Solicitud recibida! Te contactaremos en minutos.");
      setSent(true);
      form.reset();
    } catch (err) {
      console.error("appointment_requests insert failed", err);
      toast.error("No pudimos guardar tu solicitud. Escríbenos por WhatsApp directamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="bg-gradient-soft py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Estamos para ti</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Agenda tu cita en menos de 1 minuto
          </h2>
          <p className="mt-4 text-muted-foreground">
            Elige el medio que prefieras. Te respondemos personalmente, sin bots.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3 text-primary">
                <MapPin className="h-5 w-5" />
                <h3 className="font-semibold">Visítanos</h3>
              </div>
              <p className="mt-2 text-foreground">Colonia Los Alcaldes, La Marina</p>
              <p className="text-muted-foreground">Guanajuato, México</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <a href="tel:+524737330406" className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:border-primary/40">
                <Phone className="h-5 w-5 text-primary" />
                <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Consultorio</p>
                <p className="mt-1 font-display text-lg font-semibold text-foreground">(473) 733 0406</p>
              </a>
              <a href="tel:+524731637858" className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:border-primary/40">
                <MessageCircle className="h-5 w-5 text-primary" />
                <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">WhatsApp / Cel</p>
                <p className="mt-1 font-display text-lg font-semibold text-foreground">(473) 163 7858</p>
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3 text-primary">
                <Clock className="h-5 w-5" />
                <h3 className="font-semibold">Horario de atención</h3>
              </div>
              <dl className="mt-3 space-y-1 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Lunes a Viernes</dt><dd className="font-medium text-foreground">12:00 — 20:00</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Sábado</dt><dd className="font-medium text-foreground">10:00 — 14:00</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Domingo</dt><dd className="text-foreground/60">Cerrado</dd></div>
              </dl>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Ubicación Clínica CAAM"
                src="https://www.google.com/maps?q=Los+Alcaldes,+Guanajuato,+Mexico&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <h3 className="font-display text-2xl font-semibold text-foreground">Solicita tu cita</h3>
            <p className="mt-1 text-sm text-muted-foreground">Guardamos tu solicitud y te contactamos por WhatsApp.</p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground">Nombre</label>
                <input id="name" name="name" required maxLength={100} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary" />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-foreground">Teléfono</label>
                <input id="phone" name="phone" type="tel" required maxLength={30} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground">¿Qué necesitas?</label>
                <textarea id="message" name="message" rows={4} maxLength={1000} placeholder="Ej. quisiera información sobre ortodoncia" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary" />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-soft hover:bg-primary-deep transition disabled:opacity-70"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {loading ? "Enviando..." : "Enviar y abrir WhatsApp"}
              </button>
              {sent && <p className="text-center text-sm text-primary">¡Listo! Continúa la conversación en WhatsApp.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
