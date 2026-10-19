// All homepage copy lives here so sections stay purely presentational
// and a CMS (or MDX) can replace this file later without touching layout.

const SITE = "https://tanotsolutions.com";

export const links = {
  bookCall: `${SITE}/lets-talk/`,
  caseStudies: `${SITE}/case-studies/`,
  reviews: `${SITE}/link-building-service-reviews/`,
  linkBuilding: `${SITE}/services/link-building/`,
  about: `${SITE}/about/`,
  featuredIn: `${SITE}/featured-in/`,
  contact: `${SITE}/contact/`,
  blog: `${SITE}/blog/`,
  clutch: "https://clutch.co/profile/tanot-solutions",
  linkedin: "https://www.linkedin.com/company/tanot-solutions",
  facebook: "https://www.facebook.com/tanotsolutions",
  instagram: "https://www.instagram.com/thetanotsolutions/",
  email: "info@tanotsolutions.com",
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: "Case Studies", href: links.caseStudies },
  { label: "Reviews", href: links.reviews },
  { label: "Services", href: "#services", children: [{ label: "Link Building", href: links.linkBuilding }] },
  {
    label: "Company",
    href: links.about,
    children: [
      { label: "About", href: links.about },
      { label: "Featured In", href: links.featuredIn },
      { label: "Contact Us", href: links.contact },
    ],
  },
  { label: "Blog", href: links.blog },
];

export const hero = {
  titleAccent: "Best SEO Services",
  titleRest: "for Google, AI Search, and Revenue Growth",
  body: "Rank higher on Google and get recommended by ChatGPT, Perplexity and Google AI Overviews, with SEO built to bring qualified leads and measurable revenue.",
};

export const stats = [
  { value: "150+", label: "Clients served", icon: "users" },
  { value: "98%", label: "Client satisfaction", icon: "smile" },
  { value: "11+", label: "Years of SEO experience", icon: "award" },
  { value: "2+ yrs", label: "Average client retention", icon: "handshake" },
] as const;

// [name, intrinsic width, intrinsic height] — real sizes keep aspect ratios exact at a fixed display height
export const clientLogos = (
  [
    ["Enhancv", 168, 26], ["LearnTastic", 216, 33], ["Kommo", 140, 31], ["SendPulse", 192, 30],
    ["EngageBay", 187, 32], ["FreshLearn", 220, 43], ["StationX", 198, 37], ["LeadSync", 199, 50],
    ["Smoothstack", 213, 35], ["Gravyty", 163, 44], ["BeamJobs", 141, 31], ["TraceFuse", 204, 35],
    ["Movinnza", 200, 53], ["American Health Care Academy", 161, 49], ["Flux Engine", 98, 78], ["Ultahost", 191, 42],
  ] as const
).map(([name, width, height], i) => ({ name, width, height, src: `/images/clients/${String(i + 1).padStart(2, "0")}.png` }));

export type Testimonial = { quote: string; highlight?: string; name: string; role: string };

export const videoTestimonial = {
  vimeoId: "888963147",
  name: "Lisa Warren",
  role: "Content Manager, HR Company",
};

// The live page repeats Sandeep's review twice; each review now appears once.
export const testimonials: Testimonial[] = [
  {
    quote:
      "After we started link building with Tanot Solutions, they helped our CRM’s high-converting product page rank higher with an impressive 80% increase in traffic and an equally exceptional 80% increase in the total number of sign-ups every day.",
    name: "Sandeep Das",
    role: "Marketing Manager, CRM SaaS Company",
  },
  {
    quote:
      "We’ve been impressed by their ability to consistently build high-quality backlinks, which are very challenging to achieve. We work with highly reputed brands, where quality guidelines are stringent and difficult for many agencies to meet. However, Tanot Solutions consistently meets these standards.",
    highlight: "impressed by their ability to consistently build high-quality backlinks",
    name: "Michael Dunlop",
    role: "Director of LinkBuilder.io",
  },
  {
    quote:
      "Since we started working with Tanot Solutions on our link-building efforts, we’ve seen steady increases in our organic traffic MoM over the past 6 months. I can also honestly say that Renu and the team are very responsive and punctual, something I really appreciate from our partners.",
    name: "Marko Spasic",
    role: "Marketing Manager, Hosting Company",
  },
];

export type Service = {
  id: string;
  title: string;
  body: string;
  bullets: string[];
  cta: string;
  href: string;
};

