"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function SectionNav({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="التنقل بين أقسام المبادرة" className="sticky top-16 z-20 -mx-4 border-b border-border bg-white/95 px-4 backdrop-blur md:top-20">
      <ul className="scrollbar-none flex gap-1 overflow-x-auto py-2">
        {sections.map((s) => (
          <li key={s.id} className="shrink-0">
            <a
              href={`#${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              className={cn(
                "block rounded-md px-3.5 py-2 text-sm font-semibold transition-colors",
                active === s.id ? "bg-primary text-white" : "text-text-muted hover:bg-offwhite hover:text-text"
              )}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
