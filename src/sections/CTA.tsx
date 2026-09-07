import { ArrowLeft, ArrowRight } from "lucide-react";
import { siteData } from "@/data/site";
import { LinkButton } from "@/components/Button";

export function CTA() {
  return (
    <section className="bg-primary-dark py-16 text-center text-white">
      <div className="container-page">
        <h2 className="h2 mx-auto max-w-2xl text-white">{siteData.ctaTitle}</h2>
        <LinkButton href={siteData.ctaButton.href} icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />} className="mx-auto mt-7 bg-accent text-primary-dark hover:bg-accent-light">
          {siteData.ctaButton.label}
        </LinkButton>
      </div>
    </section>
  );
}
