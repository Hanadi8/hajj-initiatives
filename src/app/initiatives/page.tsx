"use client";

import { useMemo, useState } from "react";
import { initiatives } from "@/data/initiatives";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SearchBar } from "@/components/SearchBar";
import { Select } from "@/components/FormControls";
import { InitiativeCard } from "@/components/InitiativeCard";
import { EmptyState } from "@/components/StateBlocks";

const categories = ["الكل", ...Array.from(new Set(initiatives.map((i) => i.category)))];
const fields = ["الكل", ...Array.from(new Set(initiatives.map((i) => i.field).filter(Boolean) as string[]))];

export default function InitiativesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("الكل");
  const [field, setField] = useState("الكل");

  const filtered = useMemo(() => {
    return initiatives.filter((i) => {
      const matchesQuery = i.title.includes(query) || i.shortDescription.includes(query);
      const matchesCategory = category === "الكل" || i.category === category;
      const matchesField = field === "الكل" || i.field === field;
      return matchesQuery && matchesCategory && matchesField;
    });
  }, [query, category, field]);

  return (
    <div className="container-page section-py">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "المبادرات" }]} />

      <header className="max-w-2xl">
        <h1 className="h1">المبادرات</h1>
        <p className="body-lg mt-3">
          مبادرات فرع وزارة الموارد البشرية والتنمية الاجتماعية بمنطقة المدينة المنورة لخدمة ضيوف الرحمن — موسم حج 1447هـ.
        </p>
      </header>

      <div className="mt-8 flex flex-col gap-4 rounded-lg border border-border bg-white p-4 md:flex-row md:items-center md:p-5">
        <SearchBar value={query} onChange={setQuery} placeholder="ابحث عن مبادرة..." className="md:flex-1" ariaLabel="ابحث عن مبادرة" />
        <div className="grid grid-cols-2 gap-3 md:flex md:gap-3">
          <Select aria-label="الفئة" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => <option key={c} value={c}>{c === "الكل" ? "الفئة: الكل" : c}</option>)}
          </Select>
          <Select aria-label="المجال" value={field} onChange={(e) => setField(e.target.value)}>
            {fields.map((f) => <option key={f} value={f}>{f === "الكل" ? "المجال: الكل" : f}</option>)}
          </Select>
        </div>
      </div>

      <p className="body-sm mt-4">{filtered.length} مبادرة مطابقة</p>

      {filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState title="لا توجد مبادرات مطابقة" description="جرّب تعديل كلمات البحث أو الفلاتر المستخدمة." />
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((initiative) => (
            <InitiativeCard key={initiative.id} initiative={initiative} />
          ))}
        </div>
      )}
    </div>
  );
}
