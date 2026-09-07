import { cn } from "@/lib/utils";

export function ChartCard({ title, action, children, className }: { title: string; action?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-border bg-white p-5 shadow-sm md:p-6", className)}>
      <div className="mb-4 flex items-center justify-between gap-2">
        <h3 className="h4 text-text">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}
