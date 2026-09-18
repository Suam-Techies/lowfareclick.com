export const metadata = {
  title: "About LowFareClick",
  description: "Learn about LowFareClick, our travel information platform, and the way we help travelers research flights and trip plans.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>About LowFareClick</h1>
        <p className="page-subtitle">Making Travel Research Easier</p>
      </div>

      <div className="container pb-5">
        <div className="booking-card mb-4">
          <p className="text-muted mb-0">
            Welcome to <strong>LowFareClick</strong>, an independent travel information and trip-planning platform created to make the process of researching flights and planning journeys simpler and more convenient.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="booking-card">
              <h2 className="h4 mb-3">What We Do</h2>
              <p className="text-muted">
                LowFareClick provides travel-related information and resources designed to assist travelers during the planning and research stage of their trip.
              </p>
              <p className="text-muted">Our website may provide information relating to:</p>
              <ul className="promo-list" style={{ marginTop: 0 }}>
                <li><span>✓</span> Flight routes and destinations</li>
                <li><span>✓</span> Travel planning and journey research</li>
                <li><span>✓</span> Domestic and international travel information</li>
                <li><span>✓</span> Baggage, fare, and booking guidance</li>
                <li><span>✓</span> Cancellation and refund information</li>
                <li><span>✓</span> Frequently asked travel questions</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="booking-card">
              <h2 className="h4 mb-3">Our Approach</h2>
              <p className="text-muted">
                We believe travel planning should be straightforward. Instead of making information difficult to understand, LowFareClick aims to present useful details in a clear and accessible format.
              </p>
              <p className="text-muted">
                We encourage travelers to review the relevant details of their journey carefully, including travel dates, passenger information, baggage conditions, fare rules, cancellation terms, refund conditions, and any applicable fees before completing a travel arrangement.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">Independent Travel Platform</h2>
              <p className="text-muted">
                LowFareClick is an <strong>independent travel information platform</strong>. We are not an airline, airport, government agency, or aircraft operator.
              </p>
              <p className="text-muted">
                References to airlines, airports, destinations, travel providers, trademarks, brand names, and third-party services on our website are used where appropriate for identification, informational, or travel-planning purposes. Third-party names, trademarks, and logos remain the property of their respective owners.
              </p>
              <p className="text-muted mb-0">
                Unless expressly stated, the appearance of a third-party brand on our website should not be interpreted as an endorsement, sponsorship, partnership, or affiliation.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">Travel Information Can Change</h2>
              <p className="text-muted mb-0">
                Flight schedules, routes, fares, taxes, fees, baggage policies, seat availability, cancellation conditions, refund rules, entry requirements, and other travel-related information may change based on the airline, travel provider, government authority, destination, or other applicable circumstances. For this reason, travelers should verify important information with the applicable airline, travel provider, or relevant government authority before making final travel arrangements.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">Our Commitment to Travelers</h2>
              <p className="text-muted">
                Our objective is to provide useful and understandable travel information while maintaining transparency about the nature of our platform.
              </p>
              <ul className="promo-list" style={{ marginTop: 0 }}>
                <li><span>✓</span> Provide clear travel-related information</li>
                <li><span>✓</span> Help travelers research routes and destinations</li>
                <li><span>✓</span> Make travel-planning information easier to understand</li>
                <li><span>✓</span> Clearly distinguish our platform from airlines and other third-party providers</li>
                <li><span>✓</span> Encourage travelers to review applicable terms before making travel decisions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">Who Can Use LowFareClick?</h2>
              <p className="text-muted mb-0">
                Our resources may be useful for travelers planning business trips, family vacations, personal travel, domestic journeys, international trips, short breaks, weekend travel, multi-city journeys, and future travel plans. Whether you are researching a destination or preparing for an upcoming journey, LowFareClick is designed to provide information that can assist during the planning process.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">Important Notice</h2>
              <p className="text-muted mb-0">
                LowFareClick is an independent travel information and planning platform. We do not represent ourselves as an airline or as an official representative of any airline unless specifically stated. Travelers should always verify important booking, fare, schedule, cancellation, refund, baggage, and travel-requirement information with the applicable provider before completing their arrangements.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-12">
            <div className="booking-card">
              <h2 className="h4 mb-3">Contact Us</h2>
              <p className="text-muted mb-0">
                If you have questions about LowFareClick, our website, or the information we provide, please visit our <a href="/contact">Contact Us</a> page.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-muted small">
          <p className="mb-1"><strong>LowFareClick</strong></p>
          <p className="mb-1">Independent Travel Information &amp; Planning Platform</p>
          <p className="mb-0">© 2026 LowFareClick. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
