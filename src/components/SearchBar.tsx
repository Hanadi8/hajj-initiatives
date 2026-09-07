"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function SearchBar({
  value,
  onChange,
  placeholder = "ابحث...",
  size = "md",
  className,
  ariaLabel,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  size?: "md" | "lg";
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <Search className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel || placeholder}
        className={cn(
          "w-full rounded-md border border-border bg-white pl-4 pr-11 text-text placeholder:text-text-muted focus:border-primary focus:outline-none",
          size === "lg" ? "h-14 text-lg" : "h-11 text-sm"
        )}
      />
    </div>
  );
}
