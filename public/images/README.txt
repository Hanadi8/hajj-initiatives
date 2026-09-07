هذا المجلد مخصص لصور المشروع الفعلية (Placeholder حاليًا — لا توجد صور بعد).

ضع الصور بنفس المسارات التالية بالضبط ليتم ربطها تلقائيًا بكل مبادرة
(انظر src/data/initiatives.ts لكل مبادرة):

initiatives/
  initiative-1-01.jpg .. initiative-1-03.jpg   → مبادرة التوزيع الخيري
  initiative-2-01.jpg .. initiative-2-04.jpg   → استقبال مطار الأمير محمد بن عبدالعزيز
  initiative-3-01.jpg .. initiative-3-02.jpg   → استقبال مطار ينبع
  initiative-4-01.jpg .. initiative-4-02.jpg   → استقبال محطة قطار الحرمين
  initiative-5-01.jpg .. initiative-5-03.jpg   → الدعم النفسي والاجتماعي
  initiative-6-01.jpg .. initiative-6-02.jpg   → ضيافة الأطفال الأهلية
  initiative-7-01.jpg                          → البرامج التدريبية للجنة الحج
  initiative-08/                                → مجلد صور مكتبة الصور (مبادرة 8)
                                                   أضف الصور هنا وحدّث مصفوفة
                                                   "photos" في src/data/initiatives.ts
                                                   (كل عنصر: { src, category })

hero-default.jpg    → صورة الـHero الرئيسية بالصفحة الرئيسية
news/news-01.jpg .. news-03.jpg       → صور قسم المستجدات (خارج نطاق هذا التحديث)
gallery/gallery-01.jpg .. gallery-06.jpg → معرض الصور العام (خارج نطاق هذا التحديث)

إن لم تكن الصورة موجودة في مسارها، فإن مكوّن SafeImage
(src/components/SafeImage.tsx) يعرض تلقائيًا بديلاً بصريًا أنيقًا
بدل كسر تصميم الصفحة — لا حاجة لأي تعديل برمجي عند إضافة الصور لاحقًا.
