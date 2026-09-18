import { hotels } from "@/data/hotels";
import { HotelCard } from "@/components/HotelCard";

export const metadata = {
  title: "Hotels",
  description: "Explore curated hotel stays and city escapes with flexible booking options.",
  alternates: { canonical: "/hotels" },
};

export default function HotelsPage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Book a place to stay</h1>
        <p className="page-subtitle">Find comfortable, well-positioned hotels for your next city break or business stay.</p>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="col-lg-4">
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
