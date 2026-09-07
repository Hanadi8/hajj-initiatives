import Link from "next/link";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { NewsArticle } from "@/types";
import { SafeImage } from "./SafeImage";
import { Badge } from "./Badge";
import { formatArabicDate } from "@/lib/utils";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-40 w-full overflow-hidden">
        <SafeImage src={article.image} alt={article.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-3">
          <Badge tone="accent">{article.category}</Badge>
          <span className="caption inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {formatArabicDate(article.date)}
          </span>
        </div>
        <h3 className="h4 mb-2 line-clamp-2 text-text">{article.title}</h3>
        <p className="body-sm mb-4 line-clamp-2">{article.excerpt}</p>
        <Link href={`/news/${article.slug}`} className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark">
          اقرأ المزيد
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
