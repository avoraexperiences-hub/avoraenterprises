import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import avoraHero from "@/assets/avora-hero.jpg";
import crazyHero from "@/assets/crazy-hero.jpg";
import avoraLogo from "@/assets/avora-logo.png";

const Landing = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<"avora" | "crazy" | null>(null);
  const [tapped, setTapped] = useState<"avora" | "crazy" | null>(null);

  const enter = (b: "avora" | "crazy") => {
    try { sessionStorage.setItem("brand", b); } catch { /* ignore */ }
    navigate(b === "avora" ? "/avora" : "/crazy");
  };

  const active = hovered ?? tapped;
  const avoraExpanded = active === "avora";
  const crazyExpanded = active === "crazy";

  return (
    <main className="relative w-full h-screen min-h-[640px] overflow-hidden bg-background text-foreground">
      {/* Desktop & tablet split */}
      <div className="hidden md:flex w-full h-full">
        {/* AVORA half */}
        <div
          onMouseEnter={() => setHovered("avora")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => enter("avora")}
          className={cn(
            "relative h-full overflow-hidden cursor-pointer transition-[flex] duration-[1100ms]",
            avoraExpanded ? "flex-[1.8]" : crazyExpanded ? "flex-[0.2]" : "flex-1",
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.7,0,0.2,1)" }}
        >
          <img
            src={avoraHero}
            alt="Avora Experiences luxury ballroom"
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms]",
              avoraExpanded ? "scale-110" : "scale-105",
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-avora-bg/80 via-avora-bg/40 to-avora-bg/80" />
          <div className="absolute inset-0 bg-gradient-avora-radial opacity-50" />
          <div className="absolute inset-0 film-grain" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 animate-fade-in-slow">
            <img
              src={avoraLogo}
              alt="Avora"
              className={cn(
                "transition-all duration-700 mb-6",
                avoraExpanded ? "h-24 md:h-32 opacity-100" : "h-16 md:h-20 opacity-90",
              )}
            />
            <span className="eyebrow text-primary mb-4 tracking-[0.5em]">Luxury Event Experiences</span>
            <h1 className="font-display italic text-6xl md:text-8xl lg:text-9xl text-gold mb-3 drop-shadow-2xl leading-none">
              AVORA
            </h1>
            <p className="font-display tracking-[0.5em] text-avora-cream/80 text-xs md:text-sm mb-10">
              E X P E R I E N C E S
            </p>
            {avoraExpanded ? (
              <button
                onClick={(e) => { e.stopPropagation(); enter("avora"); }}
                className="group inline-flex items-center gap-3 px-10 py-4 rounded-full border border-primary/60 bg-primary/5 backdrop-blur-sm text-primary text-xs tracking-[0.4em] uppercase hover:bg-gradient-avora hover:text-avora-bg hover:border-transparent transition-all animate-fade-in"
              >
                Enter Avora <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <span className="text-primary/70 text-xs tracking-[0.4em] flex items-center gap-2">
                <Sparkles className="size-3" /> HOVER TO EXPLORE
              </span>
            )}
          </div>
        </div>

        {/* Divider with shimmer */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent z-20 pointer-events-none" />

        {/* CRAZY half */}
        <div
          onMouseEnter={() => setHovered("crazy")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => enter("crazy")}
          className={cn(
            "relative h-full overflow-hidden cursor-pointer transition-[flex] duration-[1100ms] theme-crazy",
            crazyExpanded ? "flex-[1.8]" : avoraExpanded ? "flex-[0.2]" : "flex-1",
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.7,0,0.2,1)" }}
        >
          <img
            src={crazyHero}
            alt="Crazy Hedz neon concert"
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms]",
              crazyExpanded ? "scale-110" : "scale-105",
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-crazy-bg/80 via-crazy-bg/30 to-crazy-bg/80" />
          <div className="absolute inset-0 bg-gradient-crazy-radial opacity-60" />
          <div className="absolute inset-0 film-grain" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 animate-fade-in-slow">
            <span className="eyebrow text-crazy-purple mb-4 tracking-[0.5em]">Youth Event Experiences</span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-neon mb-3 leading-none">
              CRAZY
            </h1>
            <p className="font-display tracking-[0.5em] text-crazy-text/80 text-xs md:text-sm mb-10">
              H E A D S
            </p>
            {crazyExpanded ? (
              <button
                onClick={(e) => { e.stopPropagation(); enter("crazy"); }}
                className="group inline-flex items-center gap-3 px-10 py-4 rounded-full border border-crazy-purple/60 bg-crazy-purple/10 backdrop-blur-sm text-crazy-purple text-xs tracking-[0.4em] uppercase hover:bg-gradient-crazy hover:text-white hover:border-transparent transition-all animate-fade-in"
              >
                Enter Crazy Hedz <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <span className="text-crazy-purple/70 text-xs tracking-[0.4em] flex items-center gap-2">
                <Zap className="size-3" /> HOVER TO EXPLORE
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile stacked */}
      <div className="md:hidden flex flex-col w-full h-full">
        <button
          onClick={() => tapped === "avora" ? enter("avora") : setTapped("avora")}
          className="relative flex-1 overflow-hidden text-left"
        >
          <img src={avoraHero} alt="Avora" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-avora-bg/65" />
          <div className="absolute inset-0 bg-gradient-avora-radial opacity-40" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <img src={avoraLogo} alt="Avora" className="h-12 mb-3 opacity-90" />
            <span className="eyebrow text-primary mb-2"><Sparkles className="inline size-3 mr-1" /> Luxury</span>
            <h1 className="font-display text-5xl text-gold mb-1">AVORA</h1>
            <p className="font-display tracking-[0.4em] text-avora-cream/70 text-[10px] mb-5">EXPERIENCES</p>
            <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/60 text-primary text-[11px] tracking-[0.3em] uppercase">
              {tapped === "avora" ? "Enter →" : "Tap to Enter"}
            </span>
          </div>
        </button>
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <button
          onClick={() => tapped === "crazy" ? enter("crazy") : setTapped("crazy")}
          className="theme-crazy relative flex-1 overflow-hidden text-left"
        >
          <img src={crazyHero} alt="Crazy Hedz" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-crazy-bg/65" />
          <div className="absolute inset-0 bg-gradient-crazy-radial opacity-50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="eyebrow text-crazy-purple mb-2"><Zap className="inline size-3 mr-1" /> Youth</span>
            <h1 className="font-display text-5xl text-neon mb-1">CRAZY</h1>
            <p className="font-display tracking-[0.4em] text-crazy-text/70 text-[10px] mb-5">HEADS</p>
            <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-crazy-purple/60 text-crazy-purple text-[11px] tracking-[0.3em] uppercase">
              {tapped === "crazy" ? "Enter →" : "Tap to Enter"}
            </span>
          </div>
        </button>
      </div>

      {/* Top brand badge */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <p className="eyebrow text-foreground/60 tracking-[0.5em] text-[10px]">AVORA · TWO WORLDS · ONE VISION</p>
      </div>
    </main>
  );
};

export default Landing;
