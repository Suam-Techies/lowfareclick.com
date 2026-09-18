export type Hotel = {
  id: string;
  name: string;
  location: string;
  rating: number;
  roomType: string;
  price: string;
  amenities: string[];
  image: string;
};

export const hotels: Hotel[] = [
  {
    id: "hotel-1",
    name: "Harbor View Suites",
    location: "Barcelona, Spain",
    rating: 4.8,
    roomType: "Deluxe King",
    price: "$186/night",
    amenities: ["Breakfast", "Wi-Fi", "Pool"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hotel-2",
    name: "Skyline House",
    location: "Singapore",
    rating: 4.9,
    roomType: "City View Room",
    price: "$224/night",
    amenities: ["Breakfast", "Gym", "Airport transfer"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hotel-3",
    name: "Saffron Courtyard",
    location: "Paris, France",
    rating: 4.7,
    roomType: "Chambre Supérieure",
    price: "$210/night",
    amenities: ["Spa", "Breakfast", "Concierge"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
];
