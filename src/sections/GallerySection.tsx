"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { SectionHeader } from "@/components/SectionHeader";
import { SafeImage } from "@/components/SafeImage";
import { LinkButton } from "@/components/Button";
import { Lightbox } from "@/components/Lightbox";

export function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = galleryItems.slice(0, 6);

  return (
    <section className="section-py bg-offwhite/50">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow="لحظات موثّقة" title="معرض الصور" description="لقطات من الميدان تعكس جهود فرق المبادرات في خدمة ضيوف الرحمن." />
          <LinkButton href="/gallery" variant="secondary" icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />} className="shrink-0">
            عرض جميع الصور
          </LinkButton>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-md"
              aria-label={`عرض صورة: ${item.title}`}
            >
              <SafeImage src={item.image} alt={item.title} fill sizes="200px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 bg-primary-dark/0 transition-colors group-hover:bg-primary-dark/25" />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox items={items} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
      )}
    </section>
  );
}
