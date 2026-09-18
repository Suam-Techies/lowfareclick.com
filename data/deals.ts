export type Deal = {
  id: string;
  title: string;
  origin: string;
  destination: string;
  dates: string;
  price: string;
  image: string;
};

export const deals: Deal[] = [
  {
    id: "deal-nyc-lon",
    title: "Autumn city break",
    origin: "New York",
    destination: "London",
    dates: "Sep 24 – Oct 01",
    price: "$689",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "deal-sfo-seoul",
    title: "Korean culture escape",
    origin: "San Francisco",
    destination: "Seoul",
    dates: "Oct 12 – Oct 24",
    price: "$845",
    image: "https://images.unsplash.com/photo-1532236204992-f5e85c024202?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "deal-miami-madrid",
    title: "Late-summer Iberia",
    origin: "Miami",
    destination: "Madrid",
    dates: "Sep 29 – Oct 12",
    price: "$574",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
  },
];
