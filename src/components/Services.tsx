"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Check, ChevronDown, ChevronRight } from "lucide-react";
import { services, type Service } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

function Panel({ s, compact }: { s: Service; compact?: boolean }) {
  return (
    <div>
      {!compact && <h3 className="text-[1.625rem] font-bold leading-tight tracking-tight">{s.title}</h3>}
      <p className={`${compact ? "" : "mt-4"} max-w-2xl text-[1.0625rem] leading-relaxed`}>{s.body}</p>
      <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {s.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-[0.9375rem] text-ink-700">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf-50 text-leaf-600">
              <Check className="size-3.5" strokeWidth={3} aria-hidden />
            </span>
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={s.href} arrow className="w-full sm:w-auto">
          {s.cta}
        </Button>
        <Button href={s.href} variant="secondary" className="w-full sm:w-auto">
          Learn more
        </Button>
      </div>
    </div>
  );
}

export function Services() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow-key navigation per WAI-ARIA tabs pattern
  function onKeyDown(e: KeyboardEvent) {
    const delta = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (active + delta + services.length) % services.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <Section id="services" labelledBy="services-title">
      <SectionHeading
        id="services-title"
        eyebrow="Services"
        title="SEO services built around revenue, not vanity metrics"
        description="Pick one service or combine them. Every campaign targets authority, high-intent traffic and conversions."
      />

      {/* Desktop: vertical tabs */}
      <div className="hidden gap-8 lg:grid lg:grid-cols-12">
        <div role="tablist" aria-orientation="vertical" aria-label="Services" onKeyDown={onKeyDown} className="space-y-2 lg:col-span-4">
          {services.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`panel-${s.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-colors duration-200 ${
                  selected
                    ? "border-brand-600 bg-brand-600 text-white shadow-[0_8px_24px_-12px_rgb(10_118_180/0.6)]"
                    : "border-line bg-white text-ink-900 hover:border-brand-200 hover:bg-brand-50"
                }`}
              >
                <span className={`text-sm font-semibold tabular-nums ${selected ? "text-brand-100" : "text-ink-400"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[1.0625rem] font-semibold">{s.title}</span>
                <ChevronRight aria-hidden className={`size-5 ${selected ? "text-white" : "text-ink-400"}`} />
              </button>
            );
          })}
        </div>

        {services.map((s, i) => (
          <div
            key={s.id}
            role="tabpanel"
            id={`panel-${s.id}`}
            aria-labelledby={`tab-${s.id}`}
            hidden={i !== active}
            className="rounded-2xl border border-line bg-mist p-10 lg:col-span-8 xl:p-12"
          >
            <Panel s={s} />
          </div>
        ))}
      </div>

      {/* Mobile / tablet: accordion so each service reads in place */}
      <div className="space-y-3 lg:hidden">
        {services.map((s, i) => {
          const open = openMobile === i;
          return (
            <div key={s.id} className={`rounded-2xl border transition-colors ${open ? "border-brand-200 bg-mist" : "border-line bg-white"}`}>
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`m-panel-${s.id}`}
                  onClick={() => setOpenMobile(open ? null : i)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold tabular-nums text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-[1.0625rem] font-semibold text-ink-900">{s.title}</span>
                  <ChevronDown aria-hidden className={`size-5 text-ink-400 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
              </h3>
              <div id={`m-panel-${s.id}`} hidden={!open} className="px-5 pb-6">
                <Panel s={s} compact />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
