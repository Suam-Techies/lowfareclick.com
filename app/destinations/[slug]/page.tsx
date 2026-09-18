import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/data/destinations";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  return {
    title: destination ? destination.name : "Destination",
    description: destination ? `Explore flights to ${destination.name}.` : "Destination details",
    alternates: { canonical: destination ? `/destinations/${slug}` : "/destinations" },
  };
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return (
      <main className="page-shell">
        <div className="container page-header">
          <h1>Destination not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <div className="container page-header">
        <Link href="/destinations" className="text-link-primary d-inline-flex align-items-center gap-2 mb-3">← Back to destinations</Link>
        <h1>{destination.name}</h1>
        <p className="page-subtitle">{destination.country} · {destination.region}</p>
      </div>

      <div className="container pb-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <div className="hero-image-wrap">
              <Image src={destination.image} alt={destination.name} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-fit-cover" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="booking-card">
              <p className="eyebrow text-primary mb-2">Sample route</p>
              <h2 className="h4">Flights from New York</h2>
              <p className="text-muted mt-2">Starting from {destination.price} and available in multiple travel windows.</p>
              <Link href="/flights?from=New%20York%20(JFK)&to=London%20(LHR)&departure=2026-09-24" className="btn btn-primary rounded-pill mt-3">
                Search flights to {destination.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
