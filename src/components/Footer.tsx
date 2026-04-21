import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/60 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="font-display text-3xl mb-4">
              <span className="text-gold">AVORA</span>
              <span className="text-muted-foreground mx-2">×</span>
              <span className="text-neon">HEDZ</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Two brands, one vision — crafting unforgettable experiences from intimate luxury weddings to high-energy youth events.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Instagram" className="size-10 rounded-full border border-border/60 flex items-center justify-center hover:border-primary hover:text-primary transition">
                <Instagram className="size-4" />
              </a>
              <a href="mailto:hello@avora.in" aria-label="Email" className="size-10 rounded-full border border-border/60 flex items-center justify-center hover:border-primary hover:text-primary transition">
                <Mail className="size-4" />
              </a>
              <a href="tel:+919999999999" aria-label="Call" className="size-10 rounded-full border border-border/60 flex items-center justify-center hover:border-primary hover:text-primary transition">
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-primary mb-4">Avora</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground story-link">About</a></li>
              <li><a href="#services" className="hover:text-foreground story-link">Services</a></li>
              <li><a href="#packages" className="hover:text-foreground story-link">Packages</a></li>
              <li><a href="#contact" className="hover:text-foreground story-link">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-crazy-purple mb-4">CrazyHedz</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#events" className="hover:text-foreground story-link">Events</a></li>
              <li><a href="#crazy" className="hover:text-foreground story-link">Tickets</a></li>
              <li><a href="#crazy" className="hover:text-foreground story-link">Ambassador</a></li>
              <li><a href="#crazy" className="hover:text-foreground story-link">Partnerships</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/60 text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Avora Experiences × CrazyHedz. All rights reserved.</p>
          <p className="flex items-center gap-1.5"><MapPin className="size-3" /> Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
}
