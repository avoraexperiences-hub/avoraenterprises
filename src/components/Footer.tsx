import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import avoraLogo from "@/assets/avora-logo.png";
import crazyLogo from "@/assets/crazy-logo.png";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_ANSH,
  INSTAGRAM_AVORA,
  INSTAGRAM_CRAZY,
} from "@/lib/forms";

export function Footer({ brand = "avora" }: { brand?: "avora" | "crazy" }) {
  const isAvora = brand === "avora";
  const instagramUrl = isAvora ? INSTAGRAM_AVORA : INSTAGRAM_CRAZY;
  return (
    <footer className="relative bg-background border-t border-border/60 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            {isAvora ? (
              <img src={avoraLogo} alt="Avora Experiences" className="h-20 w-auto object-contain mb-4" />
            ) : (
              <img src={crazyLogo} alt="Crazy Hedz" className="h-20 w-auto object-contain mb-4" />
            )}
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              {isAvora
                ? "Crafting unforgettable luxury moments — weddings, galas, and bespoke celebrations across India."
                : "Electrifying college events built for the bold. Premium production, unforgettable nights."}
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
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
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-primary mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {isAvora ? (
                <>
                  <li><a href="#about" className="hover:text-foreground story-link">About</a></li>
                  <li><a href="#services" className="hover:text-foreground story-link">Services</a></li>
                  <li><a href="#packages" className="hover:text-foreground story-link">Packages</a></li>
                  <li><a href="#portfolio" className="hover:text-foreground story-link">Portfolio</a></li>
                  <li><a href="#venues" className="hover:text-foreground story-link">Pre-Wedding Venues</a></li>
                  <li><a href="#contact" className="hover:text-foreground story-link">Contact</a></li>
                </>
              ) : (
                <>
                  <li><a href="#events" className="hover:text-foreground story-link">Events</a></li>
                  <li><a href="#ambassador" className="hover:text-foreground story-link">Ambassador</a></li>
                  <li><a href="#partner" className="hover:text-foreground story-link">Partner College</a></li>
                  <li><a href="#contact" className="hover:text-foreground story-link">Contact</a></li>
                </>
              )}
              <li><Link to={isAvora ? "/crazy" : "/avora"} className="hover:text-foreground story-link">{isAvora ? "Visit Crazy Hedz ↗" : "← Visit Avora"}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground break-all font-display">{CONTACT_EMAIL}</a></li>
              <li><a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="hover:text-foreground font-display tracking-wide tabular-nums">{CONTACT_PHONE}</a></li>
              {!isAvora && (
                <li><a href={`tel:${CONTACT_PHONE_ANSH.replace(/\s/g, "")}`} className="hover:text-foreground font-display tracking-wide tabular-nums">{CONTACT_PHONE_ANSH} <span className="text-xs text-muted-foreground/70">(Ansh)</span></a></li>
              )}
              <li className="flex items-center gap-1.5"><MapPin className="size-3" /> Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/60 text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Avora Experiences. All rights reserved.</p>
          <p>Two worlds · One vision</p>
        </div>
      </div>
    </footer>
  );
}
