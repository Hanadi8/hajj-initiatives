
import { NavLink, SocialLink } from "@/types";

export const siteData = {
  siteName: "مبادرات الحج",
  ministryName: "فرع وزارة الموارد البشرية والتنمية الاجتماعية",
  ministryNameShort: "فرع وزارة الموارد البشرية والتنمية الاجتماعية",
  siteDescription:
    "منصة رقمية تستعرض مبادرات فرع وزارة الموارد البشرية والتنمية الاجتماعية المرتبطة بموسم الحج، أهدافها، مراحلها، وأثرها في تمكين الإنسان وخدمة ضيوف الرحمن.",

  heroEyebrow: "مبادرات الحـج",
  heroTitle: "مبادرات نوعية لتمكين الإنسان وخدمة ضيوف الرحمن",
  heroDescription:
    "استعرض أبرز مبادرات فرع وزارة الموارد البشرية والتنمية الاجتماعية الهادفة إلى رفع جودة الخدمات وتمكين الكوادر وتعزيز تجربة ضيوف الرحمن.",
  heroImage: "/images/homePage.jpg",
  heroPrimaryCta: { label: "استكشف المبادرات", href: "/initiatives" },
  heroSecondaryCta: { label: "تعرّف على الأثر", href: "/impact" },

  phone: "19911",
  email: "info@hrsd.gov.sa",
  twitter: "@hrsd_sa",
  address: "المملكة العربية السعودية، المدينة المنورة 12311",

  ctaTitle: "تعرّف على أثر المبادرات في تمكين الإنسان وخدمة ضيوف الرحمن",
  ctaButton: { label: "استكشف الأثر", href: "/impact" },
} as const;

export const mainNav: NavLink[] = [
  { label: "الرئيسية", href: "/" },
  { label: "المبادرات", href: "/initiatives" },
  { label: "الأثر والنتائج", href: "/impact" },
  { label: "الإحصائيات", href: "/statistics" },
  // { label: "المستجدات", href: "/news" },
  { label: "عن المبادرات", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
];

export const footerLinks: { title: string; links: NavLink[] }[] = [
  {
    title: "عن الوزارة",
    links: [
      { label: "عن المبادرات", href: "/about" },
      { label: "الأثر والنتائج", href: "/impact" },
      { label: "الإحصائيات", href: "/statistics" },
    ],
  },
  {
    title: "روابط مهمة",
    links: [
      { label: "المبادرات", href: "/initiatives" },
      // { label: "المستجدات", href: "/news" },
      { label: "معرض الصور", href: "/gallery" },
    ],
  },
  {
    title: "تواصل معنا",
    links: [
      { label: "نموذج التواصل", href: "/contact" },
      { label: "الأسئلة الشائعة", href: "/contact" },
      { label: "البحث في الموقع", href: "/search" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "سياسة الخصوصية", href: "#" },
  { label: "شروط الاستخدام", href: "#" },
  { label: "إمكانية الوصول", href: "#" },
];

export const socialLinks: SocialLink[] = [
  { label: "تويتر (X)", href: "https://x.com/hrsd_sa?s=11&t=Kgkt0FxFIKogYp8Jf-xUkg", icon: "twitter" },
  { label: "انستغرام", href: "#", icon: "instagram" },
  { label: "يوتيوب", href: "#", icon: "youtube" },
  { label: "لينكدإن", href: "https://www.linkedin.com/company/ministry-of-human-resources-and-social-development-ksa/", icon: "linkedin" },
];
