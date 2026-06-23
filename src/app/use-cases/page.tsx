import { Navbar } from "@/components/Landing/Navbar";
import { UseCasesSection } from "@/components/Landing/UseCasesSection";
import { UseCaseTabs } from "@/components/Landing/UseCaseTabs";
import { AITechnologyShowcase } from "@/components/Landing/AITechnologyShowcase";
import { CTASection } from "@/components/Landing/CTASection";
import { Footer } from "@/components/Landing/Footer";
import { SEOHead } from "@/components/Landing/SEOHead";

export default function UseCasesPage() {
  return (
    <>
      <SEOHead title="Use Cases — Diploy" description="See how businesses use Diploy AI voice agents for sales, support, and scheduling." canonicalUrl="https://diploy.in/use-cases" />
      <Navbar />
      <main className="pt-20">
        <UseCasesSection />
        <UseCaseTabs />
        <AITechnologyShowcase />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
