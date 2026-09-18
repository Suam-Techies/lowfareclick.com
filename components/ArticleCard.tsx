import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/data/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card card-box h-100">
      <div className="article-card-image">
        <Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-fit-cover" />
      </div>
      <div className="card-body">
        <div className="small text-primary fw-semibold text-uppercase">{article.category}</div>
        <h3 className="h5 mt-2 mb-2">{article.title}</h3>
        <p className="text-muted small mb-3">{article.excerpt}</p>
        <Link href={`/travel-guide/${article.slug}`} className="text-link-primary">
          Read article
        </Link>
      </div>
    </article>
  );
}
