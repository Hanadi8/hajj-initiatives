import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { newsArticles, getNewsBySlug, getRelatedNews } from "@/data/news";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SafeImage } from "@/components/SafeImage";
import { Badge } from "@/components/Badge";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeader } from "@/components/SectionHeader";
import { formatArabicDate } from "@/lib/utils";

export function generateStaticParams() {
  return newsArticles.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getNewsBySlug(params.slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default function NewsDetailsPage({ params }: { params: { slug: string } }) {
  const article = getNewsBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedNews(article);

  return (
    <div>
      <div className="container-page pt-8">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "المستجدات", href: "/news" }, { label: article.title }]} />
      </div>

      <article className="container-page pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <Badge tone="accent">{article.category}</Badge>
            <span className="caption inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {formatArabicDate(article.date)}
            </span>
          </div>
          <h1 className="h1 mb-6">{article.title}</h1>

          <div className="relative mb-8 h-64 overflow-hidden rounded-lg md:h-96">
            <SafeImage src={article.image} alt={article.title} fill sizes="768px" className="object-cover" priority />
          </div>

          <div className="space-y-5">
            {article.content.map((p, i) => (
              <p key={i} className="body-lg text-text">{p}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-offwhite/50 py-14">
        <div className="container-page">
          <SectionHeader eyebrow="تابع المزيد" title="مستجدات ذات صلة" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((n) => (
              <NewsCard key={n.id} article={n} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
