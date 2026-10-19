import Image from "next/image";
import { press } from "@/content/site";
import { Marquee } from "@/components/ui/Marquee";

export function FeaturedOn() {
  return (
    <section aria-labelledby="press-title" className="border-y border-line bg-mist py-12 sm:py-14">
      <div className="container-site flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
        <h2 id="press-title" className="shrink-0 text-sm font-semibold uppercase tracking-[0.08em] text-ink-500">
          As featured on
        </h2>
        <Marquee
          className="w-full min-w-0 flex-1"
          copies={6}
          duration={45}
          spacing="pr-14 sm:pr-20"
          items={press.map((p) => (
            <div key={p.name} className="flex h-12 items-center">
              <Image src={p.src} alt={p.name} width={200} height={60} className="h-9 w-auto max-w-[10rem] object-contain" />
            </div>
          ))}
        />
      </div>
    </section>
  );
}
