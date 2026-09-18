import Link from "next/link";
import { DestinationCard } from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";

export const metadata = {
  title: "Top destinations",
  description: "Explore international and regional destinations with curated flight inspiration.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Explore destinations</h1>
        <p className="page-subtitle">Choose your next city break, island escape, or long-haul adventure.</p>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          {destinations.map((destination) => (
            <div key={destination.slug} className="col-md-6 col-xl-4">
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <Link href="/flights" className="btn btn-primary rounded-pill px-4">Search flights</Link>
        </div>
      </div>
    </main>
  );
}
