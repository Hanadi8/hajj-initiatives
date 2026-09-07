"use client";

import { useMemo, useState } from "react";
import { newsArticles } from "@/data/news";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SearchBar } from "@/components/SearchBar";
import { NewsCard } from "@/components/NewsCard";
import { EmptyState } from "@/components/StateBlocks";
import { Badge } from "@/components/Badge";
import { cn } from "@/lib/utils";

const categories = ["الكل", ...Array.from(new Set(newsArticles.map((n) => n.category)))];

export default function NewsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("الكل");

  const filtered = useMemo(
    () =>
      newsArticles.filter((n) => {
        const matchesQuery = n.title.includes(query) || n.excerpt.includes(query);
        const matchesCategory = category === "الكل" || n.category === category;
        return matchesQuery && matchesCategory;
      }),
    [query, category]
  );

  return (
    <div className="container-page section-py">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "المستجدات" }]} />

      <header className="max-w-2xl">
        <h1 className="h1">المستجدات</h1>
        <p className="body-lg mt-3">أحدث الأخبار والفعاليات المرتبطة بمبادرات الحج.</p>
      </header>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
        <SearchBar value={query} onChange={setQuery} placeholder="ابحث في المستجدات..." className="md:max-w-sm" ariaLabel="ابحث في المستجدات" />
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)}>
              <Badge tone={category === c ? "primary" : "muted"} className={cn("cursor-pointer transition-colors", category === c && "ring-1 ring-primary/30")}>
                {c}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState title="لا توجد أخبار" description="لا توجد نتائج مطابقة لبحثك الحالي." />
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
