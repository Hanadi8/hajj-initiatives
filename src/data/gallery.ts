// ==========================================================================
// PLACEHOLDER DATA — REPLACE WITH OFFICIAL CONTENT
// ==========================================================================
import { GalleryItem } from "@/types";

const categories = ["المبادرات", "التطوع", "الميدان", "التدريب", "الفعاليات", "الشراكات"];
const titles = [
  "صورة من فعاليات المبادرات",
  "متطوعون في خدمة ضيوف الرحمن",
  "العمل الميداني خلال موسم الحج",
  "جلسة تدريبية للكوادر",
  "فعالية إطلاق إحدى المبادرات",
  "لقاء تنسيقي مع الجهات الشريكة",
];

export const galleryItems: GalleryItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  image: `/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  title: titles[i],
  category: categories[i],
  initiativeId: (i % 8) + 1,
}));
