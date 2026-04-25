import { useState } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import avoraHero from "@/assets/avora-hero.jpg";
import crazyHero from "@/assets/crazy-hero.jpg";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SplitHero({
  brand,
  setBrand,
  onPlanEvent,
  onTickets,
}: {
  brand: "avora" | "crazy" | null;
  setBrand: (b: "avora" | "crazy") => void;
  onPlanEvent: () => void;
  onTickets: () => void;
}) {
  const [hovered, setHovered] = useState<"avora" | "crazy" | null>(null);

  // On mobile, show both stacked. On desktop, hover-expand.
  const active = hovered ?? brand;
  const avoraExpanded = active === "avora";
  const crazyExpanded = active === "crazy";

  return (
    <section id="home" className="relative w-full h-screen min-h-[640px] overflow-hidden bg-background">
      {/* Desktop split */}
      <div className="hidden md:flex w-full h-full">
        {/* AVORA half */}
        <div
          onMouseEnter={() => setHovered("avora")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setBrand("avora")}
          className={cn(
            "relative h-full overflow-hidden cursor-pointer transition-[flex] duration-[900ms]",
            avoraExpanded ? "flex-[1.6]" : crazyExpanded ? "flex-[0.4]" : "flex-1",
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.7,0,0.2,1)" }}
        >
          <img
            src={avoraHero}
            alt="Avora Experiences luxury wedding ballroom with crystal chandelier"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] scale-105 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-avora-bg/70 via-avora-bg/30 to-avora-bg/70" />
          <div className="absolute inset-0 bg-gradient-avora-radial opacity-50" />
          <div className="absolute inset-0 film-grain" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 animate-fade-in-slow">
            <span className="eyebrow text-primary mb-6">Luxury Events</span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight text-gold mb-3 drop-shadow-2xl">
              AVORA
            </h1>
            <p className="font-display tracking-[0.4em] text-avora-cream/80 text-sm md:text-base mb-10">
              EXPERIENCES
            </p>
            {avoraExpanded && (
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in">
                <Button variant="gold" size="lg" onClick={(e) => { e.stopPropagation(); onPlanEvent(); }}>
                  Begin Your Journey <ArrowRight className="size-4" />
                </Button>
                <Button variant="gold-outline" size="lg" onClick={(e) => { e.stopPropagation(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Explore Services
                </Button>
              </div>
            )}
            {!avoraExpanded && !crazyExpanded && (
              <button className="text-primary text-xs tracking-[0.4em] flex items-center gap-2 mt-2">
                ENTER <ArrowRight className="size-3" />
              </button>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent z-20 pointer-events-none" />

        {/* CRAZY half */}
        <div
          onMouseEnter={() => setHovered("crazy")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setBrand("crazy")}
          className={cn(
            "relative h-full overflow-hidden cursor-pointer transition-[flex] duration-[900ms] theme-crazy",
            crazyExpanded ? "flex-[1.6]" : avoraExpanded ? "flex-[0.4]" : "flex-1",
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.7,0,0.2,1)" }}
        >
          <img
            src={crazyHero}
            alt="Crazy Hedz neon concert crowd with hands raised"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] scale-105 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-crazy-bg/70 via-crazy-bg/20 to-crazy-bg/70" />
          <div className="absolute inset-0 bg-gradient-crazy-radial opacity-60" />
          <div className="absolute inset-0 film-grain" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 animate-fade-in-slow">
            <span className="eyebrow text-crazy-purple mb-6">Youth Events</span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight text-neon mb-3">
              CRAZY
            </h1>
            <p className="font-display tracking-[0.4em] text-crazy-text/80 text-sm md:text-base mb-10">
              HEDZ
            </p>
            {crazyExpanded && (
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in">
                <Button variant="neon" size="lg" onClick={(e) => { e.stopPropagation(); onTickets(); }}>
                  Get Tickets <Zap className="size-4" />
                </Button>
                <Button variant="neon-outline" size="lg" onClick={(e) => { e.stopPropagation(); document.getElementById("crazy")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Partner Your College
                </Button>
              </div>
            )}
            {!avoraExpanded && !crazyExpanded && (
              <button className="text-crazy-purple text-xs tracking-[0.4em] flex items-center gap-2 mt-2">
                ENTER <ArrowRight className="size-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile stacked */}
      <div className="md:hidden flex flex-col w-full h-full">
        <div
          onClick={() => { setBrand("avora"); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}
          className="relative flex-1 overflow-hidden"
        >
          <img src={avoraHero} alt="Avora luxury" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-avora-bg/55" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="eyebrow text-primary mb-3"><Sparkles className="inline size-3 mr-1" /> Luxury</span>
            <h1 className="font-display text-5xl text-gold mb-1">AVORA</h1>
            <p className="font-display tracking-[0.3em] text-avora-cream/70 text-xs mb-5">EXPERIENCES</p>
            <Button variant="gold" size="sm" onClick={(e) => { e.stopPropagation(); onPlanEvent(); }}>Plan Event</Button>
          </div>
        </div>
        <div className="theme-crazy relative flex-1 overflow-hidden">
          <img src={crazyHero} alt="Crazy Hedz" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-crazy-bg/55" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="eyebrow text-crazy-purple mb-3"><Zap className="inline size-3 mr-1" /> Youth</span>
            <h1 className="font-display text-5xl text-neon mb-1">CRAZY</h1>
            <p className="font-display tracking-[0.3em] text-crazy-text/70 text-xs mb-5">HEDZ</p>
            <Button variant="neon" size="sm" onClick={(e) => { e.stopPropagation(); onTickets(); }}>Get Tickets</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
