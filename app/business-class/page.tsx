import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, ConciergeBell, PlaneTakeoff } from "lucide-react";

export const metadata = {
  title: "Business Class",
  description: "Premium cabin travel with comfort, flexibility, and elevated service.",
  alternates: { canonical: "/business-class" },
};

export default function BusinessClassPage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <p className="eyebrow text-primary mb-2">Business class</p>
        <h1>Travel in a more refined way.</h1>
        <p className="page-subtitle">Upgrade your journey with priority service, calmer airport flow, and a more productive onboard experience.</p>
      </div>

      <div className="container pb-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="hero-image-wrap">
              <Image src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80" alt="Business class cabin" fill className="object-fit-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="booking-card">
              <h2 className="h4 mb-3">Why choose business class?</h2>
              <div className="summary-list">
                <div className="summary-item"><span>Priority check-in</span><strong><BadgeCheck size={16} /></strong></div>
                <div className="summary-item"><span>Airport lounge access</span><strong><ConciergeBell size={16} /></strong></div>
                <div className="summary-item"><span>Flexible changes</span><strong><BriefcaseBusiness size={16} /></strong></div>
                <div className="summary-item"><span>Premium onboard comfort</span><strong><PlaneTakeoff size={16} /></strong></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-2">
          {[
            { title: "Priority airport flow", text: "Faster security check-in and smoother gate coordination on long-haul itineraries." },
            { title: "More room to work", text: "A calmer cabin layout helps you rest, focus, and move through travel more efficiently." },
            { title: "Flexible options", text: "Useful change and baggage policies make business trips easier to adjust when plans shift." },
          ].map((item) => (
            <div key={item.title} className="col-md-4">
              <div className="card-box p-4 h-100">
                <h3 className="h5 mb-2">{item.title}</h3>
                <p className="text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <Link href="/flights" className="btn btn-primary rounded-pill px-4">Browse premium routes <ArrowRight size={16} /></Link>
        </div>
      </div>
    </main>
  );
}
