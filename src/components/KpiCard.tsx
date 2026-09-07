
import { LucideIcon } from "lucide-react";
import { Statistic } from "@/types";
import { CountUp } from "./CountUp";
import { cn } from "@/lib/utils";

export function KpiCard({ stat, icon: Icon, tone = "light" }: { stat: Statistic; icon?: LucideIcon; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex h-full min-h-[152px] flex-col rounded-lg border p-5 text-center shadow-sm transition-transform hover:-translate-y-0.5 md:min-h-[168px] md:text-right",
        dark ? "border-white/10 bg-white/5" : "border-border bg-white"
      )}
    >
      {Icon && (
        <div className={cn("mx-auto mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-md md:mx-0", dark ? "bg-white/10 text-accent-light" : "bg-primary/10 text-primary")}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      )}
      <div className={cn("break-words text-2xl font-bold leading-tight sm:text-3xl md:text-4xl", dark ? "text-white" : "text-primary")}>
        <CountUp value={stat.value} displayValue={stat.displayValue} />
      </div>
      <p className={cn("body-sm mt-1.5 break-words leading-snug", dark && "text-white/70")}>{stat.label}</p>
    </div>
  );
}

export function StatCard({ stat }: { stat: Statistic }) {
  return (
    <div className="flex h-full min-h-[92px] flex-col justify-center rounded-sm bg-offwhite px-4 py-3 text-center">
      <div className="break-words text-lg font-bold leading-tight text-primary sm:text-xl">{stat.displayValue}</div>
      <p className="caption mt-1 break-words leading-snug">{stat.label}</p>
    </div>
  );
}