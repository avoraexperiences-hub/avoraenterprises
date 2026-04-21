import { Camera, Video, Palette, Flower2, Music, MapPin, Utensils, Truck, Sparkles } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const services = [
  { icon: Sparkles, title: "Weddings", desc: "Royal-scale weddings curated end-to-end with cultural finesse." },
  { icon: Camera, title: "Photography", desc: "Cinematic captures that tell your story with artistry and emotion." },
  { icon: Video, title: "Videography", desc: "Filmic storytelling with drone, gimbal, and multi-camera setups." },
  { icon: Palette, title: "Décor & Design", desc: "Bespoke environments tailored to your vision and aesthetic." },
  { icon: Flower2, title: "Mehendi Artists", desc: "Master artists creating intricate, personalised bridal designs." },
  { icon: Music, title: "Entertainment", desc: "DJs, live bands, and celebrity performers for every occasion." },
  { icon: MapPin, title: "Venue Booking", desc: "Access to exclusive venues — palaces, resorts, and private estates." },
  { icon: Utensils, title: "Catering", desc: "Gourmet menus crafted by award-winning chefs across cuisines." },
  { icon: Truck, title: "Logistics & Styling", desc: "Seamless guest experiences from arrival to farewell." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-background">
      <div className="absolute inset-0 bg-gradient-avora-radial opacity-20 pointer-events-none" />
      <div className="container relative">
        <SectionHeader eyebrow="Expertise" title="Our Services" subtitle="Nine pillars of excellence — every detail designed with intention." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative p-8 rounded-xl bg-card border border-border/60 hover:border-primary/60 transition-all duration-500 hover:shadow-gold hover:-translate-y-1"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="size-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <s.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
