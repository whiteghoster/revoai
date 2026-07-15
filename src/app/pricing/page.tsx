import type { Metadata } from "next";
import { Navbar } from "@/components/Landing/Navbar";
import { PricingSection } from "@/components/Landing/PricingSection";
import { CTASection } from "@/components/Landing/CTASection";
import { Footer } from "@/components/Landing/Footer";
import { ScrollReveal } from "@/components/Landing/ScrollReveal";

export const metadata: Metadata = {
  title: { absolute: "Pricing — RevoAI" },
  description: "Simple, transparent pricing for AI voice agents. Start free, scale as you grow.",
  alternates: { canonical: "https://revoai.co/pricing" },
  openGraph: { title: "Pricing — RevoAI", description: "Simple, transparent pricing for AI voice agents. Start free, scale as you grow.", url: "https://revoai.co/pricing" },
  twitter: { title: "Pricing — RevoAI", description: "Simple, transparent pricing for AI voice agents. Start free, scale as you grow." },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 landing-page-motion">
        <ScrollReveal animation="rotate-up" parallax={18}><PricingSection /></ScrollReveal>
        <ScrollReveal animation="clip-up" parallax={12}><CTASection /></ScrollReveal>
      </main>
      <ScrollReveal animation="fade-up" parallax={8}><Footer /></ScrollReveal>
    </>
  );
}
