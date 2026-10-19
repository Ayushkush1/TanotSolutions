"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs, links } from "@/content/site";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  // FAQPage schema: an SEO agency's own homepage should earn FAQ rich results / AI citations
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <Section id="faq" labelledBy="faq-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>FAQ</Eyebrow>
            <h2 id="faq-title" className="text-h2">
              Questions to ask before hiring an SEO agency
            </h2>
            <p className="text-lead mt-5">Can’t find your answer? We’re happy to walk you through it on a quick call.</p>
            <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <p className="font-semibold text-ink-900">Still deciding?</p>
              <p className="mt-2 text-[0.9375rem] leading-relaxed">
                Get a free, no-obligation audit showing your website’s current position and a step-by-step roadmap to 2X your traffic
                and leads.
              </p>
              <Button href={links.bookCall} arrow className="mt-5">
                Claim your free SEO growth plan
              </Button>
            </div>
          </div>
        </div>

        <div className="divide-y divide-line border-y border-line lg:col-span-7">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left text-[1.0625rem] font-semibold leading-snug text-ink-900 transition-colors hover:text-brand-700 sm:text-lg"
                  >
                    {f.q}
                    <span
                      className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-[transform,background-color,border-color,color] duration-200 ${
                        isOpen ? "rotate-45 border-brand-600 bg-brand-600 text-white" : "border-line text-ink-600"
                      }`}
                    >
                      <Plus className="size-4" aria-hidden />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[60ch] pb-6 pr-12 text-[0.9375rem] leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
