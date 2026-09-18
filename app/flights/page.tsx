import Link from "next/link";
import { ArrowLeft, Filter, SlidersHorizontal } from "lucide-react";
import { searchFlights } from "@/lib/flight-api";
import { formatCurrency } from "@/lib/utils";

export const metadata = {
  title: "Flight Search Results",
  description: "Browse available flights and compare options from your selected route.",
  alternates: { canonical: "/flights" },
};

export default async function FlightsPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = (await searchParams) ?? {};
  const query = {
    from: typeof params.from === "string" ? params.from : undefined,
    to: typeof params.to === "string" ? params.to : undefined,
    departure: typeof params.departure === "string" ? params.departure : undefined,
    return: typeof params.return === "string" ? params.return : undefined,
    tripType: typeof params.tripType === "string" ? params.tripType : "Round trip",
  };

  const { items } = await searchFlights(query);

  return (
    <main className="page-shell">
      <div className="container page-header">
        <Link href="/" className="text-link-primary mb-3 d-inline-flex align-items-center gap-2">
          <ArrowLeft size={16} /> Back home
        </Link>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3">
          <div>
            <h1>Flights from {query.from || "New York"}</h1>
            <p className="page-subtitle">
              {query.from || "New York"} to {query.to || "London"} · {query.departure || "2026-09-24"} · {query.tripType || "Round trip"}
            </p>
          </div>
          <div className="summary-badge">Updated today</div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          <aside className="col-lg-3">
            <div className="filter-panel">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="h5 mb-0">Filters</h3>
                <SlidersHorizontal size={18} className="text-primary" />
              </div>

              <div className="filter-group">
                <h4>Stops</h4>
                <div className="filter-list">
                  <label><input type="checkbox" /> Non-stop</label>
                  <label><input type="checkbox" /> 1 stop</label>
                  <label><input type="checkbox" /> 2+ stops</label>
                </div>
              </div>

              <div className="filter-group">
                <h4>Price</h4>
                <div className="filter-list">
                  <label><input type="checkbox" /> Under $500</label>
                  <label><input type="checkbox" /> $500–$900</label>
                  <label><input type="checkbox" /> $900+</label>
                </div>
              </div>

              <div className="filter-group">
                <h4>Airline</h4>
                <div className="filter-list">
                  <label><input type="checkbox" /> Domestic carriers</label>
                  <label><input type="checkbox" /> International carriers</label>
                  <label><input type="checkbox" /> Premium cabin</label>
                </div>
              </div>
            </div>
          </aside>

          <div className="col-lg-9">
            <div className="search-summary-bar d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-3">
              <div className="d-flex align-items-center gap-2 text-primary fw-semibold">
                <Filter size={18} /> {items.length} flight options
              </div>

              <div className="d-flex flex-wrap align-items-center gap-2 text-muted">
                <span>Sort by</span>
                <select className="form-select form-select-sm w-auto">
                  <option>Recommended</option>
                  <option>Price</option>
                  <option>Duration</option>
                  <option>Departure time</option>
                </select>
              </div>
            </div>

            <div className="result-list">
              {items.length === 0 ? (
                <div className="booking-card">
                  <h3 className="h5 mb-2">No flights match this search yet</h3>
                  <p className="text-muted">Try widening your dates or adjusting the route to see more options.</p>
                </div>
              ) : (
                items.map((flight) => (
                  <article key={flight.id} className="flight-result-card">
                    <div className="airline-mark">
                      <strong>{flight.airLine}</strong>
                      <span>✈</span>
                    </div>

                    <div className="flight-summary">
                      <div className="route-line">
                        <span>{flight.origin}</span>
                        <span className="route-arrow">→</span>
                        <span>{flight.destination}</span>
                      </div>

                      <div className="meta-row">
                        <span>{flight.flightNumber}</span>
                        <span>{flight.departureTime}</span>
                        <span>{flight.arrivalTime}</span>
                        <span>{flight.duration}</span>
                        <span>{flight.stops}</span>
                      </div>

                      <div className="meta-row">
                        <span>{flight.cabin}</span>
                        <span>{flight.baggage}</span>
                        <span>{flight.aircraft}</span>
                      </div>

                      <div className="flight-footnotes">
                        <span>Fare type: {flight.cabin}</span>
                        <span>Flexible fare details available</span>
                      </div>
                    </div>

                    <div className="result-price">
                      <strong>{formatCurrency(flight.price)}</strong>
                      <small>per traveler</small>
                      <Link href={`/flights/${flight.id}`} className="btn btn-primary rounded-pill px-3">
                        Select flight
                      </Link>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
