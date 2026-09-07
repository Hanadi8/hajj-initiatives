# مبادرات الحج — وزارة الموارد البشرية والتنمية الاجتماعية

منصة رقمية حكومية (Next.js + TypeScript + Tailwind CSS) لاستعراض مبادرات فرع
الوزارة بمنطقة المدينة المنورة لموسم حج 1447هـ.

> ✅ **مصدر البيانات**: جميع أسماء المبادرات، الأوصاف، الأرقام، والإحصائيات
> في هذا المشروع منقولة حرفيًا من "تقرير تنفيذ مبادرات فرع وزارة الموارد
> البشرية والتنمية الاجتماعية بمنطقة المدينة المنورة — لموسم حج 1447هـ".
> لا توجد بيانات Placeholder أو مُخترعة في `src/data/initiatives.ts` أو
> `src/data/statistics.ts`. الصور فقط لا تزال Placeholder إلى حين إضافتها
> (راجع القسم أدناه).
>
> ⚠️ **خارج النطاق**: قسم "المستجدات" (`src/data/news.ts`) ومعرض الصور
> العام (`src/data/gallery.ts`) وصفحة "عن المبادرات" لم يُطلب تعديلها ضمن
> هذا التحديث، وما زالت تحتوي على نصوص Demo/Placeholder كما كانت سابقًا.

> ⚠️ **ملاحظة مهمة حول بيئة الإنشاء**: تم إعداد هذا المشروع بالكامل كملفات
> مصدرية (Source Code) داخل بيئة بلا اتصال إنترنت، لذلك لم يتم تشغيل
> `npm install` أو `npm run build` فعليًا للتحقق النهائي. يجب تشغيل الأوامر
> أدناه على جهازك للتأكد من نجاح البناء قبل النشر.

---

