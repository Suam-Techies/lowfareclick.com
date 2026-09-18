import Link from "next/link";
import { BookingProgress } from "@/components/BookingProgress";

export default function ReviewPage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Review your trip</h1>
        <p className="page-subtitle">Check your itinerary, fare details, and travel requirements before payment.</p>
        <BookingProgress current={4} />
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="booking-card">
              <h2 className="h4 mb-3">Flight itinerary</h2>
              <div className="summary-list">
                <div className="summary-item"><span>Route</span><strong>New York (JFK) → London (LHR)</strong></div>
                <div className="summary-item"><span>Dates</span><strong>Sep 24 – Oct 01</strong></div>
                <div className="summary-item"><span>Flight</span><strong>AeroNorth AN401</strong></div>
                <div className="summary-item"><span>Cabin</span><strong>Economy</strong></div>
              </div>

              <h2 className="h4 mt-4 mb-3">Passenger</h2>
              <div className="summary-list">
                <div className="summary-item"><span>Name</span><strong>Alex Morgan</strong></div>
                <div className="summary-item"><span>Email</span><strong>alex@example.com</strong></div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="summary-panel">
              <h3 className="h5 mb-3">Price summary</h3>
              <div className="summary-list">
                <div className="summary-item"><span>Flight</span><strong>$689</strong></div>
                <div className="summary-item"><span>Taxes & fees</span><strong>$94</strong></div>
                <div className="summary-item"><span>Checked bag</span><strong>$45</strong></div>
                <div className="summary-item total-row"><span>Total</span><strong>$828</strong></div>
              </div>

              <label className="d-flex align-items-start gap-2 mt-4">
                <input type="checkbox" required />
                <span className="text-muted">I agree to the Terms & Conditions and fare rules.</span>
              </label>

              <div className="d-flex justify-content-between mt-4 gap-2">
                <Link href="/booking/passengers" className="btn btn-outline-primary rounded-pill px-3">Back</Link>
                <Link href="/booking/payment" className="btn btn-primary rounded-pill px-3">Continue to Payment</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
