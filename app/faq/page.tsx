import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata = {
  title: "FAQ",
  description: "Find common answers about booking, refunds, baggage, and support on lowfareclick.com.",
  alternates: { canonical: "/faq" },
};

const faqItems = [
  {
    question: "What is LowFareClick?",
    answer: "LowFareClick is an independent travel information and trip-planning platform. We provide resources that can help travelers research flight routes, destinations, travel options, and other information relevant to planning a journey.",
  },
  {
    question: "Is LowFareClick an airline?",
    answer: "No. LowFareClick is not an airline, airport, or aircraft operator. We provide travel information and planning resources and do not operate flights.",
  },
  {
    question: "Is LowFareClick affiliated with an airline?",
    answer: "LowFareClick operates independently. Unless a specific relationship is expressly identified on our website, references to airlines or other travel companies should not be interpreted as an affiliation, sponsorship, endorsement, or representation.",
  },
  {
    question: "Why does LowFareClick mention airline names?",
    answer: "Airline names and other travel brands may be referenced when providing information about routes, destinations, schedules, or travel-related topics. All third-party trademarks, names, and logos remain the property of their respective owners.",
  },
  {
    question: "Can I use LowFareClick to research flights?",
    answer: "Yes. LowFareClick provides resources that can help you research flight routes, destinations, travel dates, and other trip-planning considerations. Information shown on the website may change, so travelers should verify important details before making a travel arrangement.",
  },
  {
    question: "Are flight schedules always accurate?",
    answer: "Flight schedules can change because of airline operational decisions, weather, airport conditions, seasonal changes, aircraft availability, or other circumstances. For this reason, travelers should confirm the latest schedule with the applicable airline or travel provider before departure.",
  },
  {
    question: "Can fares change after I research a flight?",
    answer: "Yes. Travel prices may change based on factors such as travel dates, demand, inventory, fare conditions, taxes, fees, and provider policies. Information displayed during research should not be treated as a permanent price unless the applicable provider confirms the price as part of a completed transaction.",
  },
  {
    question: "Does LowFareClick determine airline prices?",
    answer: "No. Airlines and other applicable travel providers determine their own fares, schedules, availability, restrictions, and applicable conditions.",
  },
  {
    question: "Does the information on LowFareClick confirm that a particular flight will be available?",
    answer: "No. Flight availability can change at any time. Information displayed during research does not confirm that a particular flight, fare, seat, or itinerary will remain available.",
  },
  {
    question: "Can I make a travel booking through LowFareClick?",
    answer: "Depending on the service or feature being used, you may be directed to an applicable booking provider or may be able to proceed through a booking process made available on the website. The applicable provider's terms and conditions will govern the relevant booking or transaction.",
  },
  {
    question: "What should I check before completing a booking?",
    answer: "Before completing a travel arrangement, carefully review passenger names, travel dates, departure airport, arrival airport, flight times, baggage allowance, fare conditions, applicable taxes and fees, change conditions, cancellation conditions, refund conditions, payment information, and contact details. Make sure all passenger and itinerary information is correct before confirming the transaction.",
  },
  {
    question: "What happens if I enter the wrong passenger information?",
    answer: "Contact the applicable booking or travel provider as soon as possible. Corrections may be subject to the provider's rules and may involve additional requirements or charges.",
  },
  {
    question: "Can I change my travel dates?",
    answer: "Whether a date change is possible depends on the applicable fare, airline, travel provider, itinerary, and booking conditions. Some bookings may permit changes while others may have restrictions.",
  },
  {
    question: "Can I change my destination?",
    answer: "Destination or route changes depend on the conditions associated with the booking. Contact the applicable provider as soon as possible if you need to make a change.",
  },
  {
    question: "Can I cancel my booking?",
    answer: "Cancellation depends on the conditions applicable to your booking. Some fares or travel arrangements may permit cancellation, while others may have restrictions. Review the applicable booking conditions before requesting cancellation.",
  },
  {
    question: "Is every booking refundable?",
    answer: "No. Refund eligibility depends on the applicable fare rules, airline or provider policy, itinerary, booking conditions, and other circumstances.",
  },
  {
    question: "Will I receive a full refund if I cancel?",
    answer: "Not necessarily. The amount, if any, that may be refundable depends on the conditions applicable to the particular booking. Some amounts may be subject to restrictions, deductions, or non-refundable conditions.",
  },
  {
    question: "What if the airline cancels my flight?",
    answer: "If an airline cancels or significantly changes a flight, the options available to you depend on the airline's applicable policy and the terms associated with your booking. Possible options may include rebooking, credit, or a refund where permitted by the applicable conditions.",
  },
  {
    question: "How do I request a cancellation?",
    answer: "If your booking was made through an applicable service on our website, use the available support channel and provide your booking reference and relevant travel details. If the booking was made directly with an airline or another travel provider, you may need to contact that provider according to its applicable procedures.",
  },
  {
    question: "How do refunds work?",
    answer: "When a refund is permitted under the applicable booking conditions, the request may need to be reviewed and processed by the relevant airline, travel provider, payment processor, or other applicable party.",
  },
  {
    question: "How long does a refund take?",
    answer: "Refund processing times can vary. The time required may depend on the airline or travel provider, payment method, financial institution, processing procedures, and other circumstances.",
  },
  {
    question: "Does submitting a refund request confirm eligibility for a refund?",
    answer: "No. A refund request must be evaluated according to the terms and conditions applicable to the particular booking.",
  },
  {
    question: "What information may be required for a refund request?",
    answer: "Depending on the circumstances, you may be asked to provide booking reference, passenger name, travel dates, contact details, payment or transaction information, and details regarding the reason for the request. Do not send passwords, one-time authentication codes, or complete payment-card information through ordinary email or contact forms.",
  },
  {
    question: "Where can I find baggage information?",
    answer: "Baggage allowances and restrictions depend on the applicable airline, route, fare type, cabin, and other conditions. Travelers should verify the current baggage rules with the applicable provider before departure.",
  },
  {
    question: "Do travel requirements change?",
    answer: "Yes. Passport requirements, visa rules, entry requirements, documentation requirements, and other travel regulations can change. Travelers should verify current requirements with the relevant government authorities and other official sources before traveling.",
  },
  {
    question: "Does LowFareClick provide visa advice?",
    answer: "LowFareClick may provide general travel information, but information on this website should not be treated as legal or immigration advice. For current visa and entry requirements, consult the appropriate government authority or official immigration source.",
  },
  {
    question: "Does LowFareClick use cookies?",
    answer: "The website may use cookies and similar technologies for functions such as website operation, analytics, preferences, security, and other purposes described in our Privacy Policy.",
  },
  {
    question: "How does LowFareClick use my information?",
    answer: "Information may be used to provide requested assistance, respond to inquiries, maintain and improve our website, analyze website performance, maintain security, and perform other purposes described in our Privacy Policy.",
  },
  {
    question: "Does LowFareClick share personal information?",
    answer: "Personal information may be shared with service providers or other parties where reasonably necessary to operate the website, provide requested services, process inquiries, maintain technical infrastructure, or comply with legal requirements. For more information, please review our Privacy Policy.",
  },
  {
    question: "Is my information secure?",
    answer: "We use reasonable measures designed to protect information. However, no website, online service, or electronic transmission can be completely secure. Users should avoid submitting unnecessary confidential information through online forms or ordinary email.",
  },
  {
    question: "Does LowFareClick provide official airline support?",
    answer: "LowFareClick is an independent travel information platform and should not be considered an airline's official customer-support channel unless a specific relationship is expressly stated. For airline-specific matters, travelers should also consult the relevant airline's official communication channels.",
  },
  {
    question: "Are airlines mentioned on LowFareClick partners?",
    answer: "Not necessarily. The presence of an airline name, logo, route, or other reference on our website does not by itself establish a partnership, sponsorship, endorsement, or agency relationship.",
  },
  {
    question: "What happens when I click a third-party link?",
    answer: "You may be redirected to a third-party website. The third party's terms, privacy policy, security practices, and other conditions may apply once you leave LowFareClick.",
  },
  {
    question: "How can I contact LowFareClick?",
    answer: "You can contact us using the email address, telephone number, or contact form provided on our Contact Us page.",
  },
  {
    question: "What information should I provide when contacting support?",
    answer: "For general inquiries, provide your name, contact information, and a clear description of your question. For booking-related inquiries, also provide the relevant booking reference and travel details. Avoid sending passwords, complete payment-card numbers, authentication codes, or other unnecessary confidential information.",
  },
  {
    question: "How quickly will I receive a response?",
    answer: "We aim to review inquiries within a reasonable period. Response times may vary depending on the type of request and whether information must be obtained from an airline, travel provider, payment processor, or another third party.",
  },
  {
    question: "What is the important travel notice?",
    answer: "Travel information can change without notice. Flight schedules, routes, fares, taxes, fees, baggage rules, availability, cancellation conditions, refund policies, and travel requirements may vary by airline, provider, destination, date, and other circumstances. Always review the applicable terms and verify important information with the relevant provider or official authority before traveling.",
  },
];

export default function FAQPage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Frequently Asked Questions</h1>
        <p className="page-subtitle">
          Find answers to common questions about LowFareClick, travel planning, flight information, bookings, cancellations, refunds, and using our website.
        </p>
      </div>

      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="booking-card">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
