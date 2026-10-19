import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tanotsolutions.com"),
  title: "Best SEO Services for Google, AI Search & Revenue Growth | Tanot Solutions",
  description:
    "Tanot Solutions helps businesses rank higher on Google and get recommended by ChatGPT, Perplexity and Google AI Overviews with technical SEO, content, link building and local SEO.",
  openGraph: {
    title: "Tanot Solutions — SEO for Google, AI Search and Revenue Growth",
    description:
      "Technical SEO, AI SEO, content marketing and high-authority link building tied to leads and revenue.",
    url: "https://tanotsolutions.com/",
    siteName: "Tanot Solutions",
    images: ["/images/logo.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#118dd1",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
