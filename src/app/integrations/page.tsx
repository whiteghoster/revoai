import { Navbar } from "@/components/Landing/Navbar";
import { IntegrationsGrid } from "@/components/Landing/IntegrationsGrid";
import { CTASection } from "@/components/Landing/CTASection";
import { Footer } from "@/components/Landing/Footer";
import { SEOHead } from "@/components/Landing/SEOHead";
import { ScrollReveal } from "@/components/Landing/ScrollReveal";

export default function IntegrationsPage() {
  return (
    <>
      <SEOHead title="Integrations — RevoAI" description="Connect RevoAI with your CRM, helpdesk, calendar, and 50+ tools." canonicalUrl="https://revoai.co/integrations" />
      <Navbar />
      <main className="pt-20 landing-page-motion">
        <ScrollReveal animation="fade-up"><IntegrationsGrid /></ScrollReveal>
        <ScrollReveal animation="clip-up" parallax={12}><CTASection /></ScrollReveal>
      </main>
      <ScrollReveal animation="fade-up" parallax={8}><Footer /></ScrollReveal>
    </>
  );
}
