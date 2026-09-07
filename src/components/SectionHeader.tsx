import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="caption mb-2 font-bold text-primary-soft">{eyebrow}</p>}
      <h2 className="h2 text-text">{title}</h2>
      {description && <p className="body-lg mt-3">{description}</p>}
    </div>
  );
}
