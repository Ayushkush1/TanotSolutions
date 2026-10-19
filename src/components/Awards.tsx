import Image from "next/image";
import { awards } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Awards() {
  return (
    <Section id="awards" tone="mist" labelledBy="awards-title">
      <SectionHeading id="awards-title" eyebrow="Recognition" title="The industry’s top‑rated SEO agency" align="center" />

      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {awards.map((a, i) => (
          <li key={`${a.title}-${i}`} className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            {/* Fixed 4:3 frame: photos fill it, certificates & trophies sit centred with equal breathing room */}
            <div className="relative aspect-[4/3] bg-gradient-to-b from-mist to-white">
              <Image
                src={a.src}
                alt={a.title}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                className={a.fit === "cover" ? "object-cover" : "object-contain p-8"}
              />
            </div>
            <h3 className="border-t border-line px-6 py-5 text-base font-semibold leading-snug text-ink-900">{a.title}</h3>
          </li>
        ))}
      </ul>
    </Section>
  );
}
