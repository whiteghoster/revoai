import { Navbar } from "@/components/Landing/Navbar";
import { HeroSection } from "@/components/Landing/HeroSection";
import { FeatureSection } from "@/components/Landing/FeatureSection";
import { ActionCardsSection } from "@/components/Landing/ActionCardsSection";
import { UseCasesSection } from "@/components/Landing/UseCasesSection";
import { IntegrationsGrid } from "@/components/Landing/IntegrationsGrid";
import { PricingSection } from "@/components/Landing/PricingSection";
import { TestimonialsSection } from "@/components/Landing/TestimonialsSection";
import CTASection from "@/components/Landing/CTASection";
import { Footer } from "@/components/Landing/Footer";
import { PromoPopup } from "@/components/Landing/PromoPopup";
import { SignupPopup } from "@/components/Landing/SignupPopup";
import { SEOHead } from "@/components/Landing/SEOHead";
import Form from "@/components/Landing/form";
import { ScrollReveal } from "@/components/Landing/ScrollReveal";

export default function Home() {
  return (
    <>
      <SEOHead
        title="RevoAI — AI-Powered Voice Agent Platform"
        description="Automate sales, support, and scheduling with intelligent AI voice agents that sound human."
        canonicalUrl="https://revoai.co"
      />
      <Navbar />
      <main className="landing-page-motion">
        <ScrollReveal animation="rotate-up" parallax={10}><HeroSection /></ScrollReveal>
        <ScrollReveal animation="fade-right" parallax={26}><FeatureSection /></ScrollReveal>
        <ScrollReveal animation="float-in" parallax={20}><ActionCardsSection /></ScrollReveal>
        <ScrollReveal animation="fade-left" parallax={24}><UseCasesSection /></ScrollReveal>
        <ScrollReveal animation="blur-up" parallax={30}><IntegrationsGrid /></ScrollReveal>
        <ScrollReveal animation="rotate-up" parallax={18}><PricingSection /></ScrollReveal>
        <ScrollReveal animation="fade-right" parallax={24}><TestimonialsSection /></ScrollReveal>
        <ScrollReveal animation="fade-left" parallax={22}><Form /></ScrollReveal>
        <ScrollReveal animation="clip-up" parallax={12}><CTASection /></ScrollReveal>
      </main>
      <ScrollReveal animation="fade-up" parallax={8}><Footer /></ScrollReveal>
      <PromoPopup />
      <SignupPopup />
    </>
  );
}