export const services: Service[] = [
  {
    id: "link-building",
    title: "Link Building",
    body: "We earn high-quality, white-hat backlinks from trusted websites in your industry. These links show Google your business is credible, helping you rank higher and stay there.",
    bullets: [
      "High-authority guest posts",
      "Contextual niche edit links",
      "Industry-relevant websites only",
      "Site approval before placement",
      "White-label agency solutions",
      "Pay for live links",
    ],
    cta: "Get link building plan",
    href: links.linkBuilding,
  },
  {
    id: "technical-seo",
    title: "Technical SEO",
    body: "We fix the hidden issues that stop Google and AI from finding, understanding, and ranking your website. A faster, healthier site means better rankings, more AI visibility and a smoother experience that turns visitors into customers.",
    bullets: [
      "Complete website SEO audits",
      "Faster page load speed",
      "Core Web Vitals optimization",
      "Crawling and indexing fixes",
      "Schema markup implementation",
      "Mobile and AI-ready setup",
    ],
    cta: "Get your free technical SEO audit",
    href: links.bookCall,
  },
  {
    id: "ai-seo",
    title: "AI SEO",
    body: "Your customers now ask ChatGPT, Perplexity, and Google AI Overviews for recommendations. We optimize your brand so these AI tools mention, cite, and recommend your business when buyers are searching.",
    bullets: [
      "Google AI Overviews visibility",
      "ChatGPT and Perplexity mentions",
      "Answer engine optimization (AEO)",
      "AI-friendly content structure",
      "AI-ready structured data",
      "AI visibility performance tracking",
    ],
    cta: "Get your free AI SEO audit",
    href: links.bookCall,
  },
  {
    id: "local-seo",
    title: "Local SEO",
    body: "We help nearby customers find you on Google Search and Maps the moment they need your services. More local visibility means more calls, direction requests, and visits from ready-to-buy customers.",
    bullets: [
      "Google Business Profile optimization",
      "Higher Google Maps rankings",
      "Local keyword targeting",
      "Consistent directory listings",
      "Local community backlinks",
      "Review and reputation management",
    ],
    cta: "Get your free local SEO audit",
    href: links.bookCall,
  },
  {
    id: "saas-seo",
    title: "SaaS SEO",
    body: "SaaS growth needs a different SEO playbook. We help software companies rank for the searches buyers make right before choosing a tool, driving more trials, demos, and recurring revenue.",
    bullets: [
      "More demo requests",
      "Steady monthly sign-up growth",
      "Revenue-focused SEO strategy",
      "AI search visibility",
      "Topical authority building",
      "Links from top SaaS websites",
    ],
    cta: "Get your free SaaS SEO audit",
    href: links.bookCall,
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    body: "We create content that answers your customers' questions, ranks on Google, and guides readers toward becoming buyers. Every piece is planned around what your audience is actually searching for.",
    bullets: [
      "Keyword and intent research",
      "AI-citation-ready content",
      "Content gap analysis",
      "E-E-A-T content strategy",
      "Conversion-focused SEO copywriting",
      "Content refresh and updates",
    ],
    cta: "Get your free content marketing audit",
    href: links.bookCall,
  },
];

export const caseStudy = {
  title: "How an HR company grew from zero to 6,200 monthly visitors in 8 months",
  body: "Starting from a domain with almost no authority, we built a steady flow of niche-relevant editorial links, paired with the required technical SEO and content changes. Traffic grew from zero to 6,200 monthly visitors in 8 months.",
  image: "/images/case-study-hr.png",
  metrics: [
    { label: "Monthly visitors", from: "0", to: "6,200" },
    { label: "AI citations", from: "0", to: "1.3K" },
    { label: "Ranking keywords", from: "0", to: "1.6K" },
  ],
};

export const reasons = [
  { title: "Results, not vanity metrics", body: "Every campaign is tied to rankings, AI visibility, leads, sales and revenue.", icon: "target" },
  { title: "Performance-based pricing", body: "No upfront payment. Pay only for verified deliverables.", icon: "wallet" },
  { title: "Enterprise-grade quality", body: "Links and strategy that meet global brand standards, at scale.", icon: "shield" },
  { title: "100% transparent process", body: "You approve everything, including content, links and technical changes, before we go ahead.", icon: "eye" },
  { title: "AI-first SEO", body: "Visible in AI Overviews, ChatGPT and Perplexity, not just Google.", icon: "sparkles" },
  { title: "An extension of your team", body: "Dedicated specialists, clear communication, genuine relationship.", icon: "users" },
] as const;

export const awards = [
  { title: "Rajasthan Women Leaders Award", src: "/images/awards/rajasthan-women-leaders.jpg", fit: "cover" },
  { title: "Most Trusted Global SEO Solutions Provider", src: "/images/awards/most-trusted-global.jpg", fit: "cover" },
  { title: "Best ROI-Focused SEO Agency 2026", src: "/images/awards/best-roi-certificate.png", fit: "contain" },
  { title: "Sardar Patel Unity Awards 2026", src: "/images/awards/sardar-patel-unity.png", fit: "contain" },
  { title: "Clutch Awards", src: "/images/awards/clutch-awards.jpg", fit: "contain" },
  { title: "Best ROI-Focused SEO Agency 2026", src: "/images/awards/best-roi-trophy.png", fit: "contain" },
] as const;

export const founder = {
  name: "Renu Sharma",
  role: "Founder & Head of SEO Strategy",
  photo: "/images/renu-sharma.webp",
  title: "Hi, I’m Renu. I built Tanot Solutions to make SEO accountable.",
  paragraphs: [
    "For over 11 years, I’ve helped brands grow through search, from early-stage startups to global enterprises. Along the way, I saw how easily businesses lose trust in SEO: vague reports, guaranteed #1 rankings that never happen, cheap spammy links that lead to penalties, and agencies that disappear once the contract is signed.",
    "I founded Tanot Solutions in 2020 to change that, with honest strategy, ethical practices, and complete transparency at every step.",
  ],
  linkedin: links.linkedin,
};

