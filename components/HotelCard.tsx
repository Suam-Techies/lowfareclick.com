import Image from "next/image";
import Link from "next/link";
import type { Hotel } from "@/data/hotels";

export function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <article className="hotel-card card-box h-100">
      <div className="hotel-card-image">
        <Image src={hotel.image} alt={hotel.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-fit-cover" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <div>
            <h3 className="h5 mb-1">{hotel.name}</h3>
            <p className="text-muted small mb-0">{hotel.location}</p>
          </div>
          <span className="rating-pill">★ {hotel.rating}</span>
        </div>
        <div className="hotel-meta mt-3">
          <span>{hotel.roomType}</span>
          <span>{hotel.amenities.join(" • ")}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <div className="text-muted small">From</div>
            <div className="fw-bold fs-4">{hotel.price}</div>
          </div>
          <Link href="/hotels" className="btn btn-primary btn-sm rounded-pill">
            View Hotel
          </Link>
        </div>
      </div>
    </article>
  );
}
