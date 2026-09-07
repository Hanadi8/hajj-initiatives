"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn("fixed inset-0 z-50 lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn("absolute inset-0 bg-black/40 transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="القائمة الرئيسية"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[82%] max-w-sm flex-col bg-white p-6 shadow-lg transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="h4">القائمة</span>
          <button ref={closeRef} onClick={onClose} aria-label="إغلاق القائمة" className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-offwhite">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="التنقل الرئيسي - جوال">
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-4 py-3 text-base font-semibold",
                    pathname === item.href ? "bg-primary/10 text-primary" : "text-text hover:bg-offwhite"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="mt-auto rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-text hover:bg-offwhite">English</button>
      </div>
    </div>
  );
}
