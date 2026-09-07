
import { TrendingUp } from "lucide-react";
import { GrowthStat } from "@/types";

export function GrowthStatCard({ growth }: { growth: GrowthStat }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-white p-5 shadow-sm sm:p-6">
      <p className="body-sm mb-5 break-words font-semibold leading-snug text-text">{growth.label}</p>

   
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
        <div className="min-w-0 text-center">
          <p className="caption mb-1 truncate">{growth.fromLabel}</p>
          <p className="break-words text-base font-bold leading-tight text-text-muted sm:text-lg md:text-xl">{growth.fromValue}</p>
        </div>

        <div className="flex flex-col items-center gap-1.5 px-1">
          <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-primary-soft/15 px-2.5 py-1 text-[11px] font-bold text-primary-soft sm:px-3 sm:text-xs">
            <TrendingUp className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {growth.percentLabel}
          </span>
          <div className="h-px w-6 bg-gradient-to-l from-primary-soft to-transparent sm:w-8" aria-hidden="true" />
        </div>

        <div className="min-w-0 text-center">
          <p className="caption mb-1 truncate">{growth.toLabel}</p>
          <p className="break-words text-base font-bold leading-tight text-primary sm:text-lg md:text-xl">{growth.toValue}</p>
        </div>
      </div>
    </div>
  );
}