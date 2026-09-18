import Image from "next/image";
import Link from "next/link";
import type { Deal } from "@/data/deals";

export function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="deal-card card-box h-100">
      <div className="deal-card-image">
        <Image src={deal.image} alt={deal.destination} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-fit-cover" />
      </div>
      <div className="card-body d-flex flex-column h-100">
        <div className="d-flex justify-content-between align-items-center mb-2 text-muted small">
          <span>{deal.origin}</span>
          <span>→</span>
          <span>{deal.destination}</span>
        </div>
        <h3 className="h5 mb-2">{deal.title}</h3>
        <p className="text-muted small mb-3">{deal.dates}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div>
            <div className="text-muted small">From</div>
            <div className="fw-bold fs-4">{deal.price}</div>
          </div>
          <Link href="/deals" className="btn btn-outline-primary btn-sm rounded-pill">
            View deal
          </Link>
        </div>
      </div>
    </article>
  );
}
