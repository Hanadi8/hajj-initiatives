import { cn } from "@/lib/utils";

export function Badge({ children, tone = "primary", className }: { children: React.ReactNode; tone?: "primary" | "accent" | "muted"; className?: string }) {
  const tones = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/15 text-accent",
    muted: "bg-offwhite text-text-muted",
  };
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", tones[tone], className)}>
      {children}
    </span>
  );
}
