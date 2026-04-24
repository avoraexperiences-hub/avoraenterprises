import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { BrandSwitcher } from "@/components/BrandSwitcher";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { Portfolio } from "@/components/sections/Portfolio";
import { Events, type EventItem } from "@/components/sections/Events";
import { CrazyHedz } from "@/components/sections/CrazyHedz";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PlanEventModal, AmbassadorModal, PartnerModal } from "@/components/modals/FormModals";
import { TicketBookingModal } from "@/components/modals/TicketBookingModal";

const Index = () => {
  const location = useLocation() as { state?: { brand?: "avora" | "crazy" } };
  const initialBrand =
    location.state?.brand ??
    ((typeof window !== "undefined" && (sessionStorage.getItem("brand") as "avora" | "crazy" | null)) || "avora");
  const [brand, setBrand] = useState<"avora" | "crazy" | null>(initialBrand);
  const [planOpen, setPlanOpen] = useState(false);
  const [ambOpen, setAmbOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [bookingEvent, setBookingEvent] = useState<EventItem | null>(null);

  const goToEvents = () => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar
        brand={brand ?? "avora"}
        onPlanEvent={() => setPlanOpen(true)}
        onTickets={goToEvents}
      />
      <BrandSwitcher brand={brand} setBrand={setBrand} />

      <div id="home" />
      <About />
      <Services />
      <Packages onCta={() => setPlanOpen(true)} />
      <Portfolio />

      <CrazyHedz
        onTickets={goToEvents}
        onAmbassador={() => setAmbOpen(true)}
        onPartner={() => setPartnerOpen(true)}
      />

      <Events onBook={(e) => setBookingEvent(e)} />

      {/* Contact section */}
      <section id="contact" className="relative py-24 md:py-32 bg-secondary/30">
        <div className="container max-w-2xl text-center">
          <p className="eyebrow text-primary mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl text-gold mb-4">Plan Your Experience</h2>
          <p className="text-muted-foreground mb-8">Tell us about your vision and let's create something extraordinary together.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setPlanOpen(true)}
              className="px-8 py-4 rounded-md bg-gradient-avora text-avora-bg font-semibold tracking-wide shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 transition-all"
            >
              Plan My Event
            </button>
            <a
              href="mailto:hello@avoraexperiences.com"
              className="px-8 py-4 rounded-md border border-primary/60 text-primary uppercase tracking-[0.2em] text-xs hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
            >
              hello@avoraexperiences.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      <PlanEventModal open={planOpen} onOpenChange={setPlanOpen} />
      <AmbassadorModal open={ambOpen} onOpenChange={setAmbOpen} />
      <PartnerModal open={partnerOpen} onOpenChange={setPartnerOpen} />
      <TicketBookingModal
        event={bookingEvent}
        open={!!bookingEvent}
        onOpenChange={(o) => !o && setBookingEvent(null)}
      />
    </main>
  );
};

export default Index;
