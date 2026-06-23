import { Navbar } from "@/components/Landing/Navbar";
import { Footer } from "@/components/Landing/Footer";
import { SEOHead } from "@/components/Landing/SEOHead";

export default function TermsPage() {
  return (
    <>
      <SEOHead title="Terms of Service — Diploy" description="Terms and conditions for using the Diploy AI voice agent platform." canonicalUrl="https://diploy.in/terms" />
      <Navbar />
      <main className="pt-28 pb-20 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: June 2025</p>
        <div className="prose prose-neutral max-w-none space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using the Diploy platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Use of Service</h2>
            <p>You may use Diploy only for lawful purposes and in accordance with these Terms. You agree not to use the service in any way that violates applicable local, national, or international law or regulation.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property</h2>
            <p>The Diploy platform and its original content, features, and functionality are and will remain the exclusive property of Bisht Technologies Private Limited.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Contact</h2>
            <p>Questions about the Terms of Service should be sent to <a href="mailto:hello@diploy.in" className="text-amber-600 underline">hello@diploy.in</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
