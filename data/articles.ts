export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
};

export const articles: Article[] = [
  {
    slug: "travel-tips",
    title: "Smart travel tips for smoother flights",
    category: "Travel Tips",
    excerpt: "Plan ahead, pack wisely, and build a routine that keeps your trip stress-free from departure to arrival.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    content: "Travel planning gets easier when you start with the essentials: check baggage allowances, choose the right time to check in, and keep your travel documents organized in one place. Build a list of airport essentials, prepare backup copies of documents, and keep your tech charged before you leave home."
  },
  {
    slug: "airport-guide",
    title: "How to navigate busy airports with less stress",
    category: "Airports",
    excerpt: "Use a practical airport checklist to move quickly through security, boarding, and transfers.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
    content: "Airport days are smoother when you know your route ahead of time. Arrive early, confirm gate updates, and keep carry-on essentials close at hand. If you have a long connection, check lounge access and transfer times before you travel."
  },
  {
    slug: "business-travel",
    title: "A better business travel routine",
    category: "Business Travel",
    excerpt: "Use simple planning habits to stay productive, comfortable, and prepared while away.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    content: "Business travel works best when it is frictionless. Choose flights with best arrival times, align baggage and lounge preferences with the route, and keep a clean digital folder for boarding passes and confirmation details."
  },
];
