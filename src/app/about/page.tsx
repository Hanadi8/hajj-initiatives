import type { Metadata } from "next";
import { Compass, Target, Users, TrendingUp } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";
import { initiatives } from "@/data/initiatives";

export const metadata: Metadata = { title: "عن المبادرات" };

const pillars = [
  { icon: Compass, title: "الرؤية", body: "منظومة متكاملة من المبادرات تضع الإنسان في مركز الاهتمام، وتسهم في تحقيق مستهدفات رؤية المملكة 2030 لخدمة ضيوف الرحمن." },
  { icon: Target, title: "الأهداف", body: "تمكين الكوادر، رفع جودة الخدمات الميدانية، وتعزيز تجربة الحاج من خلال حلول تشغيلية ورقمية مبتكرة." },
  { icon: Users, title: "الفئات المستفيدة", body: "الحجاج والمعتمرون، المتطوعون، والكوادر الميدانية العاملة في القطاعات ذات العلاقة بموسم الحج." },
  { icon: TrendingUp, title: "الأثر", body: "تحسين ملموس في مؤشرات الرضا وكفاءة التشغيل، وتوسع مستمر في نطاق التغطية والشراكات." },
];
//لازم ارجع لها واعدل حسب المطلوب
const overallMilestones = [
  {
    year: "نوفمبر 2025",
    title: "الاستعداد",
    description: "بدء الاستعداد والتنسيق للمشاركة في موسم حج 1447هـ.",
    status: "done" as const,
  },
  {
    year: "يناير 2026",
    title: "التخطيط",
    description: "إعداد الخطط التشغيلية واعتماد متطلبات المشاركة.",
    status: "done" as const,
  },
  {
    year: "فبراير 2026",
    title: "المخاطبات",
    description: "مخاطبة الجهات ذات العلاقة ومتابعة الطلبات والتنسيق.",
    status: "done" as const,
  },
  {
    year: "أبريل 2026",
    title: "الاجتماعات",
    description: "عقد الاجتماعات التنسيقية مع الجهات المشاركة.",
    status: "done" as const,
  },
  {
    year: "مايو 2026",
    title: "التدريب والاستعداد",
    description: "استكمال التدريب والتجهيز للمشاركة في موسم الحج.",
    status: "done" as const,
  },
  {
    year: "مايو 2026",
    title: "التنفيذ",
    description: "تنفيذ المبادرات ومتابعة الأعمال الميدانية خلال موسم حج 1447هـ.",
    status: "done" as const,
  },
];


export default function AboutPage() {
  return (
    <div>
      <div className="container-page pt-8">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "عن المبادرات" }]} />
      </div>

      <section className="container-page pb-14">
        <SectionHeader
          eyebrow="لماذا أُطلقت المبادرات؟"
          title="عن المبادرات"
          description="أطلقت وزارة الموارد البشرية والتنمية الاجتماعية حزمة من المبادرات النوعية استجابةً لاحتياج فعلي في تمكين الكوادر ورفع جودة الخدمات المقدمة لضيوف الرحمن، بما يواكب مستهدفات رؤية المملكة 2030 في تطوير قطاع الحج والعمرة."
        />
      </section>

      <section className="bg-offwhite/50 py-14">
        <div className="container-page grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="h4 mb-2">{p.title}</h3>
              <p className="body-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="container-page">
          <SectionHeader eyebrow="خارطة الطريق العامة" title="مسيرة المبادرات" />
          <div className="mt-10">
            <Timeline milestones={overallMilestones} />
          </div>
        </div>
      </section>

      <section className="bg-offwhite/50 py-14">
        <div className="container-page">
          <SectionHeader eyebrow="نظرة سريعة" title="المبادرات السبعة" />

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {initiatives.filter((i) => i.id !== 8).map((i) => (
              <li
                key={i.id}
                className="flex items-center gap-3 rounded-md border border-border bg-white px-4 py-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
                  {String(i.id).padStart(2, "0")}
                </span>

                <span className="body-sm font-semibold text-text">
                  {i.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
