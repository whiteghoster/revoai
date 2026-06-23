import { Navbar } from "@/components/Landing/Navbar";
import { IntegrationsGrid } from "@/components/Landing/IntegrationsGrid";
import { CTASection } from "@/components/Landing/CTASection";
import { Footer } from "@/components/Landing/Footer";
import { SEOHead } from "@/components/Landing/SEOHead";

export default function IntegrationsPage() {
  return (
    <>
      <SEOHead title="Integrations — Diploy" description="Connect Diploy with your CRM, helpdesk, calendar, and 50+ tools." canonicalUrl="https://diploy.in/integrations" />
      <Navbar />
      <main className="pt-20">
        <IntegrationsGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
