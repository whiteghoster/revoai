import { Navbar } from "@/components/Landing/Navbar";
import { FeaturesGrid } from "@/components/Landing/FeaturesGrid";
import { FeatureSection } from "@/components/Landing/FeatureSection";
import { CTASection } from "@/components/Landing/CTASection";
import { Footer } from "@/components/Landing/Footer";
import { SEOHead } from "@/components/Landing/SEOHead";

export default function FeaturesPage() {
  return (
    <>
      <SEOHead title="Features — Diploy" description="Explore all features of the Diploy AI voice agent platform." canonicalUrl="https://diploy.in/features" />
      <Navbar />
      <main className="pt-20">
        <FeaturesGrid />
        <FeatureSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
