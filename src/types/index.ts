// ==========================================================================
// أنواع البيانات (Data Models) — يستخدمها src/data/* وجميع المكونات
// ==========================================================================

export interface Statistic {
  label: string;
  value: number;
  displayValue: string;
}

export interface ChartPoint {
  label: string;
  value: number;
}

export interface YearPoint {
  year: string;
  value: number;
}

export interface NamedValue {
  name: string;
  value: number;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  status?: "done" | "current" | "upcoming";
}

export interface ResultItem {
  label: string;
  value: string;
}

export interface Goal {
  icon?: string;
  title: string;
  description: string;
}

/**
 * displayType يحدد Layout/تصميم بطاقة المبادرة وصفحة تفاصيلها.
 * كل نوع له مكوّنات عرض مختلفة — راجع src/components/initiative-layouts/*
 */
export type InitiativeDisplayType =
  | "distribution"       // مبادرة 1: توزيع خيري — إحصائيات وجداول توزيع
  | "reception"           // مبادرة 2: استقبال بمطار رئيسي — جدول زيارات موسّع
  | "compact-reception"   // مبادرات 3 و4: نقاط استقبال أصغر — بطاقة مختصرة
  | "support-goals"       // مبادرة 5: دعم نفسي — أهداف + جدول زيارات + نمو
  | "hospitality"         // مبادرة 6: ضيافة الأطفال — مراكز شريكة + خدمات + إحصائيات
  | "training"            // مبادرة 7: برامج تدريبية — جدول برامج + إحصائيات
  | "gallery";            // مبادرة 8: مكتبة صور كاملة

export interface ReportTableRow {
  [column: string]: string | number;
}

export interface ReportTable {
  title: string;
  columns: string[];
  rows: ReportTableRow[];
}

export interface GrowthStat {
  label: string;
  fromLabel: string;
  fromValue: string;
  toLabel: string;
  toValue: string;
  percentLabel: string;
}

export interface GalleryPhoto {
  src: string;
  category: string;
  caption?: string;
}

export interface Initiative {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  /** مسارات الصور — استبدلها بالصور الفعلية داخل public/images/initiatives/ */
  images: string[];
  year: string;
  category: string;
  field?: string;
  status?: "مكتملة" | "قيد التنفيذ" | "قادمة" | "بيانات قيد الإضافة";
  featured: boolean;
  displayType: InitiativeDisplayType;
  /** true إذا لم تتوفر بعد بيانات حقيقية موثّقة لهذه المبادرة */
  pending?: boolean;
  stats?: Statistic[];
  goals?: Goal[];
  beneficiaries?: string;
  partners?: number;
  results?: ResultItem[];
  milestones?: Milestone[];
  tags: string[];
  /** جداول تقارير خاصة (زيارات، توزيع، تدريب...) — تختلف أعمدتها حسب المبادرة */
  reportTables?: ReportTable[];
  /** مؤشر نمو قبل/بعد (مثال: عدد المستفيدين بين موسمين) */
  growth?: GrowthStat[];
  /** خاص بمبادرة مكتبة الصور فقط */
  photos?: GalleryPhoto[];
  /** أسماء جهات/مراكز شريكة (تُستخدم في مبادرة تمكين مراكز ضيافة الأطفال) */
  partnersList?: string[];
  /** قائمة خدمات مقدَّمة (بدون وصف تفصيلي لكل بند) */
  servicesList?: string[];
}

export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  initiativeId: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface DashboardData {
  /** 4 مؤشرات رئيسية تُعرض في قسم الإحصائيات بالصفحة الرئيسية ولوحة الإحصائيات */
  overview: Statistic[];
  /** عدد المستفيدين حسب المبادرة — فقط للمبادرات التي يذكر التقرير لها عددًا صريحًا للمستفيدين */
  beneficiariesByInitiative: NamedValue[];
  /** عدد المتدربين حسب البرنامج التدريبي (مبادرة 1 + مبادرة 7) */
  trainingParticipation: NamedValue[];
  /** عدد الحجاج حسب كل زيارة من زيارات الاستقبال الثماني (مبادرات 2 و3 و4 مجتمعة) */
  receptionVisits: NamedValue[];
  /** مقارنات النمو بين موسمين كما وردت حرفيًا في التقرير */
  growthComparisons: GrowthStat[];
}
