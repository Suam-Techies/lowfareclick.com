"use client";

import Link from "next/link";
import { useState } from "react";
import { BookingProgress } from "@/components/BookingProgress";

export default function PassengerDetailsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Passenger details</h1>
        <p className="page-subtitle">Complete your booking details to continue to review.</p>
        <BookingProgress current={3} />
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <form className="booking-form" onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}>
              <h2 className="h4 mb-3">Adult passenger</h2>
              <div className="form-grid">
                <div>
                  <label className="form-label">First name</label>
                  <input type="text" placeholder="Alex" required />
                </div>
                <div>
                  <label className="form-label">Last name</label>
                  <input type="text" placeholder="Morgan" required />
                </div>
                <div>
                  <label className="form-label">Date of birth</label>
                  <input type="date" required />
                </div>
                <div>
                  <label className="form-label">Gender</label>
                  <select defaultValue="" required>
                    <option value="" disabled>Select</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-binary</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Nationality</label>
                  <input type="text" placeholder="United States" required />
                </div>
                <div>
                  <label className="form-label">Passport number</label>
                  <input type="text" placeholder="1234567" required />
                </div>
              </div>

              <h2 className="h4 mt-4 mb-3">Contact details</h2>
              <div className="form-grid">
                <div>
                  <label className="form-label">Email</label>
                  <input type="email" placeholder="alex@example.com" required />
                </div>
                <div>
                  <label className="form-label">Phone</label>
                  <input type="tel" placeholder="+1 555 123 4567" required />
                </div>
              </div>

              {submitted && <div className="alert alert-success mt-4" role="status">Passenger information captured for this demo booking flow.</div>}

              <div className="d-flex justify-content-between flex-wrap gap-3 mt-4">
                <Link href="/flights/flight-lhr-jfk-401" className="btn btn-outline-primary rounded-pill px-4">
                  Back
                </Link>
                <Link href="/booking/review" className="btn btn-primary rounded-pill px-4">
                  Continue to review
                </Link>
              </div>
            </form>
          </div>

          <div className="col-lg-4">
            <div className="summary-panel">
              <h3 className="h5 mb-3">Trip summary</h3>
              <div className="summary-list">
                <div className="summary-item"><span>Route</span><strong>JFK → LHR</strong></div>
                <div className="summary-item"><span>Flight</span><strong>AN401</strong></div>
                <div className="summary-item"><span>Departure</span><strong>Sep 24</strong></div>
                <div className="summary-item"><span>Passengers</span><strong>1 Adult</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
