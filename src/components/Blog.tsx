import Image from "next/image";
import Link from "next/link";
import { links, posts } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const fmt = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export function Blog() {
  return (
    <Section id="blog" tone="mist" labelledBy="blog-title">
      <SectionHeading
        id="blog-title"
        eyebrow="Insights"
        title="Latest SEO & link building insights"
        action={
          <Button href={links.blog} variant="secondary" arrow>
            View all articles
          </Button>
        }
      />

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <li key={p.href} className="md:last:col-span-2 lg:last:col-span-1">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow duration-200 hover:shadow-raised">
              <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-600">{p.category}</p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-ink-900 group-hover:text-brand-700">
                  <Link href={p.href} className="after:absolute after:inset-0">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-auto flex items-center gap-2 pt-6 text-sm text-ink-500">
                  <span>Renu Sharma</span>
                  <span aria-hidden>·</span>
                  <time dateTime={p.date}>{fmt.format(new Date(p.date))}</time>
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
