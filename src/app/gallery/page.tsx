"use client";

import { useMemo, useState } from "react";
import { galleryItems } from "@/data/gallery";
import { initiatives } from "@/data/initiatives";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Select } from "@/components/FormControls";
import { SafeImage } from "@/components/SafeImage";
import { Lightbox } from "@/components/Lightbox";
import { EmptyState } from "@/components/StateBlocks";

const categories = ["الكل", ...Array.from(new Set(galleryItems.map((g) => g.category)))];

export default function GalleryPage() {
  const [category, setCategory] = useState("الكل");
  const [initiativeId, setInitiativeId] = useState("الكل");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      galleryItems.filter((g) => {
        const matchesCategory = category === "الكل" || g.category === category;
        const matchesInitiative = initiativeId === "الكل" || g.initiativeId === Number(initiativeId);
        return matchesCategory && matchesInitiative;
      }),
    [category, initiativeId]
  );

  return (
    <div className="container-page section-py">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "معرض الصور" }]} />

      <header className="max-w-2xl">
        <h1 className="h1">معرض الصور</h1>
        <p className="body-lg mt-3">لقطات موثّقة من الميدان تعكس جهود فرق المبادرات في خدمة ضيوف الرحمن.</p>
      </header>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-md sm:grid-cols-2">
        <Select aria-label="المبادرة" value={initiativeId} onChange={(e) => setInitiativeId(e.target.value)}>
          <option value="الكل">المبادرة: الكل</option>
          {initiatives.map((i) => (
            <option key={i.id} value={i.id}>{i.title}</option>
          ))}
        </Select>
        <Select aria-label="التصنيف" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>{c === "الكل" ? "التصنيف: الكل" : c}</option>
          ))}
        </Select>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState title="لا توجد صور" description="لا توجد صور مطابقة للفلاتر المحددة حاليًا." />
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item, i) => (
            <button key={item.id} onClick={() => setOpenIndex(i)} className="group relative aspect-square overflow-hidden rounded-md" aria-label={`عرض صورة: ${item.title}`}>
              <SafeImage src={item.image} alt={item.title} fill sizes="260px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2.5 text-right text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      )}

      {openIndex !== null && (
        <Lightbox items={filtered} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
      )}
    </div>
  );
}
