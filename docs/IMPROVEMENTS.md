# Tanot Solutions — Homepage Redesign: What We Improved

Oct 19, 2026 · @Ayush TGT

## Summary

We rebuilt the [/home2](https://tanotsolutions.com/home2/) landing page with the same content, brand colours, logo and images, and fixed the spacing, typography, alignment and mobile layout issues across all 16 sections.

- **Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS v4, statically rendered.
- **Code:** [github.com/Ayushkush1/TanotSolutions](https://github.com/Ayushkush1/TanotSolutions)
- **Fonts:** 6 font families reduced to 1 (Inter), self-hosted.
- **Layout:** one 1248px content width on desktop, so every section edge lines up (the live page uses 4 different side gutters).
- **Mobile:** tested at 360, 390, 768, 1024, 1280 and 1536px with no horizontal scrolling at any width.
- **SEO structure:** 1 H1 instead of 11+, plus FAQ and Organization structured data.

## Design system

Every section now draws from one set of tokens, so spacing, type and colour stay consistent as new pages are added.

| Token | Live page (/home2) | Redesign |
| --- | --- | --- |
| Typeface | Inter, Roboto, Roboto Slab, Poppins, Syne, DM Sans | Inter only |
| Action colour | 4 blues: #118dd1, #43a5d9, #1a8cd0, #1a73e8 | #0a76b4 for buttons, #118dd1 for the headline accent |
| Logo green | Stat icon circles only | #63af40 / #4e9330 for growth and success: checks, stat icons, case-study results |
| Button contrast | White on #118dd1 = 3.6:1 (fails WCAG AA) | White on #0a76b4 = 4.9:1 (passes AA) |
| Content width | 70, 80, 90 and 128px gutters at 1440px | 1248px content, 32px gutters, every section |
| Section spacing | Varies per section | 64 / 80 / 96px (phone / tablet / desktop) |
| Type scale | Headings 30–60px with no clear steps | Hero 34–52px, section titles 30–42px, card titles 20px, body 16–19px |
| Corner radius | Mixed | 12px controls, 16px cards, 24px feature panels |

Blue stays the single action colour so visitors always know which button matters; green appears only where it means growth.

## Global fixes

Seven issues affected the whole page, not one section, so they were fixed at the system level.

| Issue on the live page | Fix |
| --- | --- |
| Services block switches to Poppins, FAQ and buttons render in Roboto, footer in DM Sans | One font everywhere, loaded through next/font with no layout shift |
| Section edges sit at 70px, awards grid at 90px, CTA banner at 80px, footer at 128px | One shared container, so every left and right edge lines up |
| Every section title is an H1 (11+ on the page) | One H1 in the hero, H2 per section, H3 per card |
| Mixed capitalisation ("Trusted By 150+ Brands Across…", "Best Roi Focused") | Sentence case throughout |
| Many buttons link to # (See Client Results, Learn More, Read full case study, Book a Call, Contact Us) | Every button goes to a real page or an on-page section |
| Cards in the same row have different heights | Equal-height cards with content pinned to consistent positions |
| No structured data | FAQPage and Organization schema added for rich results and AI citations |

Keyboard focus states, a skip-to-content link, ARIA tabs and accordions, and reduced-motion support were also added.

## Section by section

All 16 sections keep their original content and order; the table lists what changed in each.

| Section | Before | After |
| --- | --- | --- |
| Navbar | Solid white bar, heavy black CTA off-brand | Transparent over the hero, becomes a floating card on scroll, aligned to the content width; brand-blue "Let's talk" CTA |
| Hero | Headline not aligned with the form; large gap above the CTAs; 50-word description; Clutch badge floating alone | Content centred in the first screen with equal space above and below; 24-word description; Clutch rating in a trust row |
| Lead form | 5 stacked fields, generic "Submit" | Name and email/website side by side, proper input types and autofill, "Send my request", success state |
| Stats | Dark grey band, labels at different heights, "02+" | Light 4-up card with aligned icons and labels, "2+ yrs" |
| Client logos | Boxed tiles, mismatched logo sizes, oversized heading | Two full-colour marquee rows moving in opposite directions, each logo sized for equal visual weight |
| Reviews | Same review shown twice, uneven cards, buttons far below | Each review once, equal cards with author at the bottom, buttons beside the heading |
| Services | Different font (Poppins), lighter blue, different radius | Same tokens as the page; keyboard-accessible tabs on desktop, accordion on mobile |
| Case study | Image floats in empty space beside a 4-line heading | Story row on top; screenshot and results share exact top and bottom edges; results in green |
| Why us | Grid narrower than the page, 6 identical check icons | Aligned grid, one icon per benefit, sticky intro column |
| Awards | Random image sizes and crops | Fixed 4:3 frame for every award, title underneath |
| Founder | Role line repeats the name; oversized photo | Photo matched to the text block height; name and role fixed |
| Team | Grey placeholder images | Branded initials until real photos arrive |
| Featured on | Static row with trailing "and many more" | Aligned label with a seamless logo marquee |
| FAQ | Six solid-blue bars, stray leading space in answers | Light divider accordion, smooth open and close, FAQ schema |
| Blog | Gradient overlay on images, serif metadata, Title Case | Clean 16:10 thumbnails, sentence case, whole card clickable |
| CTA banner + footer | Different side gutters from the page | Aligned to the shared container; banner glow uses both logo colours |

## Mobile experience

The live page breaks on phones; the redesign was built and checked at phone width for every section.

| On the live page at 390px | In the redesign |
| --- | --- |
| Testimonial cards squeeze into \~80px columns, one letter per line | Cards stack full width and read normally |
| Content stops short of the right edge, leaving a dead strip | Content fills the screen with 20px side margins |
| Side margins only 10px | 20px on phones, 24px on tablets |
| Long paragraphs centred, case-study copy at 30px | Left-aligned body text at 16–17px |
| Logo grid of 6 uneven rows | Two scrolling logo rows |
| Buttons wrap to two lines at different widths | Full-width buttons, stacked |
| Services panels stacked as one long page | Accordion: tap a service to open it |

The navbar becomes a floating bar with a matching floating menu panel, and no page width from 360px to 1536px scrolls sideways.

## Copy and content corrections

The wording is yours; only these errors and inconsistencies were changed.

| Live page | Redesign | Why |
| --- | --- | --- |
| "the traffic tanked up from zero to 6200" | "Traffic grew from zero to 6,200" | "Tanked" means the traffic crashed |
| "0 - 6200", "0- 1.3K Citations", "0-1.6K" | 0 → 6,200 · 0 → 1.3K · 0 → 1.6K | One consistent number format |
| "02+ years average client retention" | "2+ yrs average client retention" | Leading zero reads as a typo |
| Sandeep Das review shown twice | Shown once | Duplicate content |
| "Renu Sharma Founder & Head of SEO Strategy" under the name | "Founder & Head of SEO Strategy" | Name was repeated |
| Navbar and hero CTAs say nearly the same thing; form says "Submit" | "Let's talk" · "Book a free strategy call" · "Send my request" | Each button names its own action |
| Hero description, 50 words | 24 words | Keeps attention on the headline |

## What we need from your team

Four inputs turn this mockup into a production-ready page.

- [ ] Team photos for Vikas, Pradeep, Ravina and Aniket (initials are shown until then)
- [ ] A higher-resolution case-study screenshot: the current one is 512×296px and has a hand-drawn yellow redaction
- [ ] Where lead-form submissions should go (CRM, email address or both)
- [ ] Logo files as SVG for the client and press logos, so they stay sharp on high-resolution screens
