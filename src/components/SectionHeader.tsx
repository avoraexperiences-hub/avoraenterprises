export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  variant = "gold",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  variant?: "gold" | "neon";
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <p className={`eyebrow ${variant === "gold" ? "text-primary" : "text-crazy-purple"} mb-4`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl ${variant === "gold" ? "text-gold" : "text-neon"} mb-4`}>
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground text-base md:text-lg">{subtitle}</p>}
      <div className={`mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent ${variant === "gold" ? "via-primary" : "via-crazy-purple"} to-transparent`} />
    </div>
  );
}
