import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/forms";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi! I'd like to know more about Avora × CrazyHedz events.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
