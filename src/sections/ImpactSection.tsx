import { PlaneLanding, HeartPulse, Baby, Gift } from "lucide-react";
import { dashboardData } from "@/data/statistics";
import { SectionHeader } from "@/components/SectionHeader";
import { GrowthStatCard } from "@/components/GrowthStatCard";

const impactStats = [
  { icon: PlaneLanding, value: "8,000", label: "حاج تم استقبالهم وتقديم الهدايا لهم" },
  { icon: HeartPulse, value: "2,000", label: "مستفيد من الدعم النفسي والاجتماعي" },
  { icon: Baby, value: "409", label: "طفل تم استضافتهم بمراكز الضيافة" },
  { icon: Gift, value: "396,700", label: "وجبة موزَّعة بالمسجد النبوي والمنطقة المركزية" },
];

export function ImpactSection() {
  return (
    <section className="section-py bg-primary text-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="القياس والأثر"
          title="أثرنا في الحج"
          description="أرقام حقيقية موثّقة من التقرير الرسمي لفرع الوزارة بمنطقة المدينة المنورة — موسم حج 1447هـ."
          className="[&_h2]:text-white [&_p]:text-white/70 [&_.caption]:text-accent-light"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {impactStats.map((s) => (
            <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 p-5 text-center">
              <s.icon className="mx-auto mb-3 h-7 w-7 text-accent-light" aria-hidden="true" />
              <div className="text-2xl font-bold md:text-3xl">{s.value}</div>
              <p className="body-sm mt-1 text-white/70">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {dashboardData.growthComparisons.map((g, i) => (
            <GrowthStatCard key={i} growth={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
