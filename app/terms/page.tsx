import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description: "Review the terms that govern travel bookings and website use on LowFareClick.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Terms & Conditions</h1>
        <p className="page-subtitle">
          Effective Date: September 18, 2026
        </p>
      </div>

      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="booking-card">
              <div className="summary-list">
                <div className="summary-item" style={{ display: "block" }}>
                  <p className="text-muted mb-3">
                    Welcome to <strong>LowFareClick</strong>. These Terms & Conditions govern your access to and use of the LowFareClick website, including its pages, content, features, forms, and travel-related resources.
                  </p>
                  <p className="text-muted mb-0">
                    By accessing or using our website, you acknowledge that you have read, understood, and agree to these Terms & Conditions. If you do not agree with these terms, please do not use the website.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">1. About LowFareClick</h2>
                  <p className="text-muted mb-0">
                    LowFareClick is an independent travel information and trip-planning platform. Our website may provide travel-related information, destination resources, flight and route research, travel guidance, and other resources intended to assist users in planning their journeys. LowFareClick is not an airline, airport, government agency, or aircraft operator. References to airlines, airports, destinations, travel providers, or other third-party companies are provided for informational, identification, or travel-planning purposes where applicable.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">2. Acceptance of These Terms</h2>
                  <p className="text-muted mb-0">
                    By accessing, browsing, or using LowFareClick, you agree to comply with these Terms & Conditions and all applicable laws and regulations. If you are using the website on behalf of another person or organization, you confirm that you have the authority to accept these terms on their behalf.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">3. Use of Our Website</h2>
                  <p className="text-muted mb-0">
                    You may use LowFareClick for lawful personal and legitimate business purposes. You agree not to use the website to violate any applicable law or regulation, attempt to gain unauthorized access to our systems, interfere with the operation or security of the website, introduce malicious software, collect information through unauthorized automated methods, impersonate another person or organization, submit false or misleading information, abuse our communication channels, or use our content for unlawful or fraudulent purposes. We reserve the right to restrict or terminate access where we reasonably believe that these terms have been violated.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">4. Travel Information</h2>
                  <p className="text-muted mb-0">
                    LowFareClick may provide information relating to flights, destinations, routes, schedules, travel requirements, baggage, booking considerations, and other travel-related subjects. Travel information can change frequently. Flight schedules, routes, fares, taxes, fees, availability, baggage conditions, cancellation rules, refund policies, travel restrictions, visa requirements, and other information may change without notice. Although we make reasonable efforts to maintain useful information, we do not represent that all information will always be complete, current, or error-free. You should verify important travel information with the applicable airline, travel provider, airport, government authority, or other relevant official source before making travel arrangements.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">5. Flight Prices and Availability</h2>
                  <p className="text-muted mb-0">
                    Travel prices and availability are dynamic and may change at any time. Any fare, price, schedule, or availability information displayed through our website may be subject to change before a booking or transaction is completed. Applicable taxes, fees, baggage charges, service charges, fare restrictions, and other conditions may vary depending on the itinerary and provider. Users should carefully review the final information presented before completing any transaction.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">6. Bookings and Travel Arrangements</h2>
                  <p className="text-muted mb-0">
                    Where booking functionality or links to booking services are made available through LowFareClick, the applicable booking may involve an airline, travel provider, booking service, payment processor, or another third party. The terms and conditions applicable to that transaction may be determined by the relevant provider. Before completing a transaction, you are responsible for reviewing passenger names, travel dates, departure and arrival locations, flight times, baggage allowance, fare conditions, applicable taxes and fees, cancellation conditions, refund conditions, change conditions, payment details, and other applicable restrictions.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">7. Passenger Information</h2>
                  <p className="text-muted mb-0">
                    Users are responsible for ensuring that information submitted during a booking or inquiry is accurate. This may include passenger names, dates of birth, contact details, travel dates, passport or travel-document information, destination information, and other information required by the applicable provider. Incorrect information may result in additional requirements, restrictions, or charges under the applicable provider's policies.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">8. Changes to Travel Arrangements</h2>
                  <p className="text-muted mb-0">
                    Changes to a booking may be subject to the conditions of the applicable airline or travel provider. Depending on the booking, changes may involve change fees, fare differences, availability restrictions, rebooking conditions, ticket restrictions, and other applicable charges. LowFareClick does not determine the change rules established by independent airlines or travel providers.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">9. Cancellation and Refunds</h2>
                  <p className="text-muted mb-0">
                    Cancellation and refund eligibility depends on the terms applicable to the particular booking or travel arrangement. Factors may include airline or provider policy, fare type, ticket conditions, travel dates, time of cancellation, whether the ticket has been used, applicable taxes and fees, previous changes to the booking, and other applicable conditions. Submitting a cancellation or refund request does not itself establish eligibility for a refund. For additional information, please review our <Link href="/refund-cancellation-policy">Cancellation & Refund Policy</Link>.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">10. Third-Party Providers</h2>
                  <p className="text-muted mb-0">
                    LowFareClick may provide links, references, integrations, or information relating to third-party services, including airlines, travel providers, hotels, transportation providers, payment processors, advertising providers, technology providers, and other travel-related businesses. Third-party services are governed by the applicable third party's terms, conditions, policies, and procedures. LowFareClick does not control all third-party services and cannot ensure their availability, accuracy, performance, security, or policies.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">11. Airline Names and Trademarks</h2>
                  <p className="text-muted mb-0">
                    Airline names, logos, trademarks, service marks, airport names, destination names, and other third-party intellectual property appearing on LowFareClick belong to their respective owners. Their inclusion on our website may be necessary to identify a particular airline, route, destination, or travel-related service. Unless expressly stated, such references do not establish or imply sponsorship, endorsement, ownership, partnership, agency, representation, or authorization.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">12. Independent Platform Disclosure</h2>
                  <p className="text-muted mb-0">
                    LowFareClick operates independently. We do not represent ourselves as an airline or as the official customer-support channel of an airline unless a specific relationship is expressly identified. Users should independently verify airline-specific information through the applicable airline's official communication channels when appropriate.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">13. User-Submitted Information</h2>
                  <p className="text-muted mb-0">
                    If you submit information through our contact forms, support channels, or other website features, you agree that the information you provide is accurate to the best of your knowledge. You should not submit passwords, one-time authentication codes, complete payment-card numbers, banking credentials, unnecessary sensitive information, or information belonging to another person without appropriate authority. We may use information submitted by you to respond to your request and provide services or assistance as described in our Privacy Policy.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">14. Website Content</h2>
                  <p className="text-muted mb-0">
                    The content available on LowFareClick may include articles, travel guides, route information, destination information, images, graphics, text, frequently asked questions, travel-planning resources, and other website materials. We make reasonable efforts to provide useful information, but content may contain errors, omissions, outdated information, or information that becomes inaccurate because circumstances change.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">15. Intellectual Property</h2>
                  <p className="text-muted mb-0">
                    Unless otherwise indicated, content created and published by LowFareClick, including website design, original text, graphics, layouts, and other materials, may be protected by applicable intellectual-property laws. You may access and use the website for legitimate purposes. You may not reproduce, republish, distribute, modify, sell, or commercially exploit our proprietary content without appropriate authorization. Third-party content, trademarks, logos, and other intellectual property remain the property of their respective owners.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">16. Website Availability</h2>
                  <p className="text-muted mb-0">
                    We attempt to keep LowFareClick available and functional, but we cannot ensure that the website will always be available, uninterrupted, error-free, free from technical problems, or free from security vulnerabilities. The website may occasionally be unavailable because of maintenance, upgrades, technical problems, hosting issues, network problems, or circumstances outside our reasonable control.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">17. Security</h2>
                  <p className="text-muted mb-0">
                    You must not attempt to compromise the security or integrity of LowFareClick. This includes attempting to access restricted systems, circumvent authentication, scan or attack our infrastructure, introduce malicious code, disrupt website operation, or gain unauthorized access to user or administrative information. We may investigate suspected misuse and take appropriate action where permitted by law.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">18. External Links</h2>
                  <p className="text-muted mb-0">
                    LowFareClick may contain links to external websites. External websites are operated independently from LowFareClick. We are not responsible for the content, availability, privacy practices, security, products, services, or policies of external websites. Before using a third-party website or service, you should review its applicable terms and privacy policy.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">19. Travel Requirements</h2>
                  <p className="text-muted mb-0">
                    Travel requirements may vary depending on nationality, destination, transit locations, travel purpose, passport status, visa status, and other factors. Information available on LowFareClick should not be treated as legal, immigration, or government advice. Travelers are responsible for checking current requirements with the relevant government authorities and other official sources before traveling.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">20. Disclaimer of Warranties</h2>
                  <p className="text-muted mb-0">
                    To the extent permitted by applicable law, LowFareClick provides its website and general travel information on an informational basis. We do not warrant that all information will always be accurate, current, or error-free; that all routes or services will remain available; that prices will remain unchanged; or that website operation will always be uninterrupted. Users should independently verify important information before making travel decisions.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">21. Limitation of Liability</h2>
                  <p className="text-muted mb-0">
                    To the maximum extent permitted by applicable law, LowFareClick and its owners, employees, contractors, service providers, and affiliates will not be responsible for losses arising from reliance on changing travel information, changes to flight schedules, changes to fares or availability, airline cancellations or delays, airport disruptions, travel restrictions, third-party services, third-party website content, booking conditions imposed by external providers, user-provided incorrect information, website interruptions, technical failures, or events outside our reasonable control. Nothing in these terms is intended to exclude or limit liability where such exclusion or limitation is prohibited by applicable law.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">22. Indemnification</h2>
                  <p className="text-muted mb-0">
                    To the extent permitted by applicable law, you agree to be responsible for claims, losses, liabilities, damages, and reasonable expenses arising from your misuse of the website, violation of these Terms & Conditions, violation of applicable law, or infringement of another party's rights.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">23. Privacy</h2>
                  <p className="text-muted mb-0">
                    Your use of LowFareClick is also subject to our Privacy Policy. Our Privacy Policy explains how information may be collected, used, stored, disclosed, and otherwise processed. By using the website, you acknowledge that you have had the opportunity to review the Privacy Policy.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">24. Cookies and Similar Technologies</h2>
                  <p className="text-muted mb-0">
                    LowFareClick may use cookies and similar technologies for purposes such as website functionality, security, preferences, analytics, performance measurement, and advertising where applicable. Additional information is provided in our Privacy Policy.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">25. Modifications to the Website</h2>
                  <p className="text-muted mb-0">
                    We may modify, update, suspend, or discontinue portions of the website or its features at any time. We may also update website content when information changes. We are not required to maintain any particular feature or service indefinitely.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">26. Changes to These Terms</h2>
                  <p className="text-muted mb-0">
                    We may update these Terms & Conditions from time to time. When changes are made, the updated version will be published on this page with a revised effective date. Your continued use of the website after an updated version becomes available may constitute acceptance of the revised terms to the extent permitted by applicable law.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">27. Severability</h2>
                  <p className="text-muted mb-0">
                    If any provision of these Terms & Conditions is determined to be invalid, unlawful, or unenforceable, the remaining provisions will continue to apply to the extent permitted by applicable law.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">28. No Waiver</h2>
                  <p className="text-muted mb-0">
                    If we do not immediately enforce a provision of these Terms & Conditions, that does not mean that we waive our right to enforce that provision later.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">29. Entire Agreement</h2>
                  <p className="text-muted mb-0">
                    These Terms & Conditions, together with the Privacy Policy, Cancellation & Refund Policy, Disclaimer, and other applicable website policies, constitute the terms governing your use of LowFareClick to the extent permitted by applicable law.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">30. Governing Law</h2>
                  <p className="text-muted mb-0">
                    These Terms & Conditions shall be interpreted and applied in accordance with the laws applicable to the operation of LowFareClick, subject to any mandatory consumer-protection or other applicable legal requirements. Any dispute arising in connection with the website or these terms shall be handled by the courts or other appropriate legal forum having jurisdiction under applicable law.
                  </p>
                  <p className="text-muted mt-3 mb-0">
                    <em>Before publishing this section, the business owner should have local legal counsel confirm the governing-law and jurisdiction language for the actual business entity and operating location.</em>
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">31. Contact Us</h2>
                  <p className="text-muted mb-0">
                    If you have questions about these Terms & Conditions, you can contact LowFareClick using the contact details published on our website.
                  </p>
                  <p className="text-muted mt-3 mb-0">
                    <strong>LowFareClick</strong><br />
                    Independent Travel Information & Planning Platform<br />
                    Email: support@lowfareclick.com<br />
                    Phone: +1 855 687 7163<br />
                    Address: 100 E Wisconsin Ave Suite 3300, Milwaukee, WI 53202
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">Important Notice</h2>
                  <p className="text-muted mb-0">
                    LowFareClick is an independent travel information and trip-planning platform. Airline names, logos, trademarks, destinations, and other third-party references belong to their respective owners. Their appearance on our website does not necessarily indicate a partnership, sponsorship, endorsement, ownership, or representation. Travel information, including schedules, routes, fares, availability, baggage conditions, cancellation policies, refund conditions, and travel requirements, can change. Please verify important information with the applicable provider or official authority before making travel arrangements.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <p className="text-muted mb-0">
                    <strong>© 2026 LowFareClick. All rights reserved.</strong>
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
