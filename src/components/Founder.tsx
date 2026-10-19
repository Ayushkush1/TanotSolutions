import Image from "next/image";
import { founder, links, team } from "@/content/site";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

export function Founder() {
  return (
    <Section id="about" labelledBy="founder-title">
      {/* Desktop: columns stretch, so the photo frame matches the text block's height exactly */}
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-16">
        <div className="lg:col-span-4">
          <div className="mx-auto max-w-xs rounded-[1.75rem] bg-gradient-to-br from-brand-100 to-leaf-100 p-3 sm:max-w-sm lg:h-full lg:max-w-none">
            <Image
              src={founder.photo}
              alt={`${founder.name}, ${founder.role} at Tanot Solutions`}
              width={1455}
              height={1800}
              sizes="(min-width: 1024px) 380px, 320px"
              className="aspect-[4/5] w-full rounded-2xl bg-ink-400/10 object-cover object-top lg:aspect-auto lg:h-full"
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <Eyebrow>Meet the founder</Eyebrow>
          <h2 id="founder-title" className="text-h2">
            {founder.title}
          </h2>
          <div className="text-lead mt-6 space-y-4">
            {founder.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 border-l-4 border-brand-500 pl-4">
            <p className="text-lg font-semibold text-ink-900">{founder.name}</p>
            <p className="text-[0.9375rem] text-ink-500">{founder.role}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={links.bookCall} arrow>
              Book a call with Renu
            </Button>
            <Button href={founder.linkedin} variant="secondary">
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-28">
        <h2 id="team-title" className="text-h2 text-center">
          The team behind your results
        </h2>
        <ul aria-labelledby="team-title" className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-14 lg:grid-cols-4">
          {team.map((m, i) => (
            <li key={m.name} className="rounded-2xl border border-line bg-white p-5 text-center shadow-card sm:p-6">
              {/* Monogram until real team photos are supplied — better than grey placeholder images */}
              <span
                className={`mx-auto grid size-20 place-items-center rounded-full text-xl font-bold sm:size-24 sm:text-2xl ${
                  i % 2 ? "bg-leaf-50 text-leaf-600" : "bg-brand-50 text-brand-600"
                }`}
              >
                {initials(m.name)}
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink-900 sm:text-lg">{m.name}</h3>
              <p className="mt-1 text-sm leading-snug text-ink-500">{m.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
