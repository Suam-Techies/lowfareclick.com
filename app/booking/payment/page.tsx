"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/booking/confirmation");
  };

  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Secure checkout</h1>
        <p className="page-subtitle">Demo payment form. This page is intentionally a mock flow and does not process real cards.</p>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <form className="booking-form" onSubmit={handleSubmit}>
              <h2 className="h4 mb-3">Payment method</h2>
              <div className="mb-3">
                <label className="form-label">Select method</label>
                <select className="form-select" defaultValue="card">
                  <option value="card">Credit / Debit Card</option>
                  <option value="paypal">PayPal (demo)</option>
                  <option value="other">Other payment method (demo)</option>
                </select>
              </div>

              <div className="form-grid">
                <div className="col-12" style={{ width: "100%" }}>
                  <label className="form-label">Cardholder name</label>
                  <input type="text" placeholder="Alex Morgan" required />
                </div>
                <div className="col-12" style={{ width: "100%" }}>
                  <label className="form-label">Card number</label>
                  <input type="text" placeholder="4242 4242 4242 4242" required />
                </div>
                <div>
                  <label className="form-label">Expiry</label>
                  <input type="text" placeholder="12/29" required />
                </div>
                <div>
                  <label className="form-label">CVV</label>
                  <input type="text" placeholder="123" required />
                </div>
              </div>

              <div className="d-flex justify-content-between mt-4 gap-3 flex-wrap">
                <Link href="/booking/review" className="btn btn-outline-primary rounded-pill px-4">Back</Link>
                <button type="submit" className="btn btn-primary rounded-pill px-4">Continue to Payment</button>
              </div>
            </form>
          </div>

          <div className="col-lg-4">
            <div className="summary-panel">
              <h3 className="h5 mb-3">Booking summary</h3>
              <div className="summary-list">
                <div className="summary-item"><span>Flight</span><strong>AN401</strong></div>
                <div className="summary-item"><span>Passengers</span><strong>1 Adult</strong></div>
                <div className="summary-item"><span>Travel date</span><strong>Sep 24</strong></div>
                <div className="summary-item total-row"><span>Total</span><strong>$828</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
