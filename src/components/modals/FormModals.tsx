import { useState } from "react";
import { Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitToSheets } from "@/lib/forms";

export function PlanEventModal({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? "").trim(),
      eventType: String(fd.get("eventType") ?? "").trim(),
      budget: String(fd.get("budget") ?? "").trim(),
      location: String(fd.get("location") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim().slice(0, 1000),
    };
    if (!data.name || !data.phone) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    const ok = await submitToSheets("avora_inquiry", data);
    setLoading(false);
    if (ok) {
      toast({ title: "Inquiry sent", description: "Our team will reach out within 24 hours." });
      onOpenChange(false);
      (e.target as HTMLFormElement).reset();
    } else {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg border-primary/30 bg-card">
        <DialogHeader>
          <p className="eyebrow text-primary">Get in Touch</p>
          <DialogTitle className="font-display text-3xl text-gold">Plan Your Experience</DialogTitle>
          <DialogDescription>Tell us about your vision and let's create something extraordinary.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div><Label htmlFor="name">Name *</Label><Input id="name" name="name" required maxLength={100} /></div>
            <div><Label htmlFor="phone">Phone *</Label><Input id="phone" name="phone" type="tel" required maxLength={20} /></div>
          </div>
          <div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" maxLength={120} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><Label htmlFor="eventType">Event Type</Label><Input id="eventType" name="eventType" placeholder="Wedding, Corporate..." maxLength={60} /></div>
            <div><Label htmlFor="budget">Budget</Label><Input id="budget" name="budget" placeholder="₹10L+" maxLength={40} /></div>
          </div>
          <div><Label htmlFor="location">Location</Label><Input id="location" name="location" maxLength={80} /></div>
          <div>
            <Label htmlFor="message">Tell us about your event</Label>
            <textarea id="message" name="message" rows={3} maxLength={1000} className="mt-2 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
          </div>
          <Button type="submit" variant="gold" className="w-full" size="lg" disabled={loading}>
            {loading ? "Sending..." : <>Plan My Event <Send className="size-4" /></>}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function AmbassadorModal({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? "").trim(),
      college: String(fd.get("college") ?? "").trim(),
      year: String(fd.get("year") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      instagram: String(fd.get("instagram") ?? "").trim(),
    };
    if (!data.name || !data.phone || !data.college) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    const referralCode = `CH-${data.name.replace(/\s+/g, "").slice(0, 4).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setLoading(true);
    const ok = await submitToSheets("crazy_ambassador", { ...data, referralCode });
    setLoading(false);
    if (ok) {
      setCode(referralCode);
      toast({ title: "Welcome aboard, Ambassador!" });
    } else {
      toast({ title: "Something went wrong", variant: "destructive" });
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { onOpenChange(o); if (!o) setCode(null); }}>
      <DialogContent className="max-w-lg theme-crazy bg-card border-crazy-purple/30">
        <DialogHeader>
          <p className="eyebrow text-crazy-purple">Join the Crew</p>
          <DialogTitle className="font-display text-3xl text-neon">Campus Ambassador</DialogTitle>
          <DialogDescription>Represent Crazy Hedz at your college. Earn rewards, perks & exclusive access.</DialogDescription>
        </DialogHeader>

        {code ? (
          <div className="text-center py-6 space-y-4 animate-scale-in">
            <p className="text-muted-foreground">Your unique referral code:</p>
            <div className="font-mono text-2xl bg-crazy-purple/10 border border-crazy-purple/40 rounded-lg py-4 px-6 text-crazy-purple tracking-widest">
              {code}
            </div>
            <p className="text-xs text-muted-foreground">Save this code. Use it to track your referrals & earn ticket commissions.</p>
            <Button variant="neon" className="w-full" onClick={() => onOpenChange(false)}>Done</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div><Label htmlFor="amb-name">Name *</Label><Input id="amb-name" name="name" required maxLength={100} /></div>
              <div><Label htmlFor="amb-phone">Phone *</Label><Input id="amb-phone" name="phone" type="tel" required maxLength={20} /></div>
            </div>
            <div><Label htmlFor="amb-college">College *</Label><Input id="amb-college" name="college" required maxLength={120} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label htmlFor="amb-year">Year</Label><Input id="amb-year" name="year" placeholder="2nd Year" maxLength={20} /></div>
              <div><Label htmlFor="amb-ig">Instagram ID</Label><Input id="amb-ig" name="instagram" placeholder="@yourhandle" maxLength={60} /></div>
            </div>
            <Button type="submit" variant="neon" className="w-full" size="lg" disabled={loading}>
              {loading ? "Submitting..." : "Apply Now"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function PartnerModal({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? "").trim(),
      college: String(fd.get("college") ?? "").trim(),
      position: String(fd.get("position") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      instagram: String(fd.get("instagram") ?? "").trim(),
      strength: String(fd.get("strength") ?? "").trim(),
    };
    if (!data.name || !data.phone || !data.college) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    const ok = await submitToSheets("crazy_partner_college", data);
    setLoading(false);
    if (ok) {
      toast({ title: "Application received", description: "Our team will be in touch shortly." });
      onOpenChange(false);
      (e.target as HTMLFormElement).reset();
    } else {
      toast({ title: "Something went wrong", variant: "destructive" });
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg theme-crazy bg-card border-crazy-purple/30">
        <DialogHeader>
          <p className="eyebrow text-crazy-purple">Collaborate</p>
          <DialogTitle className="font-display text-3xl text-neon">Partner Your College</DialogTitle>
          <DialogDescription>Bring Crazy Hedz events to your campus.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div><Label htmlFor="p-name">Your Name *</Label><Input id="p-name" name="name" required maxLength={100} /></div>
            <div><Label htmlFor="p-phone">Phone *</Label><Input id="p-phone" name="phone" type="tel" required maxLength={20} /></div>
          </div>
          <div><Label htmlFor="p-college">College Name *</Label><Input id="p-college" name="college" required maxLength={120} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><Label htmlFor="p-pos">Position</Label><Input id="p-pos" name="position" placeholder="Committee Lead" maxLength={60} /></div>
            <div><Label htmlFor="p-strength">Student Strength</Label><Input id="p-strength" name="strength" placeholder="2000+" maxLength={20} /></div>
          </div>
          <div><Label htmlFor="p-ig">Instagram</Label><Input id="p-ig" name="instagram" placeholder="@college_handle" maxLength={60} /></div>
          <Button type="submit" variant="neon" className="w-full" size="lg" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
