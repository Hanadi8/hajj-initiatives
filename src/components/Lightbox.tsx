"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { SafeImage } from "./SafeImage";
import { GalleryItem } from "@/types";
import { IconButton } from "./Button";

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const item = items[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowRight") onNavigate((index - 1 + items.length) % items.length);
    },
    [index, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <IconButton icon={<X className="h-5 w-5" />} label="إغلاق" onClick={onClose} className="absolute left-4 top-4 bg-white/10 text-white hover:bg-white/20" />

      <button
        aria-label="السابق"
        onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % items.length); }}
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <button
        aria-label="التالي"
        onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + items.length) % items.length); }}
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-8"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div className="relative h-[60vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <SafeImage src={item.image} alt={item.title} fill className="object-contain" containerClassName="rounded-md" />
      </div>
      <p className="mt-4 text-center text-white">{item.title}</p>
    </div>
  );
}
