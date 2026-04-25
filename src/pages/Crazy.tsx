import { useState } from "react";
import { Mail, Phone, Instagram, Music, Users, Ticket, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CrazyHero } from "@/components/sections/CrazyHero";
import { Events, type EventItem } from "@/components/sections/Events";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AmbassadorModal, PartnerModal } from "@/components/modals/FormModals";
import { TicketBookingModal } from "@/components/modals/TicketBookingModal";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_ANSH, INSTAGRAM_CRAZY, INSTAGRAM_CRAZY_HANDLE } from "@/lib/forms";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Music, label: "Live DJs & Artists" },
  { icon: Zap, label: "Neon Production" },
  { icon: Users, label: "1000+ Capacity" },
  { icon: Ticket, label: "VIP Access" },
];

const Crazy = () => {
  const [ambOpen, setAmbOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [bookingEvent, setBookingEvent] = useState<EventItem | null>(null);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen theme-crazy bg-background text-foreground">
      <Navbar
        brand="crazy"
        onPrimaryCta={() => scrollTo("events")}
        primaryLabel="Get Tickets"
      />

      <CrazyHero
        onTickets={() => scrollTo("events")}
        onAmbassador={() => setAmbOpen(true)}
      />

      {/* Feature strip */}
      <section className="py-16 md:py-20 bg-background border-y border-border/40">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col items-center text-center gap-3">
                <div className="size-14 md:size-16 rounded-full bg-crazy-purple/15 border border-crazy-purple/40 flex items-center justify-center">
                  <f.icon className="size-6 text-crazy-purple" />
                </div>
                <span className="eyebrow text-crazy-text/80">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Events onBook={(e) => setBookingEvent(e)} />

      {/* Ambassador */}
      <section id="ambassador" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-crazy-radial opacity-20 pointer-events-none" />
        <div className="container relative max-w-3xl text-center">
          <p className="eyebrow text-crazy-purple mb-4 tracking-[0.4em]">Join the Crew</p>
          <h2 className="font-display text-4xl md:text-6xl text-neon mb-6">Campus Ambassador</h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
            Represent Crazy Hedz at your college. Earn rewards, exclusive perks & VIP access. Get your unique referral code and start earning on every ticket booked through you.
          </p>
          <Button variant="neon" size="lg" className="px-12 py-7" onClick={() => setAmbOpen(true)}>
            Apply as Ambassador
          </Button>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container relative max-w-3xl text-center">
          <p className="eyebrow text-crazy-pink mb-4 tracking-[0.4em]">Collaborate</p>
          <h2 className="font-display text-4xl md:text-6xl text-neon mb-6">Partner Your College</h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
            Bring electrifying Crazy Hedz events to your campus. We handle production, talent and execution — you bring the crowd.
          </p>
          <Button variant="neon-outline" size="lg" className="px-12 py-7" onClick={() => setPartnerOpen(true)}>
            Partner With Us
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 md:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-crazy-radial opacity-20 pointer-events-none" />
        <div className="container relative max-w-6xl text-center">
          <p className="eyebrow text-crazy-purple mb-4 tracking-[0.4em]">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-6xl text-neon mb-6">Let's Talk</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-10">
            <a href={`mailto:${CONTACT_EMAIL}`} className="group flex flex-col items-center gap-3 p-6 md:p-7 rounded-2xl border border-border/60 bg-background/50 hover:border-crazy-purple/60 hover:bg-background/80 transition-all min-w-0">
              <Mail className="size-6 text-crazy-purple group-hover:scale-110 transition" />
              <span className="text-crazy-purple text-[11px] uppercase tracking-[0.3em] font-semibold">Email</span>
              <span className="text-foreground text-sm md:text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-full" title={CONTACT_EMAIL}>{CONTACT_EMAIL}</span>
            </a>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="group flex flex-col items-center gap-3 p-6 md:p-7 rounded-2xl border border-border/60 bg-background/50 hover:border-crazy-purple/60 hover:bg-background/80 transition-all min-w-0">
              <Phone className="size-6 text-crazy-purple group-hover:scale-110 transition" />
              <span className="text-crazy-purple text-[11px] uppercase tracking-[0.3em] font-semibold">Call</span>
              <span className="text-foreground text-sm md:text-base font-medium tabular-nums whitespace-nowrap">{CONTACT_PHONE}</span>
            </a>
            <a href={`tel:${CONTACT_PHONE_ANSH.replace(/\s/g, "")}`} className="group flex flex-col items-center gap-3 p-6 md:p-7 rounded-2xl border border-border/60 bg-background/50 hover:border-crazy-purple/60 hover:bg-background/80 transition-all min-w-0">
              <Phone className="size-6 text-crazy-purple group-hover:scale-110 transition" />
              <span className="text-crazy-purple text-[11px] uppercase tracking-[0.3em] font-semibold">Call · Ansh</span>
              <span className="text-foreground text-sm md:text-base font-medium tabular-nums whitespace-nowrap">{CONTACT_PHONE_ANSH}</span>
            </a>
            <a href={INSTAGRAM_CRAZY} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 md:p-7 rounded-2xl border border-border/60 bg-background/50 hover:border-crazy-purple/60 hover:bg-background/80 transition-all min-w-0">
              <Instagram className="size-6 text-crazy-purple group-hover:scale-110 transition" />
              <span className="text-crazy-purple text-[11px] uppercase tracking-[0.3em] font-semibold">Instagram</span>
              <span className="text-foreground text-sm md:text-base font-medium whitespace-nowrap">{INSTAGRAM_CRAZY_HANDLE}</span>
            </a>
          </div>
        </div>
      </section>

      <Footer brand="crazy" />
      <WhatsAppButton />

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

export default Crazy;
