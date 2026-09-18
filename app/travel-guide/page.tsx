import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";

export const metadata = {
  title: "Travel Guide",
  description: "Helpful travel advice for flights, airport planning, and smarter journeys.",
  alternates: { canonical: "/travel-guide" },
};

export default function TravelGuidePage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Travel guide</h1>
        <p className="page-subtitle">Practical advice for smoother trips, better planning, and less stress before takeoff.</p>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          {articles.map((article) => (
            <div key={article.slug} className="col-lg-4">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
