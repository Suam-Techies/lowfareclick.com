import Link from "next/link";

export const metadata = {
  title: "Disclaimer",
  description: "Read the LowFareClick disclaimer covering travel information, third-party references, and responsibility limits.",
  alternates: { canonical: "/disclaimer" },
};

const disclaimerSections = [
  {
    title: "1. Independent Travel Platform",
    body:
      "LowFareClick is an independent travel information and trip-planning platform. LowFareClick is not an airline, airport, government agency, immigration authority, or aircraft operator. We provide general travel-related information and resources intended to help users research flights, routes, destinations, and other aspects of travel planning. Unless expressly stated on a particular page or in a specific agreement, LowFareClick should not be interpreted as an official representative, agent, employee, or authorized support channel of any airline or other travel provider.",
  },
  {
    title: "2. Airline Names, Logos & Trademarks",
    body:
      "Airline names, logos, trademarks, service marks, airport names, destination names, and other third-party brand elements may appear on our website. Such references may be used for identification, informational, editorial, or travel-planning purposes. All third-party names, trademarks, logos, and other intellectual property remain the property of their respective owners. The appearance of a third-party brand on LowFareClick does not by itself indicate sponsorship, endorsement, ownership, partnership, agency, authorization, affiliation, or official representation.",
  },
  {
    title: "3. Flight Information",
    body:
      "Information relating to flights and travel may include routes, schedules, travel dates, destinations, fare information, taxes and fees, baggage information, travel conditions, cancellation information, refund information, and other travel-related details. This information may change at any time. Airlines, airports, travel providers, government authorities, and other third parties may update their information without prior notice. Although we make reasonable efforts to provide useful information, we do not guarantee that every item of information displayed on the website will always be complete, accurate, or current. Travelers should verify important information with the applicable airline, travel provider, airport, or official government authority before making travel arrangements.",
  },
  {
    title: "4. Prices and Availability",
    body:
      "Travel prices and availability can change based on factors such as travel dates, demand, inventory, fare rules, taxes, fees, provider policies, and other circumstances. Any price or availability information presented during research should be independently verified before completing a transaction. A price or option displayed at one point in time may no longer be available later. LowFareClick does not represent that a particular fare, seat, route, or travel option will remain available.",
  },
  {
    title: "5. Booking Information",
    body:
      "Where LowFareClick provides access to booking-related services, links, or information, the actual travel arrangement may involve an airline, travel provider, booking service, payment processor, or another third party. The terms and conditions of the applicable provider may govern the transaction. Before completing a booking, users should carefully review passenger information, travel dates, departure and arrival locations, flight times, baggage conditions, fare conditions, taxes and fees, cancellation conditions, refund conditions, change conditions, and payment details.",
  },
  {
    title: "6. Cancellation and Refunds",
    body:
      "Cancellation and refund conditions vary by booking. Eligibility may depend on airline policy, travel provider policy, fare type, ticket conditions, travel date, time of cancellation, whether the ticket has been used, taxes and fees, and other booking conditions. Submitting a cancellation or refund request does not automatically mean that the request will be approved or that a refund will be available. Please review the applicable booking conditions and our Refund & Cancellation Policy for additional information.",
  },
  {
    title: "7. Travel Requirements",
    body:
      "Travel requirements may vary depending on destination, nationality, passport status, visa status, transit points, purpose of travel, and other circumstances. Information provided by LowFareClick should not be considered legal, immigration, visa, or government advice. Travelers are responsible for checking current requirements with the relevant government authorities, embassies, consulates, immigration authorities, airlines, or other appropriate official sources before traveling.",
  },
  {
    title: "8. Third-Party Websites",
    body:
      "LowFareClick may contain links to third-party websites or services. These websites may include airlines, travel providers, hotels, payment services, advertising services, government resources, or other external websites. Third-party websites operate independently from LowFareClick. We do not control and are not responsible for the content, availability, privacy practices, security, policies, products, or services of external websites. Users should review the terms and privacy policies of third-party websites before using their services or submitting personal information.",
  },
  {
    title: "9. User Responsibility",
    body:
      "Users are responsible for reviewing information carefully before making travel decisions. Before completing a booking or beginning a journey, users should confirm relevant details including flight schedule, travel dates, airport information, passenger details, baggage requirements, fare conditions, cancellation rules, refund conditions, passport requirements, visa requirements, entry requirements, and transit requirements. Users should rely on current information from the appropriate provider or official authority where the information is time-sensitive or legally important.",
  },
  {
    title: "10. Accuracy of Website Information",
    body:
      "We make reasonable efforts to maintain useful information on our website. However, errors, omissions, technical problems, outdated information, or changes made by third parties may occur. We do not guarantee that all website content will be complete, accurate, current, uninterrupted, or error-free. Information may be corrected or updated when we become aware of changes or inaccuracies.",
  },
  {
    title: "11. Limitation of Responsibility",
    body:
      "To the extent permitted by applicable law, LowFareClick is not responsible for losses, damages, delays, expenses, or other consequences arising from reliance on information provided through the website or from services operated by independent third parties. This may include issues involving flight delays, cancellations, schedule changes, fare changes, availability changes, airport disruptions, travel restrictions, baggage issues, third-party booking services, third-party websites, payment providers, changes to government requirements, or other circumstances outside our reasonable control. Nothing in this Disclaimer is intended to exclude or limit any liability that cannot legally be excluded or limited under applicable law.",
  },
  {
    title: "12. Changes to This Disclaimer",
    body:
      "LowFareClick may update this Disclaimer from time to time. Changes may be made to reflect changes to our website, services, business practices, third-party services, or applicable legal requirements. The updated version will be published on this page with a revised effective date.",
  },
];

export default function DisclaimerPage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Disclaimer</h1>
        <p className="page-subtitle">Effective Date: September 18, 2026</p>
      </div>

      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="booking-card">
              <div className="summary-list">
                <div className="summary-item" style={{ display: "block" }}>
                  <p className="text-muted mb-0">
                    The information provided on <strong>LowFareClick</strong> is intended for general travel information,
                    research, and trip-planning purposes. By using this website, you acknowledge and agree to the terms
                    described in this Disclaimer.
                  </p>
                </div>

                {disclaimerSections.map((section) => (
                  <div key={section.title} className="summary-item" style={{ display: "block" }}>
                    <h2 className="h4 mb-3">{section.title}</h2>
                    <p className="text-muted mb-0">{section.body}</p>
                  </div>
                ))}

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">Contact Us</h2>
                  <p className="text-muted mb-0">
                    If you have questions about this Disclaimer or information published on LowFareClick, please contact us
                    using the details below.
                  </p>
                  <p className="text-muted mt-3 mb-0">
                    <strong>LowFareClick</strong><br />
                    Email: support@lowfareclick.com<br />
                    Phone: +1 855 687 7163<br />
                    Address: 100 E Wisconsin Ave Suite 3300, Milwaukee, WI 53202
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <p className="text-muted mb-0">
                    LowFareClick is an <strong>independent travel information and trip-planning platform</strong>. We do not
                    represent ourselves as an airline, official airline website, or official airline customer-support channel
                    unless a specific relationship is expressly identified. Travelers should always verify important
                    information directly with the applicable airline, travel provider, airport, or relevant official authority
                    before making travel arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
