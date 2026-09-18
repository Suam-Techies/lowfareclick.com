import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/data/destinations";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="destination-card card-box h-100">
      <div className="destination-card-image">
        <Image src={destination.image} alt={destination.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-fit-cover" />
      </div>
      <div className="card-body">
        <div className="text-primary text-uppercase small fw-semibold">{destination.region}</div>
        <h3 className="h4 mt-2 mb-1">{destination.name}</h3>
        <p className="text-muted mb-3">{destination.country}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-semibold">From {destination.price}</span>
          <Link href={`/destinations/${destination.slug}`} className="btn btn-link p-0 text-primary fw-semibold">
            Explore flights
          </Link>
        </div>
      </div>
    </article>
  );
}
