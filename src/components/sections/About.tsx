import { SectionHeader } from "../SectionHeader";
import { CountUp } from "../CountUp";

const stats = [
  { end: 500, suffix: "+", label: "Events Crafted" },
  { end: 350, suffix: "+", label: "Happy Clients" },
  { end: 25, suffix: "+", label: "Cities Served" },
  { end: 8, suffix: "+", label: "Years of Excellence" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background">
      <div className="container max-w-5xl">
        <SectionHeader eyebrow="Our Story" title="About Avora" />
        <div className="space-y-8 text-center">
          <p className="text-foreground/85 text-lg md:text-xl leading-relaxed font-light">
            Born from a passion for perfection, <span className="text-primary">Avora Experiences</span> transforms visions into extraordinary realities. We believe every celebration deserves to be a <em className="text-primary not-italic">masterpiece</em> — meticulously curated, flawlessly executed.
          </p>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings in boutique venues to grand celebrations in royal palaces, our team of creative directors, designers, and event architects bring unparalleled expertise to every detail. We don't just plan events — we craft legacies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <CountUp end={s.end} suffix={s.suffix} className="font-display text-5xl md:text-6xl text-gold mb-2 block" />
              <div className="eyebrow text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
