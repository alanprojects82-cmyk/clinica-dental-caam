import heroSmile from "@/assets/hero-smile.jpg";
import { Phone, MessageCircle, ShieldCheck, Star } from "lucide-react";

const WA = "https://wa.me/524731637858?text=Hola%2C%20quiero%20agendar%20una%20cita";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-soft">
      {/* Background image — full bleed cinematic cover */}
      <div className="absolute inset-0">
        <img
          src={heroSmile}
          alt="Paciente sonriendo con confianza tras tratamiento dental en Clínica CAAM Guanajuato"
          width={1536}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        {/* Readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto grid gap-12 px-4 py-20 md:py-28 lg:min-h-[640px] lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" /> +20 años cuidando sonrisas en Guanajuato
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-foreground drop-shadow-sm sm:text-5xl lg:text-6xl">
            Recupera la confianza de <span className="italic text-primary">sonreír</span> sin miedo, sin dolor y con resultados que duran.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80">
            Atención dental personalizada con tecnología moderna y trato humano. Desde una limpieza hasta tu transformación de sonrisa completa — todo en un mismo lugar, en el corazón de Guanajuato.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft hover:bg-primary-deep transition"
            >
              <MessageCircle className="h-5 w-5" /> Agendar cita ahora
            </a>
            <a
              href="tel:+524737330406"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-white/80 px-7 py-4 text-base font-semibold text-primary backdrop-blur hover:bg-white transition"
            >
              <Phone className="h-5 w-5" /> Llamar al consultorio
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-foreground/70">+500 pacientes satisfechos</span>
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <p className="text-foreground/70">
              <span className="font-semibold text-foreground">Higiene certificada</span> · Esterilización por tanda
            </p>
          </div>
        </div>

        {/* Floating stat cards — visible on desktop, anchored to image side */}
        <div className="relative hidden lg:block">
          <div className="absolute right-0 top-8 rounded-2xl bg-white/95 p-5 shadow-float backdrop-blur">
            <p className="text-3xl font-display font-semibold text-primary">98%</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Pacientes felices</p>
          </div>
          <div className="absolute bottom-8 right-16 rounded-2xl bg-white/95 p-5 shadow-float backdrop-blur">
            <p className="text-3xl font-display font-semibold text-primary">+20</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Años de experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
