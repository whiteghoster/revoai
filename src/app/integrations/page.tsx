import type { Metadata } from "next";
import { Navbar } from "@/components/Landing/Navbar";
import { IntegrationsGrid } from "@/components/Landing/IntegrationsGrid";
import { CTASection } from "@/components/Landing/CTASection";
import { Footer } from "@/components/Landing/Footer";
import { ScrollReveal } from "@/components/Landing/ScrollReveal";

export const metadata: Metadata = {
  title: { absolute: "Integrations — RevoAI" },
  description: "Connect RevoAI with your CRM, helpdesk, calendar, and 50+ tools.",
  alternates: { canonical: "https://revoai.co/integrations" },
  openGraph: { title: "Integrations — RevoAI", description: "Connect RevoAI with your CRM, helpdesk, calendar, and 50+ tools.", url: "https://revoai.co/integrations" },
  twitter: { title: "Integrations — RevoAI", description: "Connect RevoAI with your CRM, helpdesk, calendar, and 50+ tools." },
};

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 landing-page-motion">
        <ScrollReveal animation="fade-up"><IntegrationsGrid /></ScrollReveal>
        <ScrollReveal animation="clip-up" parallax={12}><CTASection /></ScrollReveal>
      </main>
      <ScrollReveal animation="fade-up" parallax={8}><Footer /></ScrollReveal>
    </>
  );
}
