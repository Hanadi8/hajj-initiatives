import type { Metadata } from "next";
import { PlaneLanding, HeartPulse, Baby, Gift, GraduationCap } from "lucide-react";
import { dashboardData } from "@/data/statistics";
import { displayableInitiatives } from "@/data/initiatives";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeader } from "@/components/SectionHeader";
import { KpiCard } from "@/components/KpiCard";
import { GrowthStatCard } from "@/components/GrowthStatCard";
import { ChartCard } from "@/components/ChartCard";
import { CountDonutChart } from "@/components/charts";
import { InitiativeCard } from "@/components/InitiativeCard";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = { title: "الأثر والنتائج" };

const impactKpis = [
  { label: "حاج تم استقبالهم وتقديم الهدايا لهم", value: 8000, displayValue: "8,000", icon: PlaneLanding },
  { label: "مستفيد من الدعم النفسي والاجتماعي", value: 2000, displayValue: "2,000", icon: HeartPulse },
  { label: "طفل تم استضافتهم بمراكز الضيافة", value: 409, displayValue: "409", icon: Baby },
  { label: "وجبة موزَّعة بالمسجد النبوي والمنطقة المركزية", value: 396700, displayValue: "396,700", icon: Gift },
  { label: "متدرب استفاد من البرامج التدريبية (مبادرتا 1 و7)", value: 893, displayValue: "893", icon: GraduationCap },
];


const stories = [
  {
    title: "أول توسّع جغرافي لمبادرة الاستقبال",
    body: "وسّع الفرع نطاق مبادرة استقبال ضيوف الرحمن لأول مرة ليشمل مطار الأمير عبدالمحسن بن عبدالعزيز الدولي بينبع، واستقبل أول رحلة عبره ضمّت 200 حاج من الجنسية الألمانية، وبُثّ الحدث مباشرة على قنوات التلفزيون السعودي.",
  },
  {
    title: "بيئة آمنة لأطفال ضيوف الرحمن",
    body: "استضافت 13 مركز ضيافة أطفال أهلي بالمدينة المنورة 409 طفل من أبناء ضيوف الرحمن، عبر 22 برنامجًا تربويًا وترفيهيًا وخدمات شملت المبيت والرعاية الشاملة والوجبات الصحية.",
  },
  {
    title: "دعم نفسي واجتماعي داخل المستشفيات",
    body: "نفّذ 76 أخصائيًا نفسيًا واجتماعيًا 16 زيارة ميدانية شملت 7 مستشفيات ومراكز طبية، واستفاد منها 2,000 حاج من ضيوف الرحمن المنومين، بزيادة 400% عن الموسم السابق.",
  },
];

export default function ImpactPage() {
  const related = displayableInitiatives.slice(0, 3);

  return (
    <div>
      <div className="container-page pt-8">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الأثر والنتائج" }]} />
      </div>

      <section className="container-page pb-12">
        <SectionHeader
          eyebrow="القياس والأثر"
          title="أثر المبادرات في تجربة ضيوف الرحمن"
          description="أرقام حقيقية موثّقة من التقرير الرسمي لفرع وزارة الموارد البشرية والتنمية الاجتماعية بمنطقة المدينة المنورة — موسم حج 1447هـ."
        />
      </section>

      <section className="container-page pb-14">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {impactKpis.map((k) => (
            <KpiCard key={k.label} stat={k} icon={k.icon} />
          ))}
        </div>
      </section>

      {/* النمو مقارنة بالموسم السابق */}
      <section className="bg-offwhite/50 py-14">
        <div className="container-page">
          <SectionHeader eyebrow="التحسّن المتحقق" title="النمو مقارنة بالموسم السابق" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {dashboardData.growthComparisons.map((g, i) => (
              <GrowthStatCard key={i} growth={g} />
            ))}
          </div>
        </div>
      </section>

      {/* قصص أثر */}
      <section className="py-14">
        <div className="container-page">
          <SectionHeader eyebrow="إنجازات بارزة" title="قصص أثر من الميدان" />
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {stories.map((s) => (
              <div key={s.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <Badge tone="primary" className="mb-3">قصة أثر</Badge>
                <h3 className="h4 mb-2">{s.title}</h3>
                <p className="body-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* التدريب والتأهيل */}
      <section className="bg-offwhite/50 py-14">
        <div className="container-page">
          <SectionHeader eyebrow="بناء القدرات" title="التدريب والتأهيل" description="عدد المتدربين حسب البرنامج التدريبي عبر مبادرتي التوزيع الخيري ولجنة الحج." />
          <ChartCard title="المتدربون حسب البرنامج" className="mt-8">
            <CountDonutChart data={dashboardData.trainingParticipation} centerLabel="إجمالي المتدربين" />
          </ChartCard>
        </div>
      </section>

      {/* مبادرات ذات صلة */}
      <section className="py-14">
        <div className="container-page">
          <SectionHeader eyebrow="استكشف المزيد" title="مبادرات ذات صلة بالأثر" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((i) => (
              <InitiativeCard key={i.id} initiative={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
