import type { Metadata } from "next";
// @ts-expect-error Next.js handles CSS side-effect imports at build time.
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${siteData.siteName} | ${siteData.ministryName}`,
    template: `%s | ${siteData.siteName}`,
  },
  description: siteData.siteDescription,
  openGraph: {
    title: `${siteData.siteName} | ${siteData.ministryName}`,
    description: siteData.siteDescription,
    locale: "ar_SA",
    type: "website",
  },
    icons: {
    icon: "/images/logo.svg",}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          تخطَّ إلى المحتوى الرئيسي
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
