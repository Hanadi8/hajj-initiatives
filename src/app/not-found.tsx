import { SearchX } from "lucide-react";
import { LinkButton } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
        <SearchX className="h-10 w-10" aria-hidden="true" />
      </div>
      <p className="mb-2 text-6xl font-bold text-primary md:text-8xl">404</p>
      <h1 className="h2 mb-3">الصفحة غير موجودة</h1>
      <p className="body-lg mb-8 max-w-md">يبدو أن الصفحة التي تبحث عنها غير متاحة، ربما تم نقلها أو حذفها.</p>
      <LinkButton href="/">العودة للرئيسية</LinkButton>
    </div>
  );
}
