import { Navbar } from "@/components/Landing/Navbar";
import { PricingSection } from "@/components/Landing/PricingSection";
import { CTASection } from "@/components/Landing/CTASection";
import { Footer } from "@/components/Landing/Footer";
import { SEOHead } from "@/components/Landing/SEOHead";

export default function PricingPage() {
  return (
    <>
      <SEOHead title="Pricing — Diploy" description="Simple, transparent pricing for AI voice agents. Start free, scale as you grow." canonicalUrl="https://diploy.in/pricing" />
      <Navbar />
      <main className="pt-20">
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
