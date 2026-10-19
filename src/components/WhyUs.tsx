import { Eye, ShieldCheck, Sparkles, Target, Users, Wallet } from "lucide-react";
import { links, reasons } from "@/content/site";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const icons = { target: Target, wallet: Wallet, shield: ShieldCheck, eye: Eye, sparkles: Sparkles, users: Users };

export function WhyUs() {
  return (
    <Section id="why-us" labelledBy="why-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Why Tanot</Eyebrow>
            <h2 id="why-title" className="text-h2">
              A growth partner, not another SEO agency
            </h2>
            <p className="text-lead mt-5">
              Clients describe working with us as “less like a vendor, more like a partner.” Here’s why they stay for 2+ years on average.
            </p>
            <Button href={links.bookCall} arrow className="mt-8">
              Talk to our team
            </Button>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:col-span-7 xl:col-span-8">
          {reasons.map((r) => {
            const Icon = icons[r.icon];
            return (
              <li
                key={r.title}
                className="group rounded-2xl border border-line bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-brand-200 hover:shadow-raised sm:p-7"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-h3 mt-5">{r.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed">{r.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
