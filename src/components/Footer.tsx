import Link from "next/link";
import { Phone, Mail, MapPin, Twitter, Instagram, Youtube, Linkedin, Landmark } from "lucide-react";
import { footerLinks, legalLinks, siteData, socialLinks } from "@/data/site";

const iconMap = { twitter: Twitter, instagram: Instagram, youtube: Youtube, linkedin: Linkedin };

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="container-page grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-accent-light">
              <Landmark className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-bold text-white">{siteData.ministryNameShort}</span>
          </div>
          <p className="body-sm max-w-sm text-white/70">{siteData.siteDescription}</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex items-center gap-2 text-white/70">
              <Phone className="h-4 w-4 text-accent-light" aria-hidden="true" /> {siteData.phone}
            </li>
            <li className="flex items-center gap-2 text-white/70">
              <Mail className="h-4 w-4 text-accent-light" aria-hidden="true" /> {siteData.website}
            </li>
            <li className="flex items-center gap-2 text-white/70">
              <MapPin className="h-4 w-4 text-accent-light" aria-hidden="true" /> {siteData.address}
            </li>
          </ul>
        </div>

        {footerLinks.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="mb-4 text-sm font-bold text-white">{col.title}</h3>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="body-sm text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="mb-4 text-sm font-bold text-white">تابعنا</h3>
          <div className="flex gap-2">
            {socialLinks.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <a key={s.label} href={s.href} aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

<div className="border-t border-white/10">
  <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 md:flex-row">
   <p>
        © {new Date().getFullYear()} {siteData.ministryName} — جميع الحقوق محفوظة.
      </p>
    <p className="mt-1">
  Developed by: Hanadi Almukhlifi
</p>

<div className="mt-2 flex gap-2">

  <a
    href="https://www.linkedin.com/in/hanadi-almukhlif?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
  >
    <Linkedin className="h-4 w-4" aria-hidden="true" />
  </a>

  <a
    href="mailto:halmukhlifi99@gmail.com"
    aria-label="Email"
    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
  >
    <Mail className="h-4 w-4" aria-hidden="true" />
  </a>
</div>
    <ul className="flex flex-wrap items-center gap-4">
      {legalLinks.map((l) => (
        <li key={l.label}>
          <Link href={l.href} className="hover:text-white">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>
    </footer>
  );
}
