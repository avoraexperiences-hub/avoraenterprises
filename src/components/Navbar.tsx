import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ brand, onPlanEvent, onTickets }: { brand: "avora" | "crazy"; onPlanEvent: () => void; onTickets: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled ? "glass-nav py-3" : "py-5 bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-display text-2xl tracking-wider">
            <span className="text-gold">AVORA</span>
            <span className="text-muted-foreground mx-1.5">×</span>
            <span className="text-neon">HEDZ</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm tracking-wide text-foreground/80 hover:text-foreground story-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {brand === "avora" ? (
            <Button variant="gold-outline" onClick={onPlanEvent}>Plan Event</Button>
          ) : (
            <Button variant="neon-outline" onClick={onTickets}>Tickets</Button>
          )}
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-md border border-border/60"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-nav border-t border-border/40 mt-3 animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base tracking-wide py-2 border-b border-border/30"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <Button variant="gold" className="flex-1" onClick={() => { onPlanEvent(); setOpen(false); }}>Plan Event</Button>
              <Button variant="neon" className="flex-1" onClick={() => { onTickets(); setOpen(false); }}>Tickets</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
