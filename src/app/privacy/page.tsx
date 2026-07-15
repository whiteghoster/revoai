import type { Metadata } from "next";
import { Navbar } from "@/components/Landing/Navbar";
import { Footer } from "@/components/Landing/Footer";
import { ScrollReveal } from "@/components/Landing/ScrollReveal";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — RevoAI" },
  description: "How RevoAI collects, uses, and protects your data.",
  alternates: { canonical: "https://revoai.co/privacy" },
  openGraph: { title: "Privacy Policy — RevoAI", description: "How RevoAI collects, uses, and protects your data.", url: "https://revoai.co/privacy" },
  twitter: { title: "Privacy Policy — RevoAI", description: "How RevoAI collects, uses, and protects your data." },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 landing-page-motion">
        <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 2025</p>
        </ScrollReveal>
        <div className="prose prose-neutral max-w-none space-y-6 text-base leading-relaxed">
          <ScrollReveal animation="fade-right"><section><h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2><p>We collect information you provide directly to us, such as when you create an account, subscribe to a plan, or contact us for support. This includes name, email address, company name, and payment information.</p></section></ScrollReveal>
          <ScrollReveal animation="fade-left"><section><h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2><p>We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.</p></section></ScrollReveal>
          <ScrollReveal animation="fade-right"><section><h2 className="text-2xl font-semibold mb-2">3. Data Security</h2><p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, accidental loss, destruction, or damage.</p></section></ScrollReveal>
          <ScrollReveal animation="fade-left"><section><h2 className="text-2xl font-semibold mb-2">4. Contact</h2><p>For privacy-related questions, contact us at <a href="mailto:hello@revoai.co" className="text-amber-600 underline">hello@revoai.co</a>.</p></section></ScrollReveal>
        </div>
        </div>
      </main>
      <ScrollReveal animation="fade-up" parallax={8}><Footer /></ScrollReveal>
    </>
  );
}
