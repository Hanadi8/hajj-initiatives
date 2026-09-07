import { LucideIcon, Inbox, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button, LinkButton } from "./Button";

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  actionLabel,
  actionHref,
}: {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-dashed border-border bg-offwhite/60 px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary/50 shadow-sm">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="h4 mb-1 text-text">{title}</h3>
      {description && <p className="body-sm mb-5 max-w-sm">{description}</p>}
      {actionLabel && actionHref && <LinkButton href={actionHref}>{actionLabel}</LinkButton>}
    </div>
  );
}

export function ErrorState({
  title = "حدث خطأ أثناء تحميل البيانات",
  description = "يرجى المحاولة مرة أخرى بعد قليل. إذا استمرت المشكلة تواصل معنا.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-red-100 bg-red-50/60 px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-red-500 shadow-sm">
        <AlertTriangle className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="h4 mb-1 text-text">{title}</h3>
      <p className="body-sm mb-5 max-w-sm">{description}</p>
      {onRetry && <Button variant="secondary" onClick={onRetry}>إعادة المحاولة</Button>}
    </div>
  );
}

export function SuccessState({ title = "تم إرسال رسالتك بنجاح", description }: { title?: string; description?: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-green-100 bg-green-50/60 px-6 py-12 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary-soft shadow-sm">
        <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="h4 mb-1 text-text">{title}</h3>
      {description && <p className="body-sm max-w-sm">{description}</p>}
    </div>
  );
}
