"use client";

import { useState } from "react";

export default function ManageBookingPage() {
  const [reference, setReference] = useState("SKY-284791");
  const [lastName, setLastName] = useState("Morgan");

  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Manage your booking</h1>
        <p className="page-subtitle">Use your booking reference and last name to retrieve your itinerary details.</p>
      </div>

      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="booking-form">
              <div className="form-grid">
                <div className="col-12" style={{ width: "100%" }}>
                  <label className="form-label">Booking reference</label>
                  <input value={reference} onChange={(event) => setReference(event.target.value)} />
                </div>
                <div className="col-12" style={{ width: "100%" }}>
                  <label className="form-label">Last name</label>
                  <input value={lastName} onChange={(event) => setLastName(event.target.value)} />
                </div>
              </div>

              <button type="button" className="btn btn-primary rounded-pill mt-4 w-100">
                Find My Booking
              </button>

              <div className="mt-4 booking-card">
                <h2 className="h5 mb-2">Demo result</h2>
                <div className="summary-list">
                  <div className="summary-item"><span>Reference</span><strong>{reference}</strong></div>
                  <div className="summary-item"><span>Passenger</span><strong>{lastName}, Alex</strong></div>
                  <div className="summary-item"><span>Status</span><strong>Confirmed</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
