import { Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import avoraLogo from "@/assets/avora-logo.jpeg";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  INSTAGRAM_AVORA,
  INSTAGRAM_CRAZY,
  whatsappLink,
} from "@/lib/forms";

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/60 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={avoraLogo} alt="Avora Experiences" className="h-14 w-auto object-contain" />
              <span className="font-display text-xl tracking-[0.3em] text-muted-foreground">× HEDZ</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Two brands, one vision — crafting unforgettable experiences from intimate luxury weddings to high-energy youth events.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={INSTAGRAM_AVORA}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Avora Instagram"
                className="size-10 rounded-full border border-border/60 flex items-center justify-center hover:border-primary hover:text-primary transition"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email"
                className="size-10 rounded-full border border-border/60 flex items-center justify-center hover:border-primary hover:text-primary transition"
              >
                <Mail className="size-4" />
              </a>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                aria-label="Call"
                className="size-10 rounded-full border border-border/60 flex items-center justify-center hover:border-primary hover:text-primary transition"
              >
                <Phone className="size-4" />
              </a>
              <a
                href={whatsappLink("Hi! I'd like to know more about Avora × CrazyHedz.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="size-10 rounded-full border border-border/60 flex items-center justify-center hover:border-primary hover:text-primary transition"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-primary mb-4">Avora</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground story-link">About</a></li>
              <li><a href="#services" className="hover:text-foreground story-link">Services</a></li>
              <li><a href="#packages" className="hover:text-foreground story-link">Packages</a></li>
              <li><a href="#portfolio" className="hover:text-foreground story-link">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-foreground story-link">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-crazy-purple mb-4">CrazyHedz</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#events" className="hover:text-foreground story-link">Events</a></li>
              <li><a href="#crazy" className="hover:text-foreground story-link">About CrazyHedz</a></li>
              <li>
                <a href={INSTAGRAM_CRAZY} target="_blank" rel="noopener noreferrer" className="hover:text-foreground story-link">
                  Instagram
                </a>
              </li>
              <li><a href="#crazy" className="hover:text-foreground story-link">Become Ambassador</a></li>
              <li><a href="#crazy" className="hover:text-foreground story-link">Partner Your College</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/60 text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Avora Experiences × CrazyHedz. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground">{CONTACT_EMAIL}</a>
            <span className="flex items-center gap-1.5"><MapPin className="size-3" /> Mumbai, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
