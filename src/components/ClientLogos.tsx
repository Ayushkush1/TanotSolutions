import Image from "next/image";
import { clientLogos } from "@/content/site";
import { Marquee } from "@/components/ui/Marquee";

// Every logo gets roughly the same visual area, so long wordmarks and square marks feel equally weighted.
const LOGO_AREA = 5800; // px² at desktop size
const MAX_HEIGHT = 48;

function LogoTile({ name, src, width, height }: { name: string; src: string; width: number; height: number }) {
  const ratio = width / height;
  const h = Math.min(Math.sqrt(LOGO_AREA / ratio), MAX_HEIGHT);
  const w = Math.round(h * ratio);
  return (
    <div className="flex h-14 items-center sm:h-16">
      <Image
        src={src}
        alt={name}
        width={width}
        height={height}
        unoptimized
        style={{ "--logo-w": `${w}px` } as React.CSSProperties}
        className="h-auto w-[calc(var(--logo-w)*0.78)] max-w-none transition-transform duration-300 hover:scale-105 sm:w-[var(--logo-w)]"
      />
    </div>
  );
}

export function ClientLogos() {
  const rows = [clientLogos.slice(0, 8), clientLogos.slice(8)];
  return (
    <section aria-labelledby="clients-title" className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="container-site">
        <h2 id="clients-title" className="mx-auto max-w-xl text-center text-base font-medium leading-relaxed text-ink-600">
          Trusted by <span className="font-semibold text-ink-900">150+ brands</span> across SaaS, healthcare, marketing, B2B and
          enterprise
        </h2>
      </div>

      {/* Two rows moving in opposite directions, full colour */}
      <div className="mt-8 space-y-6 lg:mt-10">
        {rows.map((row, r) => (
          <Marquee
            key={r}
            reverse={r === 1}
            duration={70}
            spacing="pr-12 sm:pr-16"
            items={row.map((l) => (
              <LogoTile key={l.name} {...l} />
            ))}
          />
        ))}
      </div>
    </section>
  );
}
