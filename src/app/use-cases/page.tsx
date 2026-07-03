import { Navbar } from "@/components/Landing/Navbar";
import { UseCasesSection } from "@/components/Landing/UseCasesSection";
import { UseCaseTabs } from "@/components/Landing/UseCaseTabs";
import { AITechnologyShowcase } from "@/components/Landing/AITechnologyShowcase";
import { CTASection } from "@/components/Landing/CTASection";
import { Footer } from "@/components/Landing/Footer";
import { SEOHead } from "@/components/Landing/SEOHead";
import { ScrollReveal } from "@/components/Landing/ScrollReveal";

export default function UseCasesPage() {
  return (
    <>
      <SEOHead title="Use Cases — RevoAI" description="See how businesses use RevoAI AI voice agents for sales, support, and scheduling." canonicalUrl="https://revoai.co/use-cases" />
      <Navbar />
      <main className="pt-20 landing-page-motion">
        <ScrollReveal animation="fade-up"><UseCasesSection /></ScrollReveal>
        <ScrollReveal animation="fade-right"><UseCaseTabs /></ScrollReveal>
        <ScrollReveal animation="fade-left"><AITechnologyShowcase /></ScrollReveal>
        <ScrollReveal animation="clip-up" parallax={12}><CTASection /></ScrollReveal>
      </main>
      <ScrollReveal animation="fade-up" parallax={8}><Footer /></ScrollReveal>
    </>
  );
}
