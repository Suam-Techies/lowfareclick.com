import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  Headphones,
  PlaneTakeoff,
  ShieldCheck,
  Star,
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
    title: "Expert support",
    text: "Speak with a travel specialist when you need route guidance or booking help.",
  },
];

const steps = [
  {
    number: "01",
    title: "Search flights",
    text: "Use flexible dates and destination filters to compare the options that best fit your trip.",
  },
  {
    number: "02",
    title: "Choose your fare",
    text: "Review baggage, schedule, and value before selecting your preferred itinerary.",
  },
  {
    number: "03",
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
    title: "Connect with our travel experts:",
    text: "Need help with your itinerary or route selection? Our support team can guide you through planning and booking decisions.",
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
        <div className="bookings-hero-background" aria-hidden="true" />

        <div className="container hero-inner bookings-hero-inner">
          <div className="hero-copy bookings-hero-copy">
            <div className="eyebrow d-inline-flex align-items-center gap-2 booking-support-pill">
              <span className="eyebrow-pill" />
              24x7 Customer Support
            </div>

            <h1>
              Talk to our <span>Travel Experts</span>
            </h1>
            <p>Support for New Bookings, Changes and Cancellations</p>

            <div className="d-flex flex-wrap gap-3 mt-4 booking-call-row">
              <a href="tel:+18556877163" className="btn btn-primary rounded-pill px-4 py-3 booking-call-btn">
                Call Now
              </a>
            </div>

            <div className="booking-phone-stack">
              <a href="tel:+18556877163" className="booking-phone-pill phone-pill-primary">
                Toll-Free: <span>+1-855-687-7163</span>
              </a>
         
            </div>

            <div className="booking-feature-list">
              <span className="booking-feature-item">Direct support by phone</span>
              <span className="booking-feature-item">Travel guidance from expert agents</span>
              <span className="booking-feature-item">Helpful assistance before and during booking</span>
            </div>
          </div>

          <div className="booking-hero-panel">
            <div className="booking-hot-deal-badge">HOT DEAL</div>
            <h3>Fly More. Spend Less.</h3>
            <p>on your next flight booking. Limited-time offer.</p>
            <a href="/flights" className="booking-deal-btn">
              Grab This Deal
            </a>
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
              <div key={step.number} className="col-md-4">
                <div className="card-box p-4 h-100">
                  <div className="eyebrow text-primary mb-2">{step.number}</div>
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
                <p className="eyebrow text-primary mb-2">Travel support</p>
                <h2 className="section-title">Need help choosing the right flight?</h2>
                <p className="mt-3">
                  Our travel experts are ready to help with route planning, fare questions, and changes to your itinerary before or after you book.
                </p>
                <ul className="promo-list">
                  {supportPoints.map((point) => (
                    <li key={point}>
                      <BadgeCheck size={18} /> {point}
                    </li>
                  ))}
                </ul>
                <a href="tel:+18556877163" className="btn btn-primary rounded-pill px-4 mt-4">
                  Call +1 855 687 7163
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="travel-visual-card">
                <Image
                  src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80"
                  alt="Business class seating"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-fit-cover"
                />

                <div className="visual-floating-card">
                  <div className="floating-stat">
                    <span>4.9/5</span>
                    <small>Customer satisfaction</small>
                  </div>
                  <div className="floating-stat">
                    <span>24/7</span>
                    <small>Expert support</small>
                  </div>
                </div>
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
                    <span>Speak With a Live Agent</span>
                  </div>
                  <p>Grab unpublished fares and instant help with your booking.</p>
                  <a href="tel:+18556877163" className="btn btn-primary rounded-pill w-100 mt-3">
                    Call Us Now
                  </a>
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
                <p className="eyebrow mb-2 text-white-50">24/7 travel support</p>
                <h2 className="section-title mb-0">Ready to book your next trip?</h2>
              </div>
              <div className="col-lg-5 text-lg-end">
                <div className="d-flex flex-column flex-md-row justify-content-lg-end gap-2">
                  <Link href="/flights" className="btn btn-light rounded-pill px-4">
                    Browse flights
                  </Link>
                  <a href="tel:+18556877163" className="btn btn-outline-light rounded-pill px-4">
                    Call now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
