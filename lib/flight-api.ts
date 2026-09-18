import { flights, mockSearchFlights } from "@/data/flights";

export type FlightQuery = {
  from?: string;
  to?: string;
  departure?: string;
  return?: string;
  tripType?: string;
  travelers?: string;
  cabin?: string;
};

export async function searchFlights(query: FlightQuery) {
  return {
    items: mockSearchFlights(query),
    total: mockSearchFlights(query).length,
  };
}

export async function getFlightDetails(id: string) {
  return flights.find((flight) => flight.id === id) ?? null;
}

export async function createBooking(payload: Record<string, unknown>) {
  return {
    confirmationId: `SKY-${Math.floor(100000 + Math.random() * 900000)}`,
    status: "confirmed",
    payload,
  };
}

export async function getBooking(reference: string) {
  return {
    reference,
    passenger: "Alex Morgan",
    itinerary: "New York (JFK) → London (LHR)",
    status: "Confirmed",
  };
}
