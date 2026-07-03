import { Navbar } from "@/components/Landing/Navbar";
import { Footer } from "@/components/Landing/Footer";
import { SEOHead } from "@/components/Landing/SEOHead";
import { ScrollReveal } from "@/components/Landing/ScrollReveal";

export default function TermsPage() {
  return (
    <>
      <SEOHead title="Terms of Service — RevoAI" description="Terms and conditions for using the RevoAI AI voice agent platform." canonicalUrl="https://revoai.co/terms" />
      <Navbar />
      <main className="pt-28 pb-20 landing-page-motion">
        <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 2025</p>
        </ScrollReveal>
        <div className="prose prose-neutral max-w-none space-y-6 text-base leading-relaxed">
          <ScrollReveal animation="fade-right"><section><h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2><p>By accessing or using the RevoAI platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform.</p></section></ScrollReveal>
          <ScrollReveal animation="fade-left"><section><h2 className="text-2xl font-semibold mb-2">2. Use of Service</h2><p>You may use RevoAI only for lawful purposes and in accordance with these Terms. You agree not to use the service in any way that violates applicable local, national, or international law or regulation.</p></section></ScrollReveal>
          <ScrollReveal animation="fade-right"><section><h2 className="text-2xl font-semibold mb-2">3. Intellectual Property</h2><p>The RevoAI platform and its original content, features, and functionality are and will remain the exclusive property of Bisht Technologies Private Limited.</p></section></ScrollReveal>
          <ScrollReveal animation="fade-left"><section><h2 className="text-2xl font-semibold mb-2">4. Contact</h2><p>Questions about the Terms of Service should be sent to <a href="mailto:hello@revoai.co" className="text-amber-600 underline">hello@revoai.co</a>.</p></section></ScrollReveal>
        </div>
        </div>
      </main>
      <ScrollReveal animation="fade-up" parallax={8}><Footer /></ScrollReveal>
    </>
  );
}
