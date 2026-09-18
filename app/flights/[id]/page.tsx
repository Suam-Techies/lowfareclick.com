import Link from "next/link";
import { ArrowLeft, Luggage, Plane, ShieldCheck, Wifi, Zap } from "lucide-react";
import { getFlightDetails } from "@/lib/flight-api";
import { formatCurrency } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const flight = await getFlightDetails(id);

  return {
    title: flight ? `${flight.airLine} ${flight.flightNumber}` : "Flight details",
    description: flight ? `Details for ${flight.origin} to ${flight.destination} on ${flight.departureDate}.` : "Flight details",
    alternates: { canonical: flight ? `/flights/${id}` : "/flights" },
  };
}

export default async function FlightDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const flight = await getFlightDetails(id);

  if (!flight) {
    return (
      <main className="page-shell">
        <div className="container page-header">
          <h1>Flight not found</h1>
          <p className="page-subtitle">This itinerary is not available in this demo.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <div className="container page-header">
        <Link href="/flights" className="text-link-primary mb-3 d-inline-flex align-items-center gap-2">
          <ArrowLeft size={16} /> Back to results
        </Link>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3">
          <div>
            <h1>{flight.origin} to {flight.destination}</h1>
            <p className="page-subtitle">
              {flight.airLine} {flight.flightNumber} · {flight.departureDate} · {flight.duration}
            </p>
          </div>
          <div className="summary-badge">Confirmed itinerary</div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="booking-card p-4 p-lg-5">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                <div>
                  <div className="eyebrow text-primary">{flight.airLine}</div>
                  <h2 className="h3 mb-0">{flight.flightNumber}</h2>
                </div>
                <div className="text-end">
                  <div className="text-muted small">From</div>
                  <div className="fw-bold fs-3">{formatCurrency(flight.price)}</div>
                </div>
              </div>

              <div className="route-line mb-4">
                <span>{flight.origin}</span>
                <span className="route-arrow">→</span>
                <span>{flight.destination}</span>
              </div>

              <div className="meta-row mb-3">
                <span>Departure {flight.departureTime}</span>
                <span>Arrival {flight.arrivalTime}</span>
                <span>{flight.duration}</span>
                <span>{flight.stops}</span>
              </div>

              <div className="row g-3 mt-3">
                <div className="col-md-6">
                  <div className="summary-panel h-100">
                    <h3 className="h6 mb-3">Flight details</h3>
                    <div className="summary-list">
                      <div className="summary-item"><span>Aircraft</span><strong>{flight.aircraft}</strong></div>
                      <div className="summary-item"><span>Cabin</span><strong>{flight.cabin}</strong></div>
                      <div className="summary-item"><span>Baggage</span><strong>{flight.baggage}</strong></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="summary-panel h-100">
                    <h3 className="h6 mb-3">Included features</h3>
                    <div className="summary-list">
                      {flight.amenities.map((item) => (
                        <div key={item} className="summary-item">
                          <span>{item}</span>
                          <strong>{item.includes("Wi") ? <Wifi size={16} /> : item.includes("Power") ? <Zap size={16} /> : item.includes("Meal") ? <Plane size={16} /> : <Luggage size={16} />}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="summary-panel mt-4">
                <h3 className="h6 mb-3">Before you fly</h3>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="card-box p-3 h-100">
                      <div className="text-primary mb-2"><ShieldCheck size={18} /></div>
                      <h4 className="h6">Check-in</h4>
                      <p className="text-muted mb-0">Arrive early and confirm your travel documents before departure.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-box p-3 h-100">
                      <div className="text-primary mb-2"><Luggage size={18} /></div>
                      <h4 className="h6">Baggage</h4>
                      <p className="text-muted mb-0">Review your checked bag allowance and cabin restrictions before arriving at the airport.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-box p-3 h-100">
                      <div className="text-primary mb-2"><Plane size={18} /></div>
                      <h4 className="h6">Airport guidance</h4>
                      <p className="text-muted mb-0">Check terminal details and connection times to keep the journey smooth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="summary-panel p-4">
              <h3 className="h5 mb-3">Fare summary</h3>
              <div className="summary-list">
                <div className="summary-item"><span>Base fare</span><strong>{formatCurrency(flight.price - 90)}</strong></div>
                <div className="summary-item"><span>Taxes & fees</span><strong>{formatCurrency(90)}</strong></div>
                <div className="summary-item"><span>Seat selection</span><strong>{formatCurrency(45)}</strong></div>
                <div className="summary-item total-row"><span>Total</span><strong>{formatCurrency(flight.price + 45 + 90)}</strong></div>
              </div>

              <div className="mt-4">
                <div className="d-flex align-items-center gap-2 text-primary mb-2">
                  <ShieldCheck size={18} /> Fare rules
                </div>
                <ul className="text-muted ps-3 mb-3">
                  {flight.fareRules.map((rule) => <li key={rule}>{rule}</li>)}
                </ul>
                <Link href="/booking/passengers" className="btn btn-primary w-100 rounded-pill">
                  Continue to passenger details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
