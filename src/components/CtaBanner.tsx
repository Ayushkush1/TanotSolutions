import { links } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div aria-hidden className="absolute -right-24 -top-24 size-80 rounded-full bg-brand-400/40 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 left-1/4 size-96 rounded-full bg-leaf-500/35 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <h2 id="cta-title" className="text-h2 text-white">
                Try our SEO and link building service for 30 days, then choose to stay
              </h2>
              <p className="text-lead mt-4 text-brand-100">No upfront payment. Pay only for verified deliverables.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href={links.bookCall} variant="inverse" size="lg" arrow>
                Book a call
              </Button>
              <Button href={links.contact} variant="inverse-outline" size="lg">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
