import { Navbar } from "@/components/Landing/Navbar";
import { ContactSection } from "@/components/Landing/ContactSection";
import { Footer } from "@/components/Landing/Footer";
import { SEOHead } from "@/components/Landing/SEOHead";
import { ScrollReveal } from "@/components/Landing/ScrollReveal";

export default function ContactPage() {
  return (
    <>
      <SEOHead title="Contact — RevoAI" description="Get in touch with the RevoAI team. We are here to help." canonicalUrl="https://revoai.co/contact" />
      <Navbar />
      <main className="pt-20 landing-page-motion">
        <ScrollReveal animation="fade-up"><ContactSection /></ScrollReveal>
      </main>
      <ScrollReveal animation="fade-up" parallax={8}><Footer /></ScrollReveal>
    </>
  );
}
