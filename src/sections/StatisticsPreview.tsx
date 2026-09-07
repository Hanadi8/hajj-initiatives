import { ArrowLeft, ArrowRight } from "lucide-react";
import { dashboardData } from "@/data/statistics";
import { SectionHeader } from "@/components/SectionHeader";
import { ChartCard } from "@/components/ChartCard";
import { CategoryHorizontalBarChart, CountDonutChart } from "@/components/charts";
import { StatCard } from "@/components/KpiCard";
import { LinkButton } from "@/components/Button";

export function StatisticsPreview() {
  return (
    <section className="section-py">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="لوحة البيانات"
            title="الإحصائيات والأداء"
            description="أرقام موسم حج 1447هـ كما وردت في التقرير الرسمي لفرع الوزارة بمنطقة المدينة المنورة."
          />
          <LinkButton href="/statistics" variant="secondary" icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />} className="shrink-0">
            عرض جميع الإحصائيات
          </LinkButton>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {dashboardData.overview.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="عدد المستفيدين حسب المبادرة">
            <CategoryHorizontalBarChart data={dashboardData.beneficiariesByInitiative} valueLabel="مستفيد" />
          </ChartCard>
          <ChartCard title="المتدربون حسب البرنامج التدريبي">
            <CountDonutChart data={dashboardData.trainingParticipation} centerLabel="إجمالي المتدربين" />
          </ChartCard>
        </div>
      </div>
    </section>
  );
}
