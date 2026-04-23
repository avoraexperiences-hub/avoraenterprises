import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { SectionHeader } from "../SectionHeader";
import { cn } from "@/lib/utils";

export type EventItem = {
  id: string;
  name: string;
  date: string;
  location: string;
  price: string;
  status: "past" | "current" | "upcoming";
  desc: string;
};

const events: EventItem[] = [
  { id: "neon-nights", name: "Neon Nights", date: "May 18, 2026", location: "Mumbai", price: "₹999", status: "upcoming", desc: "The ultimate DJ experience under UV lights." },
  { id: "campus-rave", name: "Campus Rave", date: "Jun 02, 2026", location: "Pune", price: "₹799", status: "upcoming", desc: "College parties reimagined with premium production." },
  { id: "sunset-sessions", name: "Sunset Sessions", date: "Apr 26, 2026", location: "Goa", price: "₹1499", status: "current", desc: "Open-air music festival with indie & electronic acts." },
  { id: "underground", name: "Underground", date: "May 05, 2026", location: "Bangalore", price: "₹1299", status: "upcoming", desc: "Exclusive invite-only warehouse party." },
  { id: "monsoon-jam", name: "Monsoon Jam", date: "Jul 20, 2025", location: "Mumbai", price: "₹699", status: "past", desc: "Sold out — 1500 attendees, 12 artists." },
  { id: "fresher-fest", name: "Fresher Fest 2025", date: "Aug 15, 2025", location: "Delhi", price: "₹499", status: "past", desc: "Largest college welcome festival." },
];

export function Events({ onBook }: { onBook: (e: EventItem) => void }) {
  const [tab, setTab] = useState<"upcoming" | "current" | "past">("upcoming");
  const filtered = events.filter((e) => e.status === tab);

  return (
    <section id="events" className="relative py-24 md:py-32 theme-crazy bg-background">
      <div className="absolute inset-0 bg-gradient-crazy-radial opacity-20 pointer-events-none" />
      <div className="container relative">
        <SectionHeader eyebrow="Live Lineup" title="Upcoming Events" variant="neon" subtitle="Premium youth experiences across Mumbai and beyond." />

        <div className="flex justify-center gap-2 mb-10">
          {(["upcoming", "current", "past"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "px-5 py-2 rounded-full text-xs tracking-[0.25em] uppercase border transition-all",
                tab === t
                  ? "border-crazy-purple text-crazy-purple bg-crazy-purple/15"
                  : "border-border/60 text-muted-foreground hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No events in this category yet.</p>
          )}
          {filtered.map((e) => (
            <div
              key={e.id}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-xl bg-card border border-border/60 hover:border-crazy-purple/60 hover:shadow-neon transition-all"
            >
              <div className="flex-1">
                <h3 className="font-display text-2xl mb-1">{e.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{e.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="size-3.5 text-crazy-purple" />{e.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="size-3.5 text-crazy-pink" />{e.location}</span>
                  <span className="text-crazy-cyan font-mono">{e.price}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {e.status === "past" ? (
                  <span className="eyebrow text-muted-foreground">Sold Out</span>
                ) : (
                  <Button variant="neon" onClick={() => onBook(e)}>Register Interest</Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