export const team = [
  { name: "Vikas Sharma", role: "Co-Founder & Head of Operations" },
  { name: "Pradeep", role: "Content Manager" },
  { name: "Ravina Jangid", role: "Link Building Expert" },
  { name: "Aniket Mukherjee", role: "Link Building Expert" },
];

export const press = [
  { name: "Entrepreneur", src: "/images/press/entrepreneur.png" },
  { name: "HubSpot", src: "/images/press/hubspot.webp" },
  { name: "Forbes", src: "/images/press/forbes.png" },
  { name: "GoDaddy", src: "/images/press/godaddy.png" },
  { name: "The Tribune", src: "/images/press/tribune.webp" },
];

export const faqs = [
  {
    q: "How will working with Tanot Solutions help grow my business?",
    a: "We focus on what actually moves your business forward: qualified traffic, leads, and revenue, not just rankings. From technical SEO and content strategy to high-authority link building, every campaign is built around your goals and designed to attract real buyers. You’ll always know what we’re doing, why we’re doing it, and how it’s contributing to your growth.",
  },
  {
    q: "Are your link building services safe and Google-friendly?",
    a: "Yes. We never use private blog networks, bulk link packages, or spammy directories. Every link is earned through genuine outreach on relevant, high-quality websites with real audiences and traffic. Our approach follows Google’s guidelines, so you build lasting authority without risking penalties.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Most businesses start seeing early improvements within 3 to 6 months, with stronger, compounding growth over 6 to 12 months. Timelines depend on your industry, competition, website health, and starting point. We’ll never promise overnight rankings. Instead, we’ll give you a realistic roadmap and keep you updated on progress every step of the way.",
  },
  {
    q: "Do you offer complete SEO services or only link building?",
    a: "We offer end-to-end SEO. That includes technical audits, on-page optimization, keyword research, content strategy, local SEO, and link building. You can work with us for a full SEO strategy or choose specific services based on what your business needs.",
  },
  {
    q: "Will I have visibility into the work being done?",
    a: "Absolutely. Transparency is at the core of how we work. You’ll receive clear, easy-to-understand reports showing the work completed, links built, rankings, traffic, and progress toward your goals. You’ll also have a dedicated point of contact, so you’re never left wondering what’s happening with your campaign.",
  },
  {
    q: "Do you work with agencies on a white-label basis?",
    a: "Yes. We partner with agencies worldwide to deliver white-label SEO and link building under their brand. Our team works quietly in the background while you maintain the client relationship, with unbranded reports, flexible packages, and complete confidentiality.",
  },
];

export const posts = [
  {
    title: "11 Best GEO Agencies Helping B2B Brands Win AI Search",
    category: "SEO",
    date: "2026-10-16",
    image: "/images/blog/geo-agencies.jpg",
    href: `${SITE}/blog/best-geo-agencies/`,
  },
  {
    title: "Link Building for Startups: How to Get Quality Backlinks on a Budget",
    category: "Link Building",
    date: "2026-10-06",
    image: "/images/blog/link-building-startups.jpg",
    href: `${SITE}/blog/link-building-for-startups/`,
  },
  {
    title: "13 White Hat SEO Techniques: How to Rank Higher on Google & AI Search",
    category: "SEO",
    date: "2026-10-02",
    image: "/images/blog/white-hat-seo.jpg",
    href: `${SITE}/blog/white-hat-seo-techniques/`,
  },
];

export const footer = {
  blurb:
    "We are an SEO and link-building agency that helps global brands 5X their ROI through strategic SEO and high-quality backlink strategies.",
  columns: [
    {
      title: "Company",
      links: [
        { label: "Home", href: `${SITE}/` },
        { label: "About Us", href: links.about },
        { label: "Blog", href: links.blog },
        { label: "Case Studies", href: links.caseStudies },
        { label: "Client Reviews", href: links.reviews },
        { label: "Contact", href: links.contact },
      ],
    },
    {
      title: "Services",
      links: services.map((s) => ({ label: s.title, href: s.id === "link-building" ? links.linkBuilding : `#services` })),
    },
    {
      title: "Resources",
      links: [
        { label: "Choose an Agency", href: `${SITE}/blog/choose-link-building-agency/` },
        { label: "Link Building Tools", href: `${SITE}/blog/link-building-software/` },
        { label: "Contextual Links", href: `${SITE}/blog/contextual-link-building/` },
        { label: "Free Backlinks Guide", href: `${SITE}/blog/how-to-get-free-backlinks/` },
        { label: "Buy Quality Backlinks", href: `${SITE}/blog/buy-high-quality-backlinks/` },
        { label: "SaaS Link Building", href: `${SITE}/blog/saas-link-building/` },
      ],
    },
  ],
  location: "Jodhpur, Rajasthan, India",
  legal: [
    { label: "Privacy Policy", href: `${SITE}/privacy-policy/` },
    { label: "Terms of Service", href: `${SITE}/terms-of-service/` },
  ],
};
