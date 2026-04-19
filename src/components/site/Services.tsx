import odontologiaImg from "@/assets/services/odontologia-general.png";
import limpiezaImg from "@/assets/services/limpieza-profesional.png";
import ortodonciaImg from "@/assets/services/ortodoncia.png";
import endodonciaImg from "@/assets/services/endodoncia.png";
import blanqueamientoImg from "@/assets/services/blanqueamiento.png";
import implantesImg from "@/assets/services/implantes.png";
import protesisImg from "@/assets/services/protesis.png";
import bioesteticaImg from "@/assets/services/bioestetica.png";

const services = [
  {
    img: odontologiaImg,
    title: "Odontología General",
    problem: "Caries, dolor o revisiones que has postergado.",
    benefit: "Diagnóstico claro y tratamiento sin presiones.",
    result: "Una boca sana que vuelves a disfrutar.",
  },
  {
    img: limpiezaImg,
    title: "Limpieza Profesional",
    problem: "Manchas, sarro y mal aliento que afectan tu confianza.",
    benefit: "Sensación de boca nueva en menos de 1 hora.",
    result: "Sonríes y hablas sin pena al instante.",
  },
  {
    img: ortodonciaImg,
    title: "Ortodoncia",
    problem: "Dientes chuecos o mordida que te incomoda.",
    benefit: "Brackets estéticos y alineadores transparentes.",
    result: "La sonrisa alineada con la que siempre soñaste.",
  },
  {
    img: endodonciaImg,
    title: "Endodoncia",
    problem: "Dolor intenso que no te deja dormir ni comer.",
    benefit: "Salvamos tu diente sin extraerlo, sin dolor.",
    result: "Adiós al dolor, conservas tu pieza natural.",
  },
  {
    img: blanqueamientoImg,
    title: "Blanqueamiento",
    problem: "Dientes amarillos por café, vino o el tiempo.",
    benefit: "Hasta 8 tonos más blancos en una sola visita.",
    result: "Una sonrisa luminosa que ilumina cualquier foto.",
  },
  {
    img: implantesImg,
    title: "Implantes Dentales",
    problem: "Te falta una pieza y dejaste de sonreír.",
    benefit: "Reemplazo permanente que se siente real.",
    result: "Vuelves a morder, hablar y reír sin pensarlo.",
  },
  {
    img: protesisImg,
    title: "Prótesis Dentales",
    problem: "Prótesis incómodas que se mueven al hablar.",
    benefit: "Diseñadas a medida con materiales premium.",
    result: "Comodidad real y estética natural todo el día.",
  },
  {
    img: bioesteticaImg,
    title: "Bioestética Dental",
    problem: "Tu sonrisa no refleja cómo te sientes hoy.",
    benefit: "Diseño personalizado de sonrisa con carillas.",
    result: "Una versión renovada de ti, en pocas sesiones.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-gradient-soft py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Nuestros servicios</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Soluciones reales para problemas reales
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada tratamiento está pensado para resolver lo que te preocupa hoy y darte resultados que disfrutarás por años.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
            >
              <div className="flex h-32 items-center justify-center rounded-2xl bg-gradient-soft">
                <img
                  src={s.img}
                  alt={`Ilustración del servicio de ${s.title}`}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="h-28 w-28 object-contain transition group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li className="text-muted-foreground"><span className="font-semibold text-foreground/80">Problema:</span> {s.problem}</li>
                <li className="text-muted-foreground"><span className="font-semibold text-primary">Beneficio:</span> {s.benefit}</li>
                <li className="text-muted-foreground"><span className="font-semibold text-foreground/80">Resultado:</span> {s.result}</li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
