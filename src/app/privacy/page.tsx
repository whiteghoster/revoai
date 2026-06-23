import { Navbar } from "@/components/Landing/Navbar";
import { Footer } from "@/components/Landing/Footer";
import { SEOHead } from "@/components/Landing/SEOHead";

export default function PrivacyPage() {
  return (
    <>
      <SEOHead title="Privacy Policy — Diploy" description="How Diploy collects, uses, and protects your data." canonicalUrl="https://diploy.in/privacy" />
      <Navbar />
      <main className="pt-28 pb-20 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: June 2025</p>
        <div className="prose prose-neutral max-w-none space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, subscribe to a plan, or contact us for support. This includes name, email address, company name, and payment information.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, accidental loss, destruction, or damage.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Contact</h2>
            <p>For privacy-related questions, contact us at <a href="mailto:hello@diploy.in" className="text-amber-600 underline">hello@diploy.in</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
