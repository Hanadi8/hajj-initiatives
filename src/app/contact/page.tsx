"use client";

import { FormEvent, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeader } from "@/components/SectionHeader";
import { Field, Input, Textarea, Select } from "@/components/FormControls";
import { Button } from "@/components/Button";
import { SuccessState, ErrorState } from "@/components/StateBlocks";
import { siteData } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", phone: "", subject: "استفسار عام", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "يرجى إدخال الاسم الكامل";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "يرجى إدخال بريد إلكتروني صحيح";
    if (!/^0?5\d{8}$/.test(form.phone.replace(/\s/g, ""))) next.phone = "يرجى إدخال رقم جوال سعودي صحيح";
    if (!form.message.trim() || form.message.trim().length < 10) next.message = "يرجى كتابة رسالة لا تقل عن 10 أحرف";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    setTimeout(() => {
      const ok = Math.random() > 0.08;
      setStatus(ok ? "success" : "error");
    }, 900);
  }

  return (
    <div className="container-page section-py">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "تواصل معنا" }]} />

      <SectionHeader eyebrow="نسعد بتواصلكم" title="تواصل معنا" description="لديك استفسار أو ملاحظة حول مبادرات الحج؟ يسعدنا التواصل معك." />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-1">
          <div className="flex items-center gap-3 rounded-lg border border-border bg-white p-4">
            <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <p className="caption">اتصل بنا</p>
              <p className="body font-semibold text-text" dir="ltr">{siteData.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-white p-4">
            <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <p className="caption">البريد الإلكتروني</p>
              <p className="body font-semibold text-text" dir="ltr">{siteData.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-white p-4">
            <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <p className="caption">العنوان</p>
              <p className="body font-semibold text-text">{siteData.address}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {status === "success" ? (
            <SuccessState description="سيتواصل معك فريقنا في أقرب وقت ممكن. شكرًا لتواصلك معنا." />
          ) : status === "error" ? (
            <ErrorState onRetry={() => setStatus("idle")} />
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-lg border border-border bg-white p-6 md:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="الاسم الكامل" htmlFor="name" required error={errors.name}>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} error={!!errors.name} autoComplete="name" />
                </Field>
                <Field label="البريد الإلكتروني" htmlFor="email" required error={errors.email}>
                  <Input id="email" type="email" dir="ltr" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} error={!!errors.email} autoComplete="email" />
                </Field>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="رقم الجوال" htmlFor="phone" required error={errors.phone}>
                  <Input id="phone" dir="ltr" placeholder="05xxxxxxxx" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} error={!!errors.phone} autoComplete="tel" />
                </Field>
                <Field label="الموضوع" htmlFor="subject">
                  <Select id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                    <option>استفسار عام</option>
                    <option>ملاحظة حول مبادرة</option>
                    <option>طلب تعاون / شراكة</option>
                    <option>مشكلة تقنية في الموقع</option>
                  </Select>
                </Field>
              </div>
              <Field label="الرسالة" htmlFor="message" required error={errors.message}>
                <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} error={!!errors.message} />
              </Field>
              <Button type="submit" loading={status === "submitting"} className="w-full sm:w-auto">
                إرسال
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
