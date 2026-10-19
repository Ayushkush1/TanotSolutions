import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";
import { caseStudy, links } from "@/content/site";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CaseStudy() {
  return (
    <Section id="case-study" tone="mist" labelledBy="case-title">
      {/* Row 1: story — headline gets full width so it reads in two lines, summary sits beside it */}
      <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-7">
          <Eyebrow>Case study · HR SaaS</Eyebrow>
          <h2 id="case-title" className="text-h2">
            {caseStudy.title}
          </h2>
        </div>
        <p className="text-lead lg:col-span-5">{caseStudy.body}</p>
      </div>

      {/* Row 2: evidence — screenshot and results share one height so top and bottom edges line up */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-16">
        <figure className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-raised">
            <figcaption className="flex items-center gap-3 border-b border-line bg-mist px-4 py-3">
              <span className="flex gap-1.5" aria-hidden>
                <span className="size-2.5 rounded-full bg-ink-400/40" />
                <span className="size-2.5 rounded-full bg-ink-400/40" />
                <span className="size-2.5 rounded-full bg-ink-400/40" />
              </span>
              <span className="flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-ink-500">
                Organic growth after the campaign started
              </span>
            </figcaption>
            <Image
              src={caseStudy.image}
              alt="SEO dashboard showing organic traffic rising from 0 to 6,200 monthly visitors after Tanot Solutions started"
              width={512}
              height={296}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </figure>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <dl className="grid flex-1 divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
            {caseStudy.metrics.map((m) => (
              <div key={m.label} className="flex items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6">
                <dt className="flex min-w-0 items-center gap-3 text-sm font-medium text-ink-700 sm:text-[0.9375rem]">
                  <span className="hidden size-9 shrink-0 place-items-center rounded-lg bg-leaf-50 text-leaf-600 min-[400px]:grid">
                    <TrendingUp className="size-4" aria-hidden />
                  </span>
                  {m.label}
                </dt>
                <dd className="flex shrink-0 items-center gap-1.5 text-xl font-bold tabular-nums tracking-tight text-ink-900 sm:gap-2 sm:text-[1.75rem]">
                  <span className="text-ink-400">{m.from}</span>
                  <ArrowRight className="size-4 text-ink-400 sm:size-5" aria-label="to" />
                  <span className="text-leaf-600">{m.to}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={links.caseStudies} arrow className="w-full sm:flex-1">
              Read full case study
            </Button>
            <Button href={links.caseStudies} variant="secondary" className="w-full sm:flex-1">
              All case studies
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
