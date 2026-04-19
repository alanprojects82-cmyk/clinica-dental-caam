import clinic from "@/assets/clinic-interior.jpg";
import { HeartHandshake, Cpu, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { icon: HeartHandshake, title: "Atención personalizada", desc: "No eres un número. Conocemos tu historia, tus miedos y tus metas." },
  { icon: Cpu, title: "Tecnología moderna", desc: "Equipo digital, radiografías de baja radiación y materiales premium." },
  { icon: Sparkles, title: "Trato humano", desc: "Te explicamos todo en palabras simples, sin tecnicismos ni presión." },
  { icon: ShieldCheck, title: "Higiene garantizada", desc: "Esterilización por tanda y protocolos clínicos certificados." },
];

export function Differentiators() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-hero opacity-15 blur-2xl" />
          <img
            src={clinic}
            alt="Interior moderno de Clínica CAAM en Guanajuato"
            width={1280}
            height={896}
            loading="lazy"
            className="relative w-full rounded-[2rem] object-cover shadow-soft"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Por qué elegirnos</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Una clínica diseñada para que vuelvas sin miedo
          </h2>
          <p className="mt-4 text-muted-foreground">
            Combinamos lo mejor de la odontología moderna con un trato cercano. Eso es lo que nos hace diferentes en Guanajuato.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
