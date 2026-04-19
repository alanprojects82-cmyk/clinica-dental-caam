import doctors from "@/assets/doctors.jpg";
import { GraduationCap, Award } from "lucide-react";

export function Doctors() {
  return (
    <section id="doctores" className="bg-gradient-soft py-20 md:py-28">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Tus doctores</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Manos expertas, corazón cercano
          </h2>
          <p className="mt-4 text-muted-foreground">
            Más de dos décadas devolviendo sonrisas a familias completas en Guanajuato. Detrás de cada tratamiento hay estudio constante, ética y un compromiso real con tu bienestar.
          </p>

          <div className="mt-8 space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Dr. Juan Manuel Carbajo Zúñiga
                  </h3>
                  <p className="text-sm text-primary">Cirujano Dentista · Implantología y Prótesis</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Especialista en rehabilitación oral compleja con enfoque en estética y función a largo plazo.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Dra. María Armida Amézquita López
                  </h3>
                  <p className="text-sm text-primary">Cirujana Dentista · Ortodoncia y Bioestética</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Apasionada del diseño de sonrisa. Cada paciente recibe un plan único, basado en su rostro y personalidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-hero opacity-15 blur-2xl" />
          <img
            src={doctors}
            alt="Dr. Juan Manuel Carbajo y Dra. María Armida Amézquita en Clínica CAAM"
            width={1280}
            height={1280}
            loading="lazy"
            className="relative w-full rounded-[2rem] object-cover shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}
