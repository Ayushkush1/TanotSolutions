import type { ReactNode } from "react";

type Tone = "white" | "mist";

/** Every section shares the same vertical rhythm and container, so edges line up down the page. */
export function Section({
  id,
  tone = "white",
  className = "",
  children,
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-16 sm:py-20 lg:py-24 ${tone === "mist" ? "bg-mist" : "bg-white"} ${className}`}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-brand-600 ${className}`}>{children}</p>
  );
}

/** Section title block: eyebrow, h2 and supporting copy with fixed spacing between them. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  action,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
}) {
  const centered = align === "center";
  return (
    <div
      className={`mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 ${
        action ? "lg:flex-row lg:items-end lg:justify-between" : ""
      } ${centered ? "items-center text-center" : ""} ${className}`}
    >
      <div className={`max-w-2xl ${centered ? "mx-auto" : ""}`}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 id={id} className="text-h2">
          {title}
        </h2>
        {description && <p className="text-lead mt-4">{description}</p>}
      </div>
      {action && <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">{action}</div>}
    </div>
  );
}
