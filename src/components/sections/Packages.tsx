import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { SectionHeader } from "../SectionHeader";
import { cn } from "@/lib/utils";

const packages = [
  {
    eyebrow: "Essential",
    name: "Experience",
    price: "₹10L",
    features: ["Curated Venue", "Standard Décor", "Photography", "Catering", "Event Coordination"],
    venues: "Boutique hotels & venues",
    timeline: "2-3 months planning",
  },
  {
    eyebrow: "Elevated",
    name: "Premium",
    price: "₹15L",
    featured: true,
    features: ["Premium Venue", "Luxury Décor", "Photo + Video", "Entertainment", "Catering", "Event Management", "Guest Coordination"],
    venues: "Premium hotels & resorts",
    timeline: "3-6 months planning",
  },
  {
    eyebrow: "Bespoke",
    name: "Signature",
    price: "₹20L+",
    features: ["Iconic Venue", "Bespoke Décor", "Cinematic Production", "Celebrity Entertainment", "Multi-Cuisine Catering", "Concierge Team", "Destination Management"],
    venues: "Palaces & destination venues",
    timeline: "6-12 months planning",
  },
];

export function Packages({ onCta }: { onCta: () => void }) {
  const [open, setOpen] = useState<number | null>(1);
  return (
    <section id="packages" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <SectionHeader eyebrow="Investment" title="Curated Packages" subtitle="Tailored experiences for every vision and scale." />

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((p, i) => {
            const isOpen = open === i;
            return (
              <div
                key={p.name}
                className={cn(
                  "rounded-xl border bg-card transition-all duration-500",
                  p.featured
                    ? "border-primary/60 shadow-gold md:scale-105"
                    : "border-border/60 hover:border-primary/40",
                )}
              >
                <div className="p-8">
                  <p className="eyebrow text-primary mb-3">{p.eyebrow}</p>
                  <h3 className="font-display text-3xl mb-2">{p.name}</h3>
                  <div className="font-display text-5xl text-gold mb-6">{p.price}</div>

                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="eyebrow text-primary flex items-center gap-1 hover:opacity-80"
                  >
                    Details <ChevronDown className={cn("size-3 transition-transform", isOpen && "rotate-180")} />
                  </button>

                  {isOpen && (
                    <div className="mt-6 space-y-3 animate-fade-in">
                      <ul className="space-y-2">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                            <span className="text-primary mt-1">•</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-border/60 text-sm space-y-1">
                        <p><span className="text-primary">Venues:</span> <span className="text-muted-foreground">{p.venues}</span></p>
                        <p><span className="text-primary">Timeline:</span> <span className="text-muted-foreground">{p.timeline}</span></p>
                      </div>
                      <Button variant="gold-outline" className="w-full mt-4" onClick={onCta}>Get Started</Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
