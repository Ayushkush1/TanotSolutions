import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { footer, links } from "@/content/site";

const socials = [
  { label: "LinkedIn", href: links.linkedin, Icon: Linkedin },
  { label: "Facebook", href: links.facebook, Icon: Facebook },
  { label: "Instagram", href: links.instagram, Icon: Instagram },
  { label: "Email", href: `mailto:${links.email}`, Icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-400">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            {/* white plate keeps the full-colour logo legible on the dark footer */}
            <Link href="/" aria-label="Tanot Solutions home" className="inline-block rounded-xl bg-white px-3.5 py-2.5">
              <Image src="/images/logo.png" alt="Tanot Solutions" width={1536} height={370} className="h-7 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed">{footer.blurb}</p>
            <ul className="mt-6 flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="grid size-10 place-items-center rounded-lg border border-white/10 text-ink-400 transition-colors hover:border-white/30 hover:text-white"
                  >
                    <Icon className="size-[1.125rem]" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-sm text-ink-500">Sales inquiry</p>
              <a href={`mailto:${links.email}`} className="mt-1 inline-block text-lg font-medium text-white hover:text-brand-300">
                {links.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
            {footer.columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="text-sm font-semibold text-white">{col.title}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-[0.9375rem] transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tanot Solutions. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <MapPin className="size-4" aria-hidden /> {footer.location}
          </p>
          <ul className="flex gap-6">
            {footer.legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
