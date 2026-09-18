"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Your full name" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" placeholder="name@example.com" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-control" placeholder="+1 (555) 123-4567" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Booking Reference</label>
          <input type="text" className="form-control" placeholder="Optional if relevant" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Subject</label>
          <input type="text" className="form-control" placeholder="Travel information or support" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows={5} placeholder="How can we help?" required />
        </div>
      </div>

      <div className="alert alert-warning mt-4 mb-0" role="alert">
        For your security, please do not include passwords, one-time passcodes, full card numbers, or other confidential credentials in your message.
      </div>

      {submitted && (
        <div className="alert alert-success mt-4" role="status">
          Your message has been captured for this demo. A real support workflow can be connected here.
        </div>
      )}

      <button type="submit" className="btn btn-primary mt-4 rounded-pill px-4">
        Submit
      </button>
    </form>
  );
}
