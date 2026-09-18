export type Destination = {
  slug: string;
  name: string;
  country: string;
  region: string;
  price: string;
  image: string;
};

export const destinations: Destination[] = [
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    region: "Europe",
    price: "$689",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    region: "Asia",
    price: "$812",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cancun",
    name: "Cancún",
    country: "Mexico",
    region: "North America",
    price: "$413",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    price: "$698",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    region: "Africa",
    price: "$559",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "rio",
    name: "Rio de Janeiro",
    country: "Brazil",
    region: "South America",
    price: "$497",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
  },
];
