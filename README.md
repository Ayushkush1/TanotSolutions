# Tanot Solutions — Homepage redesign (test mockup)

Redesign of https://tanotsolutions.com/home2/ built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```

## Structure

```
src/
  app/
    layout.tsx       Inter font (next/font, self-hosted), metadata, OG tags
    page.tsx         Section order + Organization JSON-LD
    globals.css      Design tokens (@theme), fluid type scale, container
  content/site.ts    All copy, links and image paths (CMS-ready, no copy inside components)
  components/
    ui/Button.tsx    One button system: primary / secondary / inverse variants, md / lg sizes
    ui/Section.tsx   Shared section rhythm, eyebrow and section heading
    Header, Hero, LeadForm, ClientLogos, Reviews, Services, CaseStudy,
    WhyUs, Awards, Founder, FeaturedOn, Faq, Blog, CtaBanner, Footer
public/images/       Assets taken from the live site
```

## Design system in one glance

| Token | Value |
|---|---|
| Typeface | Inter only (live page loads Inter, Roboto, Roboto Slab, Poppins, Syne, DM Sans) |
| Brand | `#118dd1` (accent, display text) · `#0a76b4` behind white text (4.9:1, WCAG AA) |
| Accent | Logo green `#63af40` for checks / positive states |
| Container | 1312px max (1248px content), 20 / 24 / 32px side gutters |
| Section rhythm | 64 / 80 / 96px vertical padding (mobile / tablet / desktop) |
| Radius | 12px controls · 16px cards · 24px feature panels |
| Type scale | Display 36→56px · H2 30→42px · H3 20px · Lead 17→19px · Body 16px |

## Wiring needed for production

- `LeadForm` currently shows a success state only; connect it to an API route / CRM.
- Team photos are monograms until real photos are supplied.
- The case-study screenshot is 512×296 on the live site; a 2× export would make it sharp.
