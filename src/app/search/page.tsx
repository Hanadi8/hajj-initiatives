// "use client";

// import { useMemo, useState } from "react";
// import Link from "next/link";
// import { ArrowLeft, Layers, Newspaper, FileText } from "lucide-react";
// import { initiatives } from "@/data/initiatives";
// // import { newsArticles } from "@/data/news";
// import { SearchBar } from "@/components/SearchBar";
// import { EmptyState } from "@/components/StateBlocks";
// import { Badge } from "@/components/Badge";

// const staticPages = [
//   { title: "عن المبادرات", href: "/about", excerpt: "لماذا أُطلقت المبادرات، الرؤية، الأهداف، الفئات المستفيدة." },
//   { title: "الأثر والنتائج", href: "/impact", excerpt: "الأثر المتحقق من المبادرات على مستوى المستفيدين والخدمات." },
//   { title: "الإحصائيات", href: "/statistics", excerpt: "لوحة بيانات تفاعلية لمؤشرات الأداء العامة." },
//   { title: "تواصل معنا", href: "/contact", excerpt: "معلومات التواصل ونموذج إرسال الاستفسارات." },
// ];

// type ResultType = "مبادرة" | "مستجد" | "صفحة";

// interface Result {
//   type: ResultType;
//   title: string;
//   excerpt: string;
//   href: string;
// }

// const typeIcon: Record<ResultType, typeof Layers> = { "مبادرة": Layers, "مستجد": Newspaper, "صفحة": FileText };

// export default function SearchPage() {
//   const [query, setQuery] = useState("");

//   const results: Result[] = useMemo(() => {
//     if (!query.trim()) return [];
//     const q = query.trim();
//     const fromInitiatives: Result[] = initiatives
//       .filter((i) => i.title.includes(q) || i.shortDescription.includes(q))
//       .map((i) => ({ type: "مبادرة", title: i.title, excerpt: i.shortDescription, href: `/initiatives/${i.slug}` }));
//     const fromNews: Result[] = newsArticles
//       .filter((n) => n.title.includes(q) || n.excerpt.includes(q))
//       .map((n) => ({ type: "مستجد", title: n.title, excerpt: n.excerpt, href: `/news/${n.slug}` }));
//     const fromPages: Result[] = staticPages
//       .filter((p) => p.title.includes(q) || p.excerpt.includes(q))
//       .map((p) => ({ type: "صفحة", title: p.title, excerpt: p.excerpt, href: p.href }));
//     return [...fromInitiatives, ...fromNews, ...fromPages];
//   }, [query]);

//   return (
//     <div className="container-page section-py">
//       <h1 className="h1 mb-6 text-center">البحث</h1>
//       <SearchBar value={query} onChange={setQuery} placeholder="ابحث عن مبادرة، خبر، أو صفحة..." size="lg" className="mx-auto max-w-2xl" ariaLabel="البحث في الموقع" />

//       <div className="mx-auto mt-10 max-w-2xl">
//         {!query.trim() ? (
//           <p className="body text-center">اكتب كلمة للبحث في المبادرات، المستجدات، وصفحات الموقع.</p>
//         ) : results.length === 0 ? (
//           <EmptyState title="لم نجد نتائج مطابقة" description="جرّب كلمات بحث مختلفة." actionLabel="العودة للرئيسية" actionHref="/" />
//         ) : (
//           <>
//             <p className="body-sm mb-5">{results.length} نتيجة لبحثك عن &quot;{query}&quot;</p>
//             <ul className="space-y-3">
//               {results.map((r, i) => {
//                 const Icon = typeIcon[r.type];
//                 return (
//                   <li key={i}>
//                     <Link href={r.href} className="group flex items-start gap-4 rounded-lg border border-border bg-white p-4 transition-colors hover:border-primary/30 hover:bg-primary/5">
//                       <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
//                         <Icon className="h-5 w-5" aria-hidden="true" />
//                       </span>
//                       <div className="flex-1">
//                         <Badge tone="muted" className="mb-1.5">{r.type}</Badge>
//                         <h3 className="h4 mb-1 text-text">{r.title}</h3>
//                         <p className="body-sm line-clamp-1">{r.excerpt}</p>
//                       </div>
//                       <ArrowLeft className="mt-3 h-4 w-4 shrink-0 text-text-muted transition-transform group-hover:-translate-x-1" aria-hidden="true" />
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Layers, FileText } from "lucide-react";
import { initiatives } from "@/data/initiatives";
import { SearchBar } from "@/components/SearchBar";
import { EmptyState } from "@/components/StateBlocks";
import { Badge } from "@/components/Badge";

