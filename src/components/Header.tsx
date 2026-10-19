"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { links, nav } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Transparent over the hero; becomes a floating card once the page scrolls or the mobile menu opens
  const solid = scrolled || open;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-3">
      <a
        href="#main"
        className="sr-only rounded-lg bg-brand-600 px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-3"
      >
        Skip to content
      </a>
      <div className="container-site">
        {/* Bar spans exactly the section width: flush with the headline at the top, padding eases in as it becomes a card */}
        <div
          className={`pointer-events-auto flex h-16 items-center justify-between gap-6 rounded-2xl border transition-[background-color,border-color,box-shadow,padding] duration-300 lg:h-[4.5rem] ${
            solid
            ? "border-line bg-white/85 px-3 shadow-raised backdrop-blur-md lg:px-4"
            : "border-transparent bg-transparent px-0"
          }`}
        >
          <Link href="/" aria-label="Tanot Solutions home" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Tanot Solutions"
              width={1536}
              height={370}
              priority
              className="h-8 w-auto lg:h-9"
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.label} className="group relative">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        aria-haspopup="true"
                        className="flex h-10 items-center gap-1 rounded-lg px-3.5 text-[0.9375rem] font-medium text-ink-700 transition-colors hover:bg-mist hover:text-ink-900 group-focus-within:bg-mist"
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden
                          className="size-4 text-ink-400 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                        />
                      </button>
                      <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <ul className="min-w-52 rounded-xl border border-line bg-white p-1.5 shadow-raised">
                          {item.children.map((c) => (
                            <li key={c.label}>
                              <Link
                                href={c.href}
                                className="block rounded-lg px-3 py-2.5 text-[0.9375rem] text-ink-700 transition-colors hover:bg-mist hover:text-brand-700"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex h-10 items-center rounded-lg px-3.5 text-[0.9375rem] font-medium text-ink-700 transition-colors hover:bg-mist hover:text-ink-900"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button href={links.bookCall} arrow>
                Let’s talk
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 grid size-11 place-items-center rounded-lg text-ink-900 hover:bg-mist lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu: floating panel matching the bar */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="pointer-events-auto fixed inset-x-5 bottom-3 top-[5.25rem] overflow-y-auto rounded-2xl border border-line bg-white shadow-raised sm:inset-x-6 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col px-5 py-2">
          <ul className="divide-y divide-line">
            {nav.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={expanded === item.label}
                      onClick={() => setExpanded((v) => (v === item.label ? null : item.label))}
                      className="flex w-full items-center justify-between py-4 text-lg font-medium text-ink-900"
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden
                        className={`size-5 text-ink-400 transition-transform ${expanded === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expanded === item.label && (
                      <ul className="mb-3 space-y-1 border-l-2 border-brand-100 pl-4">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <Link href={c.href} onClick={() => setOpen(false)} className="block py-2 text-base text-ink-600">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-4 text-lg font-medium text-ink-900">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8">
            <Button href={links.bookCall} size="lg" arrow className="w-full">
              Let’s talk
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
