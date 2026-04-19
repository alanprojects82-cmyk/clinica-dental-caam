import { Phone, Facebook } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/people/Cl%C3%ADnica-CAAM-Dental/61578911505626/";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-hero text-primary-foreground font-display font-bold">
            C
          </div>
          <div className="leading-tight">
            <p className="font-display text-base font-semibold text-foreground">Clínica CAAM</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Bioestética Dental
            </p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#servicios" className="hover:text-primary transition">Servicios</a>
          <a href="#doctores" className="hover:text-primary transition">Doctores</a>
          <a href="#testimonios" className="hover:text-primary transition">Testimonios</a>
          <a href="#contacto" className="hover:text-primary transition">Contacto</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Clínica CAAM"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary/40 hover:text-primary"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="tel:+524737330406"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary-deep transition"
          >
            <Phone className="h-4 w-4" /> (473) 733 0406
          </a>
        </div>
      </div>
    </header>
  );
}
