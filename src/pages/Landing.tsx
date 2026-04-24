import { useNavigate } from "react-router-dom";
import { SplitHero } from "@/components/SplitHero";

const Landing = () => {
  const navigate = useNavigate();

  const enter = (b: "avora" | "crazy") => {
    // Persist chosen brand context for the main site
    try { sessionStorage.setItem("brand", b); } catch {}
    navigate("/site", { state: { brand: b } });
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SplitHero
        brand={null}
        setBrand={enter}
        onPlanEvent={() => enter("avora")}
        onTickets={() => enter("crazy")}
      />
    </main>
  );
};

export default Landing;
