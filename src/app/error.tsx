"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/StateBlocks";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex min-h-[60vh] items-center justify-center py-20">
      <div className="w-full max-w-md">
        <ErrorState title="حدث خطأ غير متوقع" description="نعتذر عن هذا الخلل. يمكنك إعادة المحاولة أو العودة لاحقًا." onRetry={reset} />
      </div>
    </div>
  );
}
