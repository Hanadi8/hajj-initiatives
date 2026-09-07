"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Tabs({ tabs, defaultTab = 0 }: { tabs: { label: string; content: React.ReactNode }[]; defaultTab?: number }) {
  const [active, setActive] = useState(defaultTab);
  return (
    <div>
      <div role="tablist" aria-label="طرق العرض" className="mb-6 flex flex-wrap gap-2 border-b border-border">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={cn(
              "relative px-4 py-2.5 text-sm font-semibold transition-colors",
              active === i ? "text-primary" : "text-text-muted hover:text-text"
            )}
          >
            {tab.label}
            {active === i && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary" />}
          </button>
        ))}
      </div>
      <div role="tabpanel">{tabs[active]?.content}</div>
    </div>
  );
}
