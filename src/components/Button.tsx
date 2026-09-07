import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "text";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none rounded-md";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark",
  secondary: "bg-white text-primary border border-primary/25 hover:bg-primary/5",
  ghost: "bg-primary/10 text-primary hover:bg-primary/15",
  text: "text-primary hover:text-primary-dark underline-offset-4 hover:underline p-0",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-base h-[52px]",
};

interface ButtonProps extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, icon, iconPosition = "end", className, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(base, variants[variant], variant !== "text" && sizes[size], className)}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {!loading && icon && iconPosition === "start" && icon}
      {children}
      {!loading && icon && iconPosition === "end" && icon}
    </button>
  )
);
Button.displayName = "Button";

interface LinkButtonProps extends BaseProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

export function LinkButton({ href, variant = "primary", size = "md", icon, iconPosition = "end", className, children, ariaLabel }: LinkButtonProps) {
  return (
    <Link href={href} aria-label={ariaLabel} className={cn(base, variants[variant], variant !== "text" && sizes[size], className)}>
      {icon && iconPosition === "start" && icon}
      {children}
      {icon && iconPosition === "end" && icon}
    </Link>
  );
}

export function IconButton({
  icon,
  label,
  onClick,
  className,
  variant = "ghost",
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
  variant?: Variant;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cn("flex h-10 w-10 items-center justify-center rounded-full transition-colors", variants[variant], className)}
    >
      {icon}
    </button>
  );
}
