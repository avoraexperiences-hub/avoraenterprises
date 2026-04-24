import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import avoraHero from "@/assets/avora-hero.jpg";
import avoraLogo from "@/assets/avora-logo.png";

export function AvoraHero({ onPlanEvent, onExplore }: { onPlanEvent: () => void; onExplore: () => void }) {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-avora-bg flex items-center">
      <img
        src={avoraHero}
        alt="Avora luxury ballroom with chandelier"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-avora-bg/40 via-avora-bg/60 to-avora-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-avora-bg/70 via-transparent to-avora-bg/70" />
      <div className="absolute inset-0 bg-gradient-avora-radial opacity-40" />
      <div className="absolute inset-0 film-grain" />

      {/* Decorative top/bottom gold lines */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container relative z-10 text-center px-6 py-24 md:py-32 animate-fade-in-slow">
        <img
          src={avoraLogo}
          alt="Avora Experiences"
          className="mx-auto h-20 md:h-28 lg:h-32 mb-8 opacity-95 mix-blend-screen drop-shadow-2xl"
        />
        <p className="eyebrow text-primary mb-6 tracking-[0.5em]">
          <Sparkles className="inline size-3 mr-2" />
          Luxury Event Experiences
        </p>
        <h1 className="font-display italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gold mb-4 leading-[0.95] drop-shadow-2xl">
          AVORA
        </h1>
        <p className="font-display tracking-[0.6em] text-avora-cream/80 text-sm md:text-base mb-8">
          E X P E R I E N C E S
        </p>
        <div className="gold-divider mb-8" />
        <p className="max-w-2xl mx-auto text-foreground/85 text-base md:text-lg leading-relaxed mb-10 font-light">
          Crafting unforgettable moments with <em className="text-primary not-italic">elegance, precision, and artistry</em>.
          From royal weddings to bespoke galas — every detail, designed with intention.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="gold" size="lg" className="px-10 py-7 text-sm" onClick={onPlanEvent}>
            Plan Your Experience <ArrowRight className="size-4" />
          </Button>
          <Button variant="gold-outline" size="lg" className="px-10 py-7 text-sm" onClick={onExplore}>
            Explore Services
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-primary/70 animate-fade-in-slow">
        <span className="eyebrow text-[10px] tracking-[0.4em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
}
