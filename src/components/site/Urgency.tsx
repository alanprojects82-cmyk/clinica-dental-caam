import { Clock, MessageCircle } from "lucide-react";

const WA = "https://wa.me/524731637858?text=Hola%2C%20quiero%20aprovechar%20la%20valoraci%C3%B3n%20de%20esta%20semana";

export function Urgency() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-hero p-10 text-primary-foreground shadow-float md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_50%)]" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                <Clock className="h-3.5 w-3.5" /> Cupos limitados esta semana
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Reserva tu valoración hoy y recibe tu plan de tratamiento sin costo
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/85">
                Solo abrimos <strong>15 valoraciones por semana</strong> para garantizar la atención que mereces. No dejes que tu sonrisa siga esperando.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-primary shadow-soft hover:bg-secondary transition"
              >
                <MessageCircle className="h-5 w-5" /> Apartar mi cita por WhatsApp
              </a>
              <a
                href="tel:+524737330406"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-4 font-semibold text-primary-foreground hover:bg-white/10 transition"
              >
                Llamar: (473) 733 0406
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
