import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { Testimonials } from "./components/site/Testimonials";
import { Services } from "./components/site/Services";
import { Differentiators } from "./components/site/Differentiators";
import { Doctors } from "./components/site/Doctors";
import { Urgency } from "./components/site/Urgency";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";
import { WhatsAppFloat } from "./components/site/WhatsAppFloat";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonials />
      <Services />
      <Differentiators />
      <Doctors />
      <Urgency />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}