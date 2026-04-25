import { useState } from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AvoraHero } from "@/components/sections/AvoraHero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { Portfolio } from "@/components/sections/Portfolio";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PlanEventModal } from "@/components/modals/FormModals";
import { CONTACT_EMAIL, CONTACT_PHONE, INSTAGRAM_AVORA, INSTAGRAM_AVORA_HANDLE, PRE_WEDDING_VENUES } from "@/lib/forms";
import { Button } from "@/components/ui/button";

const Avora = () => {
  const [planOpen, setPlanOpen] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar
        brand="avora"
        onPrimaryCta={() => setPlanOpen(true)}
        primaryLabel="Plan Event"
      />

      <AvoraHero
        onPlanEvent={() => setPlanOpen(true)}
        onExplore={() => scrollTo("services")}
      />

      <About />
      <Services />
      <Packages onCta={() => setPlanOpen(true)} />
      <div id="portfolio">
        <Portfolio />
      </div>

      {/* Pre-Wedding Venues */}
      <section id="venues" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-avora-radial opacity-15 pointer-events-none" />
        <div className="container relative max-w-5xl text-center">
          <p className="eyebrow text-primary mb-4 tracking-[0.4em]">Destinations</p>
          <h2 className="font-display text-4xl md:text-6xl text-gold mb-4">Pre-Wedding Venues</h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Iconic destinations across India — from royal palaces to coastal hideaways, curated for your story.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {PRE_WEDDING_VENUES.map((v) => (
              <div
                key={v}
                className="group p-5 md:p-6 rounded-xl border border-border/60 bg-background/40 hover:border-primary/60 hover:bg-background/70 transition-all"
              >
                <span className="block font-display text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-avora-radial opacity-20 pointer-events-none" />
        <div className="container relative max-w-5xl text-center">
          <p className="eyebrow text-primary mb-4 tracking-[0.4em]">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-6xl text-gold mb-4">Plan Your Experience</h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us about your vision and let's create something extraordinary together.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 md:gap-6 mb-10">
            <a href={`mailto:${CONTACT_EMAIL}`} className="group flex flex-col items-center gap-3 p-7 md:p-8 rounded-2xl border border-border/60 bg-background/50 hover:border-primary/60 hover:bg-background/80 transition-all min-w-0">
              <Mail className="size-6 text-primary group-hover:scale-110 transition" />
              <span className="text-primary text-[11px] uppercase tracking-[0.3em] font-semibold">Email</span>
              <span className="text-foreground text-sm md:text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-full" title={CONTACT_EMAIL}>{CONTACT_EMAIL}</span>
            </a>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="group flex flex-col items-center gap-3 p-7 md:p-8 rounded-2xl border border-border/60 bg-background/50 hover:border-primary/60 hover:bg-background/80 transition-all min-w-0">
              <Phone className="size-6 text-primary group-hover:scale-110 transition" />
              <span className="text-primary text-[11px] uppercase tracking-[0.3em] font-semibold">Call</span>
              <span className="text-foreground text-sm md:text-base font-medium tabular-nums whitespace-nowrap">{CONTACT_PHONE}</span>
            </a>
            <a href={INSTAGRAM_AVORA} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-7 md:p-8 rounded-2xl border border-border/60 bg-background/50 hover:border-primary/60 hover:bg-background/80 transition-all min-w-0">
              <Instagram className="size-6 text-primary group-hover:scale-110 transition" />
              <span className="text-primary text-[11px] uppercase tracking-[0.3em] font-semibold">Instagram</span>
              <span className="text-foreground text-sm md:text-base font-medium whitespace-nowrap">{INSTAGRAM_AVORA_HANDLE}</span>
            </a>
          </div>

          <Button variant="gold" size="lg" className="px-12 py-7" onClick={() => setPlanOpen(true)}>
            Plan My Event
          </Button>
        </div>
      </section>

      <Footer brand="avora" />
      <WhatsAppButton />

      <PlanEventModal open={planOpen} onOpenChange={setPlanOpen} />
    </main>
  );
};

export default Avora;
