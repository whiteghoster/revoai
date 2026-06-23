import { Navbar } from "@/components/Landing/Navbar";
import { HeroSection } from "@/components/Landing/HeroSection";
import { ActionCardsSection } from "@/components/Landing/ActionCardsSection";
import { FeatureSection } from "@/components/Landing/FeatureSection";
import { PricingSection } from "@/components/Landing/PricingSection";
import { TestimonialsSection } from "@/components/Landing/TestimonialsSection";
import CTASection from "@/components/Landing/CTASection";
import { Footer } from "@/components/Landing/Footer";
import { PromoPopup } from "@/components/Landing/PromoPopup";
import { SignupPopup } from "@/components/Landing/SignupPopup";
import { SEOHead } from "@/components/Landing/SEOHead";
import Form  from "@/components/Landing/form";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Diploy — AI-Powered Voice Agent Platform"
        description="Automate sales, support, and scheduling with intelligent AI voice agents that sound human."
        canonicalUrl="https://diploy.in"
      />
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <ActionCardsSection />
        <PricingSection />
        <TestimonialsSection />
        <Form />
        <CTASection />
      </main>
      <Footer />
      <PromoPopup />
      <SignupPopup />
    </>
  );
}