## 1. التشغيل

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # للتحقق من عدم وجود أخطاء قبل النشر
npm run start    # تشغيل نسخة الإنتاج محليًا
npm run lint     # فحص ESLint
```

يتطلب Node.js 18.18 أو أحدث.

---

## 2. خريطة الصفحات (Routes)

| المسار | الوصف |
|---|---|
| `/` | الرئيسية |
| `/initiatives` | جميع المبادرات (بحث + فلاتر) |
| `/initiatives/[slug]` | تفاصيل مبادرة |
| `/impact` | الأثر والنتائج |
| `/statistics` | لوحة الإحصائيات التفاعلية |
| `/news` | المستجدات |
| `/news/[slug]` | تفاصيل خبر |
| `/gallery` | معرض الصور |
| `/about` | عن المبادرات |
| `/contact` | تواصل معنا |
| `/search` | البحث |
| `404` | صفحة غير موجودة (تلقائية) |

---

## 3. أين أعدّل كل شيء؟ (كل التعديلات من `src/data/` فقط)

| ما تريد تعديله | الملف |
|---|---|
| اسم/وصف/صورة/أهداف/مراحل/نتائج المبادرات | `src/data/initiatives.ts` |
| أرقام لوحة التحكم (Dashboard) وHomepage KPIs | `src/data/statistics.ts` |
| الرسوم البيانية (Charts) | نفس الملف أعلاه — كل Chart يقرأ من حقل مخصص |
| الأخبار / المستجدات | `src/data/news.ts` |
| معرض الصور | `src/data/gallery.ts` |
| نص الـHero، معلومات التواصل، روابط الفوتر، القائمة | `src/data/site.ts` |
| الألوان، الخطوط، الـRadius، الظلال | `src/styles/tokens.css` |
| الصور الفعلية (استبدال الـPlaceholder) | `public/images/**` (راجع `public/images/README.txt`) |
| خط Diodrum Arabic الرسمي | `public/fonts/` + `src/app/globals.css` |

**لا تحتاج لتعديل أي Component** عند تغيير محتوى — كل شيء Data-driven.

### مثال: تعديل رقم في اللوحة
```ts
// src/data/statistics.ts
{ label: "إجمالي المستفيدين", value: 2500000, displayValue: "+2.5M" }
// غيّرها إلى:
{ label: "إجمالي المستفيدين", value: 3000000, displayValue: "+3M" }
```
سيظهر الرقم الجديد تلقائيًا في: الرئيسية، الإحصائيات، الأثر.

### مثال: تعديل صورة مبادرة
```ts
// src/data/initiatives.ts — مبادرة 1 مثلاً
images: [
  "/images/initiatives/initiative-1-01.jpg",
  "/images/initiatives/initiative-1-02.jpg",
]
```
ضع الملفات الفعلية داخل `public/images/initiatives/` بنفس الأسماء تمامًا (`initiative-{رقم المبادرة}-{تسلسل}.jpg`)
وستظهر الصور الجديدة تلقائيًا في: بطاقة المبادرة، وصفحة التفاصيل. للمبادرة الثامنة (مكتبة الصور)
أضف الصور داخل `public/images/initiatives/initiative-08/` وحدّث مصفوفة `photos` بنفس الملف.

---

## 4. بنية المشروع

```
src/
  app/          صفحات ومسارات Next.js App Router
  components/   مكوّنات واجهة قابلة لإعادة الاستخدام (Button, Card, Chart...)
  sections/     أقسام الصفحة الرئيسية (Hero, KpiStrip, ImpactSection...)
  data/         كل بيانات المحتوى (المصدر الوحيد للتعديل)
  types/        أنواع TypeScript لكل نماذج البيانات
  lib/          دوال مساعدة عامة (cn, formatArabicDate...)
  styles/       Design Tokens (tokens.css)
public/
  images/       صور المشروع (Placeholder قابلة للاستبدال)
  fonts/        خطوط الموقع
```

---

## 5. قائمة المكوّنات الأساسية

Header · MobileMenu · Footer · Button/LinkButton/IconButton · Badge · Card
(InitiativeCard/NewsCard) · KpiCard/StatCard · SectionHeader · Breadcrumb ·
SearchBar · FormControls (Input/Textarea/Select) · Tabs · Timeline ·
ProgressBar · ChartCard + charts.tsx (Bar/Donut/Line/HorizontalBar) ·
Gallery + Lightbox · SafeImage · Skeleton/SkeletonGrid · EmptyState/
ErrorState/SuccessState · SectionNav (Scrollspy)

---

## 6. جاهزية الربط المستقبلي بـ CMS/API

البيانات حاليًا Static (TypeScript) داخل `src/data/`، لكن كل ملف مصمم
كوحدة مستقلة (data layer) يمكن استبدالها لاحقًا بطلبات API/CMS حقيقية
(مثل Supabase أو Headless CMS) **دون أي تعديل على المكوّنات أو الصفحات**،
طالما التزم مصدر البيانات الجديد بنفس الأنواع (Types) المعرّفة في `src/types/index.ts`.

---

## 7. حول البيانات

بيانات المبادرات (`src/data/initiatives.ts`) والإحصائيات (`src/data/statistics.ts`)
منقولة بالكامل من التقرير الرسمي المرفق (مبادرات 1 إلى 7 + مكتبة الصور).
مبادرة "مكتبة الصور" (8) جاهزة هيكليًا لاستقبال الصور الحقيقية عبر مصفوفة
`photos` — لا تحتوي على صور افتراضية أو وهمية.

الصور فقط (`public/images/initiatives/*`) لا تزال بحاجة للإضافة الفعلية —
عند غيابها يعرض مكوّن `SafeImage` بديلاً بصريًا أنيقًا بدل كسر التصميم.

---

## 8. اختبار نهائي مطلوب قبل النشر

- [ ] `npm run build` بدون أخطاء TypeScript/ESLint
- [ ] اختبار جميع الروابط (Header/Footer/Cards/Breadcrumbs)
- [ ] اختبار RTL على جميع الصفحات
- [ ] اختبار Responsive: 375 / 768 / 1024 / 1440 / 1920px
- [ ] اختبار لوحة المفاتيح (Tab/Escape) في القائمة الجانبية والـLightbox
- [ ] اختبار نموذج التواصل (نجاح/فشل/تحقق من الحقول)
- [ ] اختبار البحث والفلاتر في المبادرات/الأخبار/المعرض
- [ ] اختبار الرسوم البيانية وفلاتر لوحة الإحصائيات
- [ ] اختبار صفحة 404 وفشل تحميل الصور (SafeImage fallback)
