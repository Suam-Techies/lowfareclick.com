import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  return {
    title: article ? article.title : "Travel guide article",
    description: article ? article.excerpt : "Travel guide article",
    alternates: { canonical: article ? `/travel-guide/${slug}` : "/travel-guide" },
  };
}

export default async function TravelGuideArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <main className="page-shell"><div className="container page-header"><h1>Article not found</h1></div></main>;
  }

  return (
    <main className="page-shell">
      <div className="container page-header">
        <Link href="/travel-guide" className="text-link-primary d-inline-flex align-items-center gap-2 mb-3">← Back to guide</Link>
        <p className="eyebrow text-primary mb-2">{article.category}</p>
        <h1>{article.title}</h1>
      </div>

      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="hero-image-wrap mb-4">
              <Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 100vw, 70vw" className="object-fit-cover" />
            </div>
            <div className="booking-card p-4">
              <p className="text-muted" style={{ lineHeight: 1.9 }}>{article.content}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
