import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Testimonials } from "@/components/site/Testimonials";
import { Services } from "@/components/site/Services";
import { Differentiators } from "@/components/site/Differentiators";
import { Doctors } from "@/components/site/Doctors";
import { Urgency } from "@/components/site/Urgency";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica CAAM · Dentista en Guanajuato | Bioestética Dental y Ortodoncia" },
      {
        name: "description",
        content:
          "Clínica dental premium en Guanajuato. Ortodoncia, implantes, blanqueamiento y diseño de sonrisa con atención personalizada. Agenda tu cita por WhatsApp.",
      },
      { name: "keywords", content: "dentista Guanajuato, clínica dental Guanajuato, ortodoncia, implantes dentales, blanqueamiento dental, CAAM" },
      { property: "og:title", content: "Clínica CAAM · Bioestética Dental y Ortodoncia en Guanajuato" },
      { property: "og:description", content: "Recupera la confianza de sonreír. +20 años cuidando sonrisas en Guanajuato. Agenda hoy." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Services />
        <Differentiators />
        <Doctors />
        <Urgency />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
