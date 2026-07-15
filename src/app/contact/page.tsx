import type { Metadata } from "next";
import { Navbar } from "@/components/Landing/Navbar";
import { ContactSection } from "@/components/Landing/ContactSection";
import { Footer } from "@/components/Landing/Footer";
import { ScrollReveal } from "@/components/Landing/ScrollReveal";

export const metadata: Metadata = {
  title: { absolute: "Contact — RevoAI" },
  description: "Get in touch with the RevoAI team. We are here to help.",
  alternates: { canonical: "https://revoai.co/contact" },
  openGraph: { title: "Contact — RevoAI", description: "Get in touch with the RevoAI team. We are here to help.", url: "https://revoai.co/contact" },
  twitter: { title: "Contact — RevoAI", description: "Get in touch with the RevoAI team. We are here to help." },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 landing-page-motion">
        <ScrollReveal animation="fade-up"><ContactSection /></ScrollReveal>
      </main>
      <ScrollReveal animation="fade-up" parallax={8}><Footer /></ScrollReveal>
    </>
  );
}
