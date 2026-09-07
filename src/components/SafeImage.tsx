"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SafeImageProps extends Omit<ImageProps, "onError" | "src"> {
  src: string;
  label?: string;
  containerClassName?: string;
}

// اذا مشكله بعرض الصور يعرض هذي
export function SafeImage({ src, alt, label, containerClassName, className, fill, ...props }: SafeImageProps) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={cn(
          "relative flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 via-primary-soft/10 to-accent/10",
          containerClassName
        )}
        role="img"
        aria-label={label || alt}
      >
        <ImageIcon className="h-8 w-8 text-primary/40" aria-hidden="true" />
        <span className="caption text-primary/50">{label || "صورة المبادرة"}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}
