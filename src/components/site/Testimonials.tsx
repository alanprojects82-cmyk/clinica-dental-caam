import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda G.",
    text: "Tenía pánico al dentista desde niña. En CAAM me explicaron cada paso, sentí cero dolor y hoy sonrío sin taparme la boca. Eternamente agradecida.",
    treatment: "Ortodoncia + blanqueamiento",
  },
  {
    name: "Roberto H.",
    text: "Llegué con un implante urgente. Me atendieron el mismo día, con precios claros y sin sorpresas. La clínica impecable, súper moderna.",
    treatment: "Implante dental",
  },
  {
    name: "Andrea L.",
    text: "Los doctores son humanos, pacientes y muy profesionales. Llevé a mis hijos y ahora pedimos las citas como familia. Totalmente recomendados.",
    treatment: "Odontología familiar",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pacientes reales</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Historias que nos hacen sonreír todos los días
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sabemos que ir al dentista da miedo. Por eso cuidamos cada detalle: desde cómo te recibimos hasta cómo te despides.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <Quote className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-primary p-1.5 text-primary-foreground" />
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed">"{t.text}"</p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.treatment}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
