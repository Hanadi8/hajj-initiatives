import { Layers, PlaneLanding, HeartPulse, Baby } from "lucide-react";
import { dashboardData } from "@/data/statistics";
import { KpiCard } from "@/components/KpiCard";

const icons = [Layers, PlaneLanding, HeartPulse, Baby];

export function KpiStrip() {
  return (
    <section className="border-b border-border bg-white">
      <div className="container-page -mt-14 relative z-10 pb-4 md:-mt-16">
        <div className="grid grid-cols-2 gap-4 rounded-lg bg-white p-4 shadow-lg md:grid-cols-4 md:gap-5 md:p-6">
          {dashboardData.overview.map((stat, i) => (
            <KpiCard key={stat.label} stat={stat} icon={icons[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
