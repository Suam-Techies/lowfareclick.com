import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  Headphones,
  ShieldCheck,
  Ticket,
  Wallet,
} from "lucide-react";
import { FlightSearch } from "@/components/FlightSearch";

const perks = [
  {
    icon: <Ticket size={22} />,
    title: "Affordable bookings",
    text: "Find value-focused fares that match your route, timing, and comfort preferences.",
  },
  {
    icon: <CalendarCheck2 size={22} />,
    title: "Simple trip planning",
    text: "Compare schedules and cabin options before you lock in your travel dates.",
  },
  {
    icon: <Wallet size={22} />,
    title: "Transparent pricing",
    text: "Review the fare details clearly so you know what you are paying for before booking.",
  },
  {
    icon: <Headphones size={22} />,
    title: "Travel guidance",
    text: "Review general route information and get clear trip-planning guidance before you book through a provider.",
  },
];

const steps = [
  {
    title: "Search flights",
    text: "Use flexible dates and destination filters to compare the options that best fit your trip.",
  },
  {
    title: "Choose your fare",
    text: "Review baggage, schedule, and value before selecting your preferred itinerary.",
  },
  {
    title: "Confirm and travel",
    text: "Complete the booking and travel with confidence knowing support is available.",
  },
];

const supportPoints = [
  "Travel options across domestic and international routes",
  "Support for changes, cancellations, and travel questions",
  "Clear comparisons for baggage, timing, and total fare",
  "A straightforward booking flow for informed decisions",
];

const articlePoints = [
  {
    title: "Explore route options:",
    text: "LowFareClick helps travelers compare routes and pricing across destinations so they can choose a fare that fits their budget and travel plans.",
  },
  {
    title: "Fast, easy access to flights:",
    text: "Search flights quickly, compare options clearly, and book with confidence using a streamlined process that keeps things simple.",
  },
  {
    title: "General trip guidance:",
    text: "Need route ideas or planning guidance? Our team can provide general travel information and direct you to the relevant official airline contact channels when needed.",
  },
];

export const metadata = {
  title: "Bookings",
  description: "Book flights, compare deals, and plan your next journey with LowFareClick.",
  alternates: { canonical: "/bookings" },
};

export default function BookingsPage() {
  return (
    <main className="page-shell bookings-page">

      <section className="hero-section bookings-hero">
        <div className="container hero-inner bookings-hero-inner">
          <div className="hero-copy bookings-hero-copy">
            <h1>Flight Reservations</h1>
            <p>Search flights, compare options, and plan your next trip.</p>
          </div>

          <div className="booking-hero-panel">
            <h3>Plan Your Journey</h3>
            <p>Compare routes and fares to find an itinerary that fits your plans.</p>
            <Link href="/flights" className="booking-deal-btn">
              Browse Flights
            </Link>
          </div>
        </div>

        <div className="container search-wrap">
          <FlightSearch />
        </div>
      </section>

      <section className="section py-5">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-md-8">
              <p className="eyebrow text-primary mb-2">Why book with us</p>
              <h2 className="section-title">A simpler way to book and manage flights.</h2>
            </div>
            <div className="col-md-4 text-md-end">
              <Link href="/deals" className="text-link-primary">
                Explore deals <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {perks.map((perk) => (
              <div key={perk.title} className="col-md-6 col-xl-3">
                <div className="feature-tile card-box h-100">
                  <div className="feature-icon">{perk.icon}</div>
                  <h3>{perk.title}</h3>
                  <p>{perk.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center mb-5">
            <p className="eyebrow text-primary mb-2">How it works</p>
            <h2 className="section-title">From search to takeoff in three steps.</h2>
          </div>

          <div className="row g-4">
            {steps.map((step) => (
              <div key={step.title} className="col-md-4">
                <div className="card-box p-4 h-100">
                  <h3 className="h4 mb-3">{step.title}</h3>
                  <p className="text-muted">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="promo-content card-box">
                <p className="eyebrow text-primary mb-2">Travel information</p>
                <h2 className="section-title">Need route guidance or trip-planning help?</h2>
                <p className="mt-3">
                  LowFareClick provides general travel information and booking research guidance. We can help you compare options and direct you to official airline contact channels when needed. We are not affiliated with any airline and do not provide official airline customer support.
                </p>
                <ul className="promo-list">
                  {supportPoints.map((point) => (
                    <li key={point}>
                      <BadgeCheck size={18} /> {point}
                    </li>
                  ))}
                </ul>
                <Link href="/flights" className="btn btn-primary rounded-pill px-4 mt-4">
                  Search Flights
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card-box p-4 h-100">
                <ShieldCheck size={32} className="text-primary mb-3" />
                <h3>Clear Trip Information</h3>
                <p className="text-muted mb-0">
                  Compare schedules, baggage options, and fare details before choosing your itinerary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-5">
        <div className="container">
          <div className="booking-content-box card-box">
            <div className="row g-4 align-items-start">
              <div className="col-lg-8">
                <p className="eyebrow text-primary mb-2">Book with confidence</p>
                <h2 className="section-title">Find the ticket that fits your trip.</h2>

                <div className="booking-copy-stack mt-4">
                  <p>
                    When planning your next journey, a clear booking experience matters. LowFareClick makes it easier to compare routes, review pricing, and choose a trip that works for your schedule and budget.
                  </p>
                  {articlePoints.map((point) => (
                    <div key={point.title} className="booking-article-item">
                      <strong>{point.title}</strong>
                      <p>{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="support-side-card">
                  <div className="support-side-header">
                    <Headphones size={18} />
                      <span>Travel Assistance</span>
                  </div>
                    <p>Get clear guidance about routes and booking options.</p>
                    <Link href="/contact" className="btn btn-primary rounded-pill w-100 mt-3">
                      Contact Us
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-5">
        <div className="container">
          <div className="newsletter-card card-box">
            <div className="row align-items-center gy-4">
              <div className="col-lg-7">
                <p className="eyebrow mb-2 text-white-50">Independent travel research</p>
                <h2 className="section-title mb-0">Ready to research your next trip?</h2>
              </div>
              <div className="col-lg-5 text-lg-end">
                <div className="d-flex flex-column flex-md-row justify-content-lg-end gap-2">
                  <Link href="/flights" className="btn btn-light rounded-pill px-4">
                    Browse flights
                  </Link>
                  <Link href="/contact" className="btn btn-outline-light rounded-pill px-4">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
