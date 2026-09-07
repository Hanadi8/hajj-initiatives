import { ArrowLeft, ArrowRight } from "lucide-react";
import { getFeaturedInitiative } from "@/data/initiatives";
import { SafeImage } from "@/components/SafeImage";
import { Badge } from "@/components/Badge";
import { StatCard } from "@/components/KpiCard";
import { LinkButton } from "@/components/Button";

export function FeaturedInitiative() {
  const initiative = getFeaturedInitiative();
  return (
    <section className="section-py">
      <div className="container-page grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative order-2 h-72 overflow-hidden rounded-lg md:order-1 md:h-[420px]">
          <SafeImage src={initiative.images[0] ?? ""} alt={initiative.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <Badge tone="accent" className="mb-4">مبادرة مميزة</Badge>
          <h2 className="h2 mb-4 text-text">{initiative.title}</h2>
          <p className="body-lg mb-6">{initiative.shortDescription}</p>
          {initiative.stats && initiative.stats.length > 0 && (
            <div className="mb-8 grid grid-cols-3 gap-3">
              {initiative.stats.slice(0, 3).map((s) => (
                <StatCard key={s.label} stat={s} />
              ))}
            </div>
          )}
          <LinkButton href={`/initiatives/${initiative.slug}`} icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />}>
            عرض تفاصيل المبادرة
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
