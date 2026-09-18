import { deals } from "@/data/deals";
import { DealCard } from "@/components/DealCard";

export const metadata = {
  title: "Flight Deals",
  description: "Browse flight deals and curated offers across popular routes.",
  alternates: { canonical: "/deals" },
};

export default function DealsPage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Featured flight deals</h1>
        <p className="page-subtitle">Sample offers for flexible travelers planning upcoming, high-value routes.</p>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          {deals.map((deal) => (
            <div key={deal.id} className="col-lg-4">
              <DealCard deal={deal} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
