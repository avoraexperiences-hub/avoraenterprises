import { Music, Zap, Users, Ticket } from "lucide-react";
import crazyHero from "@/assets/crazy-hero.jpg";
import { Button } from "../ui/button";

const features = [
  { icon: Music, label: "Live DJs" },
  { icon: Zap, label: "Neon Production" },
  { icon: Users, label: "1000+ Capacity" },
  { icon: Ticket, label: "VIP Access" },
];

export function CrazyHedz({ onTickets, onAmbassador, onPartner }: { onTickets: () => void; onAmbassador: () => void; onPartner: () => void }) {
  return (
    <section id="crazy" className="relative theme-crazy bg-background overflow-hidden">
      <div className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <img src={crazyHero} alt="CrazyHedz neon concert" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-crazy-bg/30 via-crazy-bg/50 to-crazy-bg" />
        <div className="absolute inset-0 bg-gradient-crazy-radial opacity-40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="eyebrow text-crazy-purple mb-5">Youth Events</p>
          <h2 className="font-display text-6xl md:text-8xl text-neon mb-6">CRAZY HEDZ</h2>
          <p className="max-w-xl text-crazy-text/80 text-base md:text-lg mb-8">
            Where energy meets experience. Premium youth events that break all the rules.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="neon" size="lg" onClick={onTickets}>Get Tickets</Button>
            <Button variant="neon-outline" size="lg" onClick={onPartner}>Partner Your College</Button>
            <Button variant="neon-outline" size="lg" onClick={onAmbassador}>Become Ambassador</Button>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center text-center gap-3">
              <div className="size-14 rounded-full bg-crazy-purple/15 border border-crazy-purple/40 flex items-center justify-center">
                <f.icon className="size-6 text-crazy-purple" />
              </div>
              <span className="eyebrow text-crazy-text/80">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
