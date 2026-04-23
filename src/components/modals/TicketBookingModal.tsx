import { useState } from "react";
import { Ticket, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitToSheets, whatsappLink } from "@/lib/forms";
import type { EventItem } from "../sections/Events";

export function TicketBookingModal({
  event,
  open,
  onOpenChange,
}: {
  event: EventItem | null;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const { toast } = useToast();
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!event) return;
    const fd = new FormData(e.currentTarget);
    const data = {
      eventId: event.id,
      eventName: event.name,
      eventDate: event.date,
      quantity: qty,
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      college: String(fd.get("college") ?? "").trim(),
      referral: String(fd.get("referral") ?? "").trim(),
    };
    if (!data.name || !data.phone) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    const ok = await submitToSheets("crazy_ticket_inquiry", data);
    setLoading(false);
    if (ok) {
      toast({
        title: "Interest registered! 🎉",
        description: `We'll WhatsApp you ticket details for ${event.name} within a few hours.`,
      });
      onOpenChange(false);
      (e.target as HTMLFormElement).reset();
      setQty(1);
    } else {
      toast({ title: "Something went wrong", variant: "destructive" });
    }
  }

  if (!event) return null;

  const waMessage = `Hi! I'm interested in ${event.name} on ${event.date}. Please share ticket details.`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg theme-crazy bg-card border-crazy-purple/30">
        <DialogHeader>
          <p className="eyebrow text-crazy-purple flex items-center gap-2"><Ticket className="size-3" /> Register Interest</p>
          <DialogTitle className="font-display text-3xl text-neon">{event.name}</DialogTitle>
          <DialogDescription>{event.date} · {event.location} · {event.price}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Number of Tickets</Label>
            <div className="flex items-center gap-3 mt-2">
              <Button type="button" variant="outline" size="icon" onClick={() => setQty(Math.max(1, qty - 1))}>−</Button>
              <span className="font-mono text-lg w-12 text-center">{qty}</span>
              <Button type="button" variant="outline" size="icon" onClick={() => setQty(Math.min(10, qty + 1))}>+</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div><Label htmlFor="t-name">Name *</Label><Input id="t-name" name="name" required maxLength={100} /></div>
            <div><Label htmlFor="t-phone">Phone *</Label><Input id="t-phone" name="phone" type="tel" required maxLength={20} /></div>
          </div>
          <div><Label htmlFor="t-email">Email</Label><Input id="t-email" name="email" type="email" maxLength={120} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><Label htmlFor="t-college">College (optional)</Label><Input id="t-college" name="college" maxLength={120} /></div>
            <div><Label htmlFor="t-ref">Referral Code</Label><Input id="t-ref" name="referral" placeholder="CH-XXXX-1234" maxLength={20} /></div>
          </div>

          <Button type="submit" variant="neon" className="w-full" size="lg" disabled={loading}>
            {loading ? "Sending..." : <>Register Interest <Send className="size-4" /></>}
          </Button>

          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs text-crazy-cyan underline-offset-4 hover:underline"
          >
            Or message us directly on WhatsApp →
          </a>
        </form>
      </DialogContent>
    </Dialog>
  );
}
