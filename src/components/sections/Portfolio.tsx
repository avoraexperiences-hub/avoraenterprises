import { useState } from "react";
import { SectionHeader } from "../SectionHeader";
import { cn } from "@/lib/utils";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const items = [
  { src: p1, cat: "Weddings" },
  { src: p2, cat: "Haldi" },
  { src: p3, cat: "Birthdays" },
  { src: p4, cat: "Corporate" },
  { src: p5, cat: "Parties" },
  { src: p6, cat: "Parties" },
];

const filters = ["All", "Weddings", "Haldi", "Birthdays", "Parties", "Corporate"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="container">
        <SectionHeader eyebrow="Our Work" title="Portfolio" />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase border transition-all",
                active === f
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/40",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((it, i) => (
            <div
              key={it.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-border/40"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition">
                <p className="eyebrow text-primary mb-1">{it.cat}</p>
                <h3 className="font-display text-2xl">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
