import { Zap, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import crazyHero from "@/assets/crazy-hero.jpg";

export function CrazyHero({ onTickets, onAmbassador }: { onTickets: () => void; onAmbassador: () => void }) {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden theme-crazy bg-crazy-bg flex items-center">
      <img
        src={crazyHero}
        alt="Crazy Hedz neon concert crowd"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-crazy-bg/40 via-crazy-bg/55 to-crazy-bg" />
      <div className="absolute inset-0 bg-gradient-crazy-radial opacity-50" />
      <div className="absolute inset-0 film-grain" />

      <div className="container relative z-10 text-center px-6 py-24 md:py-32 animate-fade-in-slow">
        <p className="eyebrow text-crazy-purple mb-6 tracking-[0.5em]">
          <Zap className="inline size-3 mr-2" />
          College Events
        </p>
        <h1 className="font-display italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-neon leading-[0.95] drop-shadow-2xl">
          CRAZY
        </h1>
        <p className="font-display tracking-[0.5em] text-crazy-text/85 text-xs md:text-sm mt-4 mb-8">
          H E D Z
        </p>
        <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-crazy-purple to-transparent mb-8" />
        <p className="max-w-2xl mx-auto text-crazy-text/85 text-base md:text-lg leading-relaxed mb-10">
          Electrifying college events built for the bold — where energy meets artistry and every moment hits different.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="neon" size="lg" className="px-10 py-7 text-sm" onClick={onTickets}>
            Get Tickets <Music className="size-4" />
          </Button>
          <Button variant="neon-outline" size="lg" className="px-10 py-7 text-sm" onClick={onAmbassador}>
            Become an Ambassador
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-crazy-purple/80 animate-fade-in-slow">
        <span className="eyebrow text-[10px] tracking-[0.4em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-crazy-purple/60 to-transparent" />
      </div>
    </section>
  );
}
