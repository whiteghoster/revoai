import type { Metadata } from "next";
import { Navbar } from "@/components/Landing/Navbar";
import { FeaturesGrid } from "@/components/Landing/FeaturesGrid";
import { FeatureSection } from "@/components/Landing/FeatureSection";
import { CTASection } from "@/components/Landing/CTASection";
import { Footer } from "@/components/Landing/Footer";
import { ScrollReveal } from "@/components/Landing/ScrollReveal";

export const metadata: Metadata = {
  title: { absolute: "Features — RevoAI" },
  description: "Explore all features of the RevoAI AI voice agent platform.",
  alternates: { canonical: "https://revoai.co/features" },
  openGraph: { title: "Features — RevoAI", description: "Explore all features of the RevoAI AI voice agent platform.", url: "https://revoai.co/features" },
  twitter: { title: "Features — RevoAI", description: "Explore all features of the RevoAI AI voice agent platform." },
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 landing-page-motion">
        <ScrollReveal animation="fade-up"><FeaturesGrid /></ScrollReveal>
        <ScrollReveal animation="fade-right" parallax={26}><FeatureSection /></ScrollReveal>
        <ScrollReveal animation="clip-up" parallax={12}><CTASection /></ScrollReveal>
      </main>
      <ScrollReveal animation="fade-up" parallax={8}><Footer /></ScrollReveal>
    </>
  );
}