const staticPages = [
  {
    title: "عن المبادرات",
    href: "/about",
    excerpt: "لماذا أُطلقت المبادرات، الرؤية، الأهداف، الفئات المستفيدة.",
  },
  {
    title: "الأثر والنتائج",
    href: "/impact",
    excerpt: "الأثر المتحقق من المبادرات على مستوى المستفيدين والخدمات.",
  },
  {
    title: "الإحصائيات",
    href: "/statistics",
    excerpt: "لوحة بيانات تفاعلية لمؤشرات الأداء العامة.",
  },
  {
    title: "تواصل معنا",
    href: "/contact",
    excerpt: "معلومات التواصل ونموذج إرسال الاستفسارات.",
  },
];

type ResultType = "مبادرة" | "صفحة";

interface Result {
  type: ResultType;
  title: string;
  excerpt: string;
  href: string;
}

const typeIcon: Record<ResultType, typeof Layers> = {
  "مبادرة": Layers,
  "صفحة": FileText,
};

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results: Result[] = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.trim();

    const fromInitiatives: Result[] = initiatives
      .filter(
        (i) =>
          i.title.includes(q) ||
          i.shortDescription.includes(q)
      )
      .map((i) => ({
        type: "مبادرة",
        title: i.title,
        excerpt: i.shortDescription,
        href: `/initiatives/${i.slug}`,
      }));

    const fromPages: Result[] = staticPages
      .filter(
        (p) =>
          p.title.includes(q) ||
          p.excerpt.includes(q)
      )
      .map((p) => ({
        type: "صفحة",
        title: p.title,
        excerpt: p.excerpt,
        href: p.href,
      }));

    return [...fromInitiatives, ...fromPages];
  }, [query]);

  return (
    <div className="container-page section-py">
      <h1 className="h1 mb-6 text-center">البحث</h1>

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="ابحث عن مبادرة أو صفحة..."
        size="lg"
        className="mx-auto max-w-2xl"
        ariaLabel="البحث في الموقع"
      />

      <div className="mx-auto mt-10 max-w-2xl">
        {!query.trim() ? (
          <p className="body text-center">
            اكتب كلمة للبحث في المبادرات وصفحات الموقع.
          </p>
        ) : results.length === 0 ? (
          <EmptyState
            title="لم نجد نتائج مطابقة"
            description="جرّب كلمات بحث مختلفة."
            actionLabel="العودة للرئيسية"
            actionHref="/"
          />
        ) : (
          <>
            <p className="body-sm mb-5">
              {results.length} نتيجة لبحثك عن &quot;{query}&quot;
            </p>

            <ul className="space-y-3">
              {results.map((r, i) => {
                const Icon = typeIcon[r.type];

                return (
                  <li key={i}>
                    <Link
                      href={r.href}
                      className="group flex items-start gap-4 rounded-lg border border-border bg-white p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>

                      <div className="flex-1">
                        <Badge
                          tone="muted"
                          className="mb-1.5"
                        >
                          {r.type}
                        </Badge>

                        <h3 className="h4 mb-1 text-text">
                          {r.title}
                        </h3>

                        <p className="body-sm line-clamp-1">
                          {r.excerpt}
                        </p>
                      </div>

                      <ArrowLeft
                        className="mt-3 h-4 w-4 shrink-0 text-text-muted transition-transform group-hover:-translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
