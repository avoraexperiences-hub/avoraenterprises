import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import avoraHero from "@/assets/avora-hero.jpg";
import crazyHero from "@/assets/crazy-hero.jpg";
import avoraLogo from "@/assets/avora-logo.png";
import crazyLogo from "@/assets/crazy-logo.png";

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
      {/* Side-by-side split (all viewports including mobile) */}
      <div className="flex w-full h-full">
        {/* AVORA half */}
        <div
          onMouseEnter={() => setHovered("avora")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => (tapped === "avora" || window.matchMedia("(hover: hover)").matches) ? enter("avora") : setTapped("avora")}
          className={cn(
            "relative h-full overflow-hidden cursor-pointer transition-[flex] duration-[1100ms]",
            avoraExpanded ? "flex-[1.8]" : crazyExpanded ? "flex-[0.4]" : "flex-1",
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
          <div className="absolute inset-0 bg-gradient-to-r from-avora-bg/75 via-avora-bg/30 to-avora-bg/75" />
          <div className="absolute inset-0 bg-gradient-avora-radial opacity-50" />
          <div className="absolute inset-0 film-grain" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 animate-fade-in-slow">
            <img
              src={avoraLogo}
              alt="Avora Experiences"
              className={cn(
                "transition-all duration-700 w-auto object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]",
                avoraExpanded ? "h-40 sm:h-56 md:h-72 lg:h-80" : "h-28 sm:h-40 md:h-52 lg:h-64",
              )}
            />
            {(avoraExpanded || (!avoraExpanded && !crazyExpanded)) && (
              <button
                onClick={(e) => { e.stopPropagation(); enter("avora"); }}
                className="group mt-8 inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full border border-primary/60 bg-primary/5 backdrop-blur-sm text-primary text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase hover:bg-gradient-avora hover:text-avora-bg hover:border-transparent transition-all"
              >
                Enter Avora <ArrowRight className="size-3 sm:size-4 group-hover:translate-x-1 transition-transform" />
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
          onClick={() => (tapped === "crazy" || window.matchMedia("(hover: hover)").matches) ? enter("crazy") : setTapped("crazy")}
          className={cn(
            "relative h-full overflow-hidden cursor-pointer transition-[flex] duration-[1100ms] theme-crazy",
            crazyExpanded ? "flex-[1.8]" : avoraExpanded ? "flex-[0.4]" : "flex-1",
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
          <div className="absolute inset-0 bg-gradient-to-r from-crazy-bg/75 via-crazy-bg/25 to-crazy-bg/75" />
          <div className="absolute inset-0 bg-gradient-crazy-radial opacity-60" />
          <div className="absolute inset-0 film-grain" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 animate-fade-in-slow">
            <img
              src={crazyLogo}
              alt="Crazy Hedz"
              className={cn(
                "transition-all duration-700 w-auto object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]",
                crazyExpanded ? "h-40 sm:h-56 md:h-72 lg:h-80" : "h-28 sm:h-40 md:h-52 lg:h-64",
              )}
            />
            {(crazyExpanded || (!avoraExpanded && !crazyExpanded)) && (
              <button
                onClick={(e) => { e.stopPropagation(); enter("crazy"); }}
                className="group mt-8 inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-gradient-crazy text-white font-semibold text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase shadow-[0_0_30px_hsl(var(--crazy-purple)/0.6)] hover:shadow-[0_0_50px_hsl(var(--crazy-purple)/0.9)] hover:scale-105 transition-all"
              >
                Enter Crazy Hedz <ArrowRight className="size-3 sm:size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
