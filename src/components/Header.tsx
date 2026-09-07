"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, Landmark } from "lucide-react";
import { mainNav, siteData } from "@/data/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur transition-all duration-300",
          scrolled ? "h-16 border-border shadow-sm" : "h-20 border-transparent"
        )}
      >
        <div className="container-page flex h-full items-center justify-between gap-4">
          {/* الشعار — يمين */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={siteData.ministryName}>
            <img
              src="/images/logo.svg"
              alt="شعار الجهة"
              className="h-12 w-auto object-contain"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-bold text-text">{siteData.ministryNameShort}</span>
              <span className="caption">المملكة العربية السعودية</span>
            </span>
          </Link>

          <nav aria-label="التنقل الرئيسي" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-md px-3.5 py-2 text-sm font-semibold transition-colors",
                        active ? "bg-primary/10 text-primary" : "text-text hover:bg-offwhite hover:text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>


          <div className="flex items-center gap-1">
            <Link
              href="/search"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-text hover:bg-offwhite lg:flex"
              aria-label="بحث"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </Link>

            <Link href="/search" className="flex h-10 w-10 items-center justify-center rounded-full text-text hover:bg-offwhite lg:hidden" aria-label="بحث">
              <Search className="h-5 w-5" aria-hidden="true" />
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-text hover:bg-offwhite lg:hidden"
              aria-label="فتح القائمة"
              aria-expanded={menuOpen}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </>
  );
}
