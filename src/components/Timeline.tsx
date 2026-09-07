import { Check } from "lucide-react";
import { Milestone } from "@/types";
import { cn } from "@/lib/utils";

export function Timeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <ol className="relative flex flex-col gap-8 md:flex-row md:gap-4">
      <div className="absolute right-[15px] top-2 bottom-2 w-px bg-border md:right-0 md:left-0 md:top-[15px] md:h-px md:w-auto" aria-hidden="true" />
      {milestones.map((m, i) => {
        const isDone = m.status === "done";
        const isCurrent = m.status === "current";
        return (
          <li key={i} className="relative flex flex-1 gap-4 md:flex-col md:items-center md:gap-3 md:text-center">
            <div
              className={cn(
                "z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold",
                isDone && "border-primary bg-primary text-white",
                isCurrent && "border-primary-soft bg-white text-primary-soft ring-4 ring-primary-soft/15",
                !isDone && !isCurrent && "border-border bg-white text-text-muted"
              )}
              aria-current={isCurrent ? "step" : undefined}
            >
              {isDone ? <Check className="h-4 w-4" aria-hidden="true" /> : m.year.slice(2)}
            </div>
            <div>
              <p className="caption font-bold text-primary">{m.year}</p>
              <p className="h4 mt-0.5">{m.title}</p>
              <p className="body-sm mt-1 max-w-[220px]">{m.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
