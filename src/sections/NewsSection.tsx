import { ArrowLeft, PlayCircle } from "lucide-react";
import { newsArticles } from "@/data/news";
import { SectionHeader } from "@/components/SectionHeader";
import { NewsCard } from "@/components/NewsCard";
import { LinkButton } from "@/components/Button";
import { SafeImage } from "@/components/SafeImage";

export function NewsSection() {
  return (
    <section className="section-py">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow="ابقَ على اطّلاع" title="آخر المستجدات" description="أحدث الأخبار والفعاليات المرتبطة بمبادرات الحج." />
          <LinkButton href="/news" variant="secondary" icon={<ArrowLeft className="h-4 w-4 rtl:rotate-180" />} className="shrink-0">
            جميع المستجدات
          </LinkButton>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-md border border-border shadow-sm lg:col-span-1">
            <div className="relative h-48 w-full md:h-full">
              <SafeImage src="/images/hero-default.jpg" alt="فيديو تعريفي عن المبادرات" fill className="object-cover" />
              <button className="absolute inset-0 flex items-center justify-center bg-primary-dark/30 transition-colors hover:bg-primary-dark/40" aria-label="تشغيل الفيديو التعريفي">
                <PlayCircle className="h-14 w-14 text-white" aria-hidden="true" />
              </button>
              <span className="absolute bottom-4 right-4 text-sm font-semibold text-white">شاهد الفيديو التعريفي</span>
            </div>
          </div>
          {newsArticles.slice(0, 2).map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
