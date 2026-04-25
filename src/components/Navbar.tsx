import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import avoraLogo from "@/assets/avora-logo.png";
import crazyLogo from "@/assets/crazy-logo.png";

type Brand = "avora" | "crazy";

const linksByBrand: Record<Brand, { label: string; href: string }[]> = {
  avora: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#packages" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  crazy: [
    { label: "Home", href: "#home" },
    { label: "Events", href: "#events" },
    { label: "Ambassador", href: "#ambassador" },
    { label: "Partner", href: "#partner" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Navbar({
  brand,
  onPrimaryCta,
  primaryLabel,
}: {
  brand: Brand;
  onPrimaryCta: () => void;
  primaryLabel: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = linksByBrand[brand];
  const otherBrand: Brand = brand === "avora" ? "crazy" : "avora";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled ? "glass-nav py-3 md:py-4" : "py-4 md:py-6 bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          {brand === "avora" ? (
            <img
              src={avoraLogo}
              alt="Avora"
              className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
          ) : (
            <img
              src={crazyLogo}
              alt="Crazy Hedz"
              className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
          )}
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-[0.15em] uppercase text-foreground/75 hover:text-foreground story-link"
            >
              {l.label}
            </a>
          ))}
          <Link
            to={`/${otherBrand}`}
            className={cn(
              "text-sm tracking-[0.15em] uppercase",
              brand === "avora" ? "text-crazy-purple hover:opacity-80" : "text-primary hover:opacity-80"
            )}
          >
            {brand === "avora" ? "Crazy Hedz ↗" : "← Avora"}
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {brand === "avora" ? (
            <Button variant="gold" size="lg" onClick={onPrimaryCta}>{primaryLabel}</Button>
          ) : (
            <Button variant="neon" size="lg" onClick={onPrimaryCta}>{primaryLabel}</Button>
          )}
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden h-11 w-11 inline-flex items-center justify-center rounded-md border border-border/60"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-nav border-t border-border/40 mt-3 animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base tracking-[0.15em] uppercase py-2 border-b border-border/30"
              >
                {l.label}
              </a>
            ))}
            <Link
              to={`/${otherBrand}`}
              onClick={() => setOpen(false)}
              className={cn(
                "text-base tracking-[0.15em] uppercase py-2 border-b border-border/30",
                brand === "avora" ? "text-crazy-purple" : "text-primary"
              )}
            >
              {brand === "avora" ? "Crazy Hedz ↗" : "← Avora"}
            </Link>
            {brand === "avora" ? (
              <Button variant="gold" size="lg" onClick={() => { onPrimaryCta(); setOpen(false); }}>{primaryLabel}</Button>
            ) : (
              <Button variant="neon" size="lg" onClick={() => { onPrimaryCta(); setOpen(false); }}>{primaryLabel}</Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
