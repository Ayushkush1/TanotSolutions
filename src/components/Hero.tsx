import Image from "next/image";
import Link from "next/link";
import { Award, Handshake, Smile, Users } from "lucide-react";
import { hero, links, stats } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/LeadForm";

const statIcons = { users: Users, smile: Smile, award: Award, handshake: Handshake };

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-brand-50/60 to-white">
      {/* soft brand glow, purely decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-brand-200/40 blur-3xl"
      />
      <div className="container-site relative pb-14 pt-28 sm:pt-32 lg:pb-16 lg:pt-[5.25rem]">
        <div className="grid items-center gap-10 lg:min-h-[min(calc(100svh-5.25rem),46rem)] lg:py-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h1 id="hero-title" className="text-display">
              <span className="text-brand-500">{hero.titleAccent}</span> {hero.titleRest}
            </h1>
            <p className="text-lead mt-5 max-w-[34rem]">{hero.body}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={links.bookCall} size="lg" arrow>
                Book a free strategy call
              </Button>
              <Button href="#case-study" size="lg" variant="secondary">
                See client results
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4 border-t border-brand-100 pt-5">
              <Link href={links.clutch} target="_blank" rel="noopener noreferrer" className="shrink-0">
                <Image src="/images/clutch-badge.png" alt="Reviewed on Clutch — 5.0 rating" width={245} height={102} className="h-11 w-auto" />
              </Link>
              <p className="text-sm leading-snug text-ink-500">
                Rated <strong className="font-semibold text-ink-800">5.0 on Clutch</strong>
                <br className="hidden sm:block" /> by SaaS, B2B and enterprise clients
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <LeadForm />
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white shadow-card lg:mt-8 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = statIcons[s.icon];
            return (
              <div
                key={s.label}
                className={`flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-4 sm:p-6 lg:p-7 ${
                  i % 2 === 1 ? "border-l border-line" : ""
                } ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-leaf-50 text-leaf-600">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col-reverse">
                  <dt className="text-sm leading-snug text-ink-500">{s.label}</dt>
                  <dd className="text-[1.75rem] font-bold leading-tight tracking-tight text-ink-900">{s.value}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
