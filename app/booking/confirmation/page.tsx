import Link from "next/link";

export default function BookingConfirmationPage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <div className="confirmation-card">
          <div className="eyebrow text-white-50 mb-2">Booking confirmed</div>
          <h1 className="display-5 fw-bold mb-3">Your trip is ready.</h1>
          <p className="text-white-50">Confirmation number: SKY-284791</p>

          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <div className="quote-box">
                <div className="text-white-50 small">Passenger</div>
                <div className="fw-bold">Alex Morgan</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="quote-box">
                <div className="text-white-50 small">Itinerary</div>
                <div className="fw-bold">JFK → LHR · Sep 24</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="booking-card">
              <h2 className="h4 mb-3">Trip details</h2>
              <div className="summary-list">
                <div className="summary-item"><span>Airline</span><strong>AeroNorth</strong></div>
                <div className="summary-item"><span>Flight</span><strong>AN401</strong></div>
                <div className="summary-item"><span>Departure</span><strong>24 Sep 2026 · 08:20</strong></div>
                <div className="summary-item"><span>Arrival</span><strong>24 Sep 2026 · 20:10</strong></div>
                <div className="summary-item"><span>Total paid</span><strong>$828</strong></div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="summary-panel">
              <h3 className="h5 mb-3">Next steps</h3>
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-outline-primary rounded-pill">Download itinerary</button>
                <button type="button" className="btn btn-outline-primary rounded-pill">Print</button>
                <Link href="/manage-booking" className="btn btn-primary rounded-pill">Manage Booking</Link>
                <Link href="/" className="btn btn-primary rounded-pill">Return Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
