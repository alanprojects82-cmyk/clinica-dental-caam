import { Facebook } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/people/Cl%C3%ADnica-CAAM-Dental/61578911505626/";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Clínica de Bioestética Dental y Ortodoncia CAAM</p>
        <div className="flex items-center gap-4">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Síguenos en Facebook"
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 transition hover:border-primary/40 hover:text-primary"
          >
            <Facebook className="h-4 w-4" />
            <span>Facebook</span>
          </a>
          <p>Guanajuato, México · Cuidando sonrisas con amor</p>
        </div>
      </div>
    </footer>
  );
}
