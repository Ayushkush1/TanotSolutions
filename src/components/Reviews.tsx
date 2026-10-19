import { Quote, Star } from "lucide-react";
import { links, testimonials, videoTestimonial, type Testimonial } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="size-[1.125rem] fill-current" aria-hidden />
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

function Highlighted({ t }: { t: Testimonial }) {
  if (!t.highlight) return <>{t.quote}</>;
  const [before, after] = t.quote.split(t.highlight);
  return (
    <>
      {before}
      <strong className="font-semibold text-ink-900">{t.highlight}</strong>
      {after}
    </>
  );
}

function ReviewCard({ t, featured }: { t: Testimonial; featured?: boolean }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-center justify-between">
        <Stars />
        {featured && <Quote className="size-8 text-brand-100" aria-hidden />}
      </div>
      <blockquote className={`mt-5 flex-1 ${featured ? "text-lg leading-relaxed text-ink-800" : "text-[0.9375rem] leading-relaxed"}`}>
        <p>
          <Highlighted t={t} />
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
          {initials(t.name)}
        </span>
        <span className="min-w-0">
          <span className="block font-semibold text-ink-900">{t.name}</span>
          <span className="block text-sm text-ink-500">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const [featured, ...rest] = testimonials;
  return (
    <Section id="reviews" tone="mist" labelledBy="reviews-title">
      <SectionHeading
        id="reviews-title"
        eyebrow="Client reviews"
        title="Reviews from businesses we’ve helped grow"
        description="Don’t take our word for it. Here’s what clients say about working with Tanot Solutions."
        action={
          <>
            <Button href={links.reviews} arrow className="w-full sm:w-auto">
              View all client reviews
            </Button>
            <Button href={links.clutch} variant="secondary" className="w-full sm:w-auto">
              See us on Clutch
            </Button>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-12">
        <figure className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card lg:col-span-7">
          <div className="relative aspect-video bg-ink-900">
            <iframe
              src={`https://player.vimeo.com/video/${videoTestimonial.vimeoId}?title=0&byline=0&portrait=0&dnt=1`}
              title={`Video review from ${videoTestimonial.name}`}
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
          </div>
          <figcaption className="flex flex-1 items-center gap-3 px-6 py-5 sm:px-8">
            <Stars />
            <span className="text-sm text-ink-500">
              <span className="font-semibold text-ink-900">{videoTestimonial.name}</span>, {videoTestimonial.role}
            </span>
          </figcaption>
        </figure>

        <div className="lg:col-span-5">
          <ReviewCard t={featured} featured />
        </div>

        {rest.map((t) => (
          <div key={t.name} className="lg:col-span-6">
            <ReviewCard t={t} />
          </div>
        ))}
      </div>
    </Section>
  );
}
