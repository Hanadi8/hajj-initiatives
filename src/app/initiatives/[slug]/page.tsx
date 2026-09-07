import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Target, CheckCircle2, Images, Handshake, ListChecks } from "lucide-react";
import { initiatives, getInitiativeBySlug, getRelatedInitiatives } from "@/data/initiatives";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SafeImage } from "@/components/SafeImage";
import { Badge } from "@/components/Badge";
import { KpiCard } from "@/components/KpiCard";
import { InitiativeCard } from "@/components/InitiativeCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ReportTableView } from "@/components/ReportTableView";
import { GrowthStatCard } from "@/components/GrowthStatCard";
import { PhotoLibrary } from "@/components/PhotoLibrary";
import { pickInitiativeIcon } from "@/lib/initiative-visuals";

export function generateStaticParams() {
  return initiatives.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const initiative = getInitiativeBySlug(params.slug);
  if (!initiative) return {};
  return {
    title: initiative.title,
    description: initiative.shortDescription,
    openGraph: { title: initiative.title, description: initiative.shortDescription },
  };
}

export default function InitiativeDetailsPage({ params }: { params: { slug: string } }) {
  const initiative = getInitiativeBySlug(params.slug);
  if (!initiative) notFound();

  const breadcrumb = <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "المبادرات", href: "/initiatives" }, { label: initiative.title }]} />;

  // -------- مبادرة 8: مكتبة الصور — Layout مستقل بالكامل، لا يشبه أي مبادرة أخرى --------
  if (initiative.displayType === "gallery") {
    return (
      <div>
        <div className="container-page pt-8">{breadcrumb}</div>
        <section className="bg-primary-dark py-12 text-white md:py-16">
          <div className="container-page">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-white/50 text-accent-light">
              <Images className="h-6 w-6" aria-hidden="true" />
            </span>
            <h1 className="h1 mb-3 max-w-2xl text-white">{initiative.title}</h1>
            {/* <p className="body-lg max-w-2xl text-white/70">{initiative.shortDescription}</p> */}
          </div>
        </section>
        <section className="container-page py-12">
          <PhotoLibrary photos={initiative.photos ?? []} />
        </section>
      </div>
    );
  }

  // -------- بقية الأنواع: distribution / reception / compact-reception / support-goals / hospitality / training --------
  const related = getRelatedInitiatives(initiative);
  const number = String(initiative.id).padStart(2, "0");
  const Icon = pickInitiativeIcon(initiative);
  const extraImages = initiative.images.slice(1);

  return (
    <div>
      <div className="container-page pt-8">{breadcrumb}</div>

      {/* Hero */}
      <section className="container-page grid grid-cols-1 items-center gap-8 pb-10 md:grid-cols-2 md:gap-12">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold text-primary">المبادرة {number}</span>
          </div>
          <div className="mb-3 flex flex-wrap gap-2">
            <Badge tone="muted">{initiative.category}</Badge>
            {initiative.status && <Badge tone="muted">{initiative.status}</Badge>}
            <Badge tone="muted">{initiative.year}</Badge>
          </div>
          <h1 className="h1 mb-4">{initiative.title}</h1>
          <p className="body-lg">{initiative.shortDescription}</p>
        </div>
        <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
          <SafeImage src={initiative.images[0] ?? ""} alt={initiative.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        </div>
      </section>

      {/* KPI strip */}
      {initiative.stats && initiative.stats.length > 0 && (
        <div className="container-page mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {initiative.stats.map((s) => (
            <KpiCard key={s.label} stat={s} />
          ))}
        </div>
      )}

      {/* نبذة */}
      <section className="container-page scroll-mt-32 py-8">
        <SectionHeader eyebrow="نبذة" title="عن المبادرة" />
        <p className="body-lg mt-6 max-w-3xl">{initiative.description}</p>
      </section>

      {/* الأهداف */}
      {initiative.goals && initiative.goals.length > 0 && (
        <section className="scroll-mt-32 bg-offwhite/50 py-12">
          <div className="container-page">
            <SectionHeader eyebrow="ماذا نريد تحقيقه" title="أهداف المبادرة" />
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {initiative.goals.map((goal) => (
                <div key={goal.title} className="rounded-lg border border-border bg-white p-5 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Target className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="h4 mb-2">{goal.title}</h3>
                  <p className="body-sm">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* النمو (قبل/بعد) */}
      {initiative.growth && initiative.growth.length > 0 && (
        <section className="scroll-mt-32 py-12">
          <div className="container-page">
            <SectionHeader eyebrow="مؤشر النمو" title="التطور مقارنة بالموسم السابق" />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {initiative.growth.map((g, i) => (
                <GrowthStatCard key={i} growth={g} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* النتائج */}
      {initiative.results && initiative.results.length > 0 && (
        <section className="scroll-mt-32 bg-offwhite/50 py-12">
          <div className="container-page">
            <SectionHeader eyebrow="ماذا حققنا" title="النتائج" />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {initiative.results.map((r) => (
                <div key={r.label} className="flex items-center gap-3 rounded-lg border border-border bg-white p-5">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary-soft" aria-hidden="true" />
                  <div>
                    <p className="text-lg font-bold text-primary">{r.value}</p>
                    <p className="body-sm">{r.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* الخدمات المقدَّمة */}
      {initiative.servicesList && initiative.servicesList.length > 0 && (
        <section className="scroll-mt-32 bg-offwhite/50 py-12">
          <div className="container-page">
            <SectionHeader eyebrow="ماذا تقدّم المراكز" title="الخدمات المقدَّمة" />
            <div className="mt-8 flex flex-wrap gap-3">
              {initiative.servicesList.map((service) => (
                <span key={service} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-text">
                  <ListChecks className="h-4 w-4 text-primary-soft" aria-hidden="true" />
                  {service}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

{/* الجهات الشريكة */}
{initiative.partnersList && initiative.partnersList.length > 0 && (
  <section className="scroll-mt-32 py-12">
    <div className="container-page">
      <SectionHeader
        eyebrow="بالتعاون مع"
        title="المراكز والجهات الشريكة"
      />

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {initiative.partnersList.map((partner, index) => (
          <div
            key={partner}
            className="flex h-32 items-center justify-center rounded-xl border border-border bg-white p-5"
          >
            <img
              src={partner}
              alt={`الجهة الشريكة ${index + 1}`}
              className="max-h-24 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
)}

      {/* جداول التقارير */}
      {initiative.reportTables && initiative.reportTables.length > 0 && (
        <section className="scroll-mt-32 py-12">
          <div className="container-page space-y-8">
            <SectionHeader eyebrow="تقارير الأداء" title="تفاصيل التنفيذ" />
            {initiative.reportTables.map((table, i) => (
              <ReportTableView key={i} table={table} />
            ))}
          </div>
        </section>
      )}

      {/* صور إضافية */}
      {extraImages.length > 0 && (
        <section className="scroll-mt-32 bg-offwhite/50 py-12">
          <div className="container-page">
            <SectionHeader eyebrow="لحظات موثّقة" title="صور من المبادرة" />
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {extraImages.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-md">
                  <SafeImage src={img} alt={`${initiative.title} — صورة ${i + 1}`} fill sizes="220px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* مبادرات ذات صلة */}
      {related.length > 0 && (
        <section className="py-14">
          <div className="container-page">
            <SectionHeader eyebrow="استكشف المزيد" title="مبادرات ذات صلة" />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <InitiativeCard key={r.id} initiative={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
