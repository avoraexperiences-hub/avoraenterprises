import { useState, useMemo } from "react";
import { Ticket } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitToSheets } from "@/lib/forms";
import type { EventItem } from "../sections/Events";
import { cn } from "@/lib/utils";

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
  const [tier, setTier] = useState<"general" | "vip">("general");
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  const basePrice = useMemo(() => parseInt((event?.price ?? "0").replace(/\D/g, ""), 10) || 0, [event]);
  const unitPrice = tier === "vip" ? basePrice * 2 : basePrice;
  const total = unitPrice * qty;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!event) return;
    const fd = new FormData(e.currentTarget);
    const data = {
      eventId: event.id,
      eventName: event.name,
      tier,
      quantity: qty,
      unitPrice,
      total,
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
    const ok = await submitToSheets("crazy_ticket_booking", data);
    setLoading(false);
    if (ok) {
      toast({
        title: "Registration confirmed!",
        description: `${qty} × ${tier.toUpperCase()} for ${event.name}. We'll send payment & ticket details to your phone.`,
      });
      onOpenChange(false);
      (e.target as HTMLFormElement).reset();
      setQty(1);
      setTier("general");
    } else {
      toast({ title: "Something went wrong", variant: "destructive" });
    }
  }

  if (!event) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg theme-crazy bg-card border-crazy-purple/30">
        <DialogHeader>
          <p className="eyebrow text-crazy-purple flex items-center gap-2"><Ticket className="size-3" /> Ticket Booking</p>
          <DialogTitle className="font-display text-3xl text-neon">{event.name}</DialogTitle>
          <DialogDescription>{event.date} · {event.location}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="mb-2 block">Select Tier</Label>
            <div className="grid grid-cols-2 gap-3">
              {(["general", "vip"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTier(t)}
                  className={cn(
                    "p-4 rounded-lg border text-left transition-all",
                    tier === t ? "border-crazy-purple bg-crazy-purple/15" : "border-border/60 hover:border-foreground/40",
                  )}
                >
                  <div className="font-display text-lg uppercase">{t}</div>
                  <div className="font-mono text-xs text-crazy-cyan">
                    ₹{t === "vip" ? basePrice * 2 : basePrice}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label>Quantity</Label>
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
            <div><Label htmlFor="t-college">College</Label><Input id="t-college" name="college" maxLength={120} /></div>
            <div><Label htmlFor="t-ref">Referral Code</Label><Input id="t-ref" name="referral" placeholder="CH-XXXX-1234" maxLength={20} /></div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-crazy-purple/10 border border-crazy-purple/30">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="font-display text-2xl text-neon">₹{total.toLocaleString("en-IN")}</span>
          </div>

          <Button type="submit" variant="neon" className="w-full" size="lg" disabled={loading}>
            {loading ? "Processing..." : "Proceed to Payment"}
          </Button>
          <p className="text-[10px] text-center text-muted-foreground">
            Razorpay payment integration is wired in the next phase. For now, we'll confirm via WhatsApp.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
