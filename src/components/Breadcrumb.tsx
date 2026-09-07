import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="مسار التصفح" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-text" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
