// "use client";

// import { useMemo, useState } from "react";
// import { GalleryPhoto } from "@/types";
// import { SafeImage } from "./SafeImage";
// import { EmptyState } from "./StateBlocks";
// import { cn } from "@/lib/utils";
// import { Images, X, ChevronRight, ChevronLeft } from "lucide-react";
// import { useEffect, useCallback } from "react";
// import { IconButton } from "./Button";

// function PhotoLightbox({
//   photos,
//   index,
//   onClose,
//   onNavigate,
// }: {
//   photos: GalleryPhoto[];
//   index: number;
//   onClose: () => void;
//   onNavigate: (i: number) => void;
// }) {
//   const photo = photos[index];

//   const handleKey = useCallback(
//     (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//       if (e.key === "ArrowLeft") onNavigate((index + 1) % photos.length);
//       if (e.key === "ArrowRight") onNavigate((index - 1 + photos.length) % photos.length);
//     },
//     [index, photos.length, onClose, onNavigate]
//   );

//   useEffect(() => {
//     document.addEventListener("keydown", handleKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", handleKey);
//       document.body.style.overflow = "";
//     };
//   }, [handleKey]);

//   if (!photo) return null;

//   return (
//     <div role="dialog" aria-modal="true" aria-label={photo.caption || photo.category} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 p-4 animate-fadeIn" onClick={onClose}>
//       <IconButton icon={<X className="h-5 w-5" />} label="إغلاق" onClick={onClose} className="absolute left-4 top-4 bg-white/10 text-white hover:bg-white/20" />
//       <button aria-label="السابق" onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % photos.length); }} className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-8">
//         <ChevronRight className="h-6 w-6" />
//       </button>
//       <button aria-label="التالي" onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + photos.length) % photos.length); }} className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-8">
//         <ChevronLeft className="h-6 w-6" />
//       </button>
//       <div className="relative h-[65vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
//         <SafeImage src={photo.src} alt={photo.caption || photo.category} fill className="object-contain" containerClassName="rounded-md" />
//       </div>
//       <p className="mt-4 text-center text-white">{photo.caption || photo.category}</p>
//       <p className="caption mt-1 text-white/10">{index + 1} / {photos.length}</p>
//     </div>
//   );
// }

// export function PhotoLibrary({ photos }: { photos: GalleryPhoto[] }) {
//   const [activeCategory, setActiveCategory] = useState<string>("الكل");
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const categories = useMemo(() => ["الكل", ...Array.from(new Set(photos.map((p) => p.category)))], [photos]);
//   const filtered = useMemo(() => (activeCategory === "الكل" ? photos : photos.filter((p) => p.category === activeCategory)), [photos, activeCategory]);

//   if (photos.length === 0) {
//     return (
//       <EmptyState
//         icon={Images}
//         title="لا توجد صور بعد"
//         description=""
//       />
//     );
//   }

//   return (
//     <div>
//       {categories.length > 2 && (
//         <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="تصفية حسب التصنيف">
//           {categories.map((c) => (
//             <button
//               key={c}
//               onClick={() => setActiveCategory(c)}
//               className={cn(
//                 "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
//                 activeCategory === c ? "bg-primary text-white" : "bg-offwhite text-text-muted hover:bg-primary/10 hover:text-primary"
//               )}
//             >
//               {c}
//             </button>
//           ))}
//         </div>
//       )}

   
//       <div className="columns-2 gap-3 [column-fill:_balance] sm:columns-3 lg:columns-4">
//         {filtered.map((photo, i) => (
//           <button
//             key={photo.src + i}
//             onClick={() => setOpenIndex(i)}
//             className="group relative mb-3 block w-full overflow-hidden rounded-md break-inside-avoid"
//             aria-label={`فتح صورة: ${photo.caption || photo.category}`}
//           >
//             <SafeImage
//               src={photo.src}
//               alt={photo.caption || photo.category}
//               width={400}
//               height={300 + (i % 3) * 60}
//               className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
//               containerClassName="aspect-[4:3]"
//             />
//             <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/60 to-transparent p-3 text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//               {photo.category}
//             </span>
//           </button>
//         ))}
//       </div>

//       {openIndex !== null && (
//         <PhotoLightbox photos={filtered} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
//       )}
//     </div>
//   );
// }
//22323
"use client";

import { useMemo, useState } from "react";
import { GalleryPhoto } from "@/types";
import { SafeImage } from "./SafeImage";
import { EmptyState } from "./StateBlocks";
import { cn } from "@/lib/utils";
import { Images, X, ChevronRight, ChevronLeft } from "lucide-react";
import { useEffect, useCallback } from "react";
import { IconButton } from "./Button";

function PhotoLightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const photo = photos[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((index + 1) % photos.length);
      if (e.key === "ArrowRight") onNavigate((index - 1 + photos.length) % photos.length);
    },
    [index, photos.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!photo) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label={photo.caption || photo.category} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 p-4 animate-fadeIn" onClick={onClose}>
      <IconButton icon={<X className="h-5 w-5" />} label="إغلاق" onClick={onClose} className="absolute left-4 top-4 bg-white/10 text-white hover:bg-white/20" />
      <button aria-label="السابق" onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % photos.length); }} className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-8">
        <ChevronRight className="h-6 w-6" />
      </button>
      <button aria-label="التالي" onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + photos.length) % photos.length); }} className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-8">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <div className="relative h-[65vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <SafeImage src={photo.src} alt={photo.caption || photo.category} fill className="object-contain" containerClassName="rounded-md" />
      </div>
      <p className="mt-4 text-center text-white">{photo.caption || photo.category}</p>
      <p className="caption mt-1 text-white/10">{index + 1} / {photos.length}</p>
    </div>
  );
}

export function PhotoLibrary({ photos }: { photos: GalleryPhoto[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("الكل");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = useMemo(() => ["الكل", ...Array.from(new Set(photos.map((p) => p.category)))], [photos]);
  const filtered = useMemo(() => (activeCategory === "الكل" ? photos : photos.filter((p) => p.category === activeCategory)), [photos, activeCategory]);

  if (photos.length === 0) {
    return (
      <EmptyState
        icon={Images}
        title="لا توجد صور بعد"
        description=""
      />
    );
  }

  return (
    <div>
      {categories.length > 2 && (
        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="تصفية حسب التصنيف">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
                activeCategory === c ? "bg-primary text-white" : "bg-offwhite text-text-muted hover:bg-primary/10 hover:text-primary"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {/* شبكة صور بحجم واحد - استخدام Grid بدلاً من Columns */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((photo, i) => (
          <button
            key={photo.src + i}
            onClick={() => setOpenIndex(i)}
            className="group relative block w-full overflow-hidden rounded-md aspect-[4/3]"
            aria-label={`فتح صورة: ${photo.caption || photo.category}`}
          >
            <SafeImage
              src={photo.src}
              alt={photo.caption || photo.category}
              width={400}
              height={300}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              containerClassName="w-full h-full"
            />
            <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/60 to-transparent p-3 text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {photo.category}
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <PhotoLightbox photos={filtered} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
      )}
    </div>
  );
}