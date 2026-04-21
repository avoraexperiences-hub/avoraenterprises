import { cn } from "@/lib/utils";

export function BrandSwitcher({
  brand,
  setBrand,
}: {
  brand: "avora" | "crazy" | null;
  setBrand: (b: "avora" | "crazy") => void;
}) {
  const active = brand ?? "avora";
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col gap-2 p-2 rounded-full backdrop-blur-xl bg-background/70 border border-border/60 shadow-elegant">
        <button
          aria-label="Switch to Avora"
          onClick={() => { setBrand("avora"); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}
          className={cn(
            "h-11 w-11 rounded-full font-display text-sm transition-all",
            active === "avora"
              ? "bg-gradient-avora text-avora-bg shadow-gold scale-110"
              : "text-muted-foreground hover:text-primary",
          )}
        >
          AV
        </button>
        <button
          aria-label="Switch to CrazyHedz"
          onClick={() => { setBrand("crazy"); document.getElementById("crazy")?.scrollIntoView({ behavior: "smooth" }); }}
          className={cn(
            "h-11 w-11 rounded-full font-display text-sm transition-all",
            active === "crazy"
              ? "bg-gradient-crazy text-white shadow-neon scale-110"
              : "text-muted-foreground hover:text-crazy-purple",
          )}
        >
          CH
        </button>
      </div>
    </div>
  );
}
