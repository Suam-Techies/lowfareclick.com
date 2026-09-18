import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarCheck2, Globe2, Headphones, ShieldCheck } from "lucide-react";
import { FlightSearch } from "@/components/FlightSearch";

const routeGuides = [
  {
    title: "New York to London",
    text: "A classic transatlantic route for business travel, family visits, and city breaks.",
  },
  {
    title: "Chicago to Miami",
    text: "A popular warm-weather getaway with frequent departures and flexible schedules.",
  },
  {
    title: "Los Angeles to Seattle",
    text: "Ideal for short-haul travel, weekend escapes, and domestic trip planning.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow d-inline-flex align-items-center gap-2">
              <span className="eyebrow-pill" />
              Independent travel research
            </div>
            <h1>
              Travel research for routes,<br />
              destinations, and trip planning.
            </h1>
            <p>
              lowfareclick.com helps travelers research flights, compare route options, and prepare for trips with clarity before booking through a provider.
            </p>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80"
                alt="Airplane wing over clouds"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-fit-cover"
              />
            </div>
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
              <p className="eyebrow text-primary mb-2">What we offer</p>
              <h2 className="section-title">Travel research, route guidance, and planning support.</h2>
            </div>
            <div className="col-md-4 text-md-end">
              <Link href="/bookings" className="text-link-primary">
                Explore bookings <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {[
              { icon: <ShieldCheck size={22} />, title: "Independent travel information", text: "We provide general route and destination research without tying you to a single airline or booking channel." },
              { icon: <Headphones size={22} />, title: "Free support", text: "Get help with airline contact information, travel questions, and planning before you complete a booking." },
              { icon: <Globe2 size={22} />, title: "Route research", text: "Explore common travel routes, airports, and planning details to better understand your trip options." },
              { icon: <CalendarCheck2 size={22} />, title: "Trip planning", text: "Review essential travel considerations to prepare for your journey with more confidence." },
            ].map((item) => (
              <div key={item.title} className="col-md-6 col-xl-3">
                <div className="feature-tile card-box h-100">
                  <div className="feature-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-5">
        <div className="container">
          <div className="section-header d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
            <div>
              <p className="eyebrow text-primary mb-2">Popular route ideas</p>
              <h2 className="section-title">Helpful destinations to research</h2>
            </div>
            <Link href="/flights" className="text-link-primary">
              Search flights <ArrowRight size={15} />
            </Link>
          </div>

          <div className="row g-4">
            {routeGuides.map((route) => (
              <div key={route.title} className="col-lg-4">
                <div className="card-box h-100 p-4">
                  <div className="eyebrow text-primary mb-2">Route guide</div>
                  <h3 className="h4 mb-3">{route.title}</h3>
                  <p className="text-muted mb-0">{route.text}</p>
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
              <div className="info-graphic-panel card-box p-4 p-md-5">
                <p className="eyebrow text-primary mb-2">Why travelers use us</p>
                <h2 className="section-title mb-4">A clearer way to research your next trip.</h2>

                <div className="info-points">
                  <div className="info-point">
                    <span className="info-point-icon">✓</span>
                    <div>
                      <strong>Travel research</strong>
                      <p>Compare route ideas, destinations, and travel planning notes before booking.</p>
                    </div>
                  </div>
                  <div className="info-point">
                    <span className="info-point-icon">✓</span>
                    <div>
                      <strong>Useful guidance</strong>
                      <p>Understand key travel details, baggage rules, and journey considerations faster.</p>
                    </div>
                  </div>
                  <div className="info-point">
                    <span className="info-point-icon">✓</span>
                    <div>
                      <strong>Transparent support</strong>
                      <p>Get direct contact help and clear information when travel questions come up.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="travel-visual-card">
                <Image
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80"
                  alt="Traveler looking at a flight map"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-fit-cover"
                />

                <div className="visual-floating-card">
                  <div className="floating-stat">
                    <span>14K+</span>
                    <small>route searches</small>
                  </div>
                  <div className="floating-stat muted">
                    <span>24/7</span>
                    <small>travel help</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-5">
        <div className="container">
          <div className="card-box p-4 p-md-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <p className="eyebrow text-primary mb-2">Travel planning</p>
                <h2 className="section-title mb-3">Need help comparing routes or preparing for a trip?</h2>
                <p className="mb-0">
                  LowFareClick provides neutral travel information and planning support to help visitors research routes,
                  destinations, and key trip details before booking through an airline or travel provider.
                </p>
              </div>
              <div className="col-lg-5 text-lg-end">
                <Link href="/contact" className="btn btn-primary rounded-pill px-4">
                  Contact us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-5">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6">
              <div className="card-box h-100 p-4 p-md-5">
                <p className="eyebrow text-primary mb-2">About us</p>
                <h2 className="section-title mb-3">Independent travel research for smarter planning.</h2>
                <p className="text-muted mb-3">
                  LowFareClick is a travel information platform created to help people research flights, compare routes,
                  and understand trip details before booking through a third-party provider.
                </p>
                <p className="text-muted mb-0">
                  We provide general information about destinations, airfare considerations, booking research, and trip planning
                  while keeping our content clear, transparent, and easy to understand.
                </p>
                <div className="mt-4">
                  <Link href="/about-us" className="text-link-primary">
                    Learn more <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card-box h-100 p-4 p-md-5">
                <p className="eyebrow text-primary mb-2">FAQ</p>
                <h2 className="section-title mb-3">Common questions travelers ask.</h2>
                <div className="d-flex flex-column gap-3">
                  <div>
                    <strong className="d-block mb-1">Is LowFareClick an airline?</strong>
                    <p className="text-muted mb-0">No. We are an independent travel information platform and do not operate flights.</p>
                  </div>
                  <div>
                    <strong className="d-block mb-1">Can I research flights here?</strong>
                    <p className="text-muted mb-0">Yes. Visitors can use our website to research routes, destinations, and trip details.</p>
                  </div>
                  <div>
                    <strong className="d-block mb-1">Are bookings made on this site?</strong>
                    <p className="text-muted mb-0">Bookings may be directed to the applicable provider through the relevant process.</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/faq" className="text-link-primary">
                    Read more FAQs <ArrowRight size={15} />
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
