export type Flight = {
  id: string;
  airLine: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureDate: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  cabin: string;
  baggage: string;
  price: number;
  image: string;
  route: string;
  aircraft: string;
  fareRules: string[];
  amenities: string[];
};

export const flights: Flight[] = [
  {
    id: "flight-lhr-jfk-401",
    airLine: "AeroNorth",
    flightNumber: "AN401",
    origin: "New York (JFK)",
    destination: "London (LHR)",
    departureDate: "2026-09-24",
    departureTime: "08:20",
    arrivalTime: "20:10",
    duration: "11h 50m",
    stops: "Non-stop",
    cabin: "Economy",
    baggage: "1 cabin + 1 checked bag",
    price: 689,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    route: "JFK → LHR",
    aircraft: "Boeing 787-9",
    fareRules: [
      "Seat selection is available for premium members.",
      "Changes are permitted for a fee up to 48 hours before departure.",
      "Travel arrangements may be adjusted within 24 hours under selected conditions.",
    ],
    amenities: ["Wi-Fi", "USB charging", "Meal included", "Carry-on included"],
  },
  {
    id: "flight-cdg-sfo-128",
    airLine: "SkyHarbor",
    flightNumber: "SH128",
    origin: "Paris (CDG)",
    destination: "San Francisco (SFO)",
    departureDate: "2026-10-08",
    departureTime: "11:15",
    arrivalTime: "14:40",
    duration: "15h 25m",
    stops: "1 stop",
    cabin: "Economy",
    baggage: "1 cabin + 1 checked bag",
    price: 724,
    image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1200&q=80",
    route: "CDG → SFO",
    aircraft: "Airbus A330",
    fareRules: [
      "Seat selection is available at booking",
      "Travel plans may be adjusted within 24 hours",
      "Baggage allowance varies by fare type",
    ],
    amenities: ["Power outlets", "Inflight entertainment", "Light meal"],
  },
  {
    id: "flight-dxb-nyc-221",
    airLine: "BlueJet",
    flightNumber: "BJ221",
    origin: "Dubai (DXB)",
    destination: "New York (JFK)",
    departureDate: "2026-10-19",
    departureTime: "22:05",
    arrivalTime: "06:20",
    duration: "20h 15m",
    stops: "1 stop",
    cabin: "Business",
    baggage: "2 checked bags",
    price: 1625,
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80",
    route: "DXB → JFK",
    aircraft: "Airbus A350",
    fareRules: [
      "Complimentary lounge access",
      "Flexible date changes available",
      "Priority baggage and boarding included",
    ],
    amenities: ["Lounge access", "Priority boarding", "Lie-flat seats", "Premium dining"],
  },
  {
    id: "flight-syd-lax-531",
    airLine: "Pacific Crest",
    flightNumber: "PC531",
    origin: "Sydney (SYD)",
    destination: "Los Angeles (LAX)",
    departureDate: "2026-11-04",
    departureTime: "21:50",
    arrivalTime: "17:20",
    duration: "19h 30m",
    stops: "1 stop",
    cabin: "Economy",
    baggage: "1 cabin + 1 checked bag",
    price: 886,
    image: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1200&q=80",
    route: "SYD → LAX",
    aircraft: "Boeing 777",
    fareRules: [
      "Carry-on included", "Checked bag selection at checkout", "Refundable if fare rules allow",
    ],
    amenities: ["Wi-Fi", "Entertainment", "Snacks"],
  },
];

export const mockSearchFlights = (query: { from?: string; to?: string; departure?: string; tripType?: string }) => {
  return flights.filter((flight) => {
    const fromMatch = !query.from || flight.origin.toLowerCase().includes(query.from.toLowerCase());
    const toMatch = !query.to || flight.destination.toLowerCase().includes(query.to.toLowerCase());
    const dateMatch = !query.departure || flight.departureDate === query.departure;
    return fromMatch && toMatch && dateMatch;
  });
};
