import { ArrowLeft, ArrowRight } from "lucide-react";
import { initiatives } from "@/data/initiatives";
import { SectionHeader } from "@/components/SectionHeader";
import { InitiativeCard } from "@/components/InitiativeCard";
import { LinkButton } from "@/components/Button";

export function InitiativesSection() {
  return (
    <section className="section-py bg-offwhite/50">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="7 مبادرات"
            title="مبادرات موسم الحج"
            description="مبادرات فرع وزارة الموارد البشرية والتنمية الاجتماعية بمنطقة المدينة المنورة لخدمة ضيوف الرحمن — موسم حج 1447هـ."
          />
          <LinkButton href="/initiatives" variant="secondary" icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />} className="shrink-0">
            جميع المبادرات
          </LinkButton>
        </div>

      
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((initiative) => (
            <InitiativeCard key={initiative.id} initiative={initiative} />
          ))}
        </div>
      </div>
    </section>
  );
}
