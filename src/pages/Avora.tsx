import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AvoraHero } from "@/components/sections/AvoraHero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { Portfolio } from "@/components/sections/Portfolio";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PlanEventModal } from "@/components/modals/FormModals";
import { CONTACT_EMAIL, CONTACT_PHONE, whatsappLink } from "@/lib/forms";
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

      {/* Contact section */}
      <section id="contact" className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-avora-radial opacity-20 pointer-events-none" />
        <div className="container relative max-w-3xl text-center">
          <p className="eyebrow text-primary mb-4 tracking-[0.4em]">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-6xl text-gold mb-4">Plan Your Experience</h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us about your vision and let's create something extraordinary together.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10 text-sm">
            <a href={`mailto:${CONTACT_EMAIL}`} className="group flex flex-col items-center gap-2 p-6 rounded-xl border border-border/60 hover:border-primary/60 transition-all">
              <Mail className="size-5 text-primary group-hover:scale-110 transition" />
              <span className="text-muted-foreground text-xs uppercase tracking-[0.2em]">Email</span>
              <span className="text-foreground break-all">{CONTACT_EMAIL}</span>
            </a>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="group flex flex-col items-center gap-2 p-6 rounded-xl border border-border/60 hover:border-primary/60 transition-all">
              <Phone className="size-5 text-primary group-hover:scale-110 transition" />
              <span className="text-muted-foreground text-xs uppercase tracking-[0.2em]">Call</span>
              <span className="text-foreground">{CONTACT_PHONE}</span>
            </a>
            <a href={whatsappLink("Hi Avora! I'd like to plan an event.")} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 p-6 rounded-xl border border-border/60 hover:border-primary/60 transition-all">
              <MapPin className="size-5 text-primary group-hover:scale-110 transition" />
              <span className="text-muted-foreground text-xs uppercase tracking-[0.2em]">WhatsApp</span>
              <span className="text-foreground">{CONTACT_PHONE}</span>
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
