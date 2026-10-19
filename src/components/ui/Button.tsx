import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "inverse-outline";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 text-center rounded-xl font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white shadow-[0_1px_2px_rgb(16_24_40/0.08),inset_0_1px_0_rgb(255_255_255/0.12)] hover:bg-brand-700",
  secondary: "border border-line bg-white text-ink-900 shadow-card hover:border-ink-400/60 hover:bg-mist",
  ghost: "text-brand-700 hover:text-brand-800",
  inverse: "bg-white text-brand-700 hover:bg-brand-50",
  "inverse-outline": "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 py-2.5 text-[0.9375rem] leading-snug",
  lg: "min-h-12 px-6 py-3 text-base leading-snug",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return [base, variants[variant], variant === "ghost" ? "px-0" : sizes[size], extra].join(" ");
}

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
};

export function Button({ variant = "primary", size = "md", arrow, className = "", children, ...rest }: Props) {
  const href = typeof rest.href === "string" ? rest.href : "";
  const offsite = href.startsWith("http") && !href.includes("tanotsolutions.com");
  return (
    <Link
      className={buttonClass(variant, size, className)}
      {...(offsite ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </Link>
  );
}
