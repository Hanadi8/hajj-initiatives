import { PlayCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { siteData } from "@/data/site";
import { LinkButton } from "@/components/Button";
import { SafeImage } from "@/components/SafeImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-dark text-white">
      <div className="absolute inset-0">
        <SafeImage
          src={siteData.heroImage}
          alt="ضيوف الرحمن حول الكعبة المشرفة"
          fill
          priority
          label="صورة الحج الرئيسية"
          className="object-cover opacity-45"
          containerClassName="bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-primary-dark/30" />
      </div>

      <div className="container-page relative py-20 md:py-32">
        <p className="caption mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-bold text-accent-light animate-fadeUp">
          {siteData.heroEyebrow}
        </p>
        <h1 className="h-display max-w-3xl text-white animate-fadeUp [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
          {siteData.heroTitle}
        </h1>
        <p className="body-lg mt-6 max-w-xl text-white/30 animate-fadeUp [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          {siteData.heroDescription}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4 animate-fadeUp [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
          <LinkButton href={siteData.heroPrimaryCta.href} icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />} className="bg-white/50 text-accent-light hover:bg-white/60">
            {siteData.heroPrimaryCta.label}
          </LinkButton>
          <LinkButton href={siteData.heroSecondaryCta.href} variant="text" icon={<PlayCircle className="h-5 w-5" />} className="text-white hover:text-accent-light">
            {siteData.heroSecondaryCta.label}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
