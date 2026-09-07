import type { Metadata } from "next";
import { Layers, PlaneLanding, HeartPulse, Baby } from "lucide-react";
import { dashboardData } from "@/data/statistics";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeader } from "@/components/SectionHeader";
import { KpiCard } from "@/components/KpiCard";
import { ChartCard } from "@/components/ChartCard";
import { Tabs } from "@/components/Tabs";
import { GrowthStatCard } from "@/components/GrowthStatCard";
import { CategoryHorizontalBarChart, CountDonutChart } from "@/components/charts";

export const metadata: Metadata = { title: "الإحصائيات" };

const icons = [Layers, PlaneLanding, HeartPulse, Baby];

export default function StatisticsPage() {
  return (
    <div>
      <div className="container-page pt-8">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الإحصائيات" }]} />
      </div>

      <section className="container-page pb-8">
        <SectionHeader
          eyebrow="أرقام موسم حج 1447هـ"
          title="الإحصائيات والأداء"
          description="جميع الأرقام في هذه الصفحة منقولة حرفيًا من التقرير الرسمي لفرع وزارة الموارد البشرية والتنمية الاجتماعية بمنطقة المدينة المنورة."
        />
      </section>

      {/* Top KPIs */}
      <section className="container-page pb-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {dashboardData.overview.map((s, i) => (
            <KpiCard key={s.label} stat={s} icon={icons[i]} />
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="container-page pb-16">
        <Tabs
          tabs={[
            {
              label: "نظرة عامة",
              content: (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <ChartCard title="عدد المستفيدين حسب المبادرة">
                    <CategoryHorizontalBarChart data={dashboardData.beneficiariesByInitiative} valueLabel="مستفيد" />
                  </ChartCard>
                  <ChartCard title="المتدربون حسب البرنامج التدريبي">
                    <CountDonutChart data={dashboardData.trainingParticipation} centerLabel="إجمالي المتدربين" />
                  </ChartCard>
                  <ChartCard title="عدد الحجاج حسب كل زيارة استقبال" className="lg:col-span-2">
                    <CategoryHorizontalBarChart data={dashboardData.receptionVisits} valueLabel="حاج" />
                  </ChartCard>
                </div>
              ),
            },
            {
              label: "المستفيدون حسب المبادرة",
              content: (
                <ChartCard title="عدد المستفيدين حسب المبادرة">
                  <CategoryHorizontalBarChart data={dashboardData.beneficiariesByInitiative} valueLabel="مستفيد" />
                </ChartCard>
              ),
            },
            {
              label: "زيارات الاستقبال",
              content: (
                <ChartCard title="عدد الحجاج حسب كل زيارة من زيارات الاستقبال الثماني">
                  <CategoryHorizontalBarChart data={dashboardData.receptionVisits} valueLabel="حاج" />
                </ChartCard>
              ),
            },
            {
              label: "النمو مقارنة بالموسم السابق",
              content: (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {dashboardData.growthComparisons.map((g, i) => (
                    <GrowthStatCard key={i} growth={g} />
                  ))}
                </div>
              ),
            },
          ]}
        />
      </section>
    </div>
  );
}
