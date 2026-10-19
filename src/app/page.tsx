import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { CaseStudy } from "@/components/CaseStudy";
import { WhyUs } from "@/components/WhyUs";
import { Awards } from "@/components/Awards";
import { Founder } from "@/components/Founder";
import { FeaturedOn } from "@/components/FeaturedOn";
import { Faq } from "@/components/Faq";
import { Blog } from "@/components/Blog";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { links } from "@/content/site";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tanot Solutions",
  url: "https://tanotsolutions.com/",
  logo: "https://tanotsolutions.com/wp-content/uploads/2025/03/TS-blue-logo-1536x370.png",
  email: links.email,
  address: { "@type": "PostalAddress", addressLocality: "Jodhpur", addressRegion: "Rajasthan", addressCountry: "IN" },
  founder: { "@type": "Person", name: "Renu Sharma" },
  sameAs: [links.linkedin, links.facebook, links.instagram, links.clutch],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Header />
      <main id="main">
        <Hero />
        <ClientLogos />
        <Reviews />
        <Services />
        <CaseStudy />
        <WhyUs />
        <Awards />
        <Founder />
        <FeaturedOn />
        <Faq />
        <Blog />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
