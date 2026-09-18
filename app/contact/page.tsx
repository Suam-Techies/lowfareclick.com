import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Contact LowFareClick for travel information, support, booking questions, and website assistance.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Contact Us</h1>
        <p className="page-subtitle">
          We are here to help with travel information, flight research, and general questions about our website.
        </p>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="summary-panel">
              <h2 className="h4 mb-3">Customer Support</h2>
              <div className="summary-list">
                <div className="summary-item"><span>Email</span><strong>support@lowfareclick.com</strong></div>
                <div className="summary-item"><span>Phone</span><strong>+1 855 687 7163</strong></div>
                <div className="summary-item"><span>Business Hours</span><strong>Mon-Fri, 9:00 AM - 6:00 PM CST</strong></div>
                <div className="summary-item"><span>Business Address</span><strong>100 E Wisconsin Ave Suite 3300, Milwaukee, WI 53202</strong></div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <ContactForm />
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">We&apos;re Here to Help</h2>
              <p className="text-muted">
                Have a question about LowFareClick, travel information, flight research, or a request submitted through our website? Our support team is available to help with general travel-related questions and provide information about our website and services.
              </p>
              <p className="text-muted mb-0">
                Please use the contact options below to get in touch with us.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">What Can We Help You With?</h2>
              <div className="row g-3">
                <div className="col-md-6">
                  <h3 className="h6">Flight &amp; Route Information</h3>
                  <p className="text-muted">Questions about flight routes, destinations, travel dates, or information displayed through our website.</p>
                </div>
                <div className="col-md-6">
                  <h3 className="h6">Travel Planning</h3>
                  <p className="text-muted">General assistance with researching destinations and preparing for an upcoming trip.</p>
                </div>
                <div className="col-md-6">
                  <h3 className="h6">Booking-Related Questions</h3>
                  <p className="text-muted">Questions regarding a booking or travel arrangement made through a service available on our website.</p>
                </div>
                <div className="col-md-6">
                  <h3 className="h6">Cancellation Requests</h3>
                  <p className="text-muted">If you need to request a cancellation, contact us as soon as possible. Eligibility and charges depend on the applicable booking terms.</p>
                </div>
                <div className="col-md-6">
                  <h3 className="h6">Refund Questions</h3>
                  <p className="text-muted">If you have a question about a refund, please provide your booking reference and relevant payment or travel information.</p>
                </div>
                <div className="col-md-6">
                  <h3 className="h6">Website Support</h3>
                  <p className="text-muted">If you are experiencing a technical problem, please tell us what happened and, where possible, provide the page URL and browser details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">Before Contacting Us</h2>
              <p className="text-muted">
                For booking-related inquiries, having the following information available can help us review your request more efficiently:
              </p>
              <ul className="promo-list" style={{ marginTop: 0 }}>
                <li><span>✓</span> Passenger name</li>
                <li><span>✓</span> Booking reference</li>
                <li><span>✓</span> Travel date</li>
                <li><span>✓</span> Departure and arrival locations</li>
                <li><span>✓</span> Email address used during the booking process</li>
                <li><span>✓</span> Relevant details about your request</li>
              </ul>
              <p className="text-muted mb-0">
                Please do not send complete payment card numbers, passwords, authentication codes, or other highly sensitive information through our contact form or email.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">Response Times</h2>
              <p className="text-muted mb-0">
                We aim to review customer inquiries within a reasonable period. Response times may vary depending on the nature and complexity of the request, the information required, and whether we need to obtain information from a third-party travel provider. Some requests may require additional time to investigate.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">Third-Party Travel Providers</h2>
              <p className="text-muted mb-0">
                Some travel arrangements may involve third-party airlines, travel providers, payment processors, or other service providers. Where applicable, their terms and policies may apply to the relevant transaction or service. LowFareClick does not control the policies of independent third-party providers.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">Airline Information</h2>
              <p className="text-muted mb-0">
                LowFareClick is an independent travel information and planning platform. We are not an airline and do not present ourselves as an official airline representative unless expressly stated. References to airline names, trademarks, logos, routes, or destinations belong to their respective owners and may be used for informational or identification purposes.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">Privacy</h2>
              <p className="text-muted mb-0">
                Information submitted through our contact form or other communication channels may be processed in accordance with our <a href="/privacy-policy">Privacy Policy</a>. Please review our Privacy Policy to understand how information may be collected, used, stored, and handled.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">Business &amp; Partnership Inquiries</h2>
              <p className="text-muted">
                For legitimate business, partnership, advertising, media, or other commercial inquiries, please contact us using the business contact information published on this website.
              </p>
              <ul className="promo-list" style={{ marginTop: 0 }}>
                <li><span>✓</span> Your name</li>
                <li><span>✓</span> Organization name</li>
                <li><span>✓</span> Contact information</li>
                <li><span>✓</span> Purpose of your inquiry</li>
                <li><span>✓</span> Relevant details</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">General Travel Information</h2>
              <p className="text-muted mb-0">
                Information provided by our support team is intended for general assistance and should not replace official information provided by an airline, airport, government authority, or other applicable travel provider. Travel requirements, schedules, fares, fees, baggage conditions, cancellation policies, and other travel information can change. Always verify important information with the applicable provider before traveling.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-muted small">
          <p className="mb-1"><strong>LowFareClick</strong></p>
          <p className="mb-1">Independent Travel Information &amp; Planning Platform</p>
          <p className="mb-1">Email: support@lowfareclick.com</p>
          <p className="mb-1">Phone: +1 855 687 7163</p>
          <p className="mb-1">Business Hours: Mon-Fri, 9:00 AM - 6:00 PM CST</p>
          <p className="mb-1">Address: 100 E Wisconsin Ave Suite 3300, Milwaukee, WI 53202</p>
          <p className="mb-0">© 2026 LowFareClick. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
